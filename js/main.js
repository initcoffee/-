// // calculate vh
// window.addEventListener('resize', () => {
//   document.querySelector(':root').style
//     .setProperty('--vh', window.innerHeight / 100 + 'px');
// });
// // end of calculate vh


function gotoMain() {
  document.getElementById('brand-description-container').scrollIntoView({
    behavior: 'smooth'
  });
};

function cancel() {
  document.getElementById("shopify-section-announcement-bar").style.display = "none";
};


$(document).ready(function() {


  $("html, body, .wrapper").css({
    height: $(window).height()
});

  // const appHeight = () => {
  //   const doc = document.documentElement
  //   doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  // }
  // window.addEventListener('resize', appHeight)
  // appHeight()


  //
  // window.addEventListener('scroll', () => {
  //   const scrolled = window.scrollY / 2;
  //   let root = document.documentElement;
  //   root.style.setProperty('--top-container-translate', scrolled + 'px');
  //   console.log(scrolled)
  // })

  var rellax = new Rellax('.rellax');
  // $(window).scroll(function() {
  //   var scrolled = $(window).scrollTop()/1.3;
  //   // var scrolled2 = $(window).scrollTop();
  //   // var elementOffset = $("#brand-description-container").offset().top;
  //   // var distance = (elementOffset - scrolled2)/1.3;
  //
  //
  //   let root = document.documentElement;
  //   root.style.setProperty('--top-container-translate', scrolled + 'px');
  //   // root.style.setProperty('--brand-description-container-translate', distance + 'px');
  //
  // });

  // $(window).scroll(function() {
  //   var scrolled = $(window).scrollTop();
  //   var elementOffset = $("#brand-description-container").offset().top;
  //   var distance = (elementOffset - scrolled);
  //   // document.getElementById('top_container-fluid').style.transform ='0px,'
  //
  //
  //   let root = document.documentElement;
  //   root.style.setProperty('--brand-description-container-translate', distance + 'px');
  //
  // });

});
