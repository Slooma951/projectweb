(() => {
  const roleText = document.querySelector("[data-role-text]");

  if (!roleText) {
    return;
  }

  const phrases = [
    "AI Chrome Extension Developer",
    "FastAPI + REST API Builder",
    "NLP Project Developer",
    "Software Engineering Graduate"
  ];

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    roleText.textContent = phrases[0];
    return;
  }

  let phraseIndex = 0;
  let characterIndex = 0;
  let deleting = false;

  const tick = () => {
    const phrase = phrases[phraseIndex];
    roleText.textContent = phrase.slice(0, characterIndex);

    if (!deleting && characterIndex < phrase.length) {
      characterIndex += 1;
      window.setTimeout(tick, 85);
      return;
    }

    if (!deleting && characterIndex === phrase.length) {
      deleting = true;
      window.setTimeout(tick, 1200);
      return;
    }

    if (deleting && characterIndex > 0) {
      characterIndex -= 1;
      window.setTimeout(tick, 35);
      return;
    }

    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    window.setTimeout(tick, 250);
  };

  tick();
})();
