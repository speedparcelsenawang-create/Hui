const form = document.getElementById('publicScheduleForm');
const themeToggleBtn = document.getElementById('shareThemeToggleBtn');
const targetTypeInput = document.getElementById('publicTargetType');
const targetValueField = document.getElementById('publicTargetValueField');
const targetValueLabel = document.getElementById('publicTargetValueLabel');
const targetHint = document.getElementById('publicTargetHint');
const groupTools = document.getElementById('publicGroupTools');
const groupPicker = document.getElementById('publicGroupPicker');
const groupFetchHint = document.getElementById('publicGroupFetchHint');
const refreshGroupsBtn = document.getElementById('publicRefreshGroupsBtn');
const personalChatTools = document.getElementById('publicPersonalChatTools');
const personalChatPicker = document.getElementById('publicPersonalChatPicker');
const personalChatFetchHint = document.getElementById('publicPersonalChatFetchHint');
const refreshPersonalChatsBtn = document.getElementById('publicRefreshPersonalChatsBtn');
const feedback = document.getElementById('publicScheduleFeedback');
const submitBtn = document.getElementById('publicScheduleSubmitBtn');

let hasLoadedGroups = false;
let hasLoadedPersonalChats = false;
const THEME_STORAGE_KEY = 'schedulebot-theme';

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

function setButtonLoading(button, isLoading, loadingLabel) {
  if (!button) return;

  if (isLoading) {
    if (!button.dataset.originalLabel) {
      button.dataset.originalLabel = button.textContent || '';
    }
    if (loadingLabel) {
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
  button.removeAttribute('aria-label');
}

function syncTargetInputContent() {
  if (!targetTypeInput || !targetValueField || !targetValueLabel || !targetHint) return;

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

function setGroupHint(text, color = '#5d645d') {
  if (!groupFetchHint) return;
  groupFetchHint.textContent = text;
  groupFetchHint.style.color = color;
}

function setPersonalChatHint(text, color = '#5d645d') {
  if (!personalChatFetchHint) return;
  personalChatFetchHint.textContent = text;
  personalChatFetchHint.style.color = color;
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

function setPersonalChatPickerOptions(chats) {
  if (!personalChatPicker) return;

  const baseOption = '<option value="">Select a chat...</option>';
  const optionHtml = chats
    .map((chat) => {
      const safeId = String(chat.id || '').replace(/"/g, '&quot;');
      const safeName = String(chat.name || chat.phoneNumber || chat.id || 'Unknown').trim();
      return `<option value="${safeId}">${safeName}</option>`;
    })
    .join('');

  personalChatPicker.innerHTML = baseOption + optionHtml;
}

async function loadGroups(force = false) {
  if (!groupPicker) return;
  if (hasLoadedGroups && !force) return;

  groupPicker.disabled = true;
  if (refreshGroupsBtn) setButtonLoading(refreshGroupsBtn, true, 'Refreshing groups');
  setGroupHint('Fetching group list...');

  try {
    const response = await fetch('/api/whatsapp/groups');
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch groups');
    }

    const groups = Array.isArray(data.groups) ? data.groups : [];
    setGroupPickerOptions(groups);
    hasLoadedGroups = true;

    if (groups.length) {
      setGroupHint('Pick a group to auto-fill the ID.', '#136f63');
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

async function loadPersonalChats(force = false) {
  if (!personalChatPicker) return;
  if (hasLoadedPersonalChats && !force) return;

  personalChatPicker.disabled = true;
  if (refreshPersonalChatsBtn) setButtonLoading(refreshPersonalChatsBtn, true, 'Refreshing chats');
  setPersonalChatHint('Fetching personal chats...');

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
      setPersonalChatHint('Pick a personal chat to auto-fill the destination ID.', '#136f63');
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

if (targetTypeInput) {
  targetTypeInput.addEventListener('change', syncTargetInputContent);
  syncTargetInputContent();
}

if (groupPicker) {
  groupPicker.addEventListener('change', () => {
    const selected = String(groupPicker.value || '').trim();
    const targetValueInput = document.getElementById('publicTargetValue');
    if (!targetValueInput || !selected) return;
    targetValueInput.value = selected;
  });
}

if (personalChatPicker) {
  personalChatPicker.addEventListener('change', () => {
    const selected = String(personalChatPicker.value || '').trim();
    const targetValueInput = document.getElementById('publicTargetValue');
    if (!targetValueInput || !selected) return;
    targetValueInput.value = selected;
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

initTheme();

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    applyTheme(current === 'light' ? 'dark' : 'light');
  });
}

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const payload = {
      targetType: String(formData.get('targetType') || '').trim(),
      targetValue: String(formData.get('targetValue') || '').trim(),
      message: String(formData.get('message') || '').trim(),
      scheduleAt: String(formData.get('scheduleAt') || '').trim(),
      timezoneOffsetMinutes: new Date().getTimezoneOffset(),
    };

    if (!payload.targetType || !payload.targetValue || !payload.message || !payload.scheduleAt) {
      if (feedback) {
        feedback.textContent = 'Please complete all required fields.';
        feedback.style.color = '#b42318';
      }
      return;
    }

    if (feedback) {
      feedback.textContent = 'Saving schedule...';
      feedback.style.color = '#5d645d';
    }
    setButtonLoading(submitBtn, true, 'Saving schedule');

    try {
      const response = await fetch('/api/schedules', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to create schedule');
      }

      if (feedback) {
        feedback.textContent = 'Schedule created successfully.';
        feedback.style.color = '#136f63';
      }
      form.reset();
      syncTargetInputContent();
    } catch (error) {
      if (feedback) {
        feedback.textContent = error.message;
        feedback.style.color = '#b42318';
      }
    } finally {
      setButtonLoading(submitBtn, false);
    }
  });
}
