(() => {
  const music = document.querySelector('#bgMusic');
  const button = document.querySelector('#musicBtn');
  if (!music || !button) return;

  let enabled = true;
  localStorage.removeItem('lanyangBgmEnabled');

  const defaultVolume = 12;
  music.volume = defaultVolume / 100;

  const volumeControl = document.createElement('label');
  volumeControl.className = 'music-volume-control';
  volumeControl.innerHTML = `<span>音量</span><input type="range" min="0" max="40" value="${defaultVolume}" step="1" aria-label="背景音樂音量，預設小聲"><output>小聲</output>`;
  button.insertAdjacentElement('afterend', volumeControl);

  const volumeStyle = document.createElement('style');
  volumeStyle.textContent = `.music-volume-control{display:flex;align-items:center;gap:.35rem;min-height:42px;padding:.25rem .55rem;border:1px solid var(--line);border-radius:999px;background:#fff;color:var(--navy);font-size:.72rem;font-weight:800}.music-volume-control input{width:82px;accent-color:var(--sea);cursor:pointer}.music-volume-control output{min-width:2.1rem;color:#58737a}.music-volume-control input::-webkit-slider-thumb{min-width:20px;min-height:20px}@media(max-width:620px){.music-volume-control{padding:.25rem .4rem}.music-volume-control>span{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}.music-volume-control input{width:58px}.music-volume-control output{display:none}}`;
  document.head.append(volumeStyle);

  const volumeSlider = volumeControl.querySelector('input');
  const volumeOutput = volumeControl.querySelector('output');

  function renderVolume() {
    const value = Number(volumeSlider.value);
    music.volume = value / 100;
    volumeOutput.textContent = value === 0 ? '靜音' : value <= 15 ? '小聲' : value <= 28 ? '中聲' : '大聲';
    volumeSlider.setAttribute('aria-valuetext', `${value}%（${volumeOutput.textContent}）`);
  }

  volumeSlider.addEventListener('input', renderVolume);

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
  renderVolume();
  renderButton();
  playMusic();
})();
