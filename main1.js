

$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay: true,
  margin:5,
  nav: false,
  dots:false,
  autoplayTimeout: 2000,
  items:5,

  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
});
