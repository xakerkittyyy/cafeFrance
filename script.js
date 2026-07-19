emailjs.init("KXiBc6vrqHRFC-uFE");

const swiper = new Swiper('.swiper',{
   spaceBetween: 24,

    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    loop : true , autoplay : { delay : 1500 , 
        disableOnInteraction : false , }, 
   
    breakpoints: {
        1024: {
            slidesPerView: 3
            
        },
        767: {
            slidesPerView: 2
            
        }
        },

    grid: {
        rows: 2, // Количество рядов
        fill: 'row', // Как заполнять ряды (по строкам)
    },
})

function send(event){
    event.preventDefault();

    let user_email = document.getElementById("user_email").value;
    let form_user = document.getElementById("form");
    if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user_email)){
        emailjs.sendForm("service_3ih1ddl", "template_6plus3i", form_user);

        Swal.fire({
            icon: 'success',
            title: 'Вашу пошту надіслано',
            showConfirmButton: false
        });
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Вашу пошту надіслано',
            showConfirmButton: false
        });
    }
}