function gotoMain() {
  // document.getElementById('section2').scrollIntoView({
  //   behavior: 'smooth'
  // });
  fullpage_api.moveTo(2);
};

function cancel() {
  document.getElementById("shopify-section-announcement-bar").style.display = "none";
};




$(document).ready(function() {
  // Set body bg to black after 5 secs delay
  // setTimeout(() => $("body").css("background-color", "black"), 7000) // in milli seconds



  $('#fullpage').fullpage({
    //options here
    licenseKey: "A5C73EA9-E877473E-86CBE264-B639EBF0",
    anchors: ['firstPage', 'secondPage', 'thirdPage'],
    parallax: true,
    parallaxOptions: {type: 'cover', percentage: 80, property: 'translate'},
    parallaxKey: "aW5pdGNvZmZlZS5jb21fV00yY0dGeVlXeHNZWGc9NTU2",
    autoScrolling: true,
    scrollOverflow: true,
    loopHorizontal: true,
    navigation: true,
    navigationTooltips:[' ',' ',' '],
    slidesNavigation: true,
    controlArrows: false,



    afterRender: function() {
      document.getElementById("slide1-1").style.animation="top_container-animation 7s";

      //on page load, start the slideshow
        // var i=2;
      slideTimeout = setInterval(function() {
        // $.fn.fullpage.moveSlideRight();
        // console.log(i);
        // $('.fp-slidesContainer').css('animation',"");
        // $('.fp-slidesContainer').css("animation","top_container-animation 2s");
        // $.fn.fullpage.silentMoveTo(1,i);
        // i++;
        // $('.fp-slidesContainer').css("transition","all 2s!important");
        document.getElementById("slide1-1").style.animation="";
        document.getElementById("slide1-2").style.animation="";
        document.getElementById("slide1-3").style.animation="";
        // if (i == 3){
        //   i=1;
        // };
      }, 9000);

    },

    onLeave: function(origin, destination, direction) {
      //after leaving section 1 (home) and going anywhere else, whether scrolling down to next section or clicking a nav link, this SHOULD stop the slideshow and allow you to navigate the site...but it does not
      if (origin.index == '0') {
        console.log('on leaving the slideshow/section1');
        clearInterval(slideTimeout);
        $("body").css("background-color", "black");
      };
      if(origin.index == '1' & direction == 'up'){
        $("body").css("background-color", "white");

        slideTimeout = setInterval(function() {

          //
          // $('.fp-slidesContainer').css("animation","top_container-animation 2s");
          // $.fn.fullpage.setScrollingSpeed(0);
          // $.fn.fullpage.moveSlideRight();
          // $.fn.fullpage.setScrollingSpeed(700);
          // $('.fp-slidesContainer').css("transition","all 2s!important");

          // $.fn.fullpage.moveSlideRight();
          document.getElementById("slide1-1").style.animation="";
          document.getElementById("slide1-2").style.animation="";
          document.getElementById("slide1-3").style.animation="";
        }, 9000);

      };
    },


    // onSlideLeave: function(anchorLink, index, slideIndex, direction) {
    //     $.fn.fullpage.setScrollingSpeed(0);
    //     $('.fp-section').find('.fp-slidesContainer').fadeOut(200);
    // },
    //
    // // Display the slides container by fading it in after the next slide has been loaded.
    // afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
    //     $('.fp-section').find('.fp-slidesContainer').fadeIn(200);
    //     $.fn.fullpage.setScrollingSpeed(700);
    // },
    //
  });




  // ===================BRAND DESCRIPTION SLOGAN ANIMATIONS=================

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
});
