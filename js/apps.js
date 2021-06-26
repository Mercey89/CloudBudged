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

$('.video-overview__button').click(function(){
	$('.video-popup').addClass('_active');
});

$(document).mouseup(function (e) {
	var container = $('.video-popup__inner');

	if (!container.is(e.target)
			&& container.has(e.target).length === 0)
	{
			$('.video-popup').removeClass('_active');
	}
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

// Slider (focus)
$(document).ready(function() {
	let sliderItem = $(".slider").children(".slider__item.active");
	sliderItem.prev(".slider__item").css({
		"left":-35 +'%',
	});

	sliderItem.next(".slider__item").css({
		"right":-35 +'%',
	});
	let i = $(".slider").children(".slider__item");
	let ind=0;
	$(".slider").children('.slider__item').each(function(){
		$(this).attr('data-index',ind++);

	})
	i.on('click',function(e){
		const that = $(this);
		let dataIndex = that.data('index');
		$(".slider__item").removeClass('active');
		that.addClass('active');
		i.each(function(){
			if($(this).data('index')==dataIndex){
				$(this).addClass('active');
				$(this).css({
					"left":0,
					"right":0,
					"z-index":3,
				});
				if(dataIndex=="1"){
					$(".slider__item[data-index=2]").css({
						"left":0,
						"right":-35 +'%',
						"z-index":1,
					})
					$(".slider__item[data-index=0]").css({
						"left":-35 +'%',
						"right":0,
						"z-index":1,
					})
				}else if(dataIndex=="0"){
					$(".slider__item[data-index=2]").css({
						"left":-35 +'%',
						"right":0,
						"z-index":1,
					})
					$(".slider__item[data-index=1]").css({
						"left":0,
						"right":-35 +'%',
						"z-index":1,
					})
				}else if(dataIndex=="2"){
					$(".slider__item[data-index=1]").css({
						"left":-35 +'%',
						"right":0,
						"z-index":1,
					})
					$(".slider__item[data-index=0]").css({
						"left":0,
						"right":-35 +'%',
						"z-index":1,
					})
				}
			}
		})
	})
})