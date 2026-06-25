document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const topic = getTopicById(params.get("topic")) || getTopicById("general");
  const spread = getSpreadById(params.get("spread")) || getSpreadById("1");

  const INTRO_DEFAULT = "Chọn chủ đề";

  const introHeading = document.getElementById("intro-heading");
  const topicLabel = document.getElementById("topic-label");
  const spreadLabel = document.getElementById("spread-label");
  topicLabel.textContent = topic.label;
  spreadLabel.textContent =
    spread.label + (spread.description ? " — " + spread.description : "");

  const deckSection = document.getElementById("deck-section");
  const cardsArea = document.getElementById("cards-area");
  const deckFan = document.getElementById("deck-fan");
  const deckInstruction = document.getElementById("deck-instruction");
  const viewResultsBtn = document.getElementById("view-results-btn");
  const redrawBtn = document.getElementById("redraw-btn");
  const disclaimerNote = document.getElementById("disclaimer-note");

  let fanDeck = [];
  let selectedFanIndices = [];

  function init() {
    selectedFanIndices = [];
    fanDeck = shuffleArray(TAROT_CARDS).map(function (card) {
      return { card: card, isReversed: Math.random() < 0.5 };
    });

    introHeading.textContent = INTRO_DEFAULT;
    spreadLabel.hidden = false;
    viewResultsBtn.hidden = true;
    viewResultsBtn.classList.remove("is-entering");
    redrawBtn.hidden = true;
    disclaimerNote.hidden = true;

    cardsArea.innerHTML = "";
    cardsArea.className = "cards-area";

    deckSection.hidden = false;
    deckSection.classList.remove("is-leaving");
    deckFan.classList.remove("is-locked");

    renderFan();
    updateInstruction();
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
      revealPreview();
    }
  }

  function pickedCards() {
    return selectedFanIndices.map(function (fanIndex) { return fanDeck[fanIndex]; });
  }

  function formatDateVi(date) {
    const pad = function (n) { return String(n).padStart(2, "0"); };
    return pad(date.getDate()) + "/" + pad(date.getMonth() + 1) + "/" + date.getFullYear();
  }

  const VIEW_LOG_KEY = "tarotViewLog";
  const DONATE_CONFIRMED_KEY = "tarotDonateConfirmed";
  const FREE_VIEWS_PER_DAY = 2;

  function hasConfirmedDonate() {
    try {
      return localStorage.getItem(DONATE_CONFIRMED_KEY) === "1";
    } catch (e) {
      return false;
    }
  }

  // Records today's view and reports whether the free daily quota has been used up.
  // Falls back to "within quota" if storage is unavailable (private mode, quota, etc),
  // and never counts against someone who has already confirmed a donation.
  function recordViewAndCheckLimit() {
    if (hasConfirmedDonate()) return false;

    const todayKey = formatDateVi(new Date());
    let log = { date: todayKey, count: 0 };
    try {
      const stored = JSON.parse(localStorage.getItem(VIEW_LOG_KEY));
      if (stored && stored.date === todayKey && typeof stored.count === "number") {
        log = stored;
      }
      log.count += 1;
      localStorage.setItem(VIEW_LOG_KEY, JSON.stringify(log));
    } catch (e) {
      return false;
    }
    return log.count > FREE_VIEWS_PER_DAY;
  }

  function confirmDonate() {
    try {
      localStorage.setItem(DONATE_CONFIRMED_KEY, "1");
    } catch (e) {
      // Storage unavailable — the thank-you still shows for this view.
    }
    const nudge = document.querySelector(".donate-nudge");
    if (nudge) {
      nudge.innerHTML =
        '<p class="donate-message">Cảm ơn bạn đã ủng hộ Tarot Huyền Bí! Chúc bạn có những trải nghiệm thật ý nghĩa.</p>';
    }
  }

  function buildDonateNudgeHtml() {
    return (
      '<div class="donate-section donate-nudge">' +
        "<h3>Ủng hộ website</h3>" +
        '<p class="donate-message">Bạn đã xem khá nhiều lượt hôm nay — nếu trang web mang lại điều gì đó hữu ích cho bạn, ' +
        "hãy ủng hộ mình một chút để có thêm động lực duy trì và phát triển thêm nhé. Cảm ơn bạn rất nhiều!</p>" +
        DONATE_DETAILS_HTML +
        '<button type="button" id="confirm-donate-btn" class="btn btn-secondary">Tôi đã ủng hộ</button>' +
      "</div>"
    );
  }

  // Stage 2: chosen cards flip face-up, fanned out, captioned — no meaning text yet.
  function revealPreview() {
    const picked = pickedCards();
    const mid = (picked.length - 1) / 2;

    setTimeout(function () {
      deckSection.classList.add("is-leaving");
      setTimeout(function () { deckSection.hidden = true; }, 360);
    }, 500);

    cardsArea.innerHTML = "";
    cardsArea.className = "cards-area cards-area--preview";

    picked.forEach(function (result, idx) {
      const slot = document.createElement("div");
      slot.className = "picked-card";
      const angle = picked.length > 1 ? (idx - mid) * 6 : 0;
      slot.style.setProperty("--pick-angle", angle + "deg");
      slot.style.setProperty("--pick-z", String(picked.length - Math.abs(idx - mid)));
      slot.style.animationDelay = (idx * 280) + "ms";

      const positionLabel = spread.positions[idx];
      let html = "";
      if (positionLabel) {
        html += '<p class="card-position-label">' + positionLabel + "</p>";
      }
      html +=
        '<p class="picked-card-caption">' + result.card.nameVi +
        ' <span class="picked-card-orientation">(Lá bài ' +
        (result.isReversed ? "ngược" : "xuôi") + ")</span></p>";
      html += '<div class="tarot-card">' + renderCardFrameSVG(null, false) + "</div>";
      slot.innerHTML = html;
      cardsArea.appendChild(slot);

      const tarotCardEl = slot.querySelector(".tarot-card");
      const baseDelay = idx * 480;

      setTimeout(function () {
        tarotCardEl.classList.add("is-flipping");
        tarotCardEl.classList.toggle("is-reversed", result.isReversed);
      }, baseDelay);

      setTimeout(function () {
        tarotCardEl.innerHTML = renderCardFrameSVG(result.card, true);
      }, baseDelay + 300);

      setTimeout(function () {
        tarotCardEl.classList.remove("is-flipping");
        tarotCardEl.classList.add("is-settling");
      }, baseDelay + 620);
    });

    const btnDelay = picked.length * 480 + 700;
    setTimeout(function () {
      viewResultsBtn.hidden = false;
      viewResultsBtn.classList.add("is-entering");
    }, btnDelay);
  }

  // Stage 3: full meaning text, image left / text right per card.
  function showResults() {
    const picked = pickedCards();
    const overLimit = recordViewAndCheckLimit();

    introHeading.textContent = "Kết quả bói Tarot: " + formatDateVi(new Date());
    spreadLabel.hidden = true;
    viewResultsBtn.hidden = true;

    cardsArea.classList.add("is-leaving");

    setTimeout(function () {
      cardsArea.innerHTML = overLimit ? buildDonateNudgeHtml() : "";
      cardsArea.className = "cards-area cards-area--results";

      if (overLimit) {
        document.getElementById("confirm-donate-btn").addEventListener("click", confirmDonate);
      }

      picked.forEach(function (result, idx) {
        const orientation = result.isReversed ? "reversed" : "upright";
        const topicMeaning = result.card.topics[topic.id][orientation];
        const generalMeaning = result.card.general[orientation];
        const keywordsHtml = result.card.keywords
          .map(function (kw) { return '<span class="keyword-chip">' + kw + "</span>"; })
          .join("");
        const positionLabel = spread.positions[idx];

        const row = document.createElement("div");
        row.className = "result-row";
        row.style.animationDelay = (idx * 130) + "ms";

        let mediaHtml = "";
        if (positionLabel) {
          mediaHtml += '<p class="card-position-label">' + positionLabel + "</p>";
        }
        mediaHtml +=
          '<div class="tarot-card' + (result.isReversed ? " is-reversed" : "") + '">' +
            renderCardFrameSVG(result.card, true) +
          "</div>" +
          '<p class="card-meaning-name">' + result.card.nameVi +
            ' <span class="card-meaning-traditional">(' + result.card.nameTraditional + ")</span></p>" +
          '<span class="card-meaning-orientation ' + (result.isReversed ? "" : "is-upright") + '">' +
            (result.isReversed ? "Ngược" : "Xuôi") + "</span>";

        const bodyHtml =
          '<div class="card-meaning-keywords">' + keywordsHtml + "</div>" +
          '<p class="card-meaning-general">' + generalMeaning + "</p>" +
          '<p class="card-meaning-text">' + topicMeaning + "</p>";

        row.innerHTML =
          '<div class="result-row-media">' + mediaHtml + "</div>" +
          '<div class="result-row-body">' + bodyHtml + "</div>";

        cardsArea.appendChild(row);
      });

      redrawBtn.hidden = false;
      disclaimerNote.hidden = false;
      cardsArea.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 260);
  }

  viewResultsBtn.addEventListener("click", showResults);
  redrawBtn.addEventListener("click", init);

  init();
});
