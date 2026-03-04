const greekLetters = [
  {
    order: 1,
    slug: "alpha",
    name: "Alpha",
    upper: "Α",
    lower: "α",
    equivalent: "English approx: a (as in father)",
    ipa: "/ˈal.fa/",
    hint: "AHL-fah",
    note: "Start with an open, relaxed 'ah' vowel.",
    speakText: "Alpha. Pronounced AHL-fah. Sounds like a in father.",
  },
  {
    order: 2,
    slug: "beta",
    name: "Beta",
    upper: "Β",
    lower: "β",
    equivalent: "English approx: v",
    ipa: "/ˈvi.ta/",
    hint: "VEE-tah",
    note: "In modern Greek, beta is voiced like English v.",
    speakText: "Beta. Pronounced VEE-tah. Sounds like v in voice.",
  },
  {
    order: 3,
    slug: "gamma",
    name: "Gamma",
    upper: "Γ",
    lower: "γ",
    equivalent: "English approx: soft g / y before front vowels",
    ipa: "/ˈɣa.ma/",
    hint: "GHAH-mah",
    note: "Before e or i sounds, gamma may soften toward a y-like sound.",
    speakText: "Gamma. Pronounced GHAH-mah. Usually a voiced fricative g sound.",
  },
  {
    order: 4,
    slug: "delta",
    name: "Delta",
    upper: "Δ",
    lower: "δ",
    equivalent: "English approx: voiced th",
    ipa: "/ˈðel.ta/",
    hint: "THEL-tah",
    note: "Use the same sound as th in this.",
    speakText: "Delta. Pronounced THEL-tah. Sounds like th in this.",
  },
  {
    order: 5,
    slug: "epsilon",
    name: "Epsilon",
    upper: "Ε",
    lower: "ε",
    equivalent: "English approx: e (as in met)",
    ipa: "/ˈep.si.lon/",
    hint: "EP-see-lon",
    note: "Keep it short and crisp like e in met.",
    speakText: "Epsilon. Pronounced EP-see-lon. Sounds like e in met.",
  },
  {
    order: 6,
    slug: "zeta",
    name: "Zeta",
    upper: "Ζ",
    lower: "ζ",
    equivalent: "English approx: z",
    ipa: "/ˈzi.ta/",
    hint: "ZEE-tah",
    note: "Voiced z, like in zebra.",
    speakText: "Zeta. Pronounced ZEE-tah. Sounds like z in zebra.",
  },
  {
    order: 7,
    slug: "eta",
    name: "Eta",
    upper: "Η",
    lower: "η",
    equivalent: "English approx: ee",
    ipa: "/ˈi.ta/",
    hint: "EE-tah",
    note: "Long ee-like vowel in modern pronunciation.",
    speakText: "Eta. Pronounced EE-tah. Sounds like ee in see.",
  },
  {
    order: 8,
    slug: "theta",
    name: "Theta",
    upper: "Θ",
    lower: "θ",
    equivalent: "English approx: unvoiced th",
    ipa: "/ˈθi.ta/",
    hint: "THEE-tah",
    note: "Use the sound of th in think.",
    speakText: "Theta. Pronounced THEE-tah. Sounds like th in think.",
  },
  {
    order: 9,
    slug: "iota",
    name: "Iota",
    upper: "Ι",
    lower: "ι",
    equivalent: "English approx: ee",
    ipa: "/iˈo.ta/",
    hint: "ee-OH-tah",
    note: "Single vowel that usually sounds like ee.",
    speakText: "Iota. Pronounced ee-OH-tah. Often sounds like ee.",
  },
  {
    order: 10,
    slug: "kappa",
    name: "Kappa",
    upper: "Κ",
    lower: "κ",
    equivalent: "English approx: k",
    ipa: "/ˈka.pa/",
    hint: "KAH-pah",
    note: "Clean k sound, without aspiration.",
    speakText: "Kappa. Pronounced KAH-pah. Sounds like k in skip.",
  },
  {
    order: 11,
    slug: "lambda",
    name: "Lambda",
    upper: "Λ",
    lower: "λ",
    equivalent: "English approx: l",
    ipa: "/ˈlam.ða/",
    hint: "LAHM-thah",
    note: "Initial l with a soft th-like ending in the name.",
    speakText: "Lambda. Pronounced LAHM-thah. Starts with l.",
  },
  {
    order: 12,
    slug: "mu",
    name: "Mu",
    upper: "Μ",
    lower: "μ",
    equivalent: "English approx: m",
    ipa: "/mi/",
    hint: "MEE",
    note: "Straight m consonant.",
    speakText: "Mu. Pronounced MEE. Sounds like m in map.",
  },
  {
    order: 13,
    slug: "nu",
    name: "Nu",
    upper: "Ν",
    lower: "ν",
    equivalent: "English approx: n",
    ipa: "/ni/",
    hint: "NEE",
    note: "Straight n consonant.",
    speakText: "Nu. Pronounced NEE. Sounds like n in net.",
  },
  {
    order: 14,
    slug: "xi",
    name: "Xi",
    upper: "Ξ",
    lower: "ξ",
    equivalent: "English approx: ks",
    ipa: "/ksi/",
    hint: "KSEE",
    note: "Blend k + s as one cluster.",
    speakText: "Xi. Pronounced KSEE. Sounds like ks in box.",
  },
  {
    order: 15,
    slug: "omicron",
    name: "Omicron",
    upper: "Ο",
    lower: "ο",
    equivalent: "English approx: short o",
    ipa: "/ˈo.mi.kron/",
    hint: "OH-mee-kron",
    note: "Short, clean o vowel.",
    speakText: "Omicron. Pronounced OH-mee-kron. Short o sound.",
  },
  {
    order: 16,
    slug: "pi",
    name: "Pi",
    upper: "Π",
    lower: "π",
    equivalent: "English approx: p",
    ipa: "/pi/",
    hint: "PEE",
    note: "Like p in spin: less burst than English p in pin.",
    speakText: "Pi. Pronounced PEE. Sounds like p.",
  },
  {
    order: 17,
    slug: "rho",
    name: "Rho",
    upper: "Ρ",
    lower: "ρ",
    equivalent: "English approx: rolled r",
    ipa: "/ro/",
    hint: "ROH",
    note: "Tap or lightly roll the r if possible.",
    speakText: "Rho. Pronounced ROH. Use a tapped or rolled r.",
  },
  {
    order: 18,
    slug: "sigma",
    name: "Sigma",
    upper: "Σ",
    lower: "σ / ς",
    equivalent: "English approx: s",
    ipa: "/ˈsiɣ.ma/",
    hint: "SEEGH-mah",
    note: "Final sigma is written ς at word endings.",
    speakText: "Sigma. Pronounced SEEGH-mah. Sounds like s.",
  },
  {
    order: 19,
    slug: "tau",
    name: "Tau",
    upper: "Τ",
    lower: "τ",
    equivalent: "English approx: t",
    ipa: "/taf/",
    hint: "TAHF",
    note: "Clean t with minimal aspiration.",
    speakText: "Tau. Pronounced TAHF. Sounds like t.",
  },
  {
    order: 20,
    slug: "upsilon",
    name: "Upsilon",
    upper: "Υ",
    lower: "υ",
    equivalent: "English approx: ee (modern), historically u/y",
    ipa: "/ˈip.si.lon/",
    hint: "EEP-see-lon",
    note: "Modern Greek usually pronounces it as ee.",
    speakText: "Upsilon. Pronounced EEP-see-lon. Usually ee in modern Greek.",
  },
  {
    order: 21,
    slug: "phi",
    name: "Phi",
    upper: "Φ",
    lower: "φ",
    equivalent: "English approx: f",
    ipa: "/fi/",
    hint: "FEE",
    note: "In modern Greek, phi is f (not aspirated p-h).",
    speakText: "Phi. Pronounced FEE. Sounds like f.",
  },
  {
    order: 22,
    slug: "chi",
    name: "Chi",
    upper: "Χ",
    lower: "χ",
    equivalent: "English approx: throaty h / ch",
    ipa: "/çi/ ~ /xi/",
    hint: "KHEE",
    note: "Produced in the back of the mouth; softer before front vowels.",
    speakText: "Chi. Pronounced KHEE. A back-of-throat h-like sound.",
  },
  {
    order: 23,
    slug: "psi",
    name: "Psi",
    upper: "Ψ",
    lower: "ψ",
    equivalent: "English approx: ps",
    ipa: "/psi/",
    hint: "PSEE",
    note: "Say p and s together at the start.",
    speakText: "Psi. Pronounced PSEE. Sounds like ps.",
  },
  {
    order: 24,
    slug: "omega",
    name: "Omega",
    upper: "Ω",
    lower: "ω",
    equivalent: "English approx: o",
    ipa: "/oˈme.ɣa/",
    hint: "oh-MEH-ghah",
    note: "Historically long o; in modern Greek it merges with omicron sound.",
    speakText: "Omega. Pronounced oh-MEH-ghah. O sound in modern Greek.",
  },
];

