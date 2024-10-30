
const adressbtn = document.querySelector('#adress-form')
adressbtn.addEventListener("click", function(){
    document.querySelector('.modal').style.display = "flex"
})
const adresscloss = document.querySelector('#adress-back')
adresscloss.addEventListener("click", function(){
    document.querySelector('.modal').style.display = "none"
})

// ...slider product...
let index = 0
const rightbtnone = document.querySelector('.fa-chevron-right-one')
const leftbtnone = document.querySelector('.fa-chevron-left-one')
const imgNumberone = document.querySelectorAll('.slider-product-one-content-items')

// console.log(rightbtnone)
// console.log(leftbtnone)

rightbtnone.addEventListener("click", function(){
    index = index + 1;
    if(index > imgNumberone.length - 1 ){
        index = 0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
})
leftbtnone.addEventListener("click" , function(){
    index = index - 1;
    if(index<=0){
        index = imgNumberone.length - 1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
})

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector('.auth-form.login');
    const registerForm = document.querySelector('.auth-form.register');
    const switchToLoginBtn = document.querySelector('.auth-form_swich-btn.login');
    const switchToRegisterBtn = document.querySelector('.auth-form_swich-btn.register');

    // Hiển thị form đăng nhập ban đầu
    loginForm.style.display = "block";
    registerForm.style.display = "none";

    // Chuyển đổi sang form đăng nhập
    switchToLoginBtn.addEventListener("click", function() {
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    });

    // Chuyển đổi sang form đăng ký
    switchToRegisterBtn.addEventListener("click", function() {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });
});