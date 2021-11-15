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

  
  var JumpFix = {

      fixItems: $('*[data-jump-fix]'), // Get all items with the data attribute.
      isScrolling: false,
      timeoutScroll: null,

      // This sets 'isScrolling' to true for a certain amount of time.
      setScrollingStatus: function () {
          if (JumpFix.timeoutScroll) {
              clearTimeout(JumpFix.timeoutScroll);
          }
          JumpFix.isScrolling = true;
          JumpFix.timeoutScroll = setTimeout(function () {
              JumpFix.isScrolling = false;
          }, 100);
      },

      // Save actual heights
      saveHeights: function () {
          JumpFix.fixItems.each(function (i) {
              JumpFix.fixItems[i].savedHeight = $(this).height();
          })
      },

      // window and document actions here
      bindUIActions: function () {

          // Set isScrolling when the user scrolls or swipes.
          $(window).scroll(function () {
              if (JumpFix.isScrolling === false) {
                  JumpFix.saveHeights();
              }
              JumpFix.setScrollingStatus();
          });

          $(window).on({
              'touchmove': function () {
                  if (JumpFix.isScrolling === false) {
                      JumpFix.saveHeights();
                  }
                  JumpFix.setScrollingStatus();
              }
          });

          // On resize: if user is scrolling use the saved height.
          // if user is NOT scrolling save the new nativ height after resize.
          $(window).resize(function () {
              if (JumpFix.isScrolling === true) {
                  JumpFix.fixItems.each(function (i) {
                      $(this).height(JumpFix.fixItems[i].savedHeight);
                  })
              } else {
                  JumpFix.fixItems.each(function () {
                      $(this).css('height', '');
                  });
              }
          });
      },

      init: function () {
          this.bindUIActions();
      }

  };


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
