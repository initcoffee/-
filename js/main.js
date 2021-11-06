// // calculate vh
// window.addEventListener('resize', () => {
//   document.querySelector(':root').style
//     .setProperty('--vh', window.innerHeight / 100 + 'px');
// });
// // end of calculate vh




const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()




function gotoMain() {
  document.getElementById('main-body-container').scrollIntoView();
}
//
// window.addEventListener('scroll', () => {
//   const scrolled = window.scrollY / 2;
//   let root = document.documentElement;
//   root.style.setProperty('--top-container-translate', scrolled + 'px');
//
// })


$(window).scroll(function() {
  var scrolled = $(window).scrollTop()/4.5;
  // document.getElementById('top_container-fluid').style.transform ='0px,'


  let root = document.documentElement;
  root.style.setProperty('--top-container-translate', scrolled + 'px');

})
