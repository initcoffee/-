
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



document.getElementById('main-body-container').scrollIntoView()



function gotoMain() {
  document.getElementById('main-body-container').scrollIntoView();
}
