const galleryProductsData = [
    { "id": 1, "anh": "../image/dacnhantam.webp", "tenSach": "Đắc nhân tâm", "moTa": "Giá rẻ", "giaGoc": 86000, "giamGia": 24, "giamGiaMa": 65000, "danhGia": 4, "danhMuc": "Sách tiểu thuyết" },
    { "id": 2, "anh": "../image/duongtau.webp", "tenSach": "Lũ trẻ đường tàu", "moTa": "Giá rẻ", "giaGoc": 50000, "giamGia": 24, "giamGiaMa": 36000, "danhGia": 3, "danhMuc": "Sách tiểu thuyết" },
    { "id": 3, "anh": "../image/khuccamattroi.webp", "tenSach": "Khúc ca mặt trời", "moTa": "Giá rẻ", "giaGoc": 60000, "giamGia": 24, "giamGiaMa": 45000, "danhGia": 5, "danhMuc": "Sách tiểu thuyết" },
    { "id": 4, "anh": "../image/image_nhagiakim.webp", "tenSach": "Nhà giả kim", "moTa": "Giá rẻ", "giaGoc": 65000, "giamGia": 24, "giamGiaMa": 50000, "danhGia": 4, "danhMuc": "Sách tiểu thuyết" },
    { "id": 5, "anh": "../image/lhmn_phienbanmoi_tap4.webp", "tenSach": "lớp học mật mã", "moTa": "Giá rẻ", "giaGoc": 46000, "giamGia": 24, "giamGiaMa": 35000, "danhGia": 4, "danhMuc": "Sách thiếu nhi" },
    { "id": 6, "anh": "../image/bia-1_6_6.webp", "tenSach": "Hoàng tử bé", "moTa": "Giá rẻ", "giaGoc": 50000, "giamGia": 24, "giamGiaMa": 38000, "danhGia": 5, "danhMuc": "Sách thiếu nhi" },
    { "id": 7, "anh": "../image/tuoithodudoi.webp", "tenSach": "Tuổi thơ dữ dội", "moTa": "Giá rẻ", "giaGoc": 36000, "giamGia": 24, "giamGiaMa": 27000, "danhGia": 5, "danhMuc": "Sách thiếu nhi" },
    { "id": 8, "anh": "../image/ngoikhoctrencay.webp", "tenSach": "Ngồi khóc trên cây", "moTa": "Giá rẻ", "giaGoc": 109000, "giamGia": 24, "giamGiaMa": 83000, "danhGia": 2, "danhMuc": "Sách thiếu nhi" },
    { "id": 9, "anh": "../image/kns.tdn.webp", "tenSach": "Tư duy ngược", "moTa": "Giá rẻ", "giaGoc": 86000, "giamGia": 24, "giamGiaMa": 65000, "danhGia": 4.5, "danhMuc": "Sách kỹ năng sống" },
    { "id": 10, "anh": "../image/tdm.webp", "tenSach": "Tư duy mở", "moTa": "Giá rẻ", "giaGoc": 89000, "giamGia": 24, "giamGiaMa": 67000, "danhGia": 5, "danhMuc": "Sách kỹ năng sống" },
    { "id": 11, "anh": "../image/image_dongchay.webp", "tenSach": "Dòng chảy", "moTa": "Giá rẻ", "giaGoc": 100000, "giamGia": 24, "giamGiaMa": 76000, "danhGia": 3.7, "danhMuc": "Sách kỹ năng sống" },
    { "id": 12, "anh": "../image/lesong.webp", "tenSach": "Đi tìm lẽ sống", "moTa": "Giá rẻ", "giaGoc": 86000, "giamGia": 24, "giamGiaMa": 65000, "danhGia": 5, "danhMuc": "Sách kỹ năng sống" },
];

  const json = JSON.stringify(galleryProductsData);
  localStorage.setItem('galleryProducts', json);

  const sliderData = [
    { "id": 13, "anh": "../image/dacnhantam.webp", "tenSach": "Đắc nhân tâm", "moTa": "Sale sốc", "giaGoc": 80000, "giamGia": 50, status: "Sắp hết hàng" },
    { "id": 14, "anh": "../image/38 Bức Thư Rockefeller Viết Cho Con Trai.webp", "tenSach": "38 Bức Thư...", "moTa": "Sale sốc", "giaGoc": 160000, "giamGia": 50, status: "Sắp hết hàng" },
    { "id": 15, "anh": "../image/sli.noidau.webp", "tenSach": "Chữa lành", "moTa": "Sale sốc", "giaGoc": 150000, "giamGia": 50, status: "đã bán : 5" },
    { "id": 16, "anh": "../image/sli.pph.webp", "tenSach": "Cách học", "moTa": "Sale sốc", "giaGoc": 200000, "giamGia": 50, status: "Sắp hết hàng" },
    { "id": 17, "anh": "../image/sli.timduong.webp", "tenSach": "Như kẻ tìm...", "moTa": "Sale sốc", "giaGoc": 86000, "giamGia": 50, status: "đã bán : 10" },
    { "id": 18, "anh": "../image/tdm.webp", "tenSach": "Tư duy mở", "moTa": "Sale sốc", "giaGoc": 86000, "giamGia": 50, status: "Sắp hết hàng" },
    { "id": 19, "anh": "../image/tuoithodudoi.webp", "tenSach": "Tuổi thơ", "moTa": "Sale sốc", "giaGoc": 80000, "giamGia": 50, status: "Sắp hết hàng" },
    { "id": 20, "anh": "../image/lesong.webp", "tenSach": "Đi tìm lẽ sống", "moTa": "Sale sốc", "giaGoc": 86000, "giamGia": 50, status: "Sắp hết hàng" },
    { "id": 21, "anh": "../image/duongtau.webp", "tenSach": "Đắc nhân tâm", "moTa": "Sale sốc", "giaGoc": 86000, "giamGia": 50, status: "Sắp hết hàng" },
    { "id": 22, "anh": "../image/dacnhantam.webp", "tenSach": "Đắc nhân tâm", "moTa": "Sale sốc", "giaGoc": 86000, "giamGia": 50, status: "Sắp hết hàng" },
    { "id": 23, "anh": "../image/dacnhantam.webp", "tenSach": "Đắc nhân tâm", "moTa": "Sale sốc", "giaGoc": 86000, "giamGia": 50, status: "Sắp hết hàng" },
    { "id": 24, "anh": "../image/38 Bức Thư Rockefeller Viết Cho Con Trai.webp", "tenSach": "38 Bức Thư...", "moTa": "Sale sốc", "giaGoc": 160000, "giamGia": 50, status: "Sắp hết hàng" },
    { "id": 25, "anh": "../image/sli.noidau.webp", "tenSach": "Chữa lành", "moTa": "Sale sốc", "giaGoc": 150000, "giamGia": 50, status: "đã bán : 5" },
    { "id": 26, "anh": "../image/sli.pph.webp", "tenSach": "Cách học", "moTa": "Sale sốc", "giaGoc": 200000, "giamGia": 50, status: "Sắp hết hàng" },
    { "id": 27, "anh": "../image/sli.timduong.webp", "tenSach": "Như kẻ tìm...", "moTa": "Sale sốc", "giaGoc": 86000, "giamGia": 50 , status: "Sắp hết hàng" },
    { "id": 28, "anh": "../image/tdm.webp", "tenSach": "Đắc nhân tâm", "moTa": "Sale sốc", "giaGoc": 86000, "giamGia": 50, status: "Sắp hết hàng" },
];

localStorage.setItem('sliderData', JSON.stringify(sliderData));

