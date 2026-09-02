/**
 * Therapy Nest — Interactive Clinical & ASR Simulator
 * Powers the 7-domain tab switcher, on-device Vosk ASR test, and IRT adaptive slider.
 */

document.addEventListener('DOMContentLoaded', () => {
  initDomainTabs();
  initAsrSimulator();
  initIrtAdaptiveSlider();
});

/**
 * 1. Therapy Domain Tab Switcher
 */
function initDomainTabs() {
  const tabBtns = document.querySelectorAll('.c-tab-btn');
  const tabPanels = document.querySelectorAll('.c-tab-panel');

  if (!tabBtns.length) return;

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      tabBtns.forEach((b) => {
        b.classList.remove('c-tab-btn--active');
        b.setAttribute('aria-selected', 'false');
      });

      tabPanels.forEach((panel) => {
        panel.classList.remove('c-tab-panel--active');
      });

      btn.classList.add('c-tab-btn--active');
      btn.setAttribute('aria-selected', 'true');

      const activePanel = document.getElementById(targetId);
      if (activePanel) {
        activePanel.classList.add('c-tab-panel--active');
      }
    });
  });
}

/**
 * 2. On-Device Vosk ASR Speech Recognition Simulator
 */
function initAsrSimulator() {
  const micBtn = document.getElementById('demo-mic-btn');
  const statusText = document.getElementById('demo-asr-status');
  const resultText = document.getElementById('demo-asr-result');
  const waveform = document.getElementById('demo-asr-waveform');

  if (!micBtn || !statusText || !resultText) return;

  let isRecording = false;

  micBtn.addEventListener('click', () => {
    if (isRecording) return;
    isRecording = true;

    // State 1: Listening
    micBtn.classList.add('btn--recording');
    micBtn.style.backgroundColor = '#E53E3E';
    statusText.textContent = 'Listening on-device (zero cloud audio)...';
    if (waveform) waveform.style.opacity = '1';

    // Simulate 2-second on-device transcription
    setTimeout(() => {
      // State 2: Processing (Vosk engine)
      statusText.textContent = 'Vosk ASR transcribing & computing phoneme similarity...';

      setTimeout(() => {
        // State 3: Complete Match
        isRecording = false;
        micBtn.classList.remove('btn--recording');
        micBtn.style.backgroundColor = '';
        if (waveform) waveform.style.opacity = '0.3';

        statusText.innerHTML = '<span style="color: var(--color-success); font-weight: 600;">✓ Phoneme Similarity: 96% Match</span>';
        resultText.innerHTML = 'Transcription: <strong>"Apple"</strong> <span class="badge badge--teal" style="margin-left: 8px;">+0.12 θ Gain</span>';
      }, 800);
    }, 1800);
  });
}

/**
 * 3. Interactive IRT Adaptive Engine Ability Slider
 */
function initIrtAdaptiveSlider() {
  const slider = document.getElementById('irt-slider');
  const thetaDisplay = document.getElementById('irt-theta-val');
  const levelDisplay = document.getElementById('irt-level-name');
  const probDisplay = document.getElementById('irt-expected-prob');
  const difficultyDisplay = document.getElementById('irt-recommended-diff');

  if (!slider || !thetaDisplay) return;

  const updateIrtState = (theta) => {
    thetaDisplay.textContent = `${theta > 0 ? '+' : ''}${theta.toFixed(1)}`;

    let levelName = 'Foundation (Severe)';
    let recDiff = -2.0;

    if (theta < -1.5) {
      levelName = 'Early Recovery / Severe';
      recDiff = -2.0;
    } else if (theta < -0.5) {
      levelName = 'Building Skills / Moderate';
      recDiff = -1.0;
    } else if (theta < 0.5) {
      levelName = 'Functional Recovery / Mild';
      recDiff = 0.0;
    } else if (theta < 1.5) {
      levelName = 'Advanced Integration';
      recDiff = 1.0;
    } else {
      levelName = 'Near-Independent Mastery';
      recDiff = 2.0;
    }

    if (levelDisplay) levelDisplay.textContent = levelName;
    if (difficultyDisplay) difficultyDisplay.textContent = `b = ${recDiff > 0 ? '+' : ''}${recDiff.toFixed(1)}`;
    if (probDisplay) {
      // 2PL Expected Probability formula: P = 1 / (1 + exp(-1.702 * 1.0 * (theta - recDiff)))
      const p = 1.0 / (1.0 + Math.exp(-1.702 * (theta - recDiff)));
      const pct = Math.round(p * 100);
      probDisplay.textContent = `${pct}% (Flow Channel: 70–80%)`;
    }
  };

  slider.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    updateIrtState(val);
  });

  // Initialize with baseline 0.0
  updateIrtState(0.0);
}
