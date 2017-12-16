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
});
