document.addEventListener("DOMContentLoaded", function () {
  const headerEl = document.getElementById("site-header");
  if (headerEl) headerEl.innerHTML = SITE_HEADER_HTML;

  const footerEl = document.getElementById("site-footer-donate");
  if (footerEl) footerEl.innerHTML = SITE_FOOTER_HTML;
});
