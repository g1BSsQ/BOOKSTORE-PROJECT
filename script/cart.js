document.addEventListener('DOMContentLoaded', function() {
    hienThiGioHang();
});


function layDanhSachItemGioHang() {
    var layDanhSachItemGioHang = localStorage.getItem('gioHang');
    if (layDanhSachItemGioHang) {
        return JSON.parse(layDanhSachItemGioHang);
    } else {
        return [];
    }
}


function hienThiGioHang() {
    var html = '';
    var danhSachItemGioHang = layDanhSachItemGioHang();
    var tongTien = 0;
    var galleryProducts = JSON.parse(localStorage.getItem('galleryProducts')) || [];
    var sliderData = JSON.parse(localStorage.getItem('sliderData')) || [];
    var allProducts = galleryProducts.concat(sliderData);

    danhSachItemGioHang.forEach(item => {
        var sanPham = allProducts.find(sp => sp.id == item.id);
        var giaBan = sanPham.giaGoc - sanPham.giaGoc * sanPham.giamGia / 100;
        tongTien += giaBan * item.soLuong;
        if (sanPham) {
            html += `
                <div class="item-gio-hang">
                    <div class="hinh-anh-sp">
                        <img src="${sanPham.anh}" alt="${sanPham.tenSach}">
                    </div>
                    <p class="ten-sp">${sanPham.tenSach}</p>
                    <div class="gia">
                        <span class="gia-goc">${sanPham.giaGoc.toLocaleString('en-US')}đ</span>
                        <span class="gia-ban">${giaBan.toLocaleString('en-US')}đ</span>
                    </div>
                    <input type="number" class="so-luong" value="${item.soLuong}" onchange="capNhatSoLuong(${item.id}, this.value)">
                    <p class="tong-tien">${(giaBan * item.soLuong).toLocaleString('en-US')}đ</p>
                    <div class="hanh-dong">
                        <i class="fa-solid fa-trash" onclick="xoaKhoiGioHang(${item.id})"></i>
                    </div>
                </div>
            `;
        }
    });
    document.getElementById('hienthigiohang').innerHTML = html;

    document.querySelector('.thanh-tien .tien').innerText = tongTien.toLocaleString('en-US') + 'đ';
    document.querySelector('.tong-so-tien .tien').innerText = tongTien.toLocaleString('en-US') + 'đ';
}

function layDanhSachItemGioHang() {
    var layDanhSachItemGioHang = localStorage.getItem('gioHang');
    if (layDanhSachItemGioHang) {
        return JSON.parse(layDanhSachItemGioHang);
    } else {
        return [];
    }
}

function capNhatSoLuong(idSach, soLuong) {
    var danhSachItemGioHang = layDanhSachItemGioHang();
    var index = danhSachItemGioHang.findIndex(item => item.id == idSach);
    if (index >= 0) {
        if (soLuong == 0) {
            danhSachItemGioHang.splice(index, 1);
        } else {
            danhSachItemGioHang[index].soLuong = soLuong;
        }
        localStorage.setItem('gioHang', JSON.stringify(danhSachItemGioHang));
        hienThiGioHang();
    }
}

function xoaKhoiGioHang(idSach) {
    var danhSachItemGioHang = layDanhSachItemGioHang();
    var index = danhSachItemGioHang.findIndex(item => item.id == idSach);
    if (index >= 0) {
        danhSachItemGioHang.splice(index, 1);
        localStorage.setItem('gioHang', JSON.stringify(danhSachItemGioHang));
        hienThiGioHang();
    }
}


