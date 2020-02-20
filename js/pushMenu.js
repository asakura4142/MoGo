$(window).ready(function(){
    $('.header_burger').click(function(event){
        $('body').toggleClass('lock');
        $('body').addClass('pmr-open');
        $( "body" ).append( "<div class='mask'></div>");
    });
    $('.close-menu').click(function(event){
        $('body').toggleClass('lock');
        $('body').removeClass('pmr-open');
        $( ".mask" ).remove();
    });
    $('body').on('click', '.mask', function() {
      $('body').toggleClass('lock');
      $('body').removeClass('pmr-open');
      $( ".mask" ).remove();
    });
  });
  