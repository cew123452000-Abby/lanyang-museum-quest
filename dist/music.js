(() => {
  const music = document.querySelector('#bgMusic');
  const button = document.querySelector('#musicBtn');
  if (!music || !button) return;

  const storageKey = 'lanyangBgmEnabled';
  const storedPreference = localStorage.getItem(storageKey);
  let enabled = storedPreference === null ? true : storedPreference === 'true';

  music.volume = 0.18;

  function renderButton() {
    button.setAttribute('aria-pressed', String(enabled));
    button.classList.toggle('is-muted', !enabled);
    button.querySelector('span').textContent = enabled ? '♫' : '×';
    const action = enabled ? '關閉背景音樂' : '開啟背景音樂';
    button.setAttribute('aria-label', action);
    button.title = action;
  }

  async function playMusic() {
    if (!enabled || !music.paused) return;
    try {
      await music.play();
      button.classList.add('is-playing');
    } catch (_) {
      button.classList.remove('is-playing');
    }
  }

  function pauseMusic() {
    music.pause();
    button.classList.remove('is-playing');
  }

  button.addEventListener('click', event => {
    event.stopPropagation();
    enabled = !enabled;
    localStorage.setItem(storageKey, String(enabled));
    renderButton();
    enabled ? playMusic() : pauseMusic();
  });

  function unlockPlayback(event) {
    if (event.target.closest('#musicBtn')) return;
    playMusic();
  }

  document.addEventListener('pointerdown', unlockPlayback, { passive: true, capture: true });
  document.addEventListener('touchstart', unlockPlayback, { passive: true, capture: true });
  document.addEventListener('keydown', unlockPlayback, { capture: true });
  document.addEventListener('click', unlockPlayback, { passive: true });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) pauseMusic();
    else playMusic();
  });

  music.addEventListener('play', () => button.classList.add('is-playing'));
  music.addEventListener('pause', () => button.classList.remove('is-playing'));
  renderButton();
  playMusic();
})();
