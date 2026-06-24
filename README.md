# Tarot Huyền Bí

Website bói bài Tarot online, tĩnh (HTML/CSS/JS thuần, không build step), 22 lá Major Arcana, 6 chủ đề, 2 kiểu trải bài.

## Mở trang để xem thử

Mở trực tiếp `index.html` bằng double-click, hoặc chạy một server tĩnh nhẹ (khuyến nghị để giống môi trường thật hơn):

```
npx serve .
```

rồi mở địa chỉ được in ra (thường là `http://localhost:3000`).

## Cập nhật QR donate (quan trọng)

Phần "Ủng hộ website" ở footer mọi trang dùng ảnh tại `assets/qr/donate-qr.png`. Đây hiện là **ảnh placeholder**.

Để thay bằng QR ngân hàng thật của bạn:

1. Xuất ảnh QR nhận chuyển khoản từ app ngân hàng (ảnh PNG/JPG).
2. Đổi tên file đó thành `donate-qr.png` và đè (overwrite) vào đúng vị trí `assets/qr/donate-qr.png`.
3. Không cần sửa code — ảnh sẽ tự hiện ra trên cả 3 trang.

Đồng thời mở `js/partials.js`, tìm phần `DONATE_SECTION_HTML` và điền thông tin thật vào 3 dòng đang để placeholder:
- `[Tên ngân hàng]`
- `[Số tài khoản]`
- `[Tên chủ tài khoản]`

## Cấu trúc project

```
index.html, reading.html, about.html   3 trang chính
css/                                     theme (variables, base, layout, components, animations)
js/data/                                 dữ liệu 22 lá bài, 6 chủ đề + 2 spread, glyph SVG từng lá
js/                                       logic render SVG, rút bài, từng trang, header/footer chung
assets/qr/donate-qr.png                  ảnh QR donate (xem hướng dẫn thay ở trên)
```

## Deploy

Vì là HTML/CSS/JS thuần, có thể deploy lên bất kỳ static host miễn phí (GitHub Pages, Cloudflare Pages, Netlify...) bằng cách upload trực tiếp cả thư mục — không cần bước build nào.