const greekNames = {
  alpha: "Άλφα",
  beta: "Βήτα",
  gamma: "Γάμμα",
  delta: "Δέλτα",
  epsilon: "Έψιλον",
  zeta: "Ζήτα",
  eta: "Ήτα",
  theta: "Θήτα",
  iota: "Ιώτα",
  kappa: "Κάππα",
  lambda: "Λάμδα",
  mu: "Μι",
  nu: "Νι",
  xi: "Ξι",
  omicron: "Όμικρον",
  pi: "Πι",
  rho: "Ρω",
  sigma: "Σίγμα",
  tau: "Ταυ",
  upsilon: "Ύψιλον",
  phi: "Φι",
  chi: "Χι",
  psi: "Ψι",
  omega: "Ωμέγα",
};

const state = {
  deck: [...greekLetters],
  index: 0,
  passNumber: 1,
  passResults: [],
  isPassComplete: false,
  isRevealed: false,
  audioBySlug: {},
  audioPreloadStarted: false,
};

const elements = {
  card: document.getElementById("card"),
  letterIndex: document.getElementById("letterIndex"),
  letterName: document.getElementById("letterName"),
  glyphUpper: document.getElementById("glyphUpper"),
  glyphLower: document.getElementById("glyphLower"),
  equivalent: document.getElementById("equivalent"),
  ipa: document.getElementById("ipa"),
  englishHint: document.getElementById("englishHint"),
  note: document.getElementById("note"),
  promptText: document.getElementById("promptText"),
  answerPanel: document.getElementById("answerPanel"),
  progressText: document.getElementById("progressText"),
  progressFill: document.getElementById("progressFill"),
  progressTrack: document.querySelector(".progress-track"),
  revealBtn: document.getElementById("revealBtn"),
  goodBtn: document.getElementById("goodBtn"),
  badBtn: document.getElementById("badBtn"),
  playBtn: document.getElementById("playBtn"),
  shuffleBtn: document.getElementById("shuffleBtn"),
  summaryPanel: document.getElementById("summaryPanel"),
  summaryTitle: document.getElementById("summaryTitle"),
  summaryBody: document.getElementById("summaryBody"),
  continueBtn: document.getElementById("continueBtn"),
  restartBtn: document.getElementById("restartBtn"),
};

