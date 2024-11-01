function generateFooter() {
    const footerHTML = `
        <footer class="footer">
            <div class="gird">
                <div class="gird__row">
                    <div class="gird__colum-2-4">
                        <h3 class="foorter__heading">Chăm sóc khách hàng</h3>
                        <ul class="footer-list">
                            <li class="footer-item">
                                <a href="" class="footer-item-link">Trung tâm trợ giúp</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item-link">Hướng dẫn mua hàng</a>
                            </li>
                        </ul>
                    </div>
                    <div class="gird__colum-2-4">
                        <h3 class="foorter__heading">Liên hệ, Theo dõi</h3>
                        <ul class="footer-list">
                            <li class="footer-item">
                                <a href="" class="footer-item-link">
                                    <i class="fa-brands fa-facebook"></i>
                                    Facebook
                                </a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item-link">
                                    <i class="fa-brands fa-instagram"></i>
                                    Instagram
                                </a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item-link">
                                    <i class="fa-brands fa-tiktok"></i>
                                    Tiktok
                                </a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item-link">
                                    <i class="fa-solid fa-phone"></i>
                                    +123456345
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="gird__colum-2-4">
                        <h3 class="foorter__heading"></h3>
                    </div>
                    <div class="gird__colum-2-4">
                        <h3 class="foorter__heading">Danh mục sách</h3>
                        <li class="footer-item">
                            <a href="" class="footer-item-link">
                                Sách giáo khoa - tham khảo
                            </a>
                        </li>
                        <li class="footer-item">
                            <a href="" class="footer-item-link">
                                Sách văn học
                            </a>
                        </li>
                        <li class="footer-item">
                            <a href="" class="footer-item-link">
                                Sách thiếu nhi
                            </a>
                        </li>
                        <li class="footer-item">
                            <a href="" class="footer-item-link">
                                Tiểu thuyết
                            </a>
                        </li>
                    </div>
                    <div class="gird__colum-2-4">
                        <h3 class="foorter__heading">Vào cửa hàng</h3>
                        <li class="footer-item">
                            <a href="" class="footer-item-link">
                                <img class="footer-img" src="../image/qr.jpg" alt="Truy cập">
                            </a>
                            <a href="" class="footer-item-link">
                                <img class="footer-img" src="../image/gg.png" alt=" Google">
                            </a>
                        </li>
                    </div>
                </div>
                <div class="gird__row2">
                    <p>&copy Anh HƯNG CAI DÙ</p>
                </div>
            </div>
        </footer>
    `;

    const container = document.getElementById('footer');
    if (container) {
        container.innerHTML = footerHTML;
    } else {
        console.error('Container with id "footerContainer" not found.');
    }
}

// Call the function to generate the footer
generateFooter();