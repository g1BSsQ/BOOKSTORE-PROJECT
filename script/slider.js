function loadSliderProducts() {
    const sliderData = localStorage.getItem('sliderData');
    let sliderProducts;
  
    if (sliderData) {
      try {
        sliderProducts = JSON.parse(sliderData);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        sliderProducts = []; // Default to an empty array if JSON is invalid
      }
    } else {
      sliderProducts = [];
    }
  
    return sliderProducts;
  }
  
function generateSliderHTML(sliderData) {
    const sliderContainer = document.getElementById('hienthislider');

    for (let i = 0; i < sliderData.length; i += 5) {
        const itemsDiv = document.createElement('div');
        itemsDiv.classList.add('slider-product-one-content-items');
        itemsDiv.style.transform = `translateX(${(i / 5) * 100}%)`;
        sliderData.slice(i, i + 5).forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('slider-product-one-content-item');
            itemDiv.setAttribute('onclick', `duaVaoGioHang(${item.id})`);
            var giaBan = item.giaGoc - item.giaGoc * item.giamGia / 100;
            itemDiv.innerHTML = `
                <img src="${item.anh}" alt="${item.tenSach}">
                <div class="slider-product-one-content-item-text">
                    <li>${item.tenSach}</li>
                    <li><i class="fa-solid fa-bolt"></i>${item.moTa}</li>
                    <li><a href="#">${item.giaGoc.toLocaleString('en-US')}</a><sup>đ</sup><span>-${item.giamGia}%</span></li>
                    <li>Còn : ${giaBan.toLocaleString('en-US')} <sup>đ</sup></li>
                    <li><span>${item.status}</span></li>
                </div>
            `;

            itemsDiv.appendChild(itemDiv);
        });

        sliderContainer.appendChild(itemsDiv);
    }

    const btnDiv = document.createElement('div');
    btnDiv.classList.add('slider-product-one-content-btn');
    btnDiv.innerHTML = `
        <i class="fas fa-arrow-left fa-chevron-right-one"></i>
        <i class="fas fa-arrow-right fa-chevron-left-one"></i>
    `;
    sliderContainer.parentElement.appendChild(btnDiv);

    document.addEventListener('DOMContentLoaded', function() {
        const adressbtn = document.querySelector('#adress-form');
        if (adressbtn) {
            adressbtn.addEventListener("click", function() {
                const modal = document.querySelector('.modal');
                if (modal) {
                    modal.style.display = "flex";
                }
            });
        }
    
        const adresscloss = document.querySelector('#adress-back');
        if (adresscloss) {
            adresscloss.addEventListener("click", function() {
                const modal = document.querySelector('.modal');
                if (modal) {
                    modal.style.display = "none";
                }
            });
        }
    });

    let index = 0;
    const rightbtnone = document.querySelector('.fa-chevron-right-one');
    const leftbtnone = document.querySelector('.fa-chevron-left-one');
    const slideNumber = document.querySelectorAll('.slider-product-one-content-items');
    rightbtnone.addEventListener("click", function() {
        if (index === 0) {
            index = slideNumber.length - 1;
        }
        else
        index --;
        document.querySelector(".slider-product-one-content-items-content").style.transform = `translateX(-${index * 100}%)`;
    });

    leftbtnone.addEventListener("click", function() {
        if (index === slideNumber.length-1) {
            index = 0;
        }
        else
        index++;

        document.querySelector(".slider-product-one-content-items-content").style.transform = `translateX(-${index * 100}%)`;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const sliderData = loadSliderProducts();
    if (sliderData.length > 0) {
        generateSliderHTML(sliderData);
      } else {
        console.log("No products to display");
      }
});



    

