// // calculate vh
// window.addEventListener('resize', () => {
//   document.querySelector(':root').style
//     .setProperty('--vh', window.innerHeight / 100 + 'px');
// });
// // end of calculate vh


function gotoMain() {
  document.getElementById('brand-description-container-1').scrollIntoView({
    behavior: 'smooth'
  });
};

function cancel() {
  document.getElementById("shopify-section-announcement-bar").style.display = "none";
};


$(document).ready(function() {

  function appHeight() {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    window.oldheight = window.innerHeight;
  }

  function checkHeight() {
    if (Math.abs(window.innerHeight - window.oldheight) > 200) {
      console.log(window.innerHeight - window.oldheight);
      appHeight();
    }
  }
  appHeight();
  window.addEventListener('resize', checkHeight)

  var rellax = new Rellax('.rellax');



  // $(window).scroll(function() {
  //   var scrolled = $(window).scrollTop()/1.3;
  //
  //   let root = document.documentElement;
  //   root.style.setProperty('--top-container-translate', scrolled + 'px');
  //   root.style.setProperty('--brand-description-container-translate', scrolled - window.oldheight + 'px');
  //
  // });


  // ANIMATIONS

  const branddescription = document.querySelector('.branddescription-animation-1');
  const branddescription2 = document.querySelector('.branddescription-animation-2');
  const branddescription3 = document.querySelector('.branddescription-animation-3');
  const branddescription4 = document.querySelector('.branddescription-animation-4');
  const branddescription5 = document.querySelector('.branddescription-animation-5');
  const branddescription6 = document.querySelector('.branddescription-animation-6');
  const branddescription7 = document.querySelector('.branddescription-animation-7');
  const branddescription8 = document.querySelector('.branddescription-animation-8');
  const branddescription9 = document.querySelector('.branddescription-animation-9');
  const branddescription10 = document.querySelector('.branddescription-animation-10');
  const branddescription11 = document.querySelector('.branddescription-animation-11');
  const branddescription12 = document.querySelector('.branddescription-animation-12');
  const branddescription13 = document.querySelector('.branddescription-animation-13');
  const branddescription14 = document.querySelector('.branddescription-animation-14');
  const branddescription15 = document.querySelector('.branddescription-animation-15');
  const branddescription16 = document.querySelector('.branddescription-animation-16');
  const branddescription17 = document.querySelector('.branddescription-animation-17');
  const branddescription18 = document.querySelector('.branddescription-animation-18');
  const branddescription19 = document.querySelector('.branddescription-animation-19');
  const branddescription20 = document.querySelector('.branddescription-animation-20');
  const branddescription21 = document.querySelector('.branddescription-animation-21');
  const branddescription22 = document.querySelector('.branddescription-animation-22');
  const branddescription23 = document.querySelector('.branddescription-animation-23');
  const branddescription24 = document.querySelector('.branddescription-animation-24');
  const branddescription25 = document.querySelector('.branddescription-animation-25');
  const branddescription26 = document.querySelector('.branddescription-animation-26');
  const branddescription27 = document.querySelector('.branddescription-animation-27');
  const branddescription28 = document.querySelector('.branddescription-animation-28');
  const branddescription29 = document.querySelector('.branddescription-animation-29');
  const branddescription30 = document.querySelector('.branddescription-animation-30');
  const branddescription31 = document.querySelector('.branddescription-animation-31');
  const branddescription32 = document.querySelector('.branddescription-animation-32');
  const branddescription33 = document.querySelector('.branddescription-animation-33');
  const subbranddescription = document.querySelector('.description-text2');
  const logo = document.querySelector('#init-sign');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        branddescription.classList.add('branddescription-transition-1');
        branddescription2.classList.add('branddescription-transition-2');
        branddescription3.classList.add('branddescription-transition-3');
        branddescription4.classList.add('branddescription-transition-1');
        branddescription5.classList.add('branddescription-transition-4');
        branddescription6.classList.add('branddescription-transition-4');
        branddescription7.classList.add('branddescription-transition-3');
        branddescription8.classList.add('branddescription-transition-4');
        branddescription9.classList.add('branddescription-transition-2');
        branddescription10.classList.add('branddescription-transition-2');
        branddescription11.classList.add('branddescription-transition-4');
        branddescription12.classList.add('branddescription-transition-4');
        branddescription13.classList.add('branddescription-transition-1');
        branddescription14.classList.add('branddescription-transition-4');
        branddescription15.classList.add('branddescription-transition-4');
        branddescription16.classList.add('branddescription-transition-2');
        branddescription17.classList.add('branddescription-transition-3');
        branddescription18.classList.add('branddescription-transition-4');
        branddescription19.classList.add('branddescription-transition-4');
        branddescription20.classList.add('branddescription-transition-2');
        branddescription21.classList.add('branddescription-transition-3');
        branddescription22.classList.add('branddescription-transition-4');
        branddescription23.classList.add('branddescription-transition-2');
        branddescription24.classList.add('branddescription-transition-4');
        branddescription25.classList.add('branddescription-transition-1');
        branddescription26.classList.add('branddescription-transition-4');
        branddescription27.classList.add('branddescription-transition-2');
        branddescription28.classList.add('branddescription-transition-1');
        branddescription29.classList.add('branddescription-transition-3');
        branddescription30.classList.add('branddescription-transition-1');
        branddescription31.classList.add('branddescription-transition-4');
        branddescription32.classList.add('branddescription-transition-2');
        branddescription33.classList.add('branddescription-transition-1');
        subbranddescription.classList.add('subbranddescription-transition');
        logo.classList.add('subbranddescription-transition');

        return;
      }

      branddescription.classList.remove('branddescription-transition-1');
      branddescription2.classList.remove('branddescription-transition-2');
      branddescription3.classList.remove('branddescription-transition-3');
      branddescription4.classList.remove('branddescription-transition-1');
      branddescription5.classList.remove('branddescription-transition-4');
      branddescription6.classList.remove('branddescription-transition-4');
      branddescription7.classList.remove('branddescription-transition-3');
      branddescription8.classList.remove('branddescription-transition-4');
      branddescription9.classList.remove('branddescription-transition-2');
      branddescription10.classList.remove('branddescription-transition-2');
      branddescription11.classList.remove('branddescription-transition-4');
      branddescription12.classList.remove('branddescription-transition-4');
      branddescription13.classList.remove('branddescription-transition-1');
      branddescription14.classList.remove('branddescription-transition-4');
      branddescription15.classList.remove('branddescription-transition-4');
      branddescription16.classList.remove('branddescription-transition-2');
      branddescription17.classList.remove('branddescription-transition-3');
      branddescription18.classList.remove('branddescription-transition-4');
      branddescription19.classList.remove('branddescription-transition-4');
      branddescription20.classList.remove('branddescription-transition-2');
      branddescription21.classList.remove('branddescription-transition-3');
      branddescription22.classList.remove('branddescription-transition-4');
      branddescription23.classList.remove('branddescription-transition-2');
      branddescription24.classList.remove('branddescription-transition-4');
      branddescription25.classList.remove('branddescription-transition-1');
      branddescription26.classList.remove('branddescription-transition-4');
      branddescription27.classList.remove('branddescription-transition-2');
      branddescription28.classList.remove('branddescription-transition-1');
      branddescription29.classList.remove('branddescription-transition-3');
      branddescription30.classList.remove('branddescription-transition-1');
      branddescription31.classList.remove('branddescription-transition-4');
      branddescription32.classList.remove('branddescription-transition-2');
      branddescription33.classList.remove('branddescription-transition-1');
      subbranddescription.classList.remove('subbranddescription-transition');
      logo.classList.remove('subbranddescription-transition');

    });
  });

  observer.observe(document.querySelector('.description-text'));

  // // Define canvas
  // var canvas = document.getElementById('carouselAboutUsPic');
  // var ctx = canvas.getContext('2d');
  // var img1 = document.getElementById("carouselAboutUsImg1");
  // var img2 = document.getElementById("carouselAboutUsImg2");
  // var img3 = document.getElementById("carouselAboutUsImg3");
  // // var img4 = document.getElementById("carouselAboutUsImg4");
  // // Aspect ratio to match canvas height 480
  //
  // var img1Width = img1.width / img1.height * 480;
  // var img2Width = img2.width / img2.height * 480;
  // var img3Width = img3.width / img3.height * 480
  // // var img4Width = img4.width / img4.height * 480
  //
  // var x_1 = 200;
  // var x_2 = x_1 + img1Width;
  // var x_3 = x_2 + img2Width;
  // // var x_4 = 2600;
  // var sx_1 = 0.2 * img1.width;
  // var sx_2 = 0.2 * img2.width;
  // var sx_3 = 0.2 * img3.width;
  // // var sx_4 = 0;
  // var dx = -0.5;
  // var dsx = -0.1;
  // var speed = 5;
  //
  //
  //
  // img1.onload = function() {
  //   return setInterval(draw, speed);
  // }
  //
  //
  // function draw() {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height)
  //   ctx.drawImage(img1, sx_1, img1.height * 0.1, img1.width * 0.8, img1.height * 0.8, x_1, 0, img1Width, 480);
  //   x_1 += dx;
  //   sx_1 += dsx;
  //   ctx.drawImage(img2, sx_2, img2.height * 0.1, img2.width * 0.8, img2.height * 0.8, x_2, 0, img2Width, 480);
  //   x_2 += dx;
  //   sx_2 += dsx;
  //   ctx.drawImage(img3, sx_3, img3.height * 0.1, img3.width * 0.8, img3.height * 0.8, x_3, 0, img3Width, 480);
  //   x_3 += dx;
  //   sx_3 += dsx;
  //   // ctx.drawImage(img4, sx_4, img4.height * 0.1, img4.width * 0.8, img4.height*0.8, x_4, 0, img4Width, 480);
  //   // x_4 += dx;
  //   // sx_4 += dsx;
  //
  //   // loop back
  //   if (x_1 < -img1.width) {
  //     x_1 = img2Width + img3Width;
  //     sx_1 = 0.3 * img1.width;
  //   };
  //   if (x_2 < -img2.width) {
  //     x_2 = img3Width + img1Width;
  //     sx_2 = 0.3 * img2.width;
  //   };
  //   if (x_3 < -img3.width) {
  //     x_3 = img1Width + img2Width;
  //     sx_3 = 0.3 * img3.width;
  //   };
  //   // if (x_4 < -img4.width) {
  //   //   x_4 = canvas.width;
  //   //   sx_4 = 0.4* img4.height;
  //   // };
  // }

  // ctx.drawImage(img3, 300, 0, img3Width, 480);
  // ctx.drawImage(img4, 600, 0, img4Width, 480);

});
