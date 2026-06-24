function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function wrapCardName(name) {
  if (name.length <= 14) return [name];
  const words = name.split(" ");
  const targetLen = Math.ceil(name.length / 2);
  let line1 = "";
  let line2 = "";
  for (let i = 0; i < words.length; i++) {
    if (!line2 && (line1 + " " + words[i]).trim().length <= targetLen + 2) {
      line1 = (line1 + " " + words[i]).trim();
    } else {
      line2 = (line2 + " " + words[i]).trim();
    }
  }
  return line2 ? [line1, line2] : [line1];
}

function renderBackPatternSVG() {
  let dots = "";
  const rows = 6;
  const cols = 4;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = 24 + c * 30;
      const y = 28 + r * 31;
      dots += '<circle cx="' + x + '" cy="' + y + '" r="1.6" class="card-back-dot"></circle>';
    }
  }
  return (
    '<g class="card-back-pattern">' + dots + '</g>' +
    '<g class="card-back-emblem" transform="translate(70,110)">' +
      '<circle r="20" class="card-back-emblem-ring"></circle>' +
      '<path d="M 6 -16 C -6 -16 -6 16 6 16 C -2 10 -2 -10 6 -16 Z" class="card-back-emblem-moon"></path>' +
    '</g>'
  );
}

function renderCardFrameSVG(card, faceUp) {
  let innerContent;
  let ariaLabel;

  if (faceUp && card) {
    const nameLines = wrapCardName(card.nameVi);
    let nameMarkup = "";
    for (let i = 0; i < nameLines.length; i++) {
      const y = 188 + i * 15;
      nameMarkup += '<text x="70" y="' + y + '" text-anchor="middle" class="card-name-text">' + escapeXml(nameLines[i]) + '</text>';
    }

    const glyph = CARD_ICONS[card.icon] || "";
    innerContent =
      '<text x="70" y="34" text-anchor="middle" class="card-numeral-text">' + escapeXml(card.numeral) + '</text>' +
      '<g class="card-glyph" transform="translate(70,108)">' + glyph + '</g>' +
      nameMarkup;
    ariaLabel = card.nameVi;
  } else {
    innerContent = renderBackPatternSVG();
    ariaLabel = "Lá bài úp";
  }

  return (
    '<svg viewBox="0 0 140 220" xmlns="http://www.w3.org/2000/svg" class="card-frame-svg" role="img" aria-label="' + escapeXml(ariaLabel) + '">' +
      '<rect x="4" y="4" width="132" height="212" rx="10" class="card-outer-border"></rect>' +
      '<rect x="11" y="11" width="118" height="198" rx="5" class="card-inner-border"></rect>' +
      innerContent +
    '</svg>'
  );
}
