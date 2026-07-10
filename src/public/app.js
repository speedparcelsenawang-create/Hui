const form = document.getElementById('schedule-form');
const feedback = document.getElementById('form-feedback');
const targetTypeInput = document.getElementById('targetType');
const targetValueField = document.getElementById('targetValueField');
const targetValueLabel = document.getElementById('targetValueLabel');
const targetHint = document.getElementById('targetHint');
const groupTools = document.getElementById('groupTools');
const groupPicker = document.getElementById('groupPicker');
const groupFetchHint = document.getElementById('groupFetchHint');
const refreshGroupsBtn = document.getElementById('refreshGroupsBtn');
const personalChatTools = document.getElementById('personalChatTools');
const personalChatPicker = document.getElementById('personalChatPicker');
const personalChatFetchHint = document.getElementById('personalChatFetchHint');
const refreshPersonalChatsBtn = document.getElementById('refreshPersonalChatsBtn');
const waStatus = document.getElementById('wa-status');
const waConnectedWrap = document.getElementById('wa-connected-wrap');
const waConnectedDetails = document.getElementById('waConnectedDetails');
const waConnectedName = document.getElementById('waConnectedName');
const waConnectedPhone = document.getElementById('waConnectedPhone');
const waConnectedJid = document.getElementById('waConnectedJid');
const waQrWrap = document.getElementById('wa-qr-wrap');
const waQrEmpty = document.getElementById('wa-qr-empty');
const waQrCaption = document.getElementById('wa-qr-caption');
const waQrImage = waQrWrap ? waQrWrap.querySelector('img.qr') : null;
const waQrInstructions = document.getElementById('wa-qr-instructions');
const waQrConnectedBanner = document.getElementById('wa-qr-connected-banner');
const methodTabQr = document.getElementById('methodTabQr');
const methodTabPhone = document.getElementById('methodTabPhone');
const qrMethodPanel = document.getElementById('qr-method');
const phoneMethodPanel = document.getElementById('phone-method');
const scheduleTabCreate = document.getElementById('scheduleTabCreate');
const scheduleTabList = document.getElementById('scheduleTabList');
const scheduleCreatePanel = document.getElementById('schedule-create-panel');
const scheduleListPanel = document.getElementById('schedule-list-panel');
const shareScheduleLinkBtn = document.getElementById('shareScheduleLinkBtn');
const shareScheduleLinkFeedback = document.getElementById('shareScheduleLinkFeedback');
const sendForm = document.getElementById('send-form');
const sendFeedback = document.getElementById('send-feedback');
const sendTargetTypeInput = document.getElementById('sendTargetType');
const sendTargetValueField = document.getElementById('sendTargetValueField');
const sendTargetValueLabel = document.getElementById('sendTargetValueLabel');
const sendTargetHint = document.getElementById('sendTargetHint');
const sendTargetValueInput = document.getElementById('sendTargetValue');
const sendGroupTools = document.getElementById('sendGroupTools');
const sendGroupPicker = document.getElementById('sendGroupPicker');
const sendGroupFetchHint = document.getElementById('sendGroupFetchHint');
const sendRefreshGroupsBtn = document.getElementById('sendRefreshGroupsBtn');
const sendPersonalChatTools = document.getElementById('sendPersonalChatTools');
const sendPersonalChatPicker = document.getElementById('sendPersonalChatPicker');
const sendPersonalChatFetchHint = document.getElementById('sendPersonalChatFetchHint');
const sendRefreshPersonalChatsBtn = document.getElementById('sendRefreshPersonalChatsBtn');
const commandTabCreate = document.getElementById('commandTabCreate');
const commandTabList = document.getElementById('commandTabList');
const commandCreatePanel = document.getElementById('command-create-panel');
const commandListPanel = document.getElementById('command-list-panel');
const pairingPhoneInput = document.getElementById('pairingPhone');
const requestPairingBtn = document.getElementById('requestPairingBtn');
const pairingFeedback = document.getElementById('pairing-feedback');
const pairingCodeWrap = document.getElementById('pairing-code-wrap');
const pairingCodeValue = document.getElementById('pairing-code-value');
const accountTargetTips = document.getElementById('account-target-tips');
const accountSettingsTabs = Array.from(document.querySelectorAll('.account-settings-tab[data-account-tab]'));
const accountSettingsPanels = Array.from(document.querySelectorAll('.account-settings-panel[data-account-panel]'));
const accountProfileForm = document.getElementById('accountProfileForm');
const accountProfileNameInput = document.getElementById('accountProfileName');
const accountProfileAboutInput = document.getElementById('accountProfileAbout');
const accountProfileEmailInput = document.getElementById('accountProfileEmail');
const accountProfileFeedback = document.getElementById('accountProfileFeedback');
const accountProfileDisplayName = document.getElementById('accountProfileDisplayName');
const accountProfileDisplayStatus = document.getElementById('accountProfileDisplayStatus');
const accountProfilePreviewName = document.getElementById('accountProfilePreviewName');
const accountProfilePreviewAbout = document.getElementById('accountProfilePreviewAbout');
const accountProfilePreviewEmail = document.getElementById('accountProfilePreviewEmail');
const accountProfileAvatarImage = document.getElementById('accountProfileAvatarImage');
const accountProfileAvatarFallback = document.getElementById('accountProfileAvatarFallback');
const timezoneSettingSelect = document.getElementById('timezoneSettingSelect');
const timezoneSettingSaveBtn = document.getElementById('timezoneSettingSaveBtn');
const timezoneSettingFeedback = document.getElementById('timezoneSettingFeedback');
const ownerNumberInput = document.getElementById('ownerNumberInput');
const ownerNumberSaveBtn = document.getElementById('ownerNumberSaveBtn');
const ownerNumberFeedback = document.getElementById('ownerNumberFeedback');
const ownerNumberDisplay = document.getElementById('ownerNumberDisplay');
const commandModeSelect = document.getElementById('commandModeSelect');
const commandModeDisplay = document.getElementById('commandModeDisplay');
const toggleBotResponsePersonal = document.getElementById('toggleBotResponsePersonal');
const toggleBotResponseGroup = document.getElementById('toggleBotResponseGroup');
const toggleBotResponseSelfCommand = document.getElementById('toggleBotResponseSelfCommand');
const toggleBotResponsePersonalLabel = document.getElementById('toggleBotResponsePersonalLabel');
const toggleBotResponseGroupLabel = document.getElementById('toggleBotResponseGroupLabel');
const toggleBotResponseSelfCommandLabel = document.getElementById('toggleBotResponseSelfCommandLabel');
const botResponseSettingsFeedback = document.getElementById('botResponseSettingsFeedback');
const accountHealthConnection = document.getElementById('accountHealthConnection');
const accountHealthCommandMode = document.getElementById('accountHealthCommandMode');
const accountHealthSelfCommand = document.getElementById('accountHealthSelfCommand');
const accountChatStatePersonal = document.getElementById('accountChatStatePersonal');
const accountChatStateGroup = document.getElementById('accountChatStateGroup');
const accountChatStateSelfCommand = document.getElementById('accountChatStateSelfCommand');
const profileHomeName = document.getElementById('profileHomeName');
const profileHomeSubtitle = document.getElementById('profileHomeSubtitle');
const profileHomeConnectionBadge = document.getElementById('profileHomeConnectionBadge');
const profileHomeSummaryName = document.getElementById('profileHomeSummaryName');
const profileHomeSummaryPhone = document.getElementById('profileHomeSummaryPhone');
const profileHomeSummaryJid = document.getElementById('profileHomeSummaryJid');
const profileHomeAvatarImage = document.getElementById('profileHomeAvatarImage');
const profileHomeAvatarFallback = document.getElementById('profileHomeAvatarFallback');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarMenuBtn = document.getElementById('sidebarMenuBtn');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const topNavTitle = document.getElementById('topNavTitle');
const breadcrumbRoot = document.getElementById('breadcrumbRoot');
const breadcrumbPage = document.getElementById('breadcrumbPage');
const breadcrumbSectionSep = document.getElementById('breadcrumbSectionSep');
const breadcrumbSection = document.getElementById('breadcrumbSection');
const navItems = Array.from(document.querySelectorAll('.sidebar-nav .nav-item'));
const pages = Array.from(document.querySelectorAll('.page[data-page]'));
const DEFAULT_PAGE_HASH = '#profile';
const THEME_STORAGE_KEY = 'schedulebot-theme';
const ACCOUNT_PROFILE_STORAGE_KEY = 'schedulebot-account-profile';
const TIMEZONE_STORAGE_KEY = 'schedulebot-timezone';
const DEFAULT_CHAT_RESPONSE_SETTINGS = {
  personalEnabled: true,
  groupEnabled: true,
  selfCommandEnabled: false,
};
const DEFAULT_SCHEDULE_USAGE_HELP_TEXT = 'Usage:\n.schedule <time> | <message>\n\nExamples:\n.schedule 10m | Follow up pelanggan\n.schedule 2026-12-31 23:59 | Happy new year!\n\nTime format: 10m, 2h, 1d, atau YYYY-MM-DD HH:mm';
const DEFAULT_SCHEDULE_LIST_EMPTY_TEXT = 'No schedules found for this chat.';
const DEFAULT_SCHEDULE_DELETE_USAGE_TEXT = 'Usage: .scheduledelete <id>\nExample: .scheduledelete 12';
const DEFAULT_VV_USAGE_HELP_TEXT = 'Reply to a "view once" image/video message with .vv to reopen it.';
const DEFAULT_STICKER_USAGE_HELP_TEXT = 'Usage: kirim/reply gambar, video, atau sticker lalu ketik .sticker';
const DEFAULT_SCHEDULE_USAGE_BUTTON_TEXT = 'Schedule Web';
const DEFAULT_SCHEDULE_USAGE_BUTTONS = [
  {
    name: 'cta_url',
    buttonParamsJson: JSON.stringify({
      display_text: DEFAULT_SCHEDULE_USAGE_BUTTON_TEXT,
      url: '',
      merchant_url: '',
    }),
  },
];
const schedulesById = new Map(
  (Array.isArray(window.__SCHEDULES__) ? window.__SCHEDULES__ : []).map((item) => [
    String(item.id),
    item,
  ])
);

let hasLoadedGroups = false;
let hasLoadedPersonalChats = false;
let hasLoadedSendGroups = false;
let hasLoadedSendPersonalChats = false;
let isWhatsAppReady = false;
let isSavingBotResponseSettings = false;
let chatResponseSettings = normalizeChatResponseSettings(window.__CHAT_RESPONSE_SETTINGS__ || DEFAULT_CHAT_RESPONSE_SETTINGS);
let accessControlSettings = normalizeAccessControlSettings(window.__ACCESS_CONTROL_SETTINGS__ || {});
let builtInCommandSettings = normalizeBuiltInCommandSettings(window.__BUILT_IN_COMMAND_SETTINGS__ || {});
let latestConnectedAbout = '';
let latestConnectedAvatarUrl = String(profileHomeAvatarImage?.getAttribute('src') || '').trim();

const PAGE_TITLE_MAP = {
  profile: 'Profile',
  account: 'Account',
  schedule: 'Schedule',
  'send-message': 'Send Message',
  'custom-commands': 'Custom Command',
  'deleted-messages': 'Deleted Messages',
};

function getActivePageKey() {
  const activePage = pages.find((page) => !page.hidden);
  return activePage ? String(activePage.getAttribute('data-page') || '') : '';
}

function getActiveAccountSectionLabel() {
  if (accountSettingsTabs.length) {
    const activeSettingsTab = accountSettingsTabs.find((tab) => tab.classList.contains('active'));
    if (activeSettingsTab) {
      const sectionLabel = String(activeSettingsTab.dataset.accountLabel || activeSettingsTab.textContent || '').trim();
      const tabKey = String(activeSettingsTab.dataset.accountTab || '').trim();

      if (tabKey === 'linked-devices' && methodTabQr && methodTabPhone) {
        const deviceMethodLabel = methodTabPhone.classList.contains('active') ? 'Phone Number' : 'QR Code';
        return `${sectionLabel} - ${deviceMethodLabel}`;
      }

      return sectionLabel;
    }
  }

  if (!methodTabQr || !methodTabPhone) return '';
  return methodTabPhone.classList.contains('active') ? 'Phone Number' : 'QR Code';
}

function getActiveScheduleSectionLabel() {
  if (!scheduleTabCreate || !scheduleTabList) return '';
  return scheduleTabList.classList.contains('active') ? 'Schedule List' : 'Create Schedule';
}

function getActiveCommandSectionLabel() {
  if (!commandTabCreate || !commandTabList) return '';
  return commandTabList.classList.contains('active') ? 'Command List' : 'Add Command';
}

function updateTopBreadcrumb() {
  const activePageKey = getActivePageKey();
  const pageTitle = PAGE_TITLE_MAP[activePageKey] || 'Dashboard';

  let sectionTitle = '';
  if (activePageKey === 'account') sectionTitle = getActiveAccountSectionLabel();
  if (activePageKey === 'schedule') sectionTitle = getActiveScheduleSectionLabel();
  if (activePageKey === 'custom-commands') sectionTitle = getActiveCommandSectionLabel();

  if (topNavTitle) topNavTitle.textContent = pageTitle;
  if (breadcrumbRoot) breadcrumbRoot.textContent = 'Dashboard';
  if (breadcrumbPage) breadcrumbPage.textContent = pageTitle;
  if (breadcrumbSection) {
    breadcrumbSection.textContent = sectionTitle;
    breadcrumbSection.hidden = !sectionTitle;
  }
  if (breadcrumbSectionSep) {
    breadcrumbSectionSep.hidden = !sectionTitle;
  }
}

function formatConnectedPhone(value) {
  const digits = String(value || '').replace(/\D+/g, '');
  if (!digits) return '-';

  // Prefer an international-style display while keeping unknown formats readable.
  if (digits.startsWith('60')) {
    const rest = digits.slice(2);
    if (rest.length >= 9) {
      return `+60 ${rest.slice(0, 2)}-${rest.slice(2, 5)} ${rest.slice(5)}`;
    }
    return `+60 ${rest}`.trim();
  }

  return `+${digits}`;
}

function setButtonLoading(button, isLoading, loadingLabel) {
  if (!button) return;

  if (isLoading) {
    if (!button.dataset.originalLabel) {
      button.dataset.originalLabel = button.textContent || '';
    }
    if (loadingLabel) {
      button.dataset.loadingLabel = loadingLabel;
      button.setAttribute('aria-label', loadingLabel);
    }
    button.classList.add('is-loading');
    button.disabled = true;
    return;
  }

  button.classList.remove('is-loading');
  if (button.dataset.originalLabel) {
    button.textContent = button.dataset.originalLabel;
    delete button.dataset.originalLabel;
  }
  delete button.dataset.loadingLabel;
  button.removeAttribute('aria-label');
}

function syncModalBodyScrollLock() {
  const hasVisibleModal = Array.from(document.querySelectorAll('.modal')).some((modal) => !modal.hidden);
  document.body.style.overflow = hasVisibleModal ? 'hidden' : '';
}

function getConnectedAccountNameText() {
  const rawName = String(waConnectedName?.textContent || '').trim();
  if (!rawName || rawName === '-') return '';
  return rawName;
}

