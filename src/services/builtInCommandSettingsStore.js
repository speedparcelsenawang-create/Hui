const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(process.cwd(), '.data');
const DATA_FILE = path.join(DATA_DIR, 'built-in-command-settings.json');

const DEFAULT_SCHEDULE_USAGE_HELP_TEXT = 'Usage:\n.schedule <time> | <message>\n\nExamples:\n.schedule 10m | Follow up pelanggan\n.schedule 2026-12-31 23:59 | Happy new year!\n\nTime format: 10m, 2h, 1d, atau YYYY-MM-DD HH:mm';
const DEFAULT_SCHEDULE_LIST_EMPTY_TEXT = 'No schedules found for this chat.';
const DEFAULT_SCHEDULE_DELETE_USAGE_TEXT = 'Usage: .scheduledelete <id>\nExample: .scheduledelete 12';
const DEFAULT_VV_USAGE_HELP_TEXT = 'Reply to a "view once" image/video message with .vv to reopen it.';
const DEFAULT_STICKER_USAGE_HELP_TEXT = 'Usage: kirim/reply gambar, video, atau sticker lalu ketik .sticker';
const DEFAULT_SCHEDULE_USAGE_BUTTON_TEXT = 'Schedule Web';
const DEFAULT_SCHEDULE_USAGE_BUTTON_URL = '';
const DEFAULT_SCHEDULE_USAGE_BUTTONS = [
  {
    name: 'cta_url',
    buttonParamsJson: JSON.stringify({
      display_text: DEFAULT_SCHEDULE_USAGE_BUTTON_TEXT,
      url: DEFAULT_SCHEDULE_USAGE_BUTTON_URL,
      merchant_url: DEFAULT_SCHEDULE_USAGE_BUTTON_URL,
    }),
  },
];

const DEFAULT_SETTINGS = {
  scheduleUsageHelpText: DEFAULT_SCHEDULE_USAGE_HELP_TEXT,
  scheduleUsageButtons: DEFAULT_SCHEDULE_USAGE_BUTTONS,
  scheduleListEmptyText: DEFAULT_SCHEDULE_LIST_EMPTY_TEXT,
  scheduleListButtons: [],
  scheduleDeleteUsageText: DEFAULT_SCHEDULE_DELETE_USAGE_TEXT,
  scheduleDeleteButtons: [],
  vvUsageHelpText: DEFAULT_VV_USAGE_HELP_TEXT,
  vvUsageButtons: [],
  stickerUsageHelpText: DEFAULT_STICKER_USAGE_HELP_TEXT,
  stickerUsageButtons: [],
};

function normalizeScheduleUsageHelpText(value) {
  const text = String(value || '').trim();
  if (!text) return DEFAULT_SCHEDULE_USAGE_HELP_TEXT;
  return text;
}

function normalizeVvUsageHelpText(value) {
  const text = String(value || '').trim();
  if (!text) return DEFAULT_VV_USAGE_HELP_TEXT;
  return text;
}

function normalizeScheduleListEmptyText(value) {
  const text = String(value || '').trim();
  if (!text) return DEFAULT_SCHEDULE_LIST_EMPTY_TEXT;
  return text;
}

function normalizeScheduleDeleteUsageText(value) {
  const text = String(value || '').trim();
  if (!text) return DEFAULT_SCHEDULE_DELETE_USAGE_TEXT;
  return text;
}

function normalizeStickerUsageHelpText(value) {
  const text = String(value || '').trim();
  if (!text) return DEFAULT_STICKER_USAGE_HELP_TEXT;
  return text;
}

function normalizeInteractiveButtons(value) {
  const sourceButtons = Array.isArray(value) ? value : [];
  const buttons = [];

  for (const item of sourceButtons) {
    if (!item || typeof item !== 'object') continue;

    // Legacy format compatibility: { displayText, url }
    if (!item.name && Object.prototype.hasOwnProperty.call(item, 'displayText')) {
      const displayText = String(item.displayText || '').trim();
      if (!displayText) continue;
      const url = String(item.url || '').trim();
      buttons.push({
        name: 'cta_url',
        buttonParamsJson: JSON.stringify({
          display_text: displayText,
          url,
          merchant_url: url,
        }),
      });
      continue;
    }

    const name = String(item.name || '').trim();
    if (!name) continue;

    let params = {};
    if (typeof item.buttonParamsJson === 'string') {
      try {
        const parsed = JSON.parse(item.buttonParamsJson);
        params = parsed && typeof parsed === 'object' ? parsed : {};
      } catch (error) {
        params = {};
      }
    } else if (item.buttonParamsJson && typeof item.buttonParamsJson === 'object') {
      params = item.buttonParamsJson;
    }

    if (!params || typeof params !== 'object') {
      params = {};
    }

    buttons.push({
      name,
      buttonParamsJson: JSON.stringify(params),
    });
  }

  return buttons;
}

