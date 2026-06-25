const SITE_HEADER_HTML =
  '<header class="site-header">' +
    '<div class="site-header-inner">' +
      '<a href="index.html" class="site-logo">&#10022; Tarot Huyền Bí</a>' +
      '<nav class="site-nav">' +
        '<a href="index.html">Trang chủ</a>' +
        '<a href="about.html">Giới thiệu</a>' +
        '<a href="#donate">Ủng hộ</a>' +
      '</nav>' +
    '</div>' +
  '</header>';

const DONATE_DETAILS_HTML =
  '<div class="donate-qr-wrapper">' +
    '<img src="assets/qr/donate-qr.png" alt="Mã QR chuyển khoản ủng hộ" class="donate-qr-image">' +
  '</div>' +
  '<div class="donate-bank-info">' +
    '<p><strong>Ngân hàng:</strong> <span class="placeholder">[Tên ngân hàng]</span></p>' +
    '<p><strong>Số tài khoản:</strong> <span class="placeholder">[Số tài khoản]</span></p>' +
    '<p><strong>Chủ tài khoản:</strong> <span class="placeholder">[Tên chủ tài khoản]</span></p>' +
  '</div>';

const DONATE_SECTION_HTML =
  '<section class="donate-section" id="donate">' +
    '<h3>Ủng hộ website</h3>' +
    '<p class="donate-message">Nếu bạn thấy trang web hữu ích, hãy ủng hộ để mình duy trì và phát triển thêm nhé. Cảm ơn bạn rất nhiều!</p>' +
    DONATE_DETAILS_HTML +
  '</section>';

const SITE_FOOTER_HTML =
  '<footer class="site-footer">' +
    DONATE_SECTION_HTML +
    '<p class="site-footer-note">&copy; 2026 Tarot Huyền Bí · Nội dung chỉ mang tính chất giải trí và chiêm nghiệm cá nhân.</p>' +
  '</footer>';