function normalizeBuiltInCommandSettings(value) {
  const source = value && typeof value === 'object' ? value : {};
  const hasScheduleButtonsArray = Object.prototype.hasOwnProperty.call(source, 'scheduleUsageButtons');
  const hasScheduleListButtonsArray = Object.prototype.hasOwnProperty.call(source, 'scheduleListButtons');
  const hasScheduleDeleteButtonsArray = Object.prototype.hasOwnProperty.call(source, 'scheduleDeleteButtons');
  const hasVvButtonsArray = Object.prototype.hasOwnProperty.call(source, 'vvUsageButtons');
  const hasStickerButtonsArray = Object.prototype.hasOwnProperty.call(source, 'stickerUsageButtons');
  const scheduleUsageHelpText = String(source.scheduleUsageHelpText || '').trim();
  const scheduleListEmptyText = String(source.scheduleListEmptyText || '').trim();
  const scheduleDeleteUsageText = String(source.scheduleDeleteUsageText || '').trim();
  const vvUsageHelpText = String(source.vvUsageHelpText || '').trim();
  const stickerUsageHelpText = String(source.stickerUsageHelpText || '').trim();
  const rawScheduleButtons = Array.isArray(source.scheduleUsageButtons) ? source.scheduleUsageButtons : [];
  const rawScheduleListButtons = Array.isArray(source.scheduleListButtons) ? source.scheduleListButtons : [];
  const rawScheduleDeleteButtons = Array.isArray(source.scheduleDeleteButtons) ? source.scheduleDeleteButtons : [];
  const rawVvButtons = Array.isArray(source.vvUsageButtons) ? source.vvUsageButtons : [];
  const rawStickerButtons = Array.isArray(source.stickerUsageButtons) ? source.stickerUsageButtons : [];

  const normalizeButtons = (list) => list
    .map((item) => {
      if (!item || typeof item !== 'object') return null;

      // Legacy format: { displayText, url }
      if (!item.name && Object.prototype.hasOwnProperty.call(item, 'displayText')) {
        const displayText = String(item.displayText || '').trim();
        if (!displayText) return null;
        const url = String(item.url || '').trim();
        return {
          name: 'cta_url',
          buttonParamsJson: JSON.stringify({
            display_text: displayText,
            url,
            merchant_url: url,
          }),
        };
      }

      const name = String(item.name || '').trim();
      if (!name) return null;

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

      if (!params || typeof params !== 'object') params = {};

      return {
        name,
        buttonParamsJson: JSON.stringify(params),
      };
    })
    .filter(Boolean);

  const scheduleUsageButtons = normalizeButtons(rawScheduleButtons);
  const scheduleListButtons = normalizeButtons(rawScheduleListButtons);
  const scheduleDeleteButtons = normalizeButtons(rawScheduleDeleteButtons);
  const vvUsageButtons = normalizeButtons(rawVvButtons);
  const stickerUsageButtons = normalizeButtons(rawStickerButtons);

  return {
    scheduleUsageHelpText: scheduleUsageHelpText || DEFAULT_SCHEDULE_USAGE_HELP_TEXT,
    scheduleListEmptyText: scheduleListEmptyText || DEFAULT_SCHEDULE_LIST_EMPTY_TEXT,
    scheduleDeleteUsageText: scheduleDeleteUsageText || DEFAULT_SCHEDULE_DELETE_USAGE_TEXT,
    vvUsageHelpText: vvUsageHelpText || DEFAULT_VV_USAGE_HELP_TEXT,
    stickerUsageHelpText: stickerUsageHelpText || DEFAULT_STICKER_USAGE_HELP_TEXT,
    scheduleUsageButtons: hasScheduleButtonsArray
      ? scheduleUsageButtons
      : DEFAULT_SCHEDULE_USAGE_BUTTONS.map((item) => ({ ...item })),
    scheduleListButtons: hasScheduleListButtonsArray ? scheduleListButtons : [],
    scheduleDeleteButtons: hasScheduleDeleteButtonsArray ? scheduleDeleteButtons : [],
    vvUsageButtons: hasVvButtonsArray ? vvUsageButtons : [],
    stickerUsageButtons: hasStickerButtonsArray ? stickerUsageButtons : [],
  };
}

function applyBuiltInCommandSettingsUI() {
  const usageEl = document.getElementById('scheduleBuiltinUsageText');
  if (!usageEl) return;
  usageEl.textContent = builtInCommandSettings.scheduleUsageHelpText;
}

function getConnectedAccountAboutText() {
  const about = String(latestConnectedAbout || '').trim();
  if (!about || about === '-') return '';
  return about;
}

function getInitialsFromName(name) {
  const words = String(name || '').trim().split(/\s+/).filter(Boolean);
  if (!words.length) return 'SB';
  const initials = words.slice(0, 2).map((word) => word[0]).join('').toUpperCase();
  return initials || 'SB';
}

function applyAccountAvatar(displayName, avatarUrl) {
  if (!accountProfileAvatarImage || !accountProfileAvatarFallback) return;

  const cleanName = String(displayName || '').trim();
  const cleanAvatar = String(avatarUrl || '').trim();
  accountProfileAvatarFallback.textContent = getInitialsFromName(cleanName);

  if (cleanAvatar) {
    accountProfileAvatarImage.src = cleanAvatar;
    accountProfileAvatarImage.hidden = false;
    accountProfileAvatarFallback.hidden = true;
    return;
  }

  accountProfileAvatarImage.removeAttribute('src');
  accountProfileAvatarImage.hidden = true;
  accountProfileAvatarFallback.hidden = false;
}

function applyProfileHomeAvatar(displayName, avatarUrl) {
  if (!profileHomeAvatarImage || !profileHomeAvatarFallback) return;

  const cleanName = String(displayName || '').trim();
  const cleanAvatar = String(avatarUrl || '').trim();
  profileHomeAvatarFallback.textContent = getInitialsFromName(cleanName);

  if (cleanAvatar) {
    profileHomeAvatarImage.src = cleanAvatar;
    profileHomeAvatarImage.hidden = false;
    profileHomeAvatarFallback.hidden = true;
    return;
  }

  profileHomeAvatarImage.removeAttribute('src');
  profileHomeAvatarImage.hidden = true;
  profileHomeAvatarFallback.hidden = false;
}

function getDefaultTimeZone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  } catch (error) {
    return 'UTC';
  }
}

function readStoredTimeZone() {
  try {
    return String(window.localStorage.getItem(TIMEZONE_STORAGE_KEY) || '').trim();
  } catch (error) {
    return '';
  }
}

function writeStoredTimeZone(timeZone) {
  try {
    window.localStorage.setItem(TIMEZONE_STORAGE_KEY, String(timeZone || '').trim());
  } catch (error) {
    /* ignore storage errors */
  }
}

function isSupportedTimeZone(timeZone) {
  try {
    new Intl.DateTimeFormat('en-GB', { timeZone: String(timeZone || '').trim() }).format(new Date());
    return true;
  } catch (error) {
    return false;
  }
}

function getSelectedTimeZone() {
  const selected = String(timezoneSettingSelect?.value || '').trim();
  if (selected && isSupportedTimeZone(selected)) return selected;

  const stored = readStoredTimeZone();
  if (stored && isSupportedTimeZone(stored)) return stored;

  const browserTz = getDefaultTimeZone();
  return isSupportedTimeZone(browserTz) ? browserTz : 'UTC';
}

function applyTimeZoneSettingUI() {
  if (!timezoneSettingSelect) return;

  const preferred = getSelectedTimeZone();
  const hasOption = Array.from(timezoneSettingSelect.options || []).some((item) => item.value === preferred);
  if (!hasOption && preferred) {
    const dynamic = document.createElement('option');
    dynamic.value = preferred;
    dynamic.textContent = `${preferred} (Detected)`;
    timezoneSettingSelect.appendChild(dynamic);
  }
  timezoneSettingSelect.value = preferred;

  if (timezoneSettingFeedback) {
    timezoneSettingFeedback.textContent = `Current timezone: ${preferred}`;
    timezoneSettingFeedback.style.color = '#5d645d';
  }
}

function parseDateTimeLocalInput(value) {
  const raw = String(value || '').trim();
  const match = raw.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/);
  if (!match) return null;

  return {
    year: Number(match[1]),
    month: Number(match[2]),
    day: Number(match[3]),
    hour: Number(match[4]),
    minute: Number(match[5]),
  };
}

function getTimeZoneOffsetMinutesAt(timeZone, date) {
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    const parts = formatter.formatToParts(date);
    const map = {};
    parts.forEach((part) => {
      if (part.type !== 'literal') map[part.type] = part.value;
    });

    const asUtc = Date.UTC(
      Number(map.year),
      Number(map.month) - 1,
      Number(map.day),
      Number(map.hour),
      Number(map.minute),
      Number(map.second)
    );
    return Math.round((date.getTime() - asUtc) / 60000);
  } catch (error) {
    return new Date().getTimezoneOffset();
  }
}

function getTimezoneOffsetMinutesForSchedule(scheduleAtLocal, timeZone) {
  const parsed = parseDateTimeLocalInput(scheduleAtLocal);
  if (!parsed) return new Date().getTimezoneOffset();

  const referenceDate = new Date(Date.UTC(
    parsed.year,
    parsed.month - 1,
    parsed.day,
    parsed.hour,
    parsed.minute,
    0,
    0
  ));

  return getTimeZoneOffsetMinutesAt(timeZone, referenceDate);
}

function normalizeOwnerNumber(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';

  const digits = raw.replace(/\D+/g, '');
  if (!digits) return '';
  return raw.startsWith('+') ? `+${digits}` : digits;
}

function normalizeCommandMode(value) {
  return String(value || '').trim().toLowerCase() === 'private' ? 'private' : 'public';
}

function normalizeAccessControlSettings(value) {
  const source = value && typeof value === 'object' ? value : {};
  return {
    ownerNumber: normalizeOwnerNumber(source.ownerNumber),
    commandMode: normalizeCommandMode(source.commandMode),
  };
}

function applyOwnerNumberUI(value) {
  const normalized = normalizeOwnerNumber(value);
  if (ownerNumberInput && ownerNumberInput !== document.activeElement) {
    ownerNumberInput.value = normalized;
  }
  if (ownerNumberDisplay) {
    ownerNumberDisplay.textContent = normalized || '-';
  }
}

function applyCommandModeUI(value) {
  const mode = normalizeCommandMode(value);
  if (commandModeSelect) {
    commandModeSelect.value = mode;
  }
  if (commandModeDisplay) {
    commandModeDisplay.textContent = mode === 'private' ? 'Private' : 'Public';
  }
  if (accountHealthCommandMode) {
    accountHealthCommandMode.textContent = mode === 'private' ? 'Private' : 'Public';
  }
}

function applyAccessControlUI(settings) {
  const normalized = normalizeAccessControlSettings(settings);
  applyOwnerNumberUI(normalized.ownerNumber);
  applyCommandModeUI(normalized.commandMode);
}

async function loadAccessControlSettings() {
  try {
    const response = await fetch('/api/access-control-settings');
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch access control settings');
    }

    accessControlSettings = normalizeAccessControlSettings(data);
    applyAccessControlUI(accessControlSettings);
  } catch (error) {
    if (ownerNumberFeedback) {
      ownerNumberFeedback.textContent = error.message;
      ownerNumberFeedback.style.color = '#b42318';
    }
  }
}

async function saveAccessControlSettings(nextSettings) {
  const normalized = normalizeAccessControlSettings(nextSettings);
  const ownerDigitCount = normalized.ownerNumber.replace(/\D+/g, '').length;

  if (normalized.commandMode === 'private' && ownerDigitCount < 8) {
    if (ownerNumberFeedback) {
      ownerNumberFeedback.textContent = 'Owner number is required (minimum 8 digits) when mode is Private.';
      ownerNumberFeedback.style.color = '#b42318';
    }
    return;
  }

  setButtonLoading(ownerNumberSaveBtn, true, 'Saving access control');
  try {
    const response = await fetch('/api/access-control-settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(normalized),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Failed to save access control settings');
    }

    accessControlSettings = normalizeAccessControlSettings(data);
    applyAccessControlUI(accessControlSettings);

    if (ownerNumberFeedback) {
      ownerNumberFeedback.textContent = 'Access control saved successfully.';
      ownerNumberFeedback.style.color = '#136f63';
    }
  } catch (error) {
    if (ownerNumberFeedback) {
      ownerNumberFeedback.textContent = error.message;
      ownerNumberFeedback.style.color = '#b42318';
    }
  } finally {
    setButtonLoading(ownerNumberSaveBtn, false);
  }
}

function getAccountProfileDefaults() {
  return {
    name: 'WhatsApp Account',
    about: 'Connected via WhatsApp profile status.',
    email: '',
  };
}

function readStoredAccountProfile() {
  try {
    const raw = window.localStorage.getItem(ACCOUNT_PROFILE_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    return {
      name: String(parsed.name || '').trim(),
      about: String(parsed.about || '').trim(),
      email: String(parsed.email || '').trim(),
    };
  } catch (error) {
    return null;
  }
}

function writeStoredAccountProfile(profile) {
  try {
    window.localStorage.setItem(ACCOUNT_PROFILE_STORAGE_KEY, JSON.stringify(profile));
  } catch (error) {
    /* ignore storage errors */
  }
}

function mergeAccountProfile(profile) {
  const defaults = getAccountProfileDefaults();
  const connectedName = getConnectedAccountNameText();
  const connectedAbout = getConnectedAccountAboutText();

  return {
    name: connectedName || String(profile?.name || '').trim() || defaults.name,
    about: connectedAbout || String(profile?.about || '').trim() || defaults.about,
    email: String(profile?.email || '').trim(),
  };
}

function applyAccountProfileUI(profile) {
  const merged = mergeAccountProfile(profile);

  if (accountProfileNameInput && accountProfileNameInput !== document.activeElement) {
    accountProfileNameInput.value = merged.name;
  }
  if (accountProfileAboutInput && accountProfileAboutInput !== document.activeElement) {
    accountProfileAboutInput.value = merged.about;
  }
  if (accountProfileEmailInput && accountProfileEmailInput !== document.activeElement) {
    accountProfileEmailInput.value = merged.email;
  }

  if (accountProfileDisplayName) accountProfileDisplayName.textContent = merged.name;
  if (accountProfileDisplayStatus) accountProfileDisplayStatus.textContent = merged.about;
  if (accountProfilePreviewName) accountProfilePreviewName.textContent = merged.name;
  if (accountProfilePreviewAbout) accountProfilePreviewAbout.textContent = merged.about;
  if (accountProfilePreviewEmail) accountProfilePreviewEmail.textContent = merged.email || '-';

  if (profileHomeName) profileHomeName.textContent = merged.name;
  if (profileHomeSubtitle) profileHomeSubtitle.textContent = merged.about;
  if (profileHomeSummaryName) profileHomeSummaryName.textContent = merged.name;

  applyAccountAvatar(merged.name, latestConnectedAvatarUrl);
  applyProfileHomeAvatar(merged.name, latestConnectedAvatarUrl);
}

function hydrateAccountProfileUI() {
  const storedProfile = readStoredAccountProfile();
  const profile = mergeAccountProfile(storedProfile || {});
  applyAccountProfileUI(profile);
}

function normalizeChatResponseSettings(value) {
  const source = value && typeof value === 'object' ? value : {};
  return {
    personalEnabled: source.personalEnabled !== false,
    groupEnabled: source.groupEnabled !== false,
    selfCommandEnabled: source.selfCommandEnabled === true,
  };
}

function setBotResponseFeedback(message, color = '#5d645d') {
  if (!botResponseSettingsFeedback) return;
  botResponseSettingsFeedback.textContent = message;
  botResponseSettingsFeedback.style.color = color;
}

function setSwitchStatusLabel(labelElement, isEnabled) {
  if (!labelElement) return;
  labelElement.textContent = isEnabled ? 'Enabled' : 'Disabled';
}

function applyChatResponseSettingsUI(settings) {
  const normalized = normalizeChatResponseSettings(settings);

  if (toggleBotResponsePersonal) {
    toggleBotResponsePersonal.checked = normalized.personalEnabled;
    toggleBotResponsePersonal.disabled = isSavingBotResponseSettings;
  }
  if (toggleBotResponseGroup) {
    toggleBotResponseGroup.checked = normalized.groupEnabled;
    toggleBotResponseGroup.disabled = isSavingBotResponseSettings;
  }
  if (toggleBotResponseSelfCommand) {
    toggleBotResponseSelfCommand.checked = normalized.selfCommandEnabled;
    toggleBotResponseSelfCommand.disabled = isSavingBotResponseSettings;
  }

  setSwitchStatusLabel(toggleBotResponsePersonalLabel, normalized.personalEnabled);
  setSwitchStatusLabel(toggleBotResponseGroupLabel, normalized.groupEnabled);
  setSwitchStatusLabel(toggleBotResponseSelfCommandLabel, normalized.selfCommandEnabled);

  if (accountHealthSelfCommand) {
    accountHealthSelfCommand.textContent = normalized.selfCommandEnabled ? 'Enabled' : 'Disabled';
  }

  if (accountChatStatePersonal) {
    accountChatStatePersonal.innerHTML = `Personal: <strong>${normalized.personalEnabled ? 'Enabled' : 'Disabled'}</strong>`;
  }

  if (accountChatStateGroup) {
    accountChatStateGroup.innerHTML = `Group: <strong>${normalized.groupEnabled ? 'Enabled' : 'Disabled'}</strong>`;
  }

  if (accountChatStateSelfCommand) {
    accountChatStateSelfCommand.innerHTML = `Self Command: <strong>${normalized.selfCommandEnabled ? 'Enabled' : 'Disabled'}</strong>`;
  }
}

async function loadChatResponseSettings() {
  try {
    const response = await fetch('/api/chat-response-settings');
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch bot response settings');
    }

    chatResponseSettings = normalizeChatResponseSettings(data);
    applyChatResponseSettingsUI(chatResponseSettings);
    setBotResponseFeedback('');
  } catch (error) {
    setBotResponseFeedback(error.message, '#b42318');
  }
}

async function saveChatResponseSettings(nextSettings) {
  isSavingBotResponseSettings = true;
  applyChatResponseSettingsUI(chatResponseSettings);
  setBotResponseFeedback('Saving bot response settings...');

  try {
    const response = await fetch('/api/chat-response-settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nextSettings),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Failed to update bot response settings');
    }

    chatResponseSettings = normalizeChatResponseSettings(data);
    setBotResponseFeedback('Bot response settings updated successfully.', '#136f63');
  } catch (error) {
    setBotResponseFeedback(error.message, '#b42318');
  } finally {
    isSavingBotResponseSettings = false;
    applyChatResponseSettingsUI(chatResponseSettings);
  }
}

