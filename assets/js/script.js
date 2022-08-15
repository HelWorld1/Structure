// Написать код подсказки

$(document).ready(function(){
	$('a[href^="#"]:not(.btn, .btn_black)').click(function (e) {
	    e.preventDefault();
      let fix = 100;
	    let target = $(this.hash);
	    $('html, body').stop().animate({
	        'scrollTop': target.offset().top - fix
	    }, 1000);
	});
  $('.btn').click(function(e) {
    e.preventDefault();
    let btn = $(this);
    function active_btn() {
      $(btn).addClass('click');
    }
    active_btn();
    function noactive_btn() {
      $(btn).removeClass('click');
    }
    setTimeout(noactive_btn, 600);
  })
  $('.btn_black').click(function() {
    function active_btn_black() {
      $('.btn_black').addClass('click_black');
    }
    active_btn_black();
    function noactive_btn_black() {
      $('.btn_black').removeClass('click_black');
    }
    setTimeout(noactive_btn_black, 600);
  })
  $('.btn_yellow').click(function(e) {
    let btn_yellow = $(this);
    function active_btn_yellow() {
      $(btn_yellow).addClass('click_yellow');
    }
    active_btn_yellow();
    function noactive_btn_yellow() {
      $(btn_yellow).removeClass('click_yellow');
    }
    setTimeout(noactive_btn_yellow, 600);
  })
  if($(window).width() <= '1600') {
    $('.information__img').appendTo('.information__body');
  }
  $('.header__burger').click(function(){
    $('.header__body').toggleClass('hide-mob');
    $('.header__btn').toggleClass('hide-mob');
  })
  $('.nav-item').click(function() {
    $(this).removeClass('noactive-item');
    $(this).addClass('active-item');
  })
  $(window).scroll(function() {
    let homeHeight = $('.home').height();
    $('.nav-item.active-item').removeClass('active-item');
    $('.scroll').each(function(i,el){
      let footerOffsetTop = $('.footer').offset().top - homeHeight;
      let scroll = $(window).scrollTop();
      if(scroll >= $(el).offset().top-homeHeight && scroll < footerOffsetTop){
        $('.nav-item.active-item').removeClass('active-item');
        $('.nav-item[href="#'+$(el).attr('id')+'"]').removeClass('noactive-item');
        $('.nav-item[href="#'+$(el).attr('id')+'"]').addClass('active-item');
      }
    })
    if($(window).scrollTop() > homeHeight) {
      $('.logo-link').attr('href', '#home');
      $('.header__prompt').text('Хочешь вернуться на главную? Нажми!');
    }
    else {
      $('.logo-link').attr('href', '#footer');
      $('.header__prompt').text('Хочешь перейти в подвал? Нажми!');
    }
  })
  $('.header__logo').mousemove(function(){
    function header__prompt_show(){
      $('.header__prompt').removeClass('display_none');
    }
    header__prompt_show();
  })
  $(window).mousemove(function(e){
    if(!$('.header__logo').is(e.target)) {
      $('.header__prompt').addClass('display_none');
    }
  })
});