function normalizeLegacyButtons(source) {
  const raw = source && typeof source === 'object' ? source : {};
  const enabled = raw.scheduleUsageButtonEnabled !== false;
  if (!enabled) return [];

  const displayText = String(raw.scheduleUsageButtonText || '').trim() || DEFAULT_SCHEDULE_USAGE_BUTTON_TEXT;
  const url = String(raw.scheduleUsageButtonUrl || '').trim();
  return [{
    name: 'cta_url',
    buttonParamsJson: JSON.stringify({
      display_text: displayText,
      url,
      merchant_url: url,
    }),
  }];
}

function normalizeSettings(value) {
  const source = value && typeof value === 'object' ? value : {};
  const hasButtonsArray = Object.prototype.hasOwnProperty.call(source, 'scheduleUsageButtons');
  const normalizedButtons = normalizeInteractiveButtons(source.scheduleUsageButtons);
  const buttons = hasButtonsArray ? normalizedButtons : normalizeLegacyButtons(source);

  return {
    scheduleUsageHelpText: normalizeScheduleUsageHelpText(source.scheduleUsageHelpText),
    scheduleUsageButtons: buttons,
    scheduleListEmptyText: normalizeScheduleListEmptyText(source.scheduleListEmptyText),
    scheduleListButtons: normalizeInteractiveButtons(source.scheduleListButtons),
    scheduleDeleteUsageText: normalizeScheduleDeleteUsageText(source.scheduleDeleteUsageText),
    scheduleDeleteButtons: normalizeInteractiveButtons(source.scheduleDeleteButtons),
    vvUsageHelpText: normalizeVvUsageHelpText(source.vvUsageHelpText),
    vvUsageButtons: normalizeInteractiveButtons(source.vvUsageButtons),
    stickerUsageHelpText: normalizeStickerUsageHelpText(source.stickerUsageHelpText),
    stickerUsageButtons: normalizeInteractiveButtons(source.stickerUsageButtons),
  };
}

function loadSettings() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return normalizeSettings(parsed);
  } catch (error) {
    return normalizeSettings(DEFAULT_SETTINGS);
  }
}

const settings = loadSettings();

function persistSettings() {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(DATA_FILE, JSON.stringify(settings, null, 2));
  } catch (error) {
    console.error('[BuiltInCommandSettingsStore] Failed to persist settings:', error.message);
  }
}

function getSettings() {
  return {
    scheduleUsageHelpText: settings.scheduleUsageHelpText,
    scheduleUsageButtons: settings.scheduleUsageButtons.map((item) => ({ ...item })),
    scheduleListEmptyText: settings.scheduleListEmptyText,
    scheduleListButtons: settings.scheduleListButtons.map((item) => ({ ...item })),
    scheduleDeleteUsageText: settings.scheduleDeleteUsageText,
    scheduleDeleteButtons: settings.scheduleDeleteButtons.map((item) => ({ ...item })),
    vvUsageHelpText: settings.vvUsageHelpText,
    vvUsageButtons: settings.vvUsageButtons.map((item) => ({ ...item })),
    stickerUsageHelpText: settings.stickerUsageHelpText,
    stickerUsageButtons: settings.stickerUsageButtons.map((item) => ({ ...item })),
  };
}

function getScheduleUsageHelpText() {
  return settings.scheduleUsageHelpText;
}