function setActiveAccountSettingsTab(tabKey) {
  if (!accountSettingsTabs.length || !accountSettingsPanels.length) return;

  const normalizedTabKey = String(tabKey || '').trim();
  let hasMatchedTab = false;

  accountSettingsTabs.forEach((tab) => {
    const isActive = String(tab.dataset.accountTab || '') === normalizedTabKey;
    tab.classList.toggle('active', isActive);
    if (isActive) hasMatchedTab = true;
  });

  const fallbackTab = accountSettingsTabs[0];
  const activeTabKey = hasMatchedTab
    ? normalizedTabKey
    : String(fallbackTab?.dataset.accountTab || 'profile').trim();

  if (!hasMatchedTab && fallbackTab) {
    fallbackTab.classList.add('active');
  }

  accountSettingsPanels.forEach((panel) => {
    panel.hidden = String(panel.dataset.accountPanel || '') !== activeTabKey;
  });

  updateTopBreadcrumb();
}

function applyTheme(theme) {
  const normalized = theme === 'light' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', normalized);
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, normalized);
  } catch (error) {
    /* ignore storage errors */
  }
}

function initTheme() {
  let storedTheme = null;
  try {
    storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  } catch (error) {
    storedTheme = null;
  }
  applyTheme(storedTheme === 'light' ? 'light' : 'dark');
}

initTheme();
hydrateAccountProfileUI();
applyTimeZoneSettingUI();
applyAccessControlUI(accessControlSettings);
applyChatResponseSettingsUI(chatResponseSettings);

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    applyTheme(current === 'light' ? 'dark' : 'light');
  });
}

function openSidebar() {
  if (!sidebar || !sidebarOverlay) return;
  if (window.matchMedia && !window.matchMedia('(max-width: 920px)').matches) return;
  sidebar.classList.add('open');
  sidebarOverlay.classList.add('active');
}

function closeSidebar() {
  if (!sidebar || !sidebarOverlay) return;
  sidebar.classList.remove('open');
  sidebarOverlay.classList.remove('active');
}

async function copyTextToClipboard(value) {
  const raw = String(value || '');
  if (!raw) throw new Error('No text to copy');

  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    await navigator.clipboard.writeText(raw);
    return;
  }

  const temp = document.createElement('textarea');
  temp.value = raw;
  temp.setAttribute('readonly', 'readonly');
  temp.style.position = 'fixed';
  temp.style.opacity = '0';
  temp.style.pointerEvents = 'none';
  document.body.appendChild(temp);
  temp.select();
  document.execCommand('copy');
  document.body.removeChild(temp);
}

function setActiveNavItemByHash(hash) {
  if (!navItems.length) return;
  navItems.forEach((item) => {
    const href = item.getAttribute('href') || '';
    item.classList.toggle('active', href === hash);
  });
}

function showPageByHash(hash) {
  if (!pages.length) return;

  const normalizedHash = String(hash || '').replace('#', '') || DEFAULT_PAGE_HASH.replace('#', '');
  const targetPage = pages.find((page) => page.getAttribute('data-page') === normalizedHash);
  const fallbackPage = pages.find((page) => page.getAttribute('data-page') === DEFAULT_PAGE_HASH.replace('#', ''));
  const pageToShow = targetPage || fallbackPage || pages[0];

  pages.forEach((page) => {
    page.hidden = page !== pageToShow;
    if (page !== pageToShow) {
      page.classList.remove('page-animate');
    }
  });

  pageToShow.classList.remove('page-animate');
  window.requestAnimationFrame(() => {
    pageToShow.classList.add('page-animate');
  });

  setActiveNavItemByHash(`#${pageToShow.getAttribute('data-page')}`);
  updateTopBreadcrumb();
}

function formatLocalDateTime(isoString) {
  const parsed = new Date(String(isoString || ''));
  if (Number.isNaN(parsed.getTime())) return null;
  const selectedTimeZone = getSelectedTimeZone();

  return new Intl.DateTimeFormat('en-GB', {
    timeZone: selectedTimeZone,
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(parsed);
}

function hydrateScheduleTimesToLocal() {
  document.querySelectorAll('.js-local-datetime').forEach((cell) => {
    const iso = cell.getAttribute('data-iso');
    const localText = formatLocalDateTime(iso);
    if (!localText) return;

    cell.textContent = localText;
    cell.title = String(iso || '');
  });
}

function renderWhatsAppState(state) {
  if (!state) return;

  const isReady = Boolean(state.ready);
  isWhatsAppReady = isReady;
  document.body.classList.toggle('wa-ready', isReady);
  const statusText = String(state.status || (isReady ? 'WhatsApp connected' : 'Initializing...'));
  const qrCodeDataUrl = typeof state.qrCodeDataUrl === 'string' ? state.qrCodeDataUrl : '';
  const connectedAccount = state.connectedAccount && typeof state.connectedAccount === 'object'
    ? state.connectedAccount
    : {};
  const connectedNameText = String(connectedAccount.displayName || '').trim() || '-';
  const connectedAboutText = String(connectedAccount.about || '').trim();
  const connectedAvatarUrl = String(connectedAccount.avatarUrl || '').trim();
  const effectiveAvatarUrl = connectedAvatarUrl || latestConnectedAvatarUrl;
  const connectedPhoneText = formatConnectedPhone(connectedAccount.phoneNumber);
  const connectedJidText = String(connectedAccount.jid || '').trim() || '-';

  latestConnectedAbout = connectedAboutText;
  latestConnectedAvatarUrl = effectiveAvatarUrl;

  if (waStatus) {
    waStatus.textContent = statusText;
    waStatus.classList.remove('status-ok', 'status-warn');
    waStatus.classList.add(isReady ? 'status-ok' : 'status-warn');
  }

  if (accountHealthConnection) {
    accountHealthConnection.textContent = isReady ? 'Online' : 'Offline';
  }

  if (waConnectedWrap) {
    waConnectedWrap.hidden = !isReady;
  }

  if (waConnectedDetails) {
    waConnectedDetails.hidden = !isReady;
  }
  if (waConnectedName) {
    waConnectedName.textContent = connectedNameText;
  }
  if (waConnectedPhone) {
    waConnectedPhone.textContent = connectedPhoneText;
  }
  if (waConnectedJid) {
    waConnectedJid.textContent = connectedJidText;
  }

  if (profileHomeSummaryPhone) {
    profileHomeSummaryPhone.textContent = connectedPhoneText;
  }

  if (profileHomeSummaryJid) {
    profileHomeSummaryJid.textContent = connectedJidText;
  }

  if (profileHomeName && connectedNameText && connectedNameText !== '-') {
    profileHomeName.textContent = connectedNameText;
  }

  if (profileHomeSummaryName && connectedNameText && connectedNameText !== '-') {
    profileHomeSummaryName.textContent = connectedNameText;
  }

  if (profileHomeSubtitle) {
    profileHomeSubtitle.textContent = connectedAboutText || 'Manage your bot profile, account settings, and command behavior.';
  }

  if (profileHomeConnectionBadge) {
    const statusSpan = profileHomeConnectionBadge.querySelector('span');
    if (statusSpan) {
      statusSpan.textContent = isReady ? 'Online' : 'Offline';
      profileHomeConnectionBadge.classList.toggle('is-offline', !isReady);
    }
  }

  const avatarName = connectedNameText && connectedNameText !== '-'
    ? connectedNameText
    : String(profileHomeName?.textContent || 'WhatsApp Account');
  applyProfileHomeAvatar(avatarName, effectiveAvatarUrl);

  if (methodTabPhone) {
    methodTabPhone.disabled = isReady;
  }

  if (pairingPhoneInput) {
    pairingPhoneInput.disabled = isReady;
  }

  if (requestPairingBtn) {
    requestPairingBtn.disabled = isReady;
  }

  if (pairingFeedback && isReady) {
    pairingFeedback.textContent = 'Pairing via phone number is disabled while WhatsApp is connected.';
    pairingFeedback.style.color = '#5d645d';
  }

  if (accountTargetTips) {
    accountTargetTips.hidden = isReady;
  }

  if (waQrWrap && waQrImage && waQrEmpty) {
    if (isReady) {
      waQrImage.removeAttribute('src');
      waQrImage.hidden = true;
      waQrWrap.hidden = false;
      waQrWrap.classList.add('is-connected');
      if (waQrConnectedBanner) waQrConnectedBanner.hidden = false;
      if (waQrInstructions) waQrInstructions.hidden = true;
      waQrEmpty.hidden = true;
      if (waQrCaption) {
        waQrCaption.textContent = 'WhatsApp already connected. QR scan is not required.';
      }
    } else if (qrCodeDataUrl) {
      waQrImage.src = qrCodeDataUrl;
      waQrImage.hidden = false;
      waQrWrap.hidden = false;
      waQrWrap.classList.remove('is-connected');
      if (waQrConnectedBanner) waQrConnectedBanner.hidden = true;
      if (waQrInstructions) waQrInstructions.hidden = false;
      waQrEmpty.hidden = true;
      if (waQrCaption) {
        waQrCaption.textContent = 'Scan this QR code from WhatsApp to connect the bot.';
      }
    } else {
      waQrImage.removeAttribute('src');
      waQrImage.hidden = true;
      waQrWrap.hidden = true;
      waQrWrap.classList.remove('is-connected');
      if (waQrConnectedBanner) waQrConnectedBanner.hidden = true;
      if (waQrInstructions) waQrInstructions.hidden = false;
      waQrEmpty.hidden = false;
      if (waQrCaption) {
        waQrCaption.textContent = '';
      }
    }
  }

  const pairingCode = typeof state.pairingCode === 'string' ? state.pairingCode : '';
  if (pairingCodeWrap && pairingCodeValue) {
    if (pairingCode) {
      pairingCodeValue.textContent = pairingCode;
      pairingCodeWrap.hidden = false;
    } else {
      pairingCodeValue.textContent = '';
      pairingCodeWrap.hidden = true;
    }
  }

  if (isReady) {
    setActiveConnectionMethod('qr');
  }

  // Keep profile header synced with connected account name when no custom profile is saved.
  applyAccountProfileUI(readStoredAccountProfile() || {});
}

function setActiveConnectionMethod(method) {
  if (!methodTabQr || !methodTabPhone || !qrMethodPanel || !phoneMethodPanel) return;

  const isPhone = method === 'phone';
  methodTabQr.classList.toggle('active', !isPhone);
  methodTabPhone.classList.toggle('active', isPhone);
  qrMethodPanel.hidden = isPhone;
  phoneMethodPanel.hidden = !isPhone;
  updateTopBreadcrumb();
}

function setTabbedPanel(activeTabKey, tabs, panels) {
  const hasCreateTab = Boolean(tabs.create);
  const hasListTab = Boolean(tabs.list);
  const hasCreatePanel = Boolean(panels.create);
  const hasListPanel = Boolean(panels.list);

  if (!hasCreateTab || !hasListTab || !hasCreatePanel || !hasListPanel) return;

  const isList = activeTabKey === 'list';
  tabs.create.classList.toggle('active', !isList);
  tabs.list.classList.toggle('active', isList);
  tabs.create.setAttribute('aria-selected', String(!isList));
  tabs.list.setAttribute('aria-selected', String(isList));

  panels.create.hidden = isList;
  panels.list.hidden = !isList;
  updateTopBreadcrumb();
}

if (methodTabQr) {
  methodTabQr.addEventListener('click', () => {
    setActiveAccountSettingsTab('linked-devices');
    setActiveConnectionMethod('qr');
  });
}

if (methodTabPhone) {
  methodTabPhone.addEventListener('click', () => {
    if (isWhatsAppReady) return;
    setActiveAccountSettingsTab('linked-devices');
    setActiveConnectionMethod('phone');
  });
}

if (accountSettingsTabs.length) {
  accountSettingsTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      setActiveAccountSettingsTab(tab.dataset.accountTab || 'account');
    });
  });

  const initiallyActiveAccountTab = accountSettingsTabs.find((tab) => tab.classList.contains('active'));
  setActiveAccountSettingsTab(initiallyActiveAccountTab?.dataset.accountTab || 'account');
}

function attachAvatarRecovery(imageElement, fallbackElement) {
  if (!imageElement || !fallbackElement) return;

  imageElement.addEventListener('error', () => {
    imageElement.hidden = true;
    imageElement.removeAttribute('src');
    fallbackElement.hidden = false;

    // Try to refresh latest signed profile image URL from backend state.
    refreshWhatsAppState().catch(() => {});
  });
}

attachAvatarRecovery(accountProfileAvatarImage, accountProfileAvatarFallback);
attachAvatarRecovery(profileHomeAvatarImage, profileHomeAvatarFallback);

if (accountProfileForm) {
  accountProfileForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const profile = mergeAccountProfile({
      name: String(accountProfileNameInput?.value || '').trim(),
      about: String(accountProfileAboutInput?.value || '').trim(),
      email: String(accountProfileEmailInput?.value || '').trim(),
    });

    writeStoredAccountProfile(profile);
    applyAccountProfileUI(profile);

    if (accountProfileFeedback) {
      accountProfileFeedback.textContent = 'Profile updated successfully.';
      accountProfileFeedback.style.color = '#136f63';
    }
  });
}

if (timezoneSettingSaveBtn) {
  timezoneSettingSaveBtn.addEventListener('click', () => {
    const selected = String(timezoneSettingSelect?.value || '').trim();
    if (!selected || !isSupportedTimeZone(selected)) {
      if (timezoneSettingFeedback) {
        timezoneSettingFeedback.textContent = 'Invalid timezone selected.';
        timezoneSettingFeedback.style.color = '#b42318';
      }
      return;
    }

    writeStoredTimeZone(selected);
    applyTimeZoneSettingUI();
    hydrateScheduleTimesToLocal();

    if (timezoneSettingFeedback) {
      timezoneSettingFeedback.textContent = `Timezone saved: ${selected}`;
      timezoneSettingFeedback.style.color = '#136f63';
    }
  });
}

if (ownerNumberInput) {
  ownerNumberInput.addEventListener('input', () => {
    const normalized = normalizeOwnerNumber(ownerNumberInput.value);
    if (ownerNumberInput.value !== normalized) {
      ownerNumberInput.value = normalized;
    }
  });
}

if (ownerNumberSaveBtn) {
  ownerNumberSaveBtn.addEventListener('click', () => {
    saveAccessControlSettings({
      ownerNumber: normalizeOwnerNumber(ownerNumberInput?.value || ''),
      commandMode: normalizeCommandMode(commandModeSelect?.value || 'public'),
    });
  });
}

if (commandModeSelect) {
  commandModeSelect.addEventListener('change', () => {
    applyCommandModeUI(commandModeSelect.value);
  });
}

if (toggleBotResponsePersonal) {
  toggleBotResponsePersonal.addEventListener('change', () => {
    const desired = Boolean(toggleBotResponsePersonal.checked);
    saveChatResponseSettings({
      personalEnabled: desired,
      groupEnabled: chatResponseSettings.groupEnabled,
      selfCommandEnabled: chatResponseSettings.selfCommandEnabled,
    });
  });
}

if (toggleBotResponseGroup) {
  toggleBotResponseGroup.addEventListener('change', () => {
    const desired = Boolean(toggleBotResponseGroup.checked);
    saveChatResponseSettings({
      personalEnabled: chatResponseSettings.personalEnabled,
      groupEnabled: desired,
      selfCommandEnabled: chatResponseSettings.selfCommandEnabled,
    });
  });
}

if (toggleBotResponseSelfCommand) {
  toggleBotResponseSelfCommand.addEventListener('change', () => {
    const desired = Boolean(toggleBotResponseSelfCommand.checked);
    saveChatResponseSettings({
      personalEnabled: chatResponseSettings.personalEnabled,
      groupEnabled: chatResponseSettings.groupEnabled,
      selfCommandEnabled: desired,
    });
  });
}

if (scheduleTabCreate) {
  scheduleTabCreate.addEventListener('click', () => {
    setTabbedPanel(
      'create',
      { create: scheduleTabCreate, list: scheduleTabList },
      { create: scheduleCreatePanel, list: scheduleListPanel }
    );
  });
}

if (scheduleTabList) {
  scheduleTabList.addEventListener('click', () => {
    setTabbedPanel(
      'list',
      { create: scheduleTabCreate, list: scheduleTabList },
      { create: scheduleCreatePanel, list: scheduleListPanel }
    );
  });
}

