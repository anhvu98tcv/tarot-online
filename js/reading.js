document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const topic = getTopicById(params.get("topic")) || getTopicById("general");
  const spread = getSpreadById(params.get("spread")) || getSpreadById("1");

  document.getElementById("topic-label").textContent = topic.label;
  document.getElementById("spread-label").textContent =
    spread.label + (spread.description ? " — " + spread.description : "");

  const cardsArea = document.getElementById("cards-area");
  const deckFan = document.getElementById("deck-fan");
  const deckInstruction = document.getElementById("deck-instruction");
  const redrawBtn = document.getElementById("redraw-btn");

  if (spread.count > 1) {
    cardsArea.classList.add("cards-area--multi");
  }

  let fanDeck = [];
  let selectedFanIndices = [];

  function init() {
    selectedFanIndices = [];
    fanDeck = shuffleArray(TAROT_CARDS).map(function (card) {
      return { card: card, isReversed: Math.random() < 0.5 };
    });
    cardsArea.innerHTML = "";
    renderFan();
    updateInstruction();
    deckFan.classList.remove("is-locked");
    redrawBtn.hidden = true;
  }

  function renderFan() {
    deckFan.innerHTML = "";
    const total = fanDeck.length;
    const arcDeg = window.innerWidth >= 640 ? 64 : 50;
    const startAngle = -arcDeg / 2;
    const step = total > 1 ? arcDeg / (total - 1) : 0;

    for (let i = 0; i < total; i++) {
      const angle = startAngle + step * i;
      const fanCard = document.createElement("button");
      fanCard.type = "button";
      fanCard.className = "fan-card";
      fanCard.style.setProperty("--fan-angle", angle + "deg");
      fanCard.style.zIndex = String(i);
      fanCard.setAttribute("aria-label", "Lá bài thứ " + (i + 1));
      fanCard.innerHTML = renderCardFrameSVG(null, false);
      fanCard.addEventListener("click", function () {
        handleFanClick(i, fanCard);
      });
      deckFan.appendChild(fanCard);
    }
  }

  function updateInstruction() {
    const picked = selectedFanIndices.length;
    if (picked >= spread.count) {
      deckInstruction.textContent = "Đây là thông điệp dành cho bạn.";
      return;
    }
    if (spread.count === 1) {
      deckInstruction.textContent = "Hãy tĩnh tâm và chọn 1 lá bài bên dưới.";
      return;
    }
    if (picked === 0) {
      deckInstruction.textContent =
        "Hãy lần lượt chọn " + spread.count + " lá: " + spread.positions.join(" · ") + ".";
    } else {
      const nextLabel = spread.positions[picked];
      deckInstruction.textContent =
        "Chọn lá thứ " + (picked + 1) + " — " + nextLabel + ".";
    }
  }

  function handleFanClick(fanIndex, cardEl) {
    if (selectedFanIndices.length >= spread.count) return;

    const existing = selectedFanIndices.indexOf(fanIndex);
    if (existing >= 0) {
      selectedFanIndices.splice(existing, 1);
      cardEl.classList.remove("is-selected");
      updateInstruction();
      return;
    }

    selectedFanIndices.push(fanIndex);
    cardEl.classList.add("is-selected");
    updateInstruction();

    if (selectedFanIndices.length === spread.count) {
      deckFan.classList.add("is-locked");
      revealAll();
      redrawBtn.hidden = false;
    }
  }

  function revealAll() {
    selectedFanIndices.forEach(function (fanIndex, slotIdx) {
      const result = fanDeck[fanIndex];

      const slot = document.createElement("div");
      slot.className = "tarot-card-slot";
      const positionLabel = spread.positions[slotIdx];
      let slotHtml = "";
      if (positionLabel) {
        slotHtml += '<p class="card-position-label">' + positionLabel + "</p>";
      }
      slotHtml += '<div class="tarot-card">' + renderCardFrameSVG(null, false) + "</div>";
      slotHtml += '<div class="card-meaning" hidden></div>';
      slot.innerHTML = slotHtml;
      cardsArea.appendChild(slot);

      const tarotCardEl = slot.querySelector(".tarot-card");
      const meaningEl = slot.querySelector(".card-meaning");
      const baseDelay = slotIdx * 220;

      setTimeout(function () {
        tarotCardEl.classList.add("is-flipping");
        tarotCardEl.classList.toggle("is-reversed", result.isReversed);
      }, baseDelay);

      setTimeout(function () {
        tarotCardEl.innerHTML = renderCardFrameSVG(result.card, true);
      }, baseDelay + 300);

      setTimeout(function () {
        tarotCardEl.classList.remove("is-flipping");

        const orientation = result.isReversed ? "reversed" : "upright";
        const topicMeaning = result.card.topics[topic.id][orientation];
        const generalMeaning = result.card.general[orientation];
        const keywordsHtml = result.card.keywords
          .map(function (kw) { return '<span class="keyword-chip">' + kw + "</span>"; })
          .join("");

        meaningEl.innerHTML =
          '<p class="card-meaning-name">' + result.card.nameVi +
            ' <span class="card-meaning-traditional">(' + result.card.nameTraditional + ')</span></p>' +
          '<span class="card-meaning-orientation ' + (result.isReversed ? "" : "is-upright") + '">' +
            (result.isReversed ? "Ngược" : "Xuôi") + '</span>' +
          '<div class="card-meaning-keywords">' + keywordsHtml + '</div>' +
          '<p class="card-meaning-general">' + generalMeaning + '</p>' +
          '<p class="card-meaning-text">' + topicMeaning + '</p>';
        meaningEl.hidden = false;
        meaningEl.classList.add("is-visible");

        if (slotIdx === selectedFanIndices.length - 1) {
          meaningEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, baseDelay + 620);
    });
  }

  redrawBtn.addEventListener("click", init);

  init();
});
