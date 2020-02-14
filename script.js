$(function(){


  $('.social-icon').hover(
    function(){
      $(this).children('span').animate({
        'font-size':'30px'
      }, 300);
    },
    function(){
      $(this).children('span').animate({
        'font-size':'24px'
      }, 300);
    }
  );
  

  $('#top-btn').click(function(){
    $('html,body').animate({ 
      'scrollTop': 0 
    }, 'slow');
  });
  
});