if (shareScheduleLinkBtn) {
  shareScheduleLinkBtn.addEventListener('click', async () => {
    const baseUrl = `${window.location.origin}${window.location.pathname}`.replace(/\/$/, '');
    const shareUrl = `${baseUrl}/schedule/create`;

    setButtonLoading(shareScheduleLinkBtn, true, 'Copying share link');
    if (shareScheduleLinkFeedback) {
      shareScheduleLinkFeedback.textContent = 'Preparing share link...';
      shareScheduleLinkFeedback.style.color = '#5d645d';
    }

    try {
      await copyTextToClipboard(shareUrl);
      if (shareScheduleLinkFeedback) {
        shareScheduleLinkFeedback.textContent = `Share link copied: ${shareUrl}`;
        shareScheduleLinkFeedback.style.color = '#136f63';
      }
    } catch (error) {
      if (shareScheduleLinkFeedback) {
        shareScheduleLinkFeedback.textContent = `Share link: ${shareUrl}`;
        shareScheduleLinkFeedback.style.color = '#9f4f03';
      }
    } finally {
      setButtonLoading(shareScheduleLinkBtn, false);
    }
  });
}

if (commandTabCreate) {
  commandTabCreate.addEventListener('click', () => {
    setTabbedPanel(
      'create',
      { create: commandTabCreate, list: commandTabList },
      { create: commandCreatePanel, list: commandListPanel }
    );
  });
}

if (commandTabList) {
  commandTabList.addEventListener('click', () => {
    setTabbedPanel(
      'list',
      { create: commandTabCreate, list: commandTabList },
      { create: commandCreatePanel, list: commandListPanel }
    );
  });
}

setTabbedPanel(
  'create',
  { create: scheduleTabCreate, list: scheduleTabList },
  { create: scheduleCreatePanel, list: scheduleListPanel }
);
setTabbedPanel(
  'create',
  { create: commandTabCreate, list: commandTabList },
  { create: commandCreatePanel, list: commandListPanel }
);

if (pairingPhoneInput) {
  pairingPhoneInput.addEventListener('input', () => {
    const rawValue = String(pairingPhoneInput.value || '');
    const digitsOnly = rawValue.replace(/\D+/g, '');
    const normalized = rawValue.startsWith('+') ? `+${digitsOnly}` : digitsOnly;
    if (pairingPhoneInput.value !== normalized) {
      pairingPhoneInput.value = normalized;
    }
  });
}

if (requestPairingBtn) {
  requestPairingBtn.addEventListener('click', async () => {
    if (isWhatsAppReady) {
      if (pairingFeedback) {
        pairingFeedback.textContent = 'Pairing via phone number is disabled while WhatsApp is connected.';
        pairingFeedback.style.color = '#b42318';
      }
      return;
    }

    const phoneNumber = pairingPhoneInput
      ? (() => {
        const rawValue = String(pairingPhoneInput.value || '').trim();
        const digitsOnly = rawValue.replace(/\D+/g, '');
        return rawValue.startsWith('+') ? `+${digitsOnly}` : digitsOnly;
      })()
      : '';
    if (pairingPhoneInput) {
      pairingPhoneInput.value = phoneNumber;
    }
    if (!phoneNumber) {
      if (pairingFeedback) {
        pairingFeedback.textContent = 'Please enter a phone number';
        pairingFeedback.style.color = '#b42318';
      }
      return;
    }

    setButtonLoading(requestPairingBtn, true, 'Requesting pairing code');
    if (pairingFeedback) {
      pairingFeedback.textContent = 'Requesting pairing code...';
      pairingFeedback.style.color = '#5d645d';
    }
    if (pairingCodeWrap) pairingCodeWrap.hidden = true;

    try {
      const response = await fetch('/api/whatsapp/pairing-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to request pairing code');
      }

      if (pairingCodeValue && pairingCodeWrap) {
        pairingCodeValue.textContent = data.code || '';
        pairingCodeWrap.hidden = false;
      }
      if (pairingFeedback) {
        pairingFeedback.textContent = 'Pairing code generated, enter it in WhatsApp.';
        pairingFeedback.style.color = '#136f63';
      }
    } catch (error) {
      if (pairingFeedback) {
        pairingFeedback.textContent = error.message;
        pairingFeedback.style.color = '#b42318';
      }
    } finally {
      setButtonLoading(requestPairingBtn, false);
      requestPairingBtn.disabled = isWhatsAppReady;
    }
  });
}

async function refreshWhatsAppState() {
  if (!waStatus) return;

  try {
    const response = await fetch('/api/whatsapp/state');
    if (!response.ok) {
      throw new Error('Failed to fetch WhatsApp state');
    }

    const state = await response.json();
    renderWhatsAppState(state);
  } catch (error) {
    waStatus.textContent = 'Unable to refresh WhatsApp status';
    waStatus.classList.remove('status-ok');
    waStatus.classList.add('status-warn');
  }
}

function setGroupHint(text, color = '#5d645d') {
  if (!groupFetchHint) return;
  groupFetchHint.textContent = text;
  groupFetchHint.style.color = color;
}

function setSendGroupHint(text, color = '#5d645d') {
  if (!sendGroupFetchHint) return;
  sendGroupFetchHint.textContent = text;
  sendGroupFetchHint.style.color = color;
}

function setGroupPickerOptions(groups) {
  if (!groupPicker) return;

  const baseOption = '<option value="">Select a group...</option>';
  const optionHtml = groups
    .map((group) => {
      const safeId = String(group.id || '').replace(/"/g, '&quot;');
      const safeName = String(group.name || 'Untitled');
      return `<option value="${safeId}">${safeName}</option>`;
    })
    .join('');

  groupPicker.innerHTML = baseOption + optionHtml;
}

function setSendGroupPickerOptions(groups) {
  if (!sendGroupPicker) return;

  const baseOption = '<option value="">Select a group...</option>';
  const optionHtml = groups
    .map((group) => {
      const safeId = String(group.id || '').replace(/"/g, '&quot;');
      const safeName = String(group.name || 'Untitled');
      return `<option value="${safeId}">${safeName}</option>`;
    })
    .join('');

  sendGroupPicker.innerHTML = baseOption + optionHtml;
}

function setPersonalChatHint(text, color = '#5d645d') {
  if (!personalChatFetchHint) return;
  personalChatFetchHint.textContent = text;
  personalChatFetchHint.style.color = color;
}

function setSendPersonalChatHint(text, color = '#5d645d') {
  if (!sendPersonalChatFetchHint) return;
  sendPersonalChatFetchHint.textContent = text;
  sendPersonalChatFetchHint.style.color = color;
}

function setPersonalChatPickerOptions(chats) {
  if (!personalChatPicker) return;

  const baseOption = '<option value="">Select a personal chat...</option>';
  const optionHtml = chats
    .map((chat) => {
      const safeId = String(chat.id || '').replace(/"/g, '&quot;');
      const safeName = String(chat.name || chat.phone || 'Unnamed');
      const safePhone = String(chat.phone || '').trim();
      const label = safePhone ? `${safeName} (${safePhone})` : safeName;
      return `<option value="${safeId}">${label}</option>`;
    })
    .join('');

  personalChatPicker.innerHTML = baseOption + optionHtml;
}

function setSendPersonalChatPickerOptions(chats) {
  if (!sendPersonalChatPicker) return;

  const baseOption = '<option value="">Select a personal chat...</option>';
  const optionHtml = chats
    .map((chat) => {
      const safeId = String(chat.id || '').replace(/"/g, '&quot;');
      const safeName = String(chat.name || chat.phone || 'Unnamed');
      const safePhone = String(chat.phone || '').trim();
      const label = safePhone ? `${safeName} (${safePhone})` : safeName;
      return `<option value="${safeId}">${label}</option>`;
    })
    .join('');

  sendPersonalChatPicker.innerHTML = baseOption + optionHtml;
}

async function loadPersonalChats(force = false) {
  if (!personalChatPicker) return;
  if (hasLoadedPersonalChats && !force) return;

  personalChatPicker.disabled = true;
  if (refreshPersonalChatsBtn) setButtonLoading(refreshPersonalChatsBtn, true, 'Refreshing chats');
  setPersonalChatHint('Fetching personal chat list...', '#5d645d');

  try {
    const response = await fetch('/api/whatsapp/personal-chats');
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch personal chats');
    }

    const chats = Array.isArray(data.chats) ? data.chats : [];
    setPersonalChatPickerOptions(chats);
    hasLoadedPersonalChats = true;

    if (chats.length) {
      setPersonalChatHint('Select a chat to auto-fill the destination ID.', '#5d645d');
    } else {
      setPersonalChatHint('No personal chats found on this account.', '#9f4f03');
    }
  } catch (error) {
    setPersonalChatPickerOptions([]);
    setPersonalChatHint(error.message, '#b42318');
  } finally {
    personalChatPicker.disabled = false;
    if (refreshPersonalChatsBtn) {
      setButtonLoading(refreshPersonalChatsBtn, false);
      refreshPersonalChatsBtn.disabled = false;
    }
  }
}

async function loadSendPersonalChats(force = false) {
  if (!sendPersonalChatPicker) return;
  if (hasLoadedSendPersonalChats && !force) return;

  sendPersonalChatPicker.disabled = true;
  if (sendRefreshPersonalChatsBtn) {
    setButtonLoading(sendRefreshPersonalChatsBtn, true, 'Refreshing chats');
  }
  setSendPersonalChatHint('Fetching personal chat list...', '#5d645d');

  try {
    const response = await fetch('/api/whatsapp/personal-chats');
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch personal chats');
    }

    const chats = Array.isArray(data.chats) ? data.chats : [];
    setSendPersonalChatPickerOptions(chats);
    hasLoadedSendPersonalChats = true;

    if (chats.length) {
      setSendPersonalChatHint('Select a chat to auto-fill the destination ID.', '#5d645d');
    } else {
      setSendPersonalChatHint('No personal chats found on this account.', '#9f4f03');
    }
  } catch (error) {
    setSendPersonalChatPickerOptions([]);
    setSendPersonalChatHint(error.message, '#b42318');
  } finally {
    sendPersonalChatPicker.disabled = false;
    if (sendRefreshPersonalChatsBtn) {
      setButtonLoading(sendRefreshPersonalChatsBtn, false);
      sendRefreshPersonalChatsBtn.disabled = false;
    }
  }
}

async function loadGroups(force = false) {
  if (!groupPicker) return;
  if (hasLoadedGroups && !force) return;

  groupPicker.disabled = true;
  if (refreshGroupsBtn) setButtonLoading(refreshGroupsBtn, true, 'Refreshing groups');
  setGroupHint('Fetching group list...', '#5d645d');

  try {
    const response = await fetch('/api/whatsapp/groups');
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch group list');
    }

    const groups = Array.isArray(data.groups) ? data.groups : [];
    setGroupPickerOptions(groups);
    hasLoadedGroups = true;

    if (groups.length) {
      setGroupHint('Select a group to auto-fill the ID.', '#5d645d');
    } else {
      setGroupHint('No groups found on this account.', '#9f4f03');
    }
  } catch (error) {
    setGroupPickerOptions([]);
    setGroupHint(error.message, '#b42318');
  } finally {
    groupPicker.disabled = false;
    if (refreshGroupsBtn) {
      setButtonLoading(refreshGroupsBtn, false);
      refreshGroupsBtn.disabled = false;
    }
  }
}

async function loadSendGroups(force = false) {
  if (!sendGroupPicker) return;
  if (hasLoadedSendGroups && !force) return;

  sendGroupPicker.disabled = true;
  if (sendRefreshGroupsBtn) setButtonLoading(sendRefreshGroupsBtn, true, 'Refreshing groups');
  setSendGroupHint('Fetching group list...', '#5d645d');

  try {
    const response = await fetch('/api/whatsapp/groups');
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch group list');
    }

    const groups = Array.isArray(data.groups) ? data.groups : [];
    setSendGroupPickerOptions(groups);
    hasLoadedSendGroups = true;

    if (groups.length) {
      setSendGroupHint('Select a group to auto-fill the ID.', '#5d645d');
    } else {
      setSendGroupHint('No groups found on this account.', '#9f4f03');
    }
  } catch (error) {
    setSendGroupPickerOptions([]);
    setSendGroupHint(error.message, '#b42318');
  } finally {
    sendGroupPicker.disabled = false;
    if (sendRefreshGroupsBtn) {
      setButtonLoading(sendRefreshGroupsBtn, false);
      sendRefreshGroupsBtn.disabled = false;
    }
  }
}

function syncTargetInputContent() {
  if (!targetTypeInput || !targetValueLabel || !targetHint || !targetValueField) return;

  if (targetTypeInput.value === 'group') {
    targetValueField.hidden = false;
    targetValueLabel.textContent = 'Group ID (example: 1203630xxxx@g.us)';
    targetHint.textContent = 'You can enter 1203630xxxx only or with @g.us suffix';
    if (groupTools) groupTools.hidden = false;
    if (personalChatTools) personalChatTools.hidden = true;
    loadGroups();
    return;
  }

  targetValueField.hidden = false;
  targetValueLabel.textContent = 'Personal ID / Number (example: 62812xxxx@s.whatsapp.net)';
  targetHint.textContent = 'You can enter phone number only or with @s.whatsapp.net suffix';
  if (groupTools) groupTools.hidden = true;
  if (personalChatTools) personalChatTools.hidden = false;
  loadPersonalChats();
}

function syncSendTargetInputContent() {
  if (!sendTargetTypeInput || !sendTargetValueLabel || !sendTargetHint || !sendTargetValueField) return;

  if (sendTargetTypeInput.value === 'group') {
    sendTargetValueField.hidden = false;
    sendTargetValueLabel.textContent = 'Group ID (example: 1203630xxxx@g.us)';
    sendTargetHint.textContent = 'You can enter 1203630xxxx only or with @g.us suffix';
    if (sendGroupTools) sendGroupTools.hidden = false;
    if (sendPersonalChatTools) sendPersonalChatTools.hidden = true;
    loadSendGroups();
    return;
  }

  sendTargetValueField.hidden = false;
  sendTargetValueLabel.textContent = 'Personal ID / Number (example: 62812xxxx@s.whatsapp.net)';
  sendTargetHint.textContent = 'You can enter phone number only or with @s.whatsapp.net suffix';
  if (sendGroupTools) sendGroupTools.hidden = true;
  if (sendPersonalChatTools) sendPersonalChatTools.hidden = false;
  loadSendPersonalChats();
}

if (targetTypeInput) {
  targetTypeInput.addEventListener('change', syncTargetInputContent);
  syncTargetInputContent();
}

if (sendTargetTypeInput) {
  sendTargetTypeInput.addEventListener('change', syncSendTargetInputContent);
  syncSendTargetInputContent();
}

if (sidebarMenuBtn) {
  sidebarMenuBtn.addEventListener('click', openSidebar);
}

if (sidebarOverlay) {
  sidebarOverlay.addEventListener('click', closeSidebar);
}

if (navItems.length) {
  navItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const hash = item.getAttribute('href') || '';
      window.history.pushState(null, '', hash);
      showPageByHash(hash);
      closeSidebar();
    });
  });

  showPageByHash(window.location.hash || DEFAULT_PAGE_HASH);
  document.documentElement.classList.remove('has-route-hash');
  window.addEventListener('hashchange', () => {
    showPageByHash(window.location.hash || DEFAULT_PAGE_HASH);
  });
  window.addEventListener('popstate', () => {
    showPageByHash(window.location.hash || DEFAULT_PAGE_HASH);
  });
}

if (groupPicker) {
  groupPicker.addEventListener('change', () => {
    const selected = String(groupPicker.value || '').trim();
    const targetValueInput = document.getElementById('targetValue');
    if (!targetValueInput || !selected) return;
    targetValueInput.value = selected;
  });
}

if (personalChatPicker) {
  personalChatPicker.addEventListener('change', () => {
    const selected = String(personalChatPicker.value || '').trim();
    const targetValueInput = document.getElementById('targetValue');
    if (!targetValueInput || !selected) return;
    targetValueInput.value = selected;
  });
}

if (sendGroupPicker) {
  sendGroupPicker.addEventListener('change', () => {
    const selected = String(sendGroupPicker.value || '').trim();
    if (!sendTargetValueInput || !selected) return;
    sendTargetValueInput.value = selected;
  });
}

if (sendPersonalChatPicker) {
  sendPersonalChatPicker.addEventListener('change', () => {
    const selected = String(sendPersonalChatPicker.value || '').trim();
    if (!sendTargetValueInput || !selected) return;
    sendTargetValueInput.value = selected;
  });
}

if (refreshGroupsBtn) {
  refreshGroupsBtn.addEventListener('click', () => {
    loadGroups(true);
  });
}

if (refreshPersonalChatsBtn) {
  refreshPersonalChatsBtn.addEventListener('click', () => {
    loadPersonalChats(true);
  });
}

if (sendRefreshGroupsBtn) {
  sendRefreshGroupsBtn.addEventListener('click', () => {
    loadSendGroups(true);
  });
}

