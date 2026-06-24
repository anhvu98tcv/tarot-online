document.addEventListener("DOMContentLoaded", function () {
  const topicGrid = document.getElementById("topic-grid");
  const spreadGrid = document.getElementById("spread-grid");
  const startBtn = document.getElementById("start-reading-btn");
  const startHint = document.getElementById("start-hint");

  let selectedTopicId = null;
  let selectedSpreadId = null;

  TOPICS.forEach(function (topic) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "topic-card";
    card.dataset.topicId = topic.id;
    card.innerHTML =
      '<span class="topic-card-icon">' + topic.icon + '</span>' +
      '<span class="topic-card-label">' + topic.label + '</span>';
    card.addEventListener("click", function () {
      selectedTopicId = topic.id;
      Array.prototype.forEach.call(topicGrid.children, function (el) {
        el.classList.toggle("is-selected", el === card);
      });
      updateStartState();
    });
    topicGrid.appendChild(card);
  });

  SPREADS.forEach(function (spread) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "spread-card";
    card.dataset.spreadId = spread.id;
    card.innerHTML =
      '<p class="spread-card-label">' + spread.label + '</p>' +
      '<p class="spread-card-desc">' + spread.description + '</p>';
    card.addEventListener("click", function () {
      selectedSpreadId = spread.id;
      Array.prototype.forEach.call(spreadGrid.children, function (el) {
        el.classList.toggle("is-selected", el === card);
      });
      updateStartState();
    });
    spreadGrid.appendChild(card);
  });

  function updateStartState() {
    const ready = Boolean(selectedTopicId) && Boolean(selectedSpreadId);
    startBtn.disabled = !ready;
    startHint.style.visibility = ready ? "hidden" : "visible";
  }

  startBtn.addEventListener("click", function () {
    if (!selectedTopicId || !selectedSpreadId) return;
    window.location.href = "reading.html?topic=" + encodeURIComponent(selectedTopicId) + "&spread=" + encodeURIComponent(selectedSpreadId);
  });

  updateStartState();
});
