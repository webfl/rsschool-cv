// Start of Header Scroll
const headScroll = document.querySelector('.header');
window.onscroll = function () {
	if (window.pageYOffset > 50) {
		headScroll.classList.add('header-active')
	} else {
		headScroll.classList.remove('header-active');
	}
}
// End of Header Scroll==================================================//