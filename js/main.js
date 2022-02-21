
$('.owl-carousel').owlCarousel({
    loop:true, //vòng lặp
    margin:0, //khoảng cách giữa các slide nếu lặp
    nav:false, //Hai dấu mũi tên
    dots:false, // những dấu chấm
    autoplay: true, //tự động chạy
    autoplaySpeed:2000, //thời gian chạy từ slide này sang slide tiếp
    autoplayTimeout:5000, //Sau 5s chuyển cảnh 1 lần
    dotsSpeed: 2000, //khi ấn vào dấu chấm chuyển slide chạy 10s
    autoLayHoverPause:true, //khi di chuật vào slide sẽ không tự động chạy
    navText: ['dd','cc'], //Dùng để thay đổi 2 mũi tên thành cái mình thích
    navSpeed:2000, //bấ vào mũi tên chuyển slide 2s
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