function parseButtonParams(button) {
  if (!button || typeof button !== 'object') return {};

  if (typeof button.buttonParamsJson === 'string') {
    try {
      const parsed = JSON.parse(button.buttonParamsJson);
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch (error) {
      return {};
    }
  }

  if (button.buttonParamsJson && typeof button.buttonParamsJson === 'object') {
    return button.buttonParamsJson;
  }

  return {};
}

function validateBuiltInButton(button, label = 'Button') {
  if (!button || typeof button !== 'object') {
    throw new Error(`${label} format is invalid`);
  }

  const name = String(button.name || '').trim();
  if (!name) {
    throw new Error(`${label} type is required`);
  }

  const params = parseButtonParams(button);
  const displayText = String(params.display_text || params.title || '').trim();

  if (displayText && displayText.length > 60) {
    throw new Error('Button label is too long (max 60 characters)');
  }

  if (name === 'cta_url') {
    const url = String(params.url || '').trim();
    if (url.length > 2048) {
      throw new Error('Button URL is too long (max 2048 characters)');
    }
    if (!url) return;
    const isAbsoluteHttpUrl = /^https?:\/\//i.test(url);
    const isAbsolutePath = url.startsWith('/');
    if (!isAbsoluteHttpUrl && !isAbsolutePath) {
      throw new Error('Button URL must start with http://, https://, or /');
    }
    return;
  }

  if (name === 'quick_reply') {
    if (!displayText) {
      throw new Error('Quick Reply button label is required');
    }
    const id = String(params.id || '').trim();
    if (!id) {
      throw new Error('Quick Reply value (id) is required');
    }
    return;
  }

  if (name === 'cta_call' || name === 'cta_wa') {
    const phone = String(params.phone_number || '').trim();
    if (!phone) {
      throw new Error('Phone number is required for call/WhatsApp button');
    }
    return;
  }

  if (name === 'cta_copy') {
    const copyCode = String(params.copy_code || '').trim();
    if (!copyCode) {
      throw new Error('Copy code is required for copy button');
    }
    return;
  }

  if (name === 'single_select') {
    const title = String(params.title || '').trim();
    const sections = Array.isArray(params.sections) ? params.sections : [];
    if (!title) {
      throw new Error('Single Select title is required');
    }
    if (!sections.length) {
      throw new Error('Single Select requires at least one section');
    }

    let hasRow = false;
    for (const section of sections) {
      if (!section || typeof section !== 'object') continue;
      const rows = Array.isArray(section.rows) ? section.rows : [];
      for (const row of rows) {
        if (!row || typeof row !== 'object') continue;
        const rowId = String(row.id || '').trim();
        const rowTitle = String(row.title || '').trim();
        if (!rowId || !rowTitle) {
          throw new Error('Single Select row requires id and title');
        }
        hasRow = true;
      }
    }

    if (!hasRow) {
      throw new Error('Single Select requires at least one valid row');
    }
  }
}

function updateSettings(partial) {
  const payload = partial && typeof partial === 'object' ? partial : {};

  if (!Object.prototype.hasOwnProperty.call(payload, 'scheduleUsageHelpText')
    && !Object.prototype.hasOwnProperty.call(payload, 'scheduleUsageButtons')
    && !Object.prototype.hasOwnProperty.call(payload, 'scheduleListEmptyText')
    && !Object.prototype.hasOwnProperty.call(payload, 'scheduleListButtons')
    && !Object.prototype.hasOwnProperty.call(payload, 'scheduleDeleteUsageText')
    && !Object.prototype.hasOwnProperty.call(payload, 'scheduleDeleteButtons')
    && !Object.prototype.hasOwnProperty.call(payload, 'vvUsageHelpText')
    && !Object.prototype.hasOwnProperty.call(payload, 'vvUsageButtons')
    && !Object.prototype.hasOwnProperty.call(payload, 'stickerUsageHelpText')
    && !Object.prototype.hasOwnProperty.call(payload, 'stickerUsageButtons')) {
    throw new Error('At least one built-in setting is required');
  }

  if (Object.prototype.hasOwnProperty.call(payload, 'scheduleUsageHelpText') && typeof payload.scheduleUsageHelpText !== 'string') {
    throw new Error('scheduleUsageHelpText must be a string');
  }

  if (Object.prototype.hasOwnProperty.call(payload, 'scheduleUsageButtons') && !Array.isArray(payload.scheduleUsageButtons)) {
    throw new Error('scheduleUsageButtons must be an array');
  }

  if (Object.prototype.hasOwnProperty.call(payload, 'scheduleListButtons') && !Array.isArray(payload.scheduleListButtons)) {
    throw new Error('scheduleListButtons must be an array');
  }

  if (Object.prototype.hasOwnProperty.call(payload, 'scheduleDeleteButtons') && !Array.isArray(payload.scheduleDeleteButtons)) {
    throw new Error('scheduleDeleteButtons must be an array');
  }

  if (Object.prototype.hasOwnProperty.call(payload, 'vvUsageButtons') && !Array.isArray(payload.vvUsageButtons)) {
    throw new Error('vvUsageButtons must be an array');
  }

  if (Object.prototype.hasOwnProperty.call(payload, 'stickerUsageButtons') && !Array.isArray(payload.stickerUsageButtons)) {
    throw new Error('stickerUsageButtons must be an array');
  }

  if (Object.prototype.hasOwnProperty.call(payload, 'vvUsageHelpText') && typeof payload.vvUsageHelpText !== 'string') {
    throw new Error('vvUsageHelpText must be a string');
  }

  if (Object.prototype.hasOwnProperty.call(payload, 'scheduleListEmptyText') && typeof payload.scheduleListEmptyText !== 'string') {
    throw new Error('scheduleListEmptyText must be a string');
  }

  if (Object.prototype.hasOwnProperty.call(payload, 'scheduleDeleteUsageText') && typeof payload.scheduleDeleteUsageText !== 'string') {
    throw new Error('scheduleDeleteUsageText must be a string');
  }

  if (Object.prototype.hasOwnProperty.call(payload, 'stickerUsageHelpText') && typeof payload.stickerUsageHelpText !== 'string') {
    throw new Error('stickerUsageHelpText must be a string');
  }

  const text = Object.prototype.hasOwnProperty.call(payload, 'scheduleUsageHelpText')
    ? String(payload.scheduleUsageHelpText || '').trim()
    : settings.scheduleUsageHelpText;
  const buttons = Object.prototype.hasOwnProperty.call(payload, 'scheduleUsageButtons')
    ? normalizeInteractiveButtons(payload.scheduleUsageButtons)
    : settings.scheduleUsageButtons.map((item) => ({ ...item }));
  const scheduleListButtons = Object.prototype.hasOwnProperty.call(payload, 'scheduleListButtons')
    ? normalizeInteractiveButtons(payload.scheduleListButtons)
    : settings.scheduleListButtons.map((item) => ({ ...item }));
  const scheduleDeleteButtons = Object.prototype.hasOwnProperty.call(payload, 'scheduleDeleteButtons')
    ? normalizeInteractiveButtons(payload.scheduleDeleteButtons)
    : settings.scheduleDeleteButtons.map((item) => ({ ...item }));
  const vvUsageButtons = Object.prototype.hasOwnProperty.call(payload, 'vvUsageButtons')
    ? normalizeInteractiveButtons(payload.vvUsageButtons)
    : settings.vvUsageButtons.map((item) => ({ ...item }));
  const stickerUsageButtons = Object.prototype.hasOwnProperty.call(payload, 'stickerUsageButtons')
    ? normalizeInteractiveButtons(payload.stickerUsageButtons)
    : settings.stickerUsageButtons.map((item) => ({ ...item }));
  const vvUsageHelpText = Object.prototype.hasOwnProperty.call(payload, 'vvUsageHelpText')
    ? String(payload.vvUsageHelpText || '').trim()
    : settings.vvUsageHelpText;
  const scheduleListEmptyText = Object.prototype.hasOwnProperty.call(payload, 'scheduleListEmptyText')
    ? String(payload.scheduleListEmptyText || '').trim()
    : settings.scheduleListEmptyText;
  const scheduleDeleteUsageText = Object.prototype.hasOwnProperty.call(payload, 'scheduleDeleteUsageText')
    ? String(payload.scheduleDeleteUsageText || '').trim()
    : settings.scheduleDeleteUsageText;
  const stickerUsageHelpText = Object.prototype.hasOwnProperty.call(payload, 'stickerUsageHelpText')
    ? String(payload.stickerUsageHelpText || '').trim()
    : settings.stickerUsageHelpText;

  if (!text) {
    throw new Error('scheduleUsageHelpText is required');
  }

  if (text.length > 4000) {
    throw new Error('scheduleUsageHelpText is too long (max 4000 characters)');
  }

  if (!vvUsageHelpText) {
    throw new Error('vvUsageHelpText is required');
  }

  if (vvUsageHelpText.length > 1000) {
    throw new Error('vvUsageHelpText is too long (max 1000 characters)');
  }

  if (!scheduleListEmptyText) {
    throw new Error('scheduleListEmptyText is required');
  }

  if (scheduleListEmptyText.length > 1000) {
    throw new Error('scheduleListEmptyText is too long (max 1000 characters)');
  }

  if (!scheduleDeleteUsageText) {
    throw new Error('scheduleDeleteUsageText is required');
  }

  if (scheduleDeleteUsageText.length > 1000) {
    throw new Error('scheduleDeleteUsageText is too long (max 1000 characters)');
  }

  if (!stickerUsageHelpText) {
    throw new Error('stickerUsageHelpText is required');
  }

  if (stickerUsageHelpText.length > 1000) {
    throw new Error('stickerUsageHelpText is too long (max 1000 characters)');
  }

  if (buttons.length > 10) {
    throw new Error('scheduleUsageButtons is too long (max 10 buttons)');
  }

  if (scheduleListButtons.length > 10) {
    throw new Error('scheduleListButtons is too long (max 10 buttons)');
  }

  if (scheduleDeleteButtons.length > 10) {
    throw new Error('scheduleDeleteButtons is too long (max 10 buttons)');
  }

  if (vvUsageButtons.length > 10) {
    throw new Error('vvUsageButtons is too long (max 10 buttons)');
  }

  if (stickerUsageButtons.length > 10) {
    throw new Error('stickerUsageButtons is too long (max 10 buttons)');
  }

  buttons.forEach((button, index) => {
    validateBuiltInButton(button, `scheduleUsageButtons[${index}]`);
  });

  [...scheduleListButtons, ...scheduleDeleteButtons, ...vvUsageButtons, ...stickerUsageButtons]
    .forEach((button, index) => {
      validateBuiltInButton(button, `buttons[${index}]`);
    });

  const normalizedButtonsJson = JSON.stringify(buttons);
  const currentButtonsJson = JSON.stringify(settings.scheduleUsageButtons);
  const normalizedScheduleListButtonsJson = JSON.stringify(scheduleListButtons);
  const currentScheduleListButtonsJson = JSON.stringify(settings.scheduleListButtons);
  const normalizedScheduleDeleteButtonsJson = JSON.stringify(scheduleDeleteButtons);
  const currentScheduleDeleteButtonsJson = JSON.stringify(settings.scheduleDeleteButtons);
  const normalizedVvButtonsJson = JSON.stringify(vvUsageButtons);
  const currentVvButtonsJson = JSON.stringify(settings.vvUsageButtons);
  const normalizedStickerButtonsJson = JSON.stringify(stickerUsageButtons);
  const currentStickerButtonsJson = JSON.stringify(settings.stickerUsageButtons);

  if (settings.scheduleUsageHelpText !== text
    || normalizedButtonsJson !== currentButtonsJson
    || settings.scheduleListEmptyText !== scheduleListEmptyText
    || normalizedScheduleListButtonsJson !== currentScheduleListButtonsJson
    || settings.scheduleDeleteUsageText !== scheduleDeleteUsageText
    || normalizedScheduleDeleteButtonsJson !== currentScheduleDeleteButtonsJson
    || settings.vvUsageHelpText !== vvUsageHelpText
    || normalizedVvButtonsJson !== currentVvButtonsJson
    || settings.stickerUsageHelpText !== stickerUsageHelpText
    || normalizedStickerButtonsJson !== currentStickerButtonsJson) {
    settings.scheduleUsageHelpText = text;
    settings.scheduleUsageButtons = buttons;
    settings.scheduleListEmptyText = scheduleListEmptyText;
    settings.scheduleListButtons = scheduleListButtons;
    settings.scheduleDeleteUsageText = scheduleDeleteUsageText;
    settings.scheduleDeleteButtons = scheduleDeleteButtons;
    settings.vvUsageHelpText = vvUsageHelpText;
    settings.vvUsageButtons = vvUsageButtons;
    settings.stickerUsageHelpText = stickerUsageHelpText;
    settings.stickerUsageButtons = stickerUsageButtons;
    persistSettings();
  }

  return getSettings();
}

function updateScheduleUsageSettings(partial) {
  const payload = partial && typeof partial === 'object' ? partial : {};
  return updateSettings(payload);
}

module.exports = {
  DEFAULT_SCHEDULE_USAGE_HELP_TEXT,
  DEFAULT_SCHEDULE_LIST_EMPTY_TEXT,
  DEFAULT_SCHEDULE_DELETE_USAGE_TEXT,
  DEFAULT_VV_USAGE_HELP_TEXT,
  DEFAULT_STICKER_USAGE_HELP_TEXT,
  DEFAULT_SCHEDULE_USAGE_BUTTON_TEXT,
  DEFAULT_SCHEDULE_USAGE_BUTTON_URL,
  DEFAULT_SCHEDULE_USAGE_BUTTONS,
  getSettings,
  getScheduleUsageHelpText,
  updateSettings,
  updateScheduleUsageSettings,
};
