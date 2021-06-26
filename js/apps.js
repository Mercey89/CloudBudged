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

$('.header__burger').click(function(){
	$('.header__burger, .nav-header__list').toggleClass('_active');
	$('body').toggleClass('_lock');
})

$(document).ready(function() {
	const scrollLink = $('.scroll-js');
	const headerHeight = $('.header').outerHeight();
	// Smooth scrolling
	scrollLink.click(function(e){
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top - headerHeight
		},500) // speed
	});
	// Link switching
	$(window).scroll(function(){
		const scrollbarLocation = $(this).scrollTop();
		scrollLink.each(function(){
			const sectionOffset = $(this.hash).offset().top - headerHeight - 5;

			if (sectionOffset <= scrollbarLocation) {
				$(this).parent().addClass('_current');
				$(this).parent().siblings().removeClass('_current');
			}
			if (sectionOffset >= scrollbarLocation) {
				$(this).parent().removeClass('_current');
			}
		})
	})
})