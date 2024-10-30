const galleryProducts = [
    {
        anh: "image/dacnhantam.webp",
        tenSach: "Đắc nhân tâm",
        moTa: "Giá rẻ",
        giaGoc: 86000,
        giamGia: 24,
        giaSauGiam: 65000,
        giamGiaMa: 15000,
        danhGia: 5 // Số sao (1-5)
    },
    // ... thêm các đối tượng sản phẩm khác tại đây
    {
        anh: "image/dsachkhac.webp",  // Ví dụ với các giá trị khác
        tenSach: "Sách khác",
        moTa: "Gia",
        giaGoc: 120000,
        giamGia: 10,
        giaSauGiam: 108000,
        giamGiaMa: 5000,
        danhGia: 3
    },
    {
        anh: "image/dacnhantam.webp",
        tenSach: "Đắc nhân tâm",
        moTa: "Giá rẻ",
        giaGoc: 86000,
        giamGia: 24,
        giaSauGiam: 65000,
        giamGiaMa: 15000,
        danhGia: 5 // Số sao (1-5)
    },
    {
        anh: "image/dacnhantam.webp",
        tenSach: "Đắc nhân tâm",
        moTa: "Giá rẻ",
        giaGoc: 86000,
        giamGia: 24,
        giaSauGiam: 65000,
        giamGiaMa: 15000,
        danhGia: 5 // Số sao (1-5)
    },
    {
        anh: "image/dacnhantam.webp",
        tenSach: "Đắc nhân tâm",
        moTa: "Giá rẻ",
        giaGoc: 86000,
        giamGia: 24,
        giaSauGiam: 65000,
        giamGiaMa: 15000,
        danhGia: 5 // Số sao (1-5)
    },

];

// Hàm hỗ trợ tạo HTML đánh giá sao (bạn có thể tùy chỉnh hàm này)
function taoSao(danhGia) {
    let htmlSao = '';
    for (let i = 0; i < danhGia; i++) {
        htmlSao += '<i class="fa-solid fa-star"></i>';
    }
    return htmlSao;
}
const khungSanPham = document.getElementById('khung-san-pham');

        galleryProducts.forEach(sanPham => {
            const htmlSanPham = `
                <div class="product-gallery-one-content-product-item">
                    <img src="${sanPham.anh}" alt="${sanPham.tenSach}">
                    <div class="product-gallery-one-content-product-item-text">
                        <li>${sanPham.tenSach}</li>
                        <li>${sanPham.moTa}</li>
                        <li><a href="">${sanPham.giaGoc}</a><sup>đ</sup><span>-${sanPham.giamGia}%</span></li>
                        <li>${sanPham.giaSauGiam} <sup>đ</sup></li>
                        <li>Tặng mã giảm ${sanPham.giamGiaMa} <sup>đ</sup></li>
                        <li>
                            ${taoSao(sanPham.danhGia)} 
                        </li>
                    </div>
                </div>
            `;
            khungSanPham.innerHTML += htmlSanPham;
        });