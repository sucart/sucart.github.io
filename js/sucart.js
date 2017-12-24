$(document).ready(function() {
  $('.latestcreationsgallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      titleSrc: 'title',
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  if (is_touch_device()) {
    window.sr = ScrollReveal({ reset: true });
    sr.reveal('.showreelframe', {
      duration: 2000,
      delay: 200,
      scale: 1,
      distance: '0px',
      viewFactor: 0.5
    }, 0);

    document.documentElement.classList.add('can-touch')
  } else {
    document.documentElement.classList.add('can-hover')
  }

});

function is_touch_device() {
  return 'ontouchstart' in window        // works on most browsers
      || navigator.maxTouchPoints;       // works on IE10/11 and Surface
};
