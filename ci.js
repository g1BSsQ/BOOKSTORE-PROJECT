
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
