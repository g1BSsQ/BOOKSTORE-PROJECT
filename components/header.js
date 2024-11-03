function generateHeader() {
    const contentHTML = `
        <div class="modal" id="loginModal">
            <div class="modal_overlay"></div>
            <div class="modal_body">
                <!-- ......đăng nhập..... -->
                <div class="auth-form">
                    <div class="auth-form_container">
                        <div class="auth-form_header">
                            <h3 class="auth-form_heading">Đăng nhập</h3>
                        </div>
                        <div class="auth-form_form">
                            <p>Số điện thoại :</p>
                            <div class="auth-form_group">
                                <input placeholder="Số điện thoại" type="text" class="auth-form_input">
                            </div>
                            <p>Nhập mật khẩu :</p>
                            <div class="auth-form_group">
                                <input placeholder="Mật khẩu" type="password" class="auth-form_input">
                            </div>
                        </div>
                        <div class="auth-form_controls">
                            <button class="btn auth-form_controls_back" onclick="closeModal('loginModal')">Thoát</button>
                            <button class="btn btn--primary">Đăng nhập</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="registerModal">
            <div class="modal_overlay"></div>
            <div class="modal_body">
                <!-- ......đăng ký.....  -->
                <div class="auth-form">
                    <div class="auth-form_container">
                        <div class="auth-form_header">
                            <h3 class="auth-form_heading">Đăng Ký</h3>
                        </div>
                        <div class="auth-form_form">
                            <p>Họ và tên :</p>
                            <div class="auth-form_group">
                                <input placeholder="Họ và tên" type="text" class="auth-form_input">
                            </div>
                            <p>Số điện thoại :</p>
                            <div class="auth-form_group">
                                <input placeholder="Số điện thoại" type="text" class="auth-form_input">
                            </div>
                            <p>Email :</p>
                            <div class="auth-form_group">
                                <input placeholder="Email" type="email" class="auth-form_input">
                            </div>
                            <p>Mật khẩu :</p>
                            <div class="auth-form_group">
                                <input placeholder="Mật khẩu" type="password" class="auth-form_input">
                            </div>
                            <p>Xác nhận mật khẩu :</p>
                            <div class="auth-form_group">
                                <input placeholder="Xác nhận mật khẩu" type="password" class="auth-form_input">
                            </div>
                        </div>
                        <div class="auth-form_controls">
                            <button class="btn auth-form_controls_back" onclick="closeModal('registerModal')">Thoát</button>
                            <button class="btn btn--primary">Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <header>
            <img src="../image/hder.webp" alt="">
        </header>
        <nav id="nav-bar">
            <ul class="menu-level-1">
                <li class="item-lv1">
                    <a href="./index.html"><img src="../image/logo.png" alt=""></a>
                </li>
                <li class="item-lv1">
                    <input type="text" name="" id="" placeholder="Tìm kiếm...">
                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                </li>
                <li class="item-lv1">
                    <a href="" class="item-lv1-title">Danh mục</a>
                    <i class="fas fa-chevron-down"></i>
                    <ul class="menu-level-2">
                        <li class="item-lv2">
                            <a href="#" class="item-lv2-title">Sách tiểu thuyết</a>
                        </li>
                        <li class="item-lv2">
                            <a href="#" class="item-lv2-title">Sách thiếu nhi</a>
                        </li>
                        <li class="item-lv2">
                            <a href="#" class="item-lv2-title">Sách kỹ năng sống</a>
                        </li>
                    </ul>
                </li>
                <li class="item-lv1">
                    <i class="fa-solid fa-bell"></i>
                    <a href="#" class="item-lv1-title">Thông báo</a>
                </li>
                <li class="item-lv1">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <a href="giohang.html" class="item-lv1-title">Giỏ hàng</a>
                </li>
                <li class="item-lv1">
                    <i class="fa-solid fa-user"></i>
                    <a href="" class="item-lv1-title">Tài khoản</a>
                    <ul class="menu-level-2">
                        <li class="item-lv2" id="adress-form">
                            <a href="#" class="item-lv2-title" onclick="openModal('loginModal')">Đăng nhập</a>
                        </li>
                        <li class="item-lv2" id="adress-form">
                            <a href="#" class="item-lv2-title" onclick="openModal('registerModal')">Đăng ký</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    `;

    const container = document.getElementById('header');
    if (container) {
        container.innerHTML = contentHTML;
    } else {
        console.error('Container with id "contentContainer" not found.');
    }
}

generateHeader();
function validateLoginForm() {
    const phone = document.querySelector('#loginModal input[type="text"]').value;
    const password = document.querySelector('#loginModal input[type="password"]').value;

    if (!phone || !password) {
        alert("All fields must be filled out");
        return false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone number must be 10 digits and only contain numbers");
        return false;
    }

    return true;
}

function validateRegisterForm() {
    const name = document.querySelector('#registerModal input[placeholder="Họ và tên"]').value;
    const phone = document.querySelector('#registerModal input[placeholder="Số điện thoại"]').value;
    const email = document.querySelector('#registerModal input[placeholder="Email"]').value;
    const password = document.querySelector('#registerModal input[placeholder="Mật khẩu"]').value;
    const confirmPassword = document.querySelector('#registerModal input[placeholder="Xác nhận mật khẩu"]').value;

    if (!name || !phone || !email || !password || !confirmPassword) {
        alert("All fields must be filled out");
        return false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone number must be 10 digits and only contain numbers");
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Email must contain @");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}

document.querySelector('#loginModal .btn--primary').addEventListener('click', function(event) {
    if (!validateLoginForm()) {
        event.preventDefault();
    }
});

document.querySelector('#registerModal .btn--primary').addEventListener('click', function(event) {
    if (!validateRegisterForm()) {
        event.preventDefault();
    }
});