/* Mỗi glyph là vài primitive SVG đơn giản (circle/line/rect/path/ellipse),
   vẽ trong hệ tọa độ cục bộ tâm (0,0), trải khoảng -24..24.
   svg-render.js sẽ đặt nhóm này vào giữa khung lá bài qua transform="translate(...)" . */
const CARD_ICONS = {
  fool: `<circle cx="0" cy="-16" r="6" class="glyph-fill"/><path d="M -14 18 L 14 -6" class="glyph-stroke"/>`,

  magician: `<circle cx="-7" cy="-14" r="6" class="glyph-stroke"/><circle cx="7" cy="-14" r="6" class="glyph-stroke"/><line x1="0" y1="-4" x2="0" y2="18" class="glyph-stroke"/>`,

  priestess: `<path d="M 2 -18 C -8 -18 -8 18 2 18 C -4 12 -4 -12 2 -18 Z" class="glyph-fill"/><line x1="-16" y1="-6" x2="-16" y2="18" class="glyph-stroke"/><line x1="16" y1="-6" x2="16" y2="18" class="glyph-stroke"/>`,

  empress: `<circle cx="0" cy="-10" r="9" class="glyph-stroke"/><line x1="0" y1="-1" x2="0" y2="18" class="glyph-stroke"/><line x1="-8" y1="10" x2="8" y2="10" class="glyph-stroke"/>`,

  emperor: `<circle cx="-4" cy="6" r="9" class="glyph-stroke"/><line x1="2" y1="0" x2="16" y2="-14" class="glyph-stroke"/><line x1="8" y1="-14" x2="16" y2="-14" class="glyph-stroke"/><line x1="16" y1="-14" x2="16" y2="-6" class="glyph-stroke"/>`,

  hierophant: `<line x1="-14" y1="-2" x2="-14" y2="18" class="glyph-stroke"/><line x1="14" y1="-2" x2="14" y2="18" class="glyph-stroke"/><line x1="0" y1="-18" x2="0" y2="6" class="glyph-stroke"/><line x1="-7" y1="-12" x2="7" y2="-12" class="glyph-stroke"/><line x1="-5" y1="-4" x2="5" y2="-4" class="glyph-stroke"/>`,

  lovers: `<circle cx="-7" cy="4" r="11" class="glyph-stroke"/><circle cx="7" cy="4" r="11" class="glyph-stroke"/><circle cx="0" cy="-18" r="4" class="glyph-fill"/>`,

  chariot: `<rect x="-12" y="-10" width="24" height="14" rx="2" class="glyph-stroke"/><circle cx="-8" cy="14" r="5" class="glyph-stroke"/><circle cx="8" cy="14" r="5" class="glyph-stroke"/>`,

  strength: `<circle cx="-6" cy="-16" r="5" class="glyph-stroke"/><circle cx="6" cy="-16" r="5" class="glyph-stroke"/><path d="M -14 12 Q 0 26 14 12" class="glyph-stroke"/>`,

  hermit: `<circle cx="0" cy="-10" r="8" class="glyph-stroke"/><path d="M 0 -14 L 0 -6 M -4 -10 L 4 -10" class="glyph-stroke"/><line x1="0" y1="-2" x2="0" y2="18" class="glyph-stroke"/>`,

  wheel: `<circle cx="0" cy="2" r="16" class="glyph-stroke"/><line x1="0" y1="-14" x2="0" y2="18" class="glyph-stroke"/><line x1="-16" y1="2" x2="16" y2="2" class="glyph-stroke"/><line x1="-11" y1="-9" x2="11" y2="13" class="glyph-stroke"/><line x1="-11" y1="13" x2="11" y2="-9" class="glyph-stroke"/>`,

  justice: `<line x1="-16" y1="-8" x2="16" y2="-8" class="glyph-stroke"/><path d="M -16 -8 L -22 4 L -10 4 Z" class="glyph-stroke"/><path d="M 16 -8 L 10 4 L 22 4 Z" class="glyph-stroke"/><line x1="0" y1="-16" x2="0" y2="18" class="glyph-stroke"/>`,

  hanged: `<line x1="-16" y1="-16" x2="16" y2="-16" class="glyph-stroke"/><line x1="0" y1="-16" x2="0" y2="-4" class="glyph-stroke"/><path d="M -10 -4 L 10 -4 L 0 16 Z" class="glyph-stroke"/>`,

  death: `<line x1="-18" y1="8" x2="18" y2="8" class="glyph-stroke"/><path d="M -10 8 A 10 10 0 0 1 10 8 Z" class="glyph-fill"/>`,

  temperance: `<circle cx="-12" cy="10" r="7" class="glyph-stroke"/><circle cx="12" cy="-10" r="7" class="glyph-stroke"/><path d="M -8 4 Q 0 -10 8 -4" class="glyph-stroke"/>`,

  devil: `<path d="M 0 16 L 4 4 L 16 4 L 6 -3 L 10 -15 L 0 -7 L -10 -15 L -6 -3 L -16 4 L -4 4 Z" class="glyph-stroke"/>`,

  tower: `<rect x="-9" y="-2" width="18" height="20" class="glyph-stroke"/><path d="M -9 -2 L 0 -16 L 9 -2 Z" class="glyph-stroke"/><path d="M 2 -14 L -4 0 L 3 0 L -3 16" class="glyph-stroke"/>`,

  star: `<path d="M 0 -16 L 4 -4 L 16 -4 L 6 3 L 10 15 L 0 7 L -10 15 L -6 3 L -16 -4 L -4 -4 Z" class="glyph-stroke"/>`,

  moon: `<path d="M 4 -18 C -8 -18 -8 18 4 18 C -4 12 -4 -12 4 -18 Z" class="glyph-fill"/><circle cx="-10" cy="16" r="1.6" class="glyph-fill"/><circle cx="0" cy="19" r="1.6" class="glyph-fill"/><circle cx="10" cy="16" r="1.6" class="glyph-fill"/>`,

  sun: `<circle cx="0" cy="0" r="10" class="glyph-fill"/><line x1="0" y1="-20" x2="0" y2="-14" class="glyph-stroke"/><line x1="0" y1="14" x2="0" y2="20" class="glyph-stroke"/><line x1="-20" y1="0" x2="-14" y2="0" class="glyph-stroke"/><line x1="14" y1="0" x2="20" y2="0" class="glyph-stroke"/><line x1="-14" y1="-14" x2="-10" y2="-10" class="glyph-stroke"/><line x1="10" y1="10" x2="14" y2="14" class="glyph-stroke"/><line x1="14" y1="-14" x2="10" y2="-10" class="glyph-stroke"/><line x1="-10" y1="10" x2="-14" y2="14" class="glyph-stroke"/>`,

  judgement: `<path d="M -2 16 L -2 -4 L 14 -12 L 14 8 Z" class="glyph-stroke"/><line x1="-2" y1="6" x2="-14" y2="6" class="glyph-stroke"/><line x1="16" y1="-14" x2="20" y2="-18" class="glyph-stroke"/><line x1="18" y1="-2" x2="22" y2="-2" class="glyph-stroke"/>`,

  world: `<ellipse cx="0" cy="0" rx="16" ry="20" class="glyph-stroke"/><ellipse cx="0" cy="0" rx="9" ry="12" class="glyph-stroke"/>`
};
