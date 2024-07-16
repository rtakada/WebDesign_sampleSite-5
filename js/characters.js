$('.sidebar a[href^="#"]').click(function () {
	const speed = 600;
	let href = $(this).attr("href");
	let target = $(href == "#" || href == "" ? "html" : href);
	let position = target.offset().top;
	$("body,html").animate({ scrollTop: position }, speed, "swing");
	return false;
});

$('.system a[href^="#"]').click(function () {
	const speed = 600;
	let href = $(this).attr("href");
	let target = $(href == "#" || href == "" ? "html" : href);
	let position = target.offset().top;
	$("body,html").animate({ scrollTop: position }, speed, "swing");
	return false;
});

$(window).scroll(function () {
	var scrollAnimationElm = document.querySelectorAll('.scroll_up');
	var scrollAnimationFunc = function () {
		for (var i = 0; i < scrollAnimationElm.length; i++) {
			var triggerMargin = 100;
			if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
				scrollAnimationElm[i].classList.add('on');
			}
		}
	}
	window.addEventListener('load', scrollAnimationFunc);
	window.addEventListener('scroll', scrollAnimationFunc);
});