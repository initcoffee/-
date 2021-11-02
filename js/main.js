
  // calculate vh
  window.addEventListener('resize', () => {
    document.querySelector(':root').style
      .setProperty('--vh', window.innerHeight / 100 + 'px');
  });
  // end of calculate vh
