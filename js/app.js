
const navbarList = document.querySelector('.navbar-list');
const burgerMenu = document.querySelector('.menu-burger');

burgerMenu.addEventListener('click', () => {
   navbarList.classList.toggle('navbar-list__active');
   burgerMenu.classList.toggle('active')
});

// paralax

const whoImages = document.querySelector('.who-images__block');
window.onload = function() {
   if(whoImages) {
      const scania = document.querySelector('.scania')
      const volvo = document.querySelector('.volvo')
      const man = document.querySelector('.man')
      const daf = document.querySelector('.daf')
      const renault = document.querySelector('.renault')
      

      // Коэфиценты
      const pixelsValueFirstPage = 20;
      const pixelsValueMan = 15;
      const pixelsValueSecondPage = 20;

      // Скорость

      const speed = 0.5;
      let positionX = 0; 
      let positionY = 0;
      let coordXprocent = 0; 
      let coordYprocent = 0;

      function setMouseParalaxxStyle() {
         const distX = coordXprocent - positionX;
         const distY = coordYprocent - positionY;

         positionX = positionX + (distX * speed);
         positionY = positionY + (distY * speed);

         scania.style.cssText = `transform: translate(${positionX / pixelsValueFirstPage}%,${positionY / pixelsValueFirstPage}%);`;
         volvo.style.cssText = `transform: translate(${positionX / pixelsValueFirstPage}%,${positionY / pixelsValueFirstPage}%);`;
         man.style.cssText = `transform: translate(${positionX / pixelsValueMan}%,${positionY / pixelsValueMan}%);`;
         daf.style.cssText = `transform: translate(${positionX / pixelsValueSecondPage}%,${positionY / pixelsValueSecondPage}%);`;
         renault.style.cssText = `transform: translate(${positionX / pixelsValueSecondPage}%,${positionY / pixelsValueSecondPage}%);`;

         requestAnimationFrame(setMouseParalaxxStyle)
      }
      setMouseParalaxxStyle();
      whoImages.addEventListener('mousemove', function(e) {
         const whoImagesWidth = whoImages.offsetWidth;
         const whoImagesHeight = whoImages.offsetHeight;

         const coordX = e.pageX - whoImagesWidth / 2;
         const coordY = e.pageY = whoImagesHeight / 2;

         coordXprocent = coordX / whoImagesWidth * 100;
         coordYprocent = coordY / whoImagesHeight * 100;

      });
   }
}

// slider

new Swiper('.image-slider', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
   },
   autoplay: {
      delay: 3000,
    },
   loop: true,
   speed: 500,
});


// navbar

// links header
const navMain = document.querySelector('.nav_main');
const navServices = document.querySelector('.nav_services');
const navWho = document.querySelector('.nav_who');
const navWhere = document.querySelector('.nav_where');
const navPhoto = document.querySelector('.nav_photo');
const navFaq = document.querySelector('.nav_faq');

// sections
const main = document.querySelector('.hero');
const services = document.querySelector('.services');
const who = document.querySelector('.who');
const where = document.querySelector('.where');
const photo = document.querySelector('.photo');
const faq = document.querySelector('.questions');


function scrollTo(element) {
   window.scroll({
       left: 0,
       top: element.offsetTop,
       behavior: "smooth"
   });
};


navMain.addEventListener('click', () => {
   scrollTo(main)
});
navServices.addEventListener('click', () => {
   scrollTo(services);
});
navWho.addEventListener('click', () => {
   scrollTo(who)
});
navWhere.addEventListener('click', () => {
   scrollTo(where)
});
navPhoto.addEventListener('click', () => {
   scrollTo(photo)
});
navFaq.addEventListener('click', () => {
   scrollTo(faq)
});


