window.onscroll = function(){
    console.log($('html').scrollTop());
    if($('html').scrollTop() < 100){
      $('nav').addClass('transparentTop');
      $('nav').addClass('pt-4 pb-4');
      $('.titl').addClass('text-white');
      $('nav').removeClass('navbar-light');
    }else{
      $('nav').removeClass('transparentTop');
      $('nav').removeClass('pt-4 pb-4');
      $('.titl').removeClass('text-white');
      $('nav').addClass('navbar-light');
    }
}
