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
  let rays = "";
  const rayCount = 12;
  for (let i = 0; i < rayCount; i++) {
    const angle = i * (360 / rayCount);
    rays += '<line x1="0" y1="-31" x2="0" y2="-25" transform="rotate(' + angle + ')" class="card-back-ray"/>';
  }

  const cornerStar = 'M 0 -4.5 Q 1 -1 4.5 0 Q 1 1 0 4.5 Q -1 1 -4.5 0 Q -1 -1 0 -4.5 Z';
  const corners =
    '<path d="' + cornerStar + '" transform="translate(26,30)"/>' +
    '<path d="' + cornerStar + '" transform="translate(114,30)"/>' +
    '<path d="' + cornerStar + '" transform="translate(26,190)"/>' +
    '<path d="' + cornerStar + '" transform="translate(114,190)"/>';

  return (
    '<rect x="11" y="11" width="118" height="198" rx="5" class="card-back-wash"/>' +
    '<g class="card-back-corners">' + corners + '</g>' +
    '<g class="card-back-emblem" transform="translate(70,110)">' +
      '<circle r="34" class="card-back-ring-outer"/>' +
      '<g class="card-back-rays">' + rays + '</g>' +
      '<circle r="23" class="card-back-ring-middle"/>' +
      '<circle r="17" class="card-back-ring-inner"/>' +
      '<path d="M 0 -14 Q 4 -4 14 0 Q 4 4 0 14 Q -4 4 -14 0 Q -4 -4 0 -14 Z" class="card-back-star"/>' +
      '<circle r="2.6" class="card-back-jewel"/>' +
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