function currentLetter() {
  return state.deck[state.index];
}

function render() {
  if (state.isPassComplete) {
    renderSummary();
    return;
  }

  const letter = currentLetter();
  const total = state.deck.length;

  elements.summaryPanel.classList.add("hidden");
  elements.letterIndex.textContent = `Letter ${state.index + 1} of ${total}`;
  elements.letterName.textContent = letter.name;
  elements.glyphUpper.textContent = letter.upper;
  elements.glyphLower.textContent = letter.lower;
  elements.equivalent.textContent = letter.equivalent;
  elements.ipa.textContent = letter.ipa;
  elements.englishHint.textContent = letter.hint;
  elements.note.textContent = letter.note;

  elements.answerPanel.classList.toggle("hidden", !state.isRevealed);
  elements.promptText.classList.toggle("hidden", state.isRevealed);
  elements.revealBtn.disabled = state.isRevealed;
  elements.goodBtn.disabled = !state.isRevealed;
  elements.badBtn.disabled = !state.isRevealed;
  elements.playBtn.disabled = !state.isRevealed;

  elements.progressText.textContent = `${state.index + 1}/${total}`;
  elements.progressTrack.setAttribute("aria-valuemax", String(total));
  elements.progressTrack.setAttribute("aria-valuenow", String(state.index + 1));
  elements.progressFill.style.width = `${((state.index + 1) / total) * 100}%`;

  warmCurrentAndNextAudio();
}