if (sendRefreshPersonalChatsBtn) {
  sendRefreshPersonalChatsBtn.addEventListener('click', () => {
    loadSendPersonalChats(true);
  });
}

refreshWhatsAppState();
window.setInterval(refreshWhatsAppState, 5000);

if (toggleBotResponsePersonal || toggleBotResponseGroup || toggleBotResponseSelfCommand) {
  loadChatResponseSettings();
}

if (ownerNumberInput || commandModeSelect) {
  loadAccessControlSettings();
}

hydrateScheduleTimesToLocal();

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');

    const formData = new FormData(form);
    const selectedType = String(formData.get('targetType') || '').trim();
    const targetValueRaw = String(formData.get('targetValue') || '').trim();

    const payload = {
      targetType: selectedType,
      targetValue: targetValueRaw,
      message: String(formData.get('message') || '').trim(),
      scheduleAt: String(formData.get('scheduleAt') || '').trim(),
      timezoneOffsetMinutes: getTimezoneOffsetMinutesForSchedule(
        String(formData.get('scheduleAt') || '').trim(),
        getSelectedTimeZone()
      ),
    };

    if (!payload.targetValue) {
      feedback.textContent = 'Target value is required.';
      feedback.style.color = '#b42318';
      return;
    }

    feedback.textContent = 'Saving schedule...';
    feedback.style.color = '#5d645d';
    setButtonLoading(submitBtn, true, 'Saving schedule');

    try {
      const response = await fetch('/api/schedules', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to create schedule');
      }

      feedback.textContent = 'Schedule saved successfully';
      feedback.style.color = '#136f63';
      form.reset();
      syncTargetInputContent();
      setTimeout(() => window.location.reload(), 350);
    } catch (error) {
      feedback.textContent = error.message;
      feedback.style.color = '#b42318';
    } finally {
      setButtonLoading(submitBtn, false);
    }
  });
}

if (sendForm) {
  sendForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const submitBtn = sendForm.querySelector('button[type="submit"]');

    const formData = new FormData(sendForm);
    const payload = {
      targetType: String(formData.get('targetType') || '').trim(),
      targetValue: String(formData.get('targetValue') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    };

    if (!payload.targetType || !payload.targetValue || !payload.message) {
      if (sendFeedback) {
        sendFeedback.textContent = 'Target type, target value, and message are required.';
        sendFeedback.style.color = '#b42318';
      }
      return;
    }

    if (sendFeedback) {
      sendFeedback.textContent = 'Sending message...';
      sendFeedback.style.color = '#5d645d';
    }
    setButtonLoading(submitBtn, true, 'Sending message');

    try {
      const response = await fetch('/api/messages/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      if (sendFeedback) {
        sendFeedback.textContent = 'Message sent successfully';
        sendFeedback.style.color = '#136f63';
      }

      const selectedType = String(sendTargetTypeInput?.value || 'group').trim();
      sendForm.reset();
      if (sendTargetTypeInput) sendTargetTypeInput.value = selectedType || 'group';
      syncSendTargetInputContent();
    } catch (error) {
      if (sendFeedback) {
        sendFeedback.textContent = error.message;
        sendFeedback.style.color = '#b42318';
      }
    } finally {
      setButtonLoading(submitBtn, false);
    }
  });
}

const destructiveConfirmModal = document.getElementById('destructiveConfirmModal');
const destructiveConfirmTitle = document.getElementById('destructiveConfirmTitle');
const destructiveConfirmDescription = document.getElementById('destructiveConfirmDescription');
const destructiveConfirmCancelBtn = document.getElementById('destructiveConfirmCancelBtn');
const destructiveConfirmActionBtn = document.getElementById('destructiveConfirmActionBtn');
let destructiveConfirmResolver = null;

function closeDestructiveConfirmModal(confirmed) {
  if (!destructiveConfirmModal) return;
  destructiveConfirmModal.hidden = true;
  syncModalBodyScrollLock();

  if (typeof destructiveConfirmResolver === 'function') {
    const resolver = destructiveConfirmResolver;
    destructiveConfirmResolver = null;
    resolver(Boolean(confirmed));
  }
}

function askDestructiveConfirm(options = {}) {
  const title = String(options.title || 'Delete item?').trim() || 'Delete item?';
  const description = String(options.description || 'This action cannot be undone.').trim() || 'This action cannot be undone.';
  const actionLabel = String(options.actionLabel || 'Delete').trim() || 'Delete';

  if (!destructiveConfirmModal) {
    return Promise.resolve(window.confirm(title));
  }

  if (destructiveConfirmTitle) destructiveConfirmTitle.textContent = title;
  if (destructiveConfirmDescription) destructiveConfirmDescription.textContent = description;
  if (destructiveConfirmActionBtn) destructiveConfirmActionBtn.textContent = actionLabel;

  if (typeof destructiveConfirmResolver === 'function') {
    destructiveConfirmResolver(false);
    destructiveConfirmResolver = null;
  }

  destructiveConfirmModal.hidden = false;
  syncModalBodyScrollLock();

  return new Promise((resolve) => {
    destructiveConfirmResolver = resolve;
  });
}

if (destructiveConfirmModal) {
  destructiveConfirmModal.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.closeModal === 'destructive-confirm') {
      closeDestructiveConfirmModal(false);
    }
  });
}

if (destructiveConfirmCancelBtn) {
  destructiveConfirmCancelBtn.addEventListener('click', () => closeDestructiveConfirmModal(false));
}

if (destructiveConfirmActionBtn) {
  destructiveConfirmActionBtn.addEventListener('click', () => closeDestructiveConfirmModal(true));
}

document.querySelectorAll('.btn-delete').forEach((button) => {
  button.addEventListener('click', async () => {
    const id = button.dataset.id;
    if (!id) return;

    const confirmDelete = await askDestructiveConfirm({
      title: 'Delete schedule?',
      description: 'This will permanently delete this scheduled message from the queue.',
      actionLabel: 'Delete',
    });
    if (!confirmDelete) return;

    setButtonLoading(button, true, 'Deleting schedule');

    try {
      const response = await fetch(`/api/schedules/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to delete schedule');
      }
      window.location.reload();
    } catch (error) {
      window.alert(error.message);
      setButtonLoading(button, false);
    }
  });
});

const scheduleViewModal = document.getElementById('scheduleViewModal');
const closeScheduleViewModalBtn = document.getElementById('closeScheduleViewModal');
const scheduleModalId = document.getElementById('scheduleModalId');
const scheduleModalType = document.getElementById('scheduleModalType');
const scheduleModalTarget = document.getElementById('scheduleModalTarget');
const scheduleModalTime = document.getElementById('scheduleModalTime');
const scheduleModalStatus = document.getElementById('scheduleModalStatus');
const scheduleModalStatusPill = document.getElementById('scheduleModalStatusPill');
const scheduleModalMessage = document.getElementById('scheduleModalMessage');
const scheduleViewModalDescription = document.getElementById('scheduleViewModalDescription');
const scheduleModalFeedback = document.getElementById('scheduleModalFeedback');
const scheduleModalCloseBtn = document.getElementById('scheduleModalCloseBtn');
const scheduleModalDeleteBtn = document.getElementById('scheduleModalDeleteBtn');
let activeScheduleModalId = '';

function closeScheduleViewModal() {
  if (!scheduleViewModal) return;
  activeScheduleModalId = '';
  if (scheduleModalFeedback) {
    scheduleModalFeedback.textContent = '';
    scheduleModalFeedback.style.color = '#5d645d';
  }
  if (scheduleModalDeleteBtn) {
    setButtonLoading(scheduleModalDeleteBtn, false);
    scheduleModalDeleteBtn.disabled = false;
  }
  scheduleViewModal.hidden = true;
  syncModalBodyScrollLock();
}

function openScheduleViewModal(item) {
  if (!scheduleViewModal || !item) return;
  activeScheduleModalId = String(item.id || '').trim();
  const status = String(item.status || '-').trim() || '-';

  if (scheduleModalId) scheduleModalId.textContent = String(item.id || '-');
  if (scheduleModalType) {
    const type = String(item.targetType || '').trim();
    scheduleModalType.textContent = type === 'group' ? 'group' : 'personal';
  }
  if (scheduleModalTarget) scheduleModalTarget.textContent = String(item.targetValue || '-');
  if (scheduleModalTime) {
    const localTime = formatLocalDateTime(item.scheduleAt);
    scheduleModalTime.textContent = localTime || String(item.scheduleAt || '-');
  }
  if (scheduleModalStatus) scheduleModalStatus.textContent = status;
  if (scheduleModalStatusPill) {
    scheduleModalStatusPill.textContent = status;
    scheduleModalStatusPill.classList.remove('badge-outline', 'badge-pending', 'badge-sent', 'badge-failed');
    if (['pending', 'sent', 'failed'].includes(status)) {
      scheduleModalStatusPill.classList.add(`badge-${status}`);
    } else {
      scheduleModalStatusPill.classList.add('badge-outline');
    }
  }
  if (scheduleViewModalDescription) {
    const typeText = String(item.targetType || '').trim() === 'group' ? 'Group' : 'Personal';
    scheduleViewModalDescription.textContent = `ID #${String(item.id || '-')} • ${typeText} schedule`;
  }
  if (scheduleModalMessage) scheduleModalMessage.textContent = String(item.message || '-');
  if (scheduleModalFeedback) {
    scheduleModalFeedback.textContent = '';
    scheduleModalFeedback.style.color = '#5d645d';
  }
  if (scheduleModalDeleteBtn) {
    setButtonLoading(scheduleModalDeleteBtn, false);
    scheduleModalDeleteBtn.disabled = false;
  }

  scheduleViewModal.hidden = false;
  syncModalBodyScrollLock();
}

document.querySelectorAll('.btn-view-schedule').forEach((button) => {
  button.addEventListener('click', () => {
    const id = String(button.dataset.id || '').trim();
    if (!id) return;

    const schedule = schedulesById.get(id);
    if (!schedule) return;

    openScheduleViewModal(schedule);
  });
});

if (scheduleViewModal) {
  scheduleViewModal.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.closeModal === 'schedule-view') {
      closeScheduleViewModal();
    }
  });
}

if (closeScheduleViewModalBtn) {
  closeScheduleViewModalBtn.addEventListener('click', closeScheduleViewModal);
}

if (scheduleModalCloseBtn) {
  scheduleModalCloseBtn.addEventListener('click', closeScheduleViewModal);
}

if (scheduleModalDeleteBtn) {
  scheduleModalDeleteBtn.addEventListener('click', async () => {
    if (!activeScheduleModalId) return;

    const confirmDelete = await askDestructiveConfirm({
      title: 'Delete schedule?',
      description: 'This will permanently delete this scheduled message from the queue.',
      actionLabel: 'Delete',
    });
    if (!confirmDelete) return;

    setButtonLoading(scheduleModalDeleteBtn, true, 'Deleting schedule');
    if (scheduleModalFeedback) {
      scheduleModalFeedback.textContent = 'Deleting schedule...';
      scheduleModalFeedback.style.color = '#5d645d';
    }

    try {
      const response = await fetch(`/api/schedules/${encodeURIComponent(activeScheduleModalId)}`, {
        method: 'DELETE',
      });

      if (!response.ok && response.status !== 204) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to delete schedule');
      }

      if (scheduleModalFeedback) {
        scheduleModalFeedback.textContent = 'Schedule deleted';
        scheduleModalFeedback.style.color = '#136f63';
      }

      setTimeout(() => window.location.reload(), 250);
    } catch (error) {
      if (scheduleModalFeedback) {
        scheduleModalFeedback.textContent = error.message;
        scheduleModalFeedback.style.color = '#b42318';
      }
      setButtonLoading(scheduleModalDeleteBtn, false);
      scheduleModalDeleteBtn.disabled = false;
    }
  });
}

/* ---------- Custom Commands ---------- */

const commandForm = document.getElementById('command-form');
const commandFeedback = document.getElementById('command-feedback');
const commandAdvancedFields = document.getElementById('command-advanced-fields');
const commandTriggerInput = document.getElementById('commandTrigger');
const commandMediaTypeInput = document.getElementById('commandMediaType');
const commandResponseInput = document.getElementById('commandResponse');
const commandMediaSourceInput = document.getElementById('commandMediaSource');
const commandMediaUrlInput = document.getElementById('commandMediaUrl');
const commandMediaUploadInput = document.getElementById('commandMediaUpload');
const commandMediaUploadHint = document.getElementById('commandMediaUploadHint');
const commandFileNameInput = document.getElementById('commandFileName');
const commandMediaSourceField = document.getElementById('commandMediaSourceField');
const commandMediaUrlField = document.getElementById('commandMediaUrlField');
const commandMediaUploadField = document.getElementById('commandMediaUploadField');
const commandFileNameField = document.getElementById('commandFileNameField');
const commandResponseRuleHint = document.getElementById('commandResponseRuleHint');
const commandMediaSourceTabs = Array.from(document.querySelectorAll('[data-command-media-source]'));
const commandSubmitBtn = document.getElementById('commandSubmitBtn');
const addButtonRowBtn = document.getElementById('addButtonRowBtn');
const openButtonSetupGuideBtn = document.getElementById('openButtonSetupGuideBtn');
const buttonRows = document.getElementById('buttonRows');
const buttonSetupGuideModal = document.getElementById('buttonSetupGuideModal');
const closeButtonSetupGuideModalBtn = document.getElementById('closeButtonSetupGuideModal');
const buttonSetupGuideModalCloseBtn = document.getElementById('buttonSetupGuideModalCloseBtn');

const commandsByTrigger = new Map(
  (Array.isArray(window.__CUSTOM_COMMANDS__) ? window.__CUSTOM_COMMANDS__ : []).map((item) => [
    item.trigger,
    item,
  ])
);

