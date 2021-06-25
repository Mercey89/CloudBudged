window.onload = function () {
	// Header
	const headerElement = document.querySelector('.header');
	const callback = function (entries, observe) {
		if (entries[0].isIntersecting) {
			headerElement.classList.remove('_scroll');
		} else {
			headerElement.classList.add('_scroll');
		}
	};
	const headerObserver = new IntersectionObserver(callback);
	headerObserver.observe(headerElement);
}

$('.lang-header__list').click(function(){
	$(this).toggleClass('_active');
});

$('.lang-header__item').click(function(){
	$(this).addClass('_current');
	$(this).siblings().removeClass('_current');
});

$('.header__burger').click(function(){
	$('.header__burger, .nav-header__list').toggleClass('_active');
	$('body').toggleClass('_lock');
})

$('.nav-header__item').click(function(){
	$(this).addClass('_current');
	$(this).siblings().removeClass('_current');
})

$(document).ready(function() {
  var headerHeight = $('.header__inner').outerHeight();
  $('.scroll-js').click(function(e) {
  	var targetHref = $(this).attr('href');
	$('html, body').animate({
		scrollTop: $(targetHref).offset().top - headerHeight + 30
	}, 450);
    e.preventDefault();
  });
});
