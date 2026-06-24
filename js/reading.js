document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const topic = getTopicById(params.get("topic")) || getTopicById("general");
  const spread = getSpreadById(params.get("spread")) || getSpreadById("1");

  document.getElementById("topic-label").textContent = topic.label;
  document.getElementById("spread-label").textContent =
    spread.label + (spread.description ? " — " + spread.description : "");

  const cardsArea = document.getElementById("cards-area");
  const drawBtn = document.getElementById("draw-btn");
  const redrawBtn = document.getElementById("redraw-btn");

  if (spread.count > 1) {
    cardsArea.classList.add("cards-area--multi");
  }

  const slots = [];
  for (let i = 0; i < spread.count; i++) {
    const slot = document.createElement("div");
    slot.className = "tarot-card-slot";

    const positionLabel = spread.positions[i];
    let html = "";
    if (positionLabel) {
      html += '<p class="card-position-label">' + positionLabel + "</p>";
    }
    html += '<div class="tarot-card">' + renderCardFrameSVG(null, false) + "</div>";
    html += '<div class="card-meaning" hidden></div>';
    slot.innerHTML = html;

    cardsArea.appendChild(slot);
    slots.push(slot);
  }

  function performDraw() {
    const drawn = drawCards(spread.count);

    drawBtn.disabled = true;
    redrawBtn.disabled = true;

    slots.forEach(function (slot, i) {
      const tarotCardEl = slot.querySelector(".tarot-card");
      const meaningEl = slot.querySelector(".card-meaning");
      const result = drawn[i];

      meaningEl.classList.remove("is-visible");
      meaningEl.hidden = true;
      tarotCardEl.classList.add("is-flipping");

      setTimeout(function () {
        tarotCardEl.innerHTML = renderCardFrameSVG(result.card, true);
        tarotCardEl.classList.toggle("is-reversed", result.isReversed);
      }, 300);

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

        if (i === slots.length - 1) {
          drawBtn.disabled = false;
          redrawBtn.disabled = false;
        }
      }, 620);
    });

    drawBtn.hidden = true;
    redrawBtn.hidden = false;
  }

  drawBtn.addEventListener("click", performDraw);
  redrawBtn.addEventListener("click", performDraw);
});