function buttonRowTemplate(button = {}) {
  const row = document.createElement('div');
  row.className = 'button-row';

  let params = {};
  if (typeof button.buttonParamsJson === 'string') {
    try {
      params = JSON.parse(button.buttonParamsJson);
    } catch (error) {
      params = {};
    }
  }

  const name = button.name || 'quick_reply';
  const singleSelectSections = Array.isArray(params.sections)
    ? params.sections.filter((section) => section && typeof section === 'object')
    : [];
  const firstSingleSelectSection = singleSelectSections[0] || null;
  const firstSingleSelectRow = Array.isArray(params.sections)
    ? params.sections
      .flatMap((section) => (Array.isArray(section?.rows) ? section.rows : []))
      .find((item) => item && typeof item === 'object' && (item.id || item.title))
    : null;

  row.innerHTML = `
    <select class="btn-type-select">
      <option value="quick_reply">Quick Reply</option>
      <option value="cta_url">Open Link</option>
      <option value="cta_call">Call</option>
      <option value="cta_wa">WhatsApp</option>
      <option value="cta_copy">Copy Code</option>
      <option value="single_select">Single Select</option>
    </select>
    <input class="btn-label-input" placeholder="Button label" />
    <input class="btn-value-input" placeholder="Value (id / URL / phone)" />
    <button type="button" class="btn btn-ghost btn-sm btn-remove-row" aria-label="Remove button">&times;</button>
    <div class="single-select-editor" hidden>
      <div class="single-select-editor-head">
        <input class="single-select-section-title" placeholder="Section title (default: Options)" />
        <input class="single-select-highlight-label" placeholder="Highlight label (optional)" />
        <button type="button" class="btn btn-outline btn-sm btn-add-single-row">Add Row</button>
      </div>
      <div class="single-select-rows-editor"></div>
    </div>
  `;

  const typeSelect = row.querySelector('.btn-type-select');
  const labelInput = row.querySelector('.btn-label-input');
  const valueInput = row.querySelector('.btn-value-input');
  const removeBtn = row.querySelector('.btn-remove-row');
  const singleSelectEditor = row.querySelector('.single-select-editor');
  const singleSelectSectionTitleInput = row.querySelector('.single-select-section-title');
  const singleSelectHighlightLabelInput = row.querySelector('.single-select-highlight-label');
  const singleSelectRowsEditor = row.querySelector('.single-select-rows-editor');
  const addSingleRowBtn = row.querySelector('.btn-add-single-row');

  function setSingleSelectEditorVisible(isVisible) {
    const visible = Boolean(isVisible);
    if (singleSelectEditor) {
      singleSelectEditor.hidden = !visible;
      singleSelectEditor.setAttribute('aria-hidden', String(!visible));
    }
    row.classList.toggle('is-single-select', visible);
  }

  function buildSingleSelectRowEditor(rowData = {}) {
    const rowEditor = document.createElement('div');
    rowEditor.className = 'single-select-row-editor';
    rowEditor.innerHTML = `
      <input class="single-select-row-title" placeholder="Row title" />
      <input class="single-select-row-id" placeholder="Row id" />
      <input class="single-select-row-header" placeholder="Header (optional)" />
      <input class="single-select-row-description" placeholder="Description (optional)" />
      <button type="button" class="btn btn-ghost btn-sm btn-remove-single-row" aria-label="Remove single select row">&times;</button>
    `;

    const rowTitleInput = rowEditor.querySelector('.single-select-row-title');
    const rowIdInput = rowEditor.querySelector('.single-select-row-id');
    const rowHeaderInput = rowEditor.querySelector('.single-select-row-header');
    const rowDescriptionInput = rowEditor.querySelector('.single-select-row-description');
    const removeSingleRowBtn = rowEditor.querySelector('.btn-remove-single-row');

    rowTitleInput.value = String(rowData.title || '').trim();
    rowIdInput.value = String(rowData.id || '').trim();
    rowHeaderInput.value = String(rowData.header || '').trim();
    rowDescriptionInput.value = String(rowData.description || '').trim();

    rowTitleInput.addEventListener('input', updateCommandSubmitState);
    rowIdInput.addEventListener('input', updateCommandSubmitState);
    rowHeaderInput.addEventListener('input', updateCommandSubmitState);
    rowDescriptionInput.addEventListener('input', updateCommandSubmitState);
    removeSingleRowBtn.addEventListener('click', () => {
      rowEditor.remove();
      updateCommandSubmitState();
    });

    return rowEditor;
  }

  function getExistingSingleSelectRows() {
    if (!singleSelectSections.length) return [];

    return singleSelectSections
      .flatMap((section) => (Array.isArray(section.rows) ? section.rows : []))
      .map((item) => {
        if (!item || typeof item !== 'object') return null;
        const id = String(item.id || '').trim();
        const title = String(item.title || '').trim();
        if (!id || !title) return null;

        const header = String(item.header || '').trim();
        const description = String(item.description || '').trim();
        const rowData = { id, title };
        if (header) rowData.header = header;
        if (description) rowData.description = description;
        return rowData;
      })
      .filter(Boolean);
  }

  function ensureSingleSelectEditorRows() {
    if (!singleSelectRowsEditor) return;

    const existingRows = Array.from(singleSelectRowsEditor.querySelectorAll('.single-select-row-editor'));
    if (existingRows.length) return;

    const rowData = firstSingleSelectRow
      ? {
        id: String(firstSingleSelectRow.id || '').trim(),
        title: String(firstSingleSelectRow.title || '').trim(),
        header: String(firstSingleSelectRow.header || '').trim(),
        description: String(firstSingleSelectRow.description || '').trim(),
      }
      : {
        id: String(valueInput.value || '').trim(),
        title: String(labelInput.value || '').trim(),
      };

    singleSelectRowsEditor.appendChild(buildSingleSelectRowEditor(rowData));
  }

  typeSelect.value = name;
  labelInput.value = params.display_text || params.title || firstSingleSelectRow?.title || '';
  valueInput.value = params.id || params.url || params.phone_number || params.copy_code || firstSingleSelectRow?.id || '';
  singleSelectSectionTitleInput.value = String(firstSingleSelectSection?.title || 'Options').trim() || 'Options';
  singleSelectHighlightLabelInput.value = String(firstSingleSelectSection?.highlight_label || '').trim();

  const existingRows = getExistingSingleSelectRows();
  existingRows.forEach((rowData) => {
    singleSelectRowsEditor.appendChild(buildSingleSelectRowEditor(rowData));
  });

  function syncPlaceholder() {
    if (typeSelect.value === 'cta_url') {
      valueInput.placeholder = 'https://example.com';
      valueInput.hidden = false;
      setSingleSelectEditorVisible(false);
    } else if (typeSelect.value === 'cta_call') {
      valueInput.placeholder = '+60123456789';
      valueInput.hidden = false;
      setSingleSelectEditorVisible(false);
    } else if (typeSelect.value === 'cta_wa') {
      valueInput.placeholder = '60123456789';
      valueInput.hidden = false;
      setSingleSelectEditorVisible(false);
    } else if (typeSelect.value === 'cta_copy') {
      valueInput.placeholder = 'DISKAUN10';
      valueInput.hidden = false;
      setSingleSelectEditorVisible(false);
    } else if (typeSelect.value === 'single_select') {
      valueInput.placeholder = 'row_id atau JSON rows (contoh: [{"id":"id1","title":"Option 1"}])';
      valueInput.hidden = true;
      setSingleSelectEditorVisible(true);
      ensureSingleSelectEditorRows();
    } else {
      valueInput.placeholder = 'reply_id';
      valueInput.hidden = false;
      setSingleSelectEditorVisible(false);
    }
  }
  syncPlaceholder();
  typeSelect.addEventListener('change', () => {
    syncPlaceholder();
    updateCommandSubmitState();
  });

  labelInput.addEventListener('input', updateCommandSubmitState);
  valueInput.addEventListener('input', updateCommandSubmitState);
  singleSelectSectionTitleInput.addEventListener('input', updateCommandSubmitState);
  singleSelectHighlightLabelInput.addEventListener('input', updateCommandSubmitState);
  addSingleRowBtn.addEventListener('click', () => {
    if (!singleSelectRowsEditor) return;
    singleSelectRowsEditor.appendChild(buildSingleSelectRowEditor());
    updateCommandSubmitState();
  });
  removeBtn.addEventListener('click', () => {
    row.remove();
    updateCommandSubmitState();
  });

  return row;
}

function addButtonRow(button) {
  if (!buttonRows) return;
  buttonRows.appendChild(buttonRowTemplate(button));
}

function clearButtonRows() {
  if (buttonRows) buttonRows.innerHTML = '';
}

function parseSingleSelectRowsInput(rawValue, fallbackTitle) {
  const cleanValue = String(rawValue || '').trim();
  const cleanTitle = String(fallbackTitle || '').trim() || 'Option';
  if (!cleanValue) return [];

  if (cleanValue.startsWith('[')) {
    try {
      const parsed = JSON.parse(cleanValue);
      if (Array.isArray(parsed)) {
        return parsed
          .map((item) => {
            if (!item || typeof item !== 'object') return null;
            const id = String(item.id || '').trim();
            const title = String(item.title || '').trim();
            const description = String(item.description || '').trim();
            const header = String(item.header || '').trim();
            if (!id || !title) return null;

            const row = { id, title };
            if (description) row.description = description;
            if (header) row.header = header;
            return row;
          })
          .filter(Boolean);
      }
    } catch (error) {
      // Fall back to single row input format when JSON is invalid.
    }
  }

  return [{ id: cleanValue, title: cleanTitle }];
}

function collectButtonsFromRows(targetRows = buttonRows) {
  if (!targetRows) return [];

  return Array.from(targetRows.querySelectorAll('.button-row'))
    .map((row) => {
      const type = row.querySelector('.btn-type-select').value;
      const label = row.querySelector('.btn-label-input').value.trim();
      const value = row.querySelector('.btn-value-input').value.trim();
      const singleSelectSectionTitleInput = row.querySelector('.single-select-section-title');
      const singleSelectHighlightLabelInput = row.querySelector('.single-select-highlight-label');
      const singleSelectRows = Array.from(row.querySelectorAll('.single-select-row-editor'));
      if (!label) return null;
      if (type !== 'single_select' && !value) return null;

      let params = { display_text: label };
      if (type === 'cta_url') {
        params.url = value;
        params.merchant_url = value;
      }
      else if (type === 'cta_call') params.phone_number = value;
      else if (type === 'cta_wa') params.phone_number = value;
      else if (type === 'cta_copy') params.copy_code = value;
      else if (type === 'single_select') {
        let rows = singleSelectRows
          .map((item) => {
            const title = String(item.querySelector('.single-select-row-title')?.value || '').trim();
            const id = String(item.querySelector('.single-select-row-id')?.value || '').trim();
            const header = String(item.querySelector('.single-select-row-header')?.value || '').trim();
            const description = String(item.querySelector('.single-select-row-description')?.value || '').trim();
            if (!id || !title) return null;

            const rowData = { id, title };
            if (header) rowData.header = header;
            if (description) rowData.description = description;
            return rowData;
          })
          .filter(Boolean);

        if (!rows.length) {
          rows = parseSingleSelectRowsInput(value, label);
        }
        if (!rows.length) return null;

        const sectionTitle = String(singleSelectSectionTitleInput?.value || '').trim() || 'Options';
        const highlightLabel = String(singleSelectHighlightLabelInput?.value || '').trim();
        const section = {
          title: sectionTitle,
          rows,
        };
        if (highlightLabel) {
          section.highlight_label = highlightLabel;
        }

        params = {
          title: label,
          sections: [section],
        };
      }
      else {
        params.id = value;
      }

      return { name: type, buttonParamsJson: JSON.stringify(params) };
    })
    .filter(Boolean);
}

if (addButtonRowBtn) {
  addButtonRowBtn.addEventListener('click', () => addButtonRow());
}

function closeButtonSetupGuideModal() {
  if (!buttonSetupGuideModal) return;
  buttonSetupGuideModal.hidden = true;
  syncModalBodyScrollLock();
}

function openButtonSetupGuideModal() {
  if (!buttonSetupGuideModal) return;
  buttonSetupGuideModal.hidden = false;
  syncModalBodyScrollLock();
}

if (openButtonSetupGuideBtn) {
  openButtonSetupGuideBtn.addEventListener('click', openButtonSetupGuideModal);
}

if (closeButtonSetupGuideModalBtn) {
  closeButtonSetupGuideModalBtn.addEventListener('click', closeButtonSetupGuideModal);
}

if (buttonSetupGuideModalCloseBtn) {
  buttonSetupGuideModalCloseBtn.addEventListener('click', closeButtonSetupGuideModal);
}

if (buttonSetupGuideModal) {
  buttonSetupGuideModal.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.closeModal === 'button-setup-guide') {
      closeButtonSetupGuideModal();
    }
  });
}

function setCommandFeedback(message, color) {
  if (!commandFeedback) return;
  commandFeedback.textContent = message;
  commandFeedback.style.color = color || '#5d645d';
}

function normalizeMediaSourceValue(value) {
  return String(value || '').trim() === 'upload' ? 'upload' : 'url';
}

function syncCommandMediaSourceTabs() {
  const selectedSource = normalizeMediaSourceValue(commandMediaSourceInput?.value || 'url');

  commandMediaSourceTabs.forEach((tab) => {
    const tabSource = normalizeMediaSourceValue(tab.dataset.commandMediaSource || 'url');
    const isActive = tabSource === selectedSource;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });
}

function setCommandMediaSource(source) {
  if (!commandMediaSourceInput) return;
  commandMediaSourceInput.value = normalizeMediaSourceValue(source);
  syncCommandMediaSourceTabs();
  updateCommandFormFlow();
}

function getNormalizedMediaType() {
  if (!commandMediaTypeInput) return '';
  const selected = String(commandMediaTypeInput.value || '').trim();
  if (!selected || selected === 'none') return '';
  return selected;
}

function isMediaTypeStepReady() {
  if (!commandMediaTypeInput) return false;
  return Boolean(String(commandMediaTypeInput.value || '').trim());
}

function updateCommandSubmitState() {
  if (!commandSubmitBtn) return;

  const trigger = String(commandTriggerInput?.value || '').trim();
  const hasValidTrigger = Boolean(trigger) && trigger.startsWith('.');
  const selectedMediaType = String(commandMediaTypeInput?.value || '').trim();
  const hasMediaType = Boolean(selectedMediaType);
  const isNoMedia = selectedMediaType === 'none';
  const mediaSource = String(commandMediaSourceInput?.value || 'url');
  const hasResponse = Boolean(String(commandResponseInput?.value || '').trim());
  const hasMediaUrl = Boolean(String(commandMediaUrlInput?.value || '').trim());
  const hasUploadFile = Boolean(commandMediaUploadInput?.files && commandMediaUploadInput.files.length);
  const hasButtons = collectButtonsFromRows().length > 0;
  const hasMediaInput = isNoMedia
    ? false
    : mediaSource === 'upload'
      ? hasUploadFile || hasMediaUrl
      : hasMediaUrl;
  const requireResponseForMediaButtons = !isNoMedia && hasButtons;
  const isReady = hasValidTrigger
    && hasMediaType
    && (hasResponse || hasMediaInput)
    && (!requireResponseForMediaButtons || hasResponse);

  if (commandResponseRuleHint) {
    commandResponseRuleHint.hidden = !requireResponseForMediaButtons;
  }

  commandSubmitBtn.disabled = !isReady;
  commandSubmitBtn.classList.toggle('is-ready', isReady);
}

function updateCommandFormFlow() {
  const selectedMediaType = String(commandMediaTypeInput?.value || '').trim();
  const showAdvanced = Boolean(selectedMediaType);

  if (commandAdvancedFields) {
    commandAdvancedFields.hidden = !showAdvanced;
  }

  const isNoMedia = selectedMediaType === 'none';
  const isDocument = selectedMediaType === 'document';
  const mediaSource = normalizeMediaSourceValue(commandMediaSourceInput?.value || 'url');
  if (commandMediaSourceInput) {
    commandMediaSourceInput.value = mediaSource;
  }
  syncCommandMediaSourceTabs();
  const showMediaUrl = showAdvanced && !isNoMedia;
  const showFileName = showAdvanced && isDocument;
  const showMediaSource = showAdvanced && !isNoMedia;
  const useUpload = showMediaSource && mediaSource === 'upload';

  if (commandMediaSourceField) {
    commandMediaSourceField.hidden = !showMediaSource;
  }
  if (commandMediaUrlField) {
    commandMediaUrlField.hidden = !showMediaUrl || useUpload;
  }
  if (commandMediaUrlInput) {
    commandMediaUrlInput.required = showMediaUrl && !useUpload;
    if (!showMediaUrl || useUpload) {
      commandMediaUrlInput.value = '';
    }
  }

  if (commandMediaUploadField) {
    commandMediaUploadField.hidden = !showMediaUrl || !useUpload;
  }
  if (commandMediaUploadInput) {
    commandMediaUploadInput.required = showMediaUrl && useUpload;
    if (!showMediaUrl || !useUpload) {
      commandMediaUploadInput.value = '';
    }
  }
  if (commandMediaUploadHint) {
    commandMediaUploadHint.textContent = useUpload
      ? 'Choose a file to upload and use as media source.'
      : 'Choose URL source or upload source for media.';
  }

  if (commandFileNameField) {
    commandFileNameField.hidden = !showFileName;
  }
  if (commandFileNameInput && !showFileName) {
    commandFileNameInput.value = '';
  }

  updateCommandSubmitState();
}

function resetCommandForm() {
  if (!commandForm) return;
  commandForm.reset();
  clearButtonRows();
  if (commandTriggerInput) commandTriggerInput.disabled = false;
  if (commandSubmitBtn) commandSubmitBtn.textContent = 'Save Command';
  if (commandMediaSourceInput) commandMediaSourceInput.value = 'url';
  setCommandFeedback('');
  updateCommandFormFlow();
}

function normalizeCommandTrigger(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';
  const withoutPrefix = raw.replace(/^[!.]+/, '').trim();
  if (!withoutPrefix) return '.';
  return `.${withoutPrefix}`;
}

if (commandTriggerInput) {
  commandTriggerInput.addEventListener('input', () => {
    const normalized = normalizeCommandTrigger(commandTriggerInput.value);
    if (commandTriggerInput.value !== normalized) {
      commandTriggerInput.value = normalized;
    }
    updateCommandFormFlow();
  });
}

if (commandMediaTypeInput) {
  commandMediaTypeInput.addEventListener('change', updateCommandFormFlow);
}

if (commandMediaSourceInput) {
  commandMediaSourceInput.addEventListener('change', updateCommandFormFlow);
}

if (commandMediaSourceTabs.length) {
  commandMediaSourceTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const selectedSource = normalizeMediaSourceValue(tab.dataset.commandMediaSource || 'url');
      setCommandMediaSource(selectedSource);
    });
  });
}

if (commandResponseInput) {
  commandResponseInput.addEventListener('input', updateCommandSubmitState);
}

if (commandMediaUrlInput) {
  commandMediaUrlInput.addEventListener('input', updateCommandSubmitState);
}

if (commandMediaUploadInput) {
  commandMediaUploadInput.addEventListener('change', updateCommandSubmitState);
}

