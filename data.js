const galleryProducts = [
    { "anh": "image/dacnhantam.webp", "tenSach": "Đắc nhân tâm", "moTa": "Giá rẻ", "giaGoc": 86000, "giamGia": 24, "giamGiaMa": 65000, "danhGia": 4, "danhMuc": "Sách tiểu thuyết" },
    { "anh": "image/duongtau.webp", "tenSach": "Lũ trẻ đường tàu", "moTa": "Giá rẻ", "giaGoc": 50000, "giamGia": 24, "giamGiaMa": 36000, "danhGia": 3, "danhMuc": "Sách tiểu thuyết" },
    { "anh": "image/khuccamattroi.webp", "tenSach": "Khúc ca mặt trời", "moTa": "Giá rẻ", "giaGoc": 60000, "giamGia": 24, "giamGiaMa": 45000, "danhGia": 5, "danhMuc": "Sách tiểu thuyết" },
    { "anh": "image/image_nhagiakim.webp", "tenSach": "Nhà giả kim", "moTa": "Giá rẻ", "giaGoc": 65000, "giamGia": 24, "giamGiaMa": 50000, "danhGia": 4, "danhMuc": "Sách tiểu thuyết" },
    { "anh": "image/lhmn_phienbanmoi_tap4.webp", "tenSach": "lớp học mật mã", "moTa": "Giá rẻ", "giaGoc": 46000, "giamGia": 24, "giamGiaMa": 35000, "danhGia": 4, "danhMuc": "Sách thiếu nhi" },
    { "anh": "image/bia-1_6_6.webp", "tenSach": "Hoàng tử bé", "moTa": "Giá rẻ", "giaGoc": 50000, "giamGia": 24, "giamGiaMa": 38000, "danhGia": 5, "danhMuc": "Sách thiếu nhi" },
    { "anh": "image/tuoithodudoi.webp", "tenSach": "Tuổi thơ dữ dội", "moTa": "Giá rẻ", "giaGoc": 36000, "giamGia": 24, "giamGiaMa": 27000, "danhGia": 5, "danhMuc": "Sách thiếu nhi" },
    { "anh": "image/ngoikhoctrencay.webp", "tenSach": "Ngồi khóc trên cây", "moTa": "Giá rẻ", "giaGoc": 109000, "giamGia": 24, "giamGiaMa": 83000, "danhGia": 2, "danhMuc": "Sách thiếu nhi" },
    { "anh": "image/kns.tdn.webp", "tenSach": "Tư duy ngược", "moTa": "Giá rẻ", "giaGoc": 86000, "giamGia": 24, "giamGiaMa": 65000, "danhGia": 4.5, "danhMuc": "Sách kỹ năng sống" },
    { "anh": "image/tdm.webp", "tenSach": "Tư duy mở", "moTa": "Giá rẻ", "giaGoc": 89000, "giamGia": 24, "giamGiaMa": 67000, "danhGia": 5, "danhMuc": "Sách kỹ năng sống" },
    { "anh": "image/image_dongchay.webp", "tenSach": "Dòng chảy", "moTa": "Giá rẻ", "giaGoc": 100000, "giamGia": 24, "giamGiaMa": 76000, "danhGia": 3, "danhMuc": "Sách kỹ năng sống" },
    { "anh": "image/lesong.webp", "tenSach": "Đi tìm lẽ sống", "moTa": "Giá rẻ", "giaGoc": 86000, "giamGia": 24, "giamGiaMa": 65000, "danhGia": 5, "danhMuc": "Sách kỹ năng sống" }
  ];
  
  const json = JSON.stringify(galleryProducts);
  localStorage.setItem('galleryProducts', json);