function renderSummary() {
  const total = state.passResults.length;
  const goodCount = state.passResults.filter((entry) => entry.good).length;
  const badCount = total - goodCount;
  const percentage = total ? Math.round((goodCount / total) * 100) : 0;

  elements.summaryPanel.classList.remove("hidden");
  elements.summaryTitle.textContent = `Pass ${state.passNumber} complete: ${goodCount}/${total} (${percentage}%)`;
  elements.summaryBody.textContent =
    badCount > 0
      ? `${badCount} card${badCount === 1 ? "" : "s"} marked bad. Continue to review only missed cards.`
      : "Perfect pass. You marked every card good.";

  elements.progressText.textContent = `Pass ${state.passNumber} complete`;
  elements.progressTrack.setAttribute("aria-valuenow", String(total));
  elements.progressTrack.setAttribute("aria-valuemax", String(total || 1));
  elements.progressFill.style.width = "100%";
  elements.continueBtn.disabled = badCount === 0;
  elements.revealBtn.disabled = true;
  elements.goodBtn.disabled = true;
  elements.badBtn.disabled = true;
  elements.playBtn.disabled = true;
}

function markCard(good) {
  if (state.isPassComplete || !state.isRevealed) {
    return;
  }

  state.passResults.push({ ...currentLetter(), good });

  if (state.index >= state.deck.length - 1) {
    state.isPassComplete = true;
    render();
    return;
  }

  state.index += 1;
  state.isRevealed = false;
  render();
}

function shuffleDeck() {
  for (let i = state.deck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.deck[i], state.deck[j]] = [state.deck[j], state.deck[i]];
  }
  state.passResults = [];
  state.index = 0;
  state.isPassComplete = false;
  state.isRevealed = false;
  render();
}

function continueMissed() {
  const missedCards = state.passResults.filter((entry) => !entry.good);
  if (missedCards.length === 0) {
    return;
  }

  state.deck = missedCards;
  state.index = 0;
  state.passResults = [];
  state.passNumber += 1;
  state.isPassComplete = false;
  state.isRevealed = false;
  render();
}

function restartFullDeck() {
  state.deck = [...greekLetters];
  state.index = 0;
  state.passResults = [];
  state.passNumber = 1;
  state.isPassComplete = false;
  state.isRevealed = false;
  render();
}

function revealCard() {
  if (state.isPassComplete || state.isRevealed) {
    return;
  }

  state.isRevealed = true;
  render();
}

function audioPathForLetter(letter) {
  return `assets/audio/${String(letter.order).padStart(2, "0")}-${letter.slug}.m4a`;
}

function getOrCreateAudio(letter) {
  const cached = state.audioBySlug[letter.slug];
  if (cached) {
    return cached;
  }

  const audio = new Audio(audioPathForLetter(letter));
  audio.preload = "auto";
  audio.playsInline = true;
  audio.setAttribute("playsinline", "");
  state.audioBySlug[letter.slug] = audio;
  return audio;
}