async function uploadCommandMediaFile(file, mediaType) {
  const formData = new FormData();
  formData.set('mediaFile', file);
  formData.set('mediaType', mediaType);

  const response = await fetch('/api/custom-commands/upload-media', {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Failed to upload media file');
  }

  return data;
}

if (commandForm) {
  commandForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const submitBtn = commandSubmitBtn || commandForm.querySelector('button[type="submit"]');

    const formData = new FormData(commandForm);
    const selectedMediaType = String(formData.get('mediaType') || '').trim();
    const selectedMediaSource = String(formData.get('mediaSource') || 'url').trim();

    let mediaUrl = String(formData.get('mediaUrl') || '').trim();
    let fileName = String(formData.get('fileName') || '').trim();

    if (selectedMediaType && selectedMediaType !== 'none' && selectedMediaSource === 'upload') {
      const selectedFile = commandMediaUploadInput?.files?.[0];
      if (selectedFile) {
        setCommandFeedback('Uploading media file...', '#5d645d');
        const uploaded = await uploadCommandMediaFile(selectedFile, selectedMediaType);
        mediaUrl = String(uploaded.mediaUrl || '').trim();
        if (!fileName) {
          fileName = String(uploaded.fileName || '').trim();
        }
      }
    }

    const payload = {
      trigger: normalizeCommandTrigger(formData.get('trigger') || ''),
      response: String(formData.get('response') || '').trim(),
      mediaType: getNormalizedMediaType(),
      mediaUrl,
      fileName,
      buttons: collectButtonsFromRows(),
    };

    setCommandFeedback('Saving command...', '#5d645d');
    setButtonLoading(submitBtn, true, 'Saving command');

    try {
      const response = await fetch('/api/custom-commands', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to save command');
      }

      setCommandFeedback('Command saved', '#136f63');
      setTimeout(() => window.location.reload(), 350);
    } catch (error) {
      setCommandFeedback(error.message, '#b42318');
    } finally {
      setButtonLoading(submitBtn, false);
      updateCommandSubmitState();
    }
  });
}

const commandPreviewModal = document.getElementById('commandPreviewModal');
const closeCommandPreviewModalBtn = document.getElementById('closeCommandPreviewModal');
const commandPreviewViewport = document.getElementById('commandPreviewViewport');
const commandPreviewImage = document.getElementById('commandPreviewImage');
const commandPreviewVideo = document.getElementById('commandPreviewVideo');
const commandPreviewAudio = document.getElementById('commandPreviewAudio');
const commandPreviewDocument = document.getElementById('commandPreviewDocument');
const commandPreviewDocumentLink = document.getElementById('commandPreviewDocumentLink');
const commandPreviewBadge = document.getElementById('commandPreviewBadge');
const commandPreviewTitle = document.getElementById('commandPreviewTitle');
const commandPreviewDescription = document.getElementById('commandPreviewDescription');
const commandPreviewContent = document.getElementById('commandPreviewContent');
const commandPreviewMeta = document.getElementById('commandPreviewMeta');
const commandPreviewDeliveryHint = document.getElementById('commandPreviewDeliveryHint');
const commandPreviewButtons = document.getElementById('commandPreviewButtons');
const commandPreviewActionBtn = document.getElementById('commandPreviewActionBtn');
const commandPreviewIncomingText = document.getElementById('commandPreviewIncomingText');
const commandPreviewIncomingTime = document.getElementById('commandPreviewIncomingTime');
const commandPreviewOutgoingTime = document.getElementById('commandPreviewOutgoingTime');
const commandPreviewDateChip = document.getElementById('commandPreviewDateChip');
const commandPreviewStatusTime = document.querySelector('.wa-status-time');

function closeCommandPreviewModal() {
  if (!commandPreviewModal) return;

  if (commandPreviewVideo) {
    commandPreviewVideo.pause();
    commandPreviewVideo.removeAttribute('src');
    commandPreviewVideo.load();
  }

  if (commandPreviewAudio) {
    commandPreviewAudio.pause();
    commandPreviewAudio.removeAttribute('src');
    commandPreviewAudio.load();
  }

  commandPreviewModal.hidden = true;
  syncModalBodyScrollLock();
}

function parseButtonParams(button) {
  if (!button || typeof button !== 'object') return {};
  if (typeof button.buttonParamsJson !== 'string') return {};

  try {
    const parsed = JSON.parse(button.buttonParamsJson);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch (error) {
    return {};
  }
}

function resetCommandPreviewMedia() {
  if (commandPreviewImage) {
    commandPreviewImage.hidden = false;
  }

  if (commandPreviewVideo) {
    commandPreviewVideo.hidden = true;
  }

  if (commandPreviewAudio) {
    commandPreviewAudio.hidden = true;
  }

  if (commandPreviewDocument) {
    commandPreviewDocument.hidden = true;
  }
}

function truncatePreviewValue(value, maxLength = 42) {
  const clean = String(value || '').trim();
  if (!clean) return '';
  if (clean.length <= maxLength) return clean;
  return `${clean.slice(0, maxLength - 1)}...`;
}

function getButtonKindLabel(kind) {
  if (kind === 'cta_url') return 'Open Link';
  if (kind === 'cta_call') return 'Call';
  if (kind === 'cta_wa') return 'WhatsApp';
  if (kind === 'cta_copy') return 'Copy Code';
  if (kind === 'single_select') return 'Single Select';
  return 'Quick Reply';
}

function buildPreviewNowParts() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });
  const day = now.toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short' });
  return { time, day };
}

function renderCommandPreviewMeta(command) {
  if (!commandPreviewMeta) return;

  const mediaType = String(command.mediaType || '').trim();
  const mediaUrl = String(command.mediaUrl || '').trim();
  const hasMedia = Boolean(mediaType && mediaUrl);
  const buttons = Array.isArray(command.buttons) ? command.buttons : [];
  const buttonCount = buttons.length;
  const category = String(command.category || '').trim() || 'General';

  const chips = [
    `Category: ${category}`,
    hasMedia ? `Media: ${mediaType}` : 'Media: none',
    buttonCount ? `Buttons: ${buttonCount}` : 'Buttons: none',
    hasMedia && buttonCount ? 'Delivery: 2 messages' : 'Delivery: 1 message',
  ];

  commandPreviewMeta.innerHTML = '';
  chips.forEach((text) => {
    const chip = document.createElement('span');
    chip.className = 'command-preview-meta-chip';
    chip.textContent = text;
    commandPreviewMeta.appendChild(chip);
  });
  commandPreviewMeta.hidden = false;
}

function renderCommandPreviewDeliveryHint(command) {
  if (!commandPreviewDeliveryHint) return;

  const mediaType = String(command.mediaType || '').trim();
  const mediaUrl = String(command.mediaUrl || '').trim();
  const hasMedia = Boolean(mediaType && mediaUrl);
  const hasButtons = Array.isArray(command.buttons) && command.buttons.length > 0;
  const hasResponse = Boolean(String(command.response || '').trim());

  if (hasMedia && hasButtons) {
    commandPreviewDeliveryHint.textContent = hasResponse
      ? 'Preview note: media + caption will send first, then buttons in a second message for WhatsApp compatibility.'
      : 'Warning: media + buttons without response text can cause unclear output. Add response text for better result.';
    commandPreviewDeliveryHint.hidden = false;
    return;
  }

  if (hasButtons && !hasMedia) {
    commandPreviewDeliveryHint.textContent = 'Preview note: this command sends one text message with interactive buttons.';
    commandPreviewDeliveryHint.hidden = false;
    return;
  }

  commandPreviewDeliveryHint.textContent = '';
  commandPreviewDeliveryHint.hidden = true;
}

function renderCommandPreviewButtons(command) {
  if (!commandPreviewButtons) return;

  commandPreviewButtons.innerHTML = '';
  const list = Array.isArray(command.buttons) ? command.buttons : [];
  if (!list.length) {
    commandPreviewButtons.hidden = true;
    return;
  }

  list.forEach((buttonItem) => {
    const params = parseButtonParams(buttonItem);
    const firstSingleSelectRow = Array.isArray(params.sections)
      ? params.sections
        .flatMap((section) => (Array.isArray(section?.rows) ? section.rows : []))
        .find((item) => item && typeof item === 'object' && (item.id || item.title))
      : null;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn wa-preview-chip';
    const kind = String(buttonItem.name || '').trim();
    const label = params.display_text || params.title || firstSingleSelectRow?.title || 'Button';
    button.textContent = `${getButtonKindLabel(kind)}: ${label}`;

    let metaValue = params.id || params.url || params.phone_number || params.copy_code || firstSingleSelectRow?.id || '';
    if (metaValue) {
      const valueSpan = document.createElement('span');
      valueSpan.className = 'command-preview-button-value';
      valueSpan.textContent = truncatePreviewValue(metaValue);
      button.appendChild(valueSpan);
    }

    if (kind === 'cta_url' && params.url) {
      button.addEventListener('click', () => window.open(params.url, '_blank', 'noopener'));
    } else if (kind === 'cta_call' && params.phone_number) {
      button.addEventListener('click', () => window.open(`tel:${params.phone_number}`, '_self'));
    } else if (kind === 'cta_wa' && params.phone_number) {
      const rawPhone = String(params.phone_number || '');
      const normalizedPhone = rawPhone.replace(/[^0-9]/g, '');
      if (normalizedPhone) {
        button.addEventListener('click', () => window.open(`https://wa.me/${normalizedPhone}`, '_blank', 'noopener'));
      }
    } else if (kind === 'cta_copy' && params.copy_code) {
      button.addEventListener('click', async () => {
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(params.copy_code);
            button.textContent = 'Copied';
            setTimeout(() => {
              button.textContent = params.display_text || 'Button';
            }, 1200);
          }
        } catch (error) {
          // Ignore clipboard errors and keep button usable.
        }
      });
    }

    commandPreviewButtons.appendChild(button);
  });

  commandPreviewButtons.hidden = false;
}

function openCommandPreviewModal(command) {
  if (!commandPreviewModal || !command) return;

  const fallbackCover = 'https://avatar.vercel.sh/shadcn1';
  const mediaType = String(command.mediaType || '').trim();
  const mediaUrl = String(command.mediaUrl || '').trim();
  const mediaTypeLabel = mediaType ? mediaType.toUpperCase() : 'TEXT';
  const description = command.description
    ? String(command.description)
    : 'online';
  const textContent = String(command.response || '').trim();
  const { time, day } = buildPreviewNowParts();

  resetCommandPreviewMedia();

  if (commandPreviewImage) {
    commandPreviewImage.src = fallbackCover;
    commandPreviewImage.alt = mediaUrl
      ? `Media preview ${command.trigger || ''}`
      : 'Command cover';
  }

  if (mediaUrl && mediaType === 'image' && commandPreviewImage) {
    commandPreviewImage.src = mediaUrl;
    commandPreviewImage.hidden = false;
  }

  if (mediaUrl && mediaType === 'video' && commandPreviewVideo) {
    commandPreviewImage.hidden = true;
    commandPreviewVideo.src = mediaUrl;
    commandPreviewVideo.hidden = false;
  }

  if (mediaUrl && mediaType === 'audio' && commandPreviewAudio) {
    commandPreviewAudio.src = mediaUrl;
    commandPreviewAudio.hidden = false;
  }

  if (mediaUrl && mediaType === 'document' && commandPreviewDocument && commandPreviewDocumentLink) {
    commandPreviewDocument.hidden = false;
    commandPreviewDocumentLink.href = mediaUrl;
    commandPreviewDocumentLink.textContent = command.fileName || 'Open document';
  }

  if (commandPreviewBadge) {
    commandPreviewBadge.textContent = mediaTypeLabel;
  }

  if (commandPreviewStatusTime) {
    commandPreviewStatusTime.textContent = time;
  }

  if (commandPreviewDateChip) {
    commandPreviewDateChip.textContent = day;
  }

  if (commandPreviewIncomingText) {
    const incomingMessage = command.trigger
      ? `${String(command.trigger).trim()}${mediaUrl ? ' https://example.com/link' : ''}`
      : '!command';
    commandPreviewIncomingText.textContent = incomingMessage;
  }

  if (commandPreviewIncomingTime) {
    commandPreviewIncomingTime.textContent = time;
  }

  if (commandPreviewOutgoingTime) {
    commandPreviewOutgoingTime.textContent = `${time} ✓✓`;
  }

  if (commandPreviewTitle) {
    commandPreviewTitle.textContent = command.trigger || 'Command Preview';
  }

  if (commandPreviewDescription) {
    commandPreviewDescription.textContent = description;
  }

  if (commandPreviewContent) {
    if (textContent) {
      commandPreviewContent.textContent = textContent;
      commandPreviewContent.hidden = false;
    } else {
      commandPreviewContent.textContent = '';
      commandPreviewContent.hidden = true;
    }
  }

  renderCommandPreviewMeta(command);
  renderCommandPreviewDeliveryHint(command);
  renderCommandPreviewButtons(command);

  if (commandPreviewActionBtn) {
    commandPreviewActionBtn.onclick = () => {
      closeCommandPreviewModal();
    };
  }

  commandPreviewModal.hidden = false;
  syncModalBodyScrollLock();
}

document.querySelectorAll('.btn-preview-command').forEach((button) => {
  button.addEventListener('click', () => {
    const trigger = button.dataset.trigger;
    if (!trigger) return;

    const command = commandsByTrigger.get(trigger);
    if (!command) return;

    openCommandPreviewModal(command);
  });
});

const commandDetailTriggers = Array.from(document.querySelectorAll('.command-detail-trigger[data-popover-target]'));

function closeCommandDetailPopovers(exceptTargetId = '') {
  document.querySelectorAll('.command-detail-popover').forEach((popover) => {
    const keepOpen = exceptTargetId && popover.id === exceptTargetId;
    popover.hidden = !keepOpen;
  });
}

function toggleCommandDetailPopover(triggerButton) {
  const targetId = String(triggerButton?.dataset.popoverTarget || '').trim();
  if (!targetId) return;

  const popover = document.getElementById(targetId);
  if (!popover) return;

  const willOpen = popover.hidden;
  closeCommandDetailPopovers(willOpen ? targetId : '');
  popover.hidden = !willOpen;
}

commandDetailTriggers.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleCommandDetailPopover(button);
  });
});

document.addEventListener('click', (event) => {
  const target = event.target;
  const clickedPopover = target instanceof HTMLElement && target.closest('.command-detail-popover');
  const clickedTrigger = target instanceof HTMLElement && target.closest('.command-detail-trigger[data-popover-target]');
  if (clickedPopover || clickedTrigger) return;
  closeCommandDetailPopovers();
});

const customCommandEditModal = document.getElementById('customCommandEditModal');
const closeCustomCommandEditModalBtn = document.getElementById('closeCustomCommandEditModal');
const customCommandEditOriginalTriggerInput = document.getElementById('customCommandEditOriginalTrigger');
const customCommandEditTriggerInput = document.getElementById('customCommandEditTrigger');
const customCommandEditMediaTypeInput = document.getElementById('customCommandEditMediaType');
const customCommandEditMediaUrlInput = document.getElementById('customCommandEditMediaUrl');
const customCommandEditFileNameInput = document.getElementById('customCommandEditFileName');
const customCommandEditResponseInput = document.getElementById('customCommandEditResponse');
const customCommandEditAddButtonBtn = document.getElementById('customCommandEditAddButtonBtn');
const customCommandEditButtonRows = document.getElementById('customCommandEditButtonRows');
const customCommandEditFeedback = document.getElementById('customCommandEditFeedback');
const customCommandEditCancelBtn = document.getElementById('customCommandEditCancelBtn');
const customCommandEditSaveBtn = document.getElementById('customCommandEditSaveBtn');

function addCustomCommandEditButtonRow(button) {
  if (!customCommandEditButtonRows) return;
  customCommandEditButtonRows.appendChild(buttonRowTemplate(button));
}

function clearCustomCommandEditButtonRows() {
  if (!customCommandEditButtonRows) return;
  customCommandEditButtonRows.innerHTML = '';
}

function closeCustomCommandEditModal() {
  if (customCommandEditModal) {
    customCommandEditModal.hidden = true;
  }
  if (customCommandEditFeedback) {
    customCommandEditFeedback.textContent = '';
    customCommandEditFeedback.style.color = '#5d645d';
  }
  syncModalBodyScrollLock();
}

function openCustomCommandEditModal(trigger) {
  const key = String(trigger || '').trim();
  if (!key) return;

  const command = commandsByTrigger.get(key);
  if (!command) return;

  if (customCommandEditOriginalTriggerInput) customCommandEditOriginalTriggerInput.value = key;
  if (customCommandEditTriggerInput) customCommandEditTriggerInput.value = key;
  if (customCommandEditMediaTypeInput) customCommandEditMediaTypeInput.value = command.mediaType || 'none';
  if (customCommandEditMediaUrlInput) customCommandEditMediaUrlInput.value = command.mediaUrl || '';
  if (customCommandEditFileNameInput) customCommandEditFileNameInput.value = command.fileName || '';
  if (customCommandEditResponseInput) customCommandEditResponseInput.value = command.response || '';
  clearCustomCommandEditButtonRows();
  const list = Array.isArray(command.buttons) ? command.buttons : [];
  list.forEach((button) => addCustomCommandEditButtonRow(button));
  if (customCommandEditFeedback) {
    customCommandEditFeedback.textContent = '';
    customCommandEditFeedback.style.color = '#5d645d';
  }

  if (customCommandEditModal) {
    customCommandEditModal.hidden = false;
  }
  syncModalBodyScrollLock();
  customCommandEditResponseInput?.focus();
}

