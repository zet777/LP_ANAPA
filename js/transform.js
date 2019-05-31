$('.menu-btn').on('click', function (e) {
	e.preventDefault; /*отменяем стандартное событие*/
	$(this).toggleClass('menu-btn_active');
	$('.menu-nav').toggleClass('menu-nav_active');
})
$('.menu-btn').on('click', function (e) {
	e.preventDefault; /*отменяем стандартное событие*/
	$('menu').toggleClass('d-none');
	$('.menu').toggleClass('d-none');
})