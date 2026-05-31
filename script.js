$(document).ready(function() {
  $('.popup-image').click(function() {
    var targetPopup = $(this).data('popup');
    $(targetPopup).addClass('open');
    $(targetPopup).draggable();
  });

  $('.popup-close').click(function() {
    $(this).closest('.popup').removeClass('open');
  });
});

//need to randomize the image wrapper
document.querySelectorAll('image-wrapper').forEach(el => {
  el.style.left = Math.random() * 90 + '%';
  el.style.top = Math.random() * 90 + '%';

});