if (customCommandEditAddButtonBtn) {
  customCommandEditAddButtonBtn.addEventListener('click', () => {
    addCustomCommandEditButtonRow();
  });
}

document.querySelectorAll('.btn-edit-command-modal').forEach((button) => {
  button.addEventListener('click', () => {
    openCustomCommandEditModal(button.dataset.trigger);
  });
});

if (customCommandEditCancelBtn) {
  customCommandEditCancelBtn.addEventListener('click', closeCustomCommandEditModal);
}

if (closeCustomCommandEditModalBtn) {
  closeCustomCommandEditModalBtn.addEventListener('click', closeCustomCommandEditModal);
}

if (customCommandEditModal) {
  customCommandEditModal.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.closeModal === 'custom-command-edit') {
      closeCustomCommandEditModal();
    }
  });
}

if (customCommandEditSaveBtn) {
  customCommandEditSaveBtn.addEventListener('click', async () => {
    const originalTrigger = String(customCommandEditOriginalTriggerInput?.value || '').trim();
    if (!originalTrigger) return;

    const responseText = String(customCommandEditResponseInput?.value || '').trim();
    const mediaType = String(customCommandEditMediaTypeInput?.value || '').trim();
    const mediaUrl = String(customCommandEditMediaUrlInput?.value || '').trim();
    const fileName = String(customCommandEditFileNameInput?.value || '').trim();
    const buttons = collectButtonsFromRows(customCommandEditButtonRows);

    const payload = {
      response: responseText,
      mediaType: mediaType && mediaType !== 'none' ? mediaType : '',
      mediaUrl,
      fileName,
      buttons,
    };

    setButtonLoading(customCommandEditSaveBtn, true, 'Updating command');
    if (customCommandEditFeedback) {
      customCommandEditFeedback.textContent = 'Saving...';
      customCommandEditFeedback.style.color = '#5d645d';
    }

    try {
      const response = await fetch(`/api/custom-commands/${encodeURIComponent(originalTrigger)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to update command');
      }

      window.location.reload();
    } catch (error) {
      if (customCommandEditFeedback) {
        customCommandEditFeedback.textContent = error.message || 'Failed to update command';
        customCommandEditFeedback.style.color = '#b42318';
      }
      setButtonLoading(customCommandEditSaveBtn, false);
    }
  });
}

document.querySelectorAll('.btn-delete-command').forEach((button) => {
  button.addEventListener('click', async () => {
    const trigger = String(button.dataset.trigger || '').trim();
    if (!trigger) return;

    const confirmDelete = await askDestructiveConfirm({
      title: `Delete command ${trigger}?`,
      description: 'This command trigger and its response will be permanently removed.',
      actionLabel: 'Delete',
    });
    if (!confirmDelete) return;

    setButtonLoading(button, true, 'Deleting command');

    try {
      const response = await fetch(`/api/custom-commands/${encodeURIComponent(trigger)}`, {
        method: 'DELETE',
      });
      if (!response.ok && response.status !== 204) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to delete command');
      }
      window.location.reload();
    } catch (error) {
      window.alert(error.message);
      setButtonLoading(button, false);
    }
  });
});

const builtInCommandModal = document.getElementById('builtInCommandModal');
const closeBuiltInCommandModalBtn = document.getElementById('closeBuiltInCommandModal');
const builtInEditorTitle = document.getElementById('builtInEditorTitle');
const builtInEditorDescription = document.getElementById('builtInEditorDescription');
const builtInEditorTextLabel = document.getElementById('builtInEditorTextLabel');
const builtInEditorText = document.getElementById('builtInEditorText');
const builtInEditorFeedback = document.getElementById('builtInEditorFeedback');
const builtInEditorButtonsSection = document.getElementById('builtInEditorButtonsSection');
const builtInEditorButtonRows = document.getElementById('builtInEditorButtonRows');
const builtInEditorAddButtonBtn = document.getElementById('builtInEditorAddButtonBtn');
const builtInEditorCancelBtn = document.getElementById('builtInEditorCancelBtn');
const builtInEditorSaveBtn = document.getElementById('builtInEditorSaveBtn');

let activeBuiltInCommandKey = '';

const BUILT_IN_COMMAND_EDITOR_META = {
  sch: {
    title: 'Edit .sch',
    description: 'Update usage/help text and interactive buttons for schedule command.',
    textLabel: 'Usage/help text',
  },
  schlist: {
    title: 'Edit .schlist',
    description: 'Update message shown when no schedules are found for current chat.',
    textLabel: 'Empty list message',
  },
  schdel: {
    title: 'Edit .schdel',
    description: 'Update usage/help text shown when schedule delete format is invalid.',
    textLabel: 'Usage/help text',
  },
  vv: {
    title: 'Edit .vv',
    description: 'Update help text shown when .vv is used without valid quoted view-once media.',
    textLabel: 'Help text',
  },
  sticker: {
    title: 'Edit .sticker',
    description: 'Update usage/help text shown when .sticker is used without media.',
    textLabel: 'Help text',
  },
};

function clearBuiltInEditorButtonRows() {
  if (!builtInEditorButtonRows) return;
  builtInEditorButtonRows.innerHTML = '';
}

function toInteractiveButton(inputButton = {}) {
  if (!inputButton || typeof inputButton !== 'object') return null;

  if (inputButton.name && inputButton.buttonParamsJson) {
    const name = String(inputButton.name || '').trim();
    if (!name) return null;

    let params = {};
    if (typeof inputButton.buttonParamsJson === 'string') {
      try {
        const parsed = JSON.parse(inputButton.buttonParamsJson);
        params = parsed && typeof parsed === 'object' ? parsed : {};
      } catch (error) {
        params = {};
      }
    } else if (inputButton.buttonParamsJson && typeof inputButton.buttonParamsJson === 'object') {
      params = inputButton.buttonParamsJson;
    }

    return {
      name,
      buttonParamsJson: JSON.stringify(params || {}),
    };
  }

  if (Object.prototype.hasOwnProperty.call(inputButton, 'displayText')) {
    const displayText = String(inputButton.displayText || '').trim();
    if (!displayText) return null;
    const url = String(inputButton.url || '').trim();
    return {
      name: 'cta_url',
      buttonParamsJson: JSON.stringify({
        display_text: displayText,
        url,
        merchant_url: url,
      }),
    };
  }

  return null;
}

function addBuiltInEditorButtonRow(button = null) {
  if (!builtInEditorButtonRows) return;
  const normalized = button ? toInteractiveButton(button) : null;
  builtInEditorButtonRows.appendChild(buttonRowTemplate(normalized || {}));
}

function collectBuiltInEditorButtons() {
  return collectButtonsFromRows(builtInEditorButtonRows);
}

function closeBuiltInCommandModal() {
  activeBuiltInCommandKey = '';
  if (builtInCommandModal) {
    builtInCommandModal.hidden = true;
  }
  syncModalBodyScrollLock();
}

function openBuiltInCommandModal(commandKey) {
  const key = String(commandKey || '').trim().toLowerCase();
  if (!BUILT_IN_COMMAND_EDITOR_META[key]) return;

  activeBuiltInCommandKey = key;
  const meta = BUILT_IN_COMMAND_EDITOR_META[key];
  if (builtInEditorTitle) builtInEditorTitle.textContent = meta.title;
  if (builtInEditorDescription) builtInEditorDescription.textContent = meta.description;
  if (builtInEditorTextLabel) builtInEditorTextLabel.textContent = meta.textLabel;

  if (builtInEditorFeedback) {
    builtInEditorFeedback.textContent = '';
    builtInEditorFeedback.style.color = '#5d645d';
  }

  if (key === 'sch') {
    if (builtInEditorText) {
      builtInEditorText.value = String(builtInCommandSettings.scheduleUsageHelpText || '').trim() || DEFAULT_SCHEDULE_USAGE_HELP_TEXT;
    }
  } else if (key === 'schlist') {
    if (builtInEditorText) {
      builtInEditorText.value = String(builtInCommandSettings.scheduleListEmptyText || '').trim() || DEFAULT_SCHEDULE_LIST_EMPTY_TEXT;
    }
  } else if (key === 'schdel') {
    if (builtInEditorText) {
      builtInEditorText.value = String(builtInCommandSettings.scheduleDeleteUsageText || '').trim() || DEFAULT_SCHEDULE_DELETE_USAGE_TEXT;
    }
  } else if (key === 'vv') {
    if (builtInEditorText) {
      builtInEditorText.value = String(builtInCommandSettings.vvUsageHelpText || '').trim() || DEFAULT_VV_USAGE_HELP_TEXT;
    }
  } else if (key === 'sticker') {
    if (builtInEditorText) {
      builtInEditorText.value = String(builtInCommandSettings.stickerUsageHelpText || '').trim() || DEFAULT_STICKER_USAGE_HELP_TEXT;
    }
  }

  if (builtInEditorButtonsSection) builtInEditorButtonsSection.hidden = false;
  clearBuiltInEditorButtonRows();

  const buttonsByKey = {
    sch: builtInCommandSettings.scheduleUsageButtons,
    schlist: builtInCommandSettings.scheduleListButtons,
    schdel: builtInCommandSettings.scheduleDeleteButtons,
    vv: builtInCommandSettings.vvUsageButtons,
    sticker: builtInCommandSettings.stickerUsageButtons,
  };
  const activeButtons = Array.isArray(buttonsByKey[key]) ? buttonsByKey[key] : [];
  activeButtons.forEach((button) => addBuiltInEditorButtonRow(button));

  if (builtInCommandModal) {
    builtInCommandModal.hidden = false;
  }
  syncModalBodyScrollLock();
  builtInEditorText?.focus();
}

if (builtInEditorAddButtonBtn) {
  builtInEditorAddButtonBtn.addEventListener('click', () => {
    addBuiltInEditorButtonRow();
  });
}

document.querySelectorAll('.btn-edit-builtin-command').forEach((button) => {
  button.addEventListener('click', () => {
    openBuiltInCommandModal(button.dataset.builtinCommand || '');
  });
});

if (builtInEditorCancelBtn) {
  builtInEditorCancelBtn.addEventListener('click', closeBuiltInCommandModal);
}

if (closeBuiltInCommandModalBtn) {
  closeBuiltInCommandModalBtn.addEventListener('click', closeBuiltInCommandModal);
}

if (builtInCommandModal) {
  builtInCommandModal.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.closeModal === 'builtin-command') {
      closeBuiltInCommandModal();
    }
  });
}

if (builtInEditorSaveBtn) {
  builtInEditorSaveBtn.addEventListener('click', async () => {
    const key = activeBuiltInCommandKey;
    if (!key) return;

    const text = String(builtInEditorText?.value || '').trim();
    if (!text) {
      if (builtInEditorFeedback) {
        builtInEditorFeedback.textContent = 'Text tidak boleh kosong.';
        builtInEditorFeedback.style.color = '#b42318';
      }
      return;
    }

    const payload = {};
    if (key === 'sch') {
      const buttons = collectBuiltInEditorButtons();
      if (buttons.length > 10) {
        if (builtInEditorFeedback) {
          builtInEditorFeedback.textContent = 'Maksimum 10 button untuk .sch.';
          builtInEditorFeedback.style.color = '#b42318';
        }
        return;
      }
      payload.scheduleUsageHelpText = text;
      payload.scheduleUsageButtons = buttons;
    }

    if (key === 'schlist') {
      const buttons = collectBuiltInEditorButtons();
      if (buttons.length > 10) {
        if (builtInEditorFeedback) {
          builtInEditorFeedback.textContent = 'Maksimum 10 button untuk .schlist.';
          builtInEditorFeedback.style.color = '#b42318';
        }
        return;
      }
      payload.scheduleListEmptyText = text;
      payload.scheduleListButtons = buttons;
    }

    if (key === 'schdel') {
      const buttons = collectBuiltInEditorButtons();
      if (buttons.length > 10) {
        if (builtInEditorFeedback) {
          builtInEditorFeedback.textContent = 'Maksimum 10 button untuk .schdel.';
          builtInEditorFeedback.style.color = '#b42318';
        }
        return;
      }
      payload.scheduleDeleteUsageText = text;
      payload.scheduleDeleteButtons = buttons;
    }

    if (key === 'vv') {
      const buttons = collectBuiltInEditorButtons();
      if (buttons.length > 10) {
        if (builtInEditorFeedback) {
          builtInEditorFeedback.textContent = 'Maksimum 10 button untuk .vv.';
          builtInEditorFeedback.style.color = '#b42318';
        }
        return;
      }
      payload.vvUsageHelpText = text;
      payload.vvUsageButtons = buttons;
    }

    if (key === 'sticker') {
      const buttons = collectBuiltInEditorButtons();
      if (buttons.length > 10) {
        if (builtInEditorFeedback) {
          builtInEditorFeedback.textContent = 'Maksimum 10 button untuk .sticker.';
          builtInEditorFeedback.style.color = '#b42318';
        }
        return;
      }
      payload.stickerUsageHelpText = text;
      payload.stickerUsageButtons = buttons;
    }

    setButtonLoading(builtInEditorSaveBtn, true, 'Saving built-in command');
    if (builtInEditorFeedback) {
      builtInEditorFeedback.textContent = 'Saving...';
      builtInEditorFeedback.style.color = '#5d645d';
    }

    try {
      const response = await fetch('/api/built-in-commands', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to update built-in command');
      }

      builtInCommandSettings = normalizeBuiltInCommandSettings(data);
      applyBuiltInCommandSettingsUI();
      closeBuiltInCommandModal();
    } catch (error) {
      if (builtInEditorFeedback) {
        builtInEditorFeedback.textContent = error.message || 'Failed to update built-in command';
        builtInEditorFeedback.style.color = '#b42318';
      }
    } finally {
      setButtonLoading(builtInEditorSaveBtn, false);
    }
  });
}

applyBuiltInCommandSettingsUI();

if (commandPreviewModal) {
  commandPreviewModal.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.closeModal === 'command-preview') {
      closeCommandPreviewModal();
    }
  });
}

if (closeCommandPreviewModalBtn) {
  closeCommandPreviewModalBtn.addEventListener('click', closeCommandPreviewModal);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && destructiveConfirmModal && !destructiveConfirmModal.hidden) {
    closeDestructiveConfirmModal(false);
    return;
  }

  if (event.key === 'Escape' && commandPreviewModal && !commandPreviewModal.hidden) {
    closeCommandPreviewModal();
    return;
  }

  if (event.key === 'Escape' && builtInCommandModal && !builtInCommandModal.hidden) {
    closeBuiltInCommandModal();
    return;
  }

  if (event.key === 'Escape' && customCommandEditModal && !customCommandEditModal.hidden) {
    closeCustomCommandEditModal();
    return;
  }

  if (event.key === 'Escape') {
    closeCommandDetailPopovers();
  }

  if (event.key === 'Escape' && scheduleViewModal && !scheduleViewModal.hidden) {
    closeScheduleViewModal();
    return;
  }

  if (event.key === 'Escape' && buttonSetupGuideModal && !buttonSetupGuideModal.hidden) {
    closeButtonSetupGuideModal();
  }
});

const clearDeletedMessagesBtn = document.getElementById('clearDeletedMessagesBtn');

document.querySelectorAll('.btn-delete-deleted-message').forEach((button) => {
  button.addEventListener('click', async () => {
    const id = button.dataset.id;
    if (!id) return;

    const confirmDelete = await askDestructiveConfirm({
      title: 'Remove record?',
      description: 'This deleted message record will be removed permanently.',
      actionLabel: 'Remove',
    });
    if (!confirmDelete) return;

    setButtonLoading(button, true, 'Removing record');

    try {
      const response = await fetch(`/api/deleted-messages/${encodeURIComponent(id)}`, {
        method: 'DELETE',
      });
      if (!response.ok && response.status !== 204) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to remove record');
      }
      window.location.reload();
    } catch (error) {
      window.alert(error.message);
      setButtonLoading(button, false);
    }
  });
});

if (clearDeletedMessagesBtn) {
  clearDeletedMessagesBtn.addEventListener('click', async () => {
    const confirmClear = await askDestructiveConfirm({
      title: 'Clear all deleted records?',
      description: 'This will permanently remove all deleted message records from the log.',
      actionLabel: 'Clear All',
    });
    if (!confirmClear) return;

    setButtonLoading(clearDeletedMessagesBtn, true, 'Clearing records');

    try {
      const response = await fetch('/api/deleted-messages', { method: 'DELETE' });
      if (!response.ok && response.status !== 204) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to clear records');
      }
      window.location.reload();
    } catch (error) {
      window.alert(error.message);
      setButtonLoading(clearDeletedMessagesBtn, false);
    }
  });
}

updateCommandFormFlow();
