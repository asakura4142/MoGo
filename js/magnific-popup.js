$('.picture').magnificPopup({
  delegate: 'a',
  type: 'image',
  showCloseBtn: false,
  removalDelay: 500, //delay removal by X to allow out-animation
      callbacks: {
        beforeOpen: function() {
          // just a hack that adds mfp-anim class to markup 
           this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
           this.st.mainClass = this.st.el.attr('data-effect');
        }
      },
  
  gallery: {      
      enabled: true,
   },  
});
$('a.hinge').magnificPopup({
      mainClass: 'mfp-with-fade',
      removalDelay: 1000, //delay removal by X to allow out-animation
      callbacks: {
        beforeClose: function() {
            this.content.addClass('hinge');
        }, 
        close: function() {
            this.content.removeClass('hinge'); 
        }
      },
      midClick: true
    });

$("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