async function preloadAllAudio() {
  if (state.audioPreloadStarted) {
    return;
  }
  state.audioPreloadStarted = true;

  await Promise.all(
    greekLetters.map(async (letter) => {
      const slug = letter.slug;
      if (state.audioBySlug[slug]) {
        return;
      }

      const sourcePath = audioPathForLetter(letter);
      try {
        const response = await fetch(sourcePath, { cache: "force-cache" });
        if (!response.ok) {
          return;
        }
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        const audio = new Audio(objectUrl);
        audio.preload = "auto";
        audio.playsInline = true;
        audio.setAttribute("playsinline", "");
        audio.load();
        state.audioBySlug[slug] = audio;
      } catch {
        // Fallback to file-backed audio object if fetch preload fails.
        getOrCreateAudio(letter);
      }
    })
  );
}

function warmAudio(letter) {
  const audio = getOrCreateAudio(letter);
  if (audio.readyState < 2) {
    audio.load();
  }
}

function warmCurrentAndNextAudio() {
  if (state.isPassComplete || state.deck.length === 0) {
    return;
  }

  warmAudio(currentLetter());
  const nextIndex = (state.index + 1) % state.deck.length;
  const nextLetter = state.deck[nextIndex];
  if (nextLetter.slug !== currentLetter().slug) {
    warmAudio(nextLetter);
  }
}

async function tryPlayAudio(audio) {
  // Restarting avoids queueing stale in-flight playback on mobile Safari.
  audio.pause();
  audio.currentTime = 0;

  try {
    await audio.play();
    return true;
  } catch {
    return false;
  }
}

function speakFallback(letter) {
  if (!window.speechSynthesis) {
    return;
  }

  const spokenName = greekNames[letter.slug] || letter.name;
  const utterance = new SpeechSynthesisUtterance(spokenName);
  utterance.lang = "el-GR";
  utterance.rate = 0.9;
  utterance.pitch = 1;

  const greekVoice = window.speechSynthesis
    .getVoices()
    .find((voice) => voice.lang.toLowerCase().startsWith("el"));
  if (greekVoice) {
    utterance.voice = greekVoice;
  }

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

async function playAudio() {
  const letter = currentLetter();
  const audio = getOrCreateAudio(letter);
  const played = await tryPlayAudio(audio);
  if (played) {
    return;
  }

  speakFallback(letter);
}

elements.revealBtn.addEventListener("click", revealCard);
elements.goodBtn.addEventListener("click", () => markCard(true));
elements.badBtn.addEventListener("click", () => markCard(false));
elements.shuffleBtn.addEventListener("click", shuffleDeck);
elements.playBtn.addEventListener("click", playAudio);
elements.continueBtn.addEventListener("click", continueMissed);
elements.restartBtn.addEventListener("click", restartFullDeck);

let touchStartX = 0;
let touchStartY = 0;

elements.card.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].clientX;
  touchStartY = event.changedTouches[0].clientY;
});

elements.card.addEventListener("touchend", (event) => {
  const touchEndX = event.changedTouches[0].clientX;
  const touchEndY = event.changedTouches[0].clientY;
  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;
  const swipeThreshold = 40;

  if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < -swipeThreshold) {
    revealCard();
    return;
  }

  if (Math.abs(deltaX) < swipeThreshold) {
    revealCard();
    return;
  }

  if (deltaX < 0) {
    markCard(true);
    return;
  }

  markCard(false);
});

elements.card.addEventListener("click", revealCard);

document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    event.preventDefault();
    revealCard();
  }
  if (event.key === "ArrowLeft") {
    markCard(true);
  }
  if (event.key === "ArrowRight") {
    markCard(false);
  }
  if (event.key.toLowerCase() === "p") {
    playAudio();
  }
});

render();

// Kick off full audio preloading at startup to minimize mobile playback delay.
void preloadAllAudio();
