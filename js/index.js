//* Scroll to anchors Step to Web----------//
(function () {

	const smoothScroll = function (targetEl, duration) {
		 const headerElHeight =  document.querySelector('.menu').clientHeight;
		 let target = document.querySelector(targetEl);
		 let targetPosition = target.getBoundingClientRect().top - headerElHeight;
		 let startPosition = window.pageYOffset;
		 let startTime = null;
	
		 const ease = function(t,b,c,d) {
			  t /= d / 2;
			  if (t < 1) return c / 2 * t * t + b;
			  t--;
			  return -c / 2 * (t * (t - 2) - 1) + b;
		 };
	
		 const animation = function(currentTime){
			  if (startTime === null) startTime = currentTime;
			  const timeElapsed = currentTime - startTime;
			  const run = ease(timeElapsed, startPosition, targetPosition, duration);
			  window.scrollTo(0,run);
			  if (timeElapsed < duration) requestAnimationFrame(animation);
		 };
		 requestAnimationFrame(animation);

	};

	const scrollTo = function () {
		 const links = document.querySelectorAll('.js-scroll');
		 links.forEach(each => {
			  each.addEventListener('click', function () {
					const currentTarget = this.getAttribute('href');
					smoothScroll(currentTarget, 1000);
			  });
		 });
	};
	scrollTo();
}());
//* END of Scroll to anchors Step to Web=================================//

//*START of BURGER----------//
//-----Open Burger-----
const navMenu = document.querySelector('.navigation');
const burgerIcon = document.querySelector('.burger');

function toggleMenu() {
	burgerIcon.classList.toggle('open');
	navMenu.classList.toggle('open');
}
burgerIcon.addEventListener('click', toggleMenu);

//-----Close Burger-----
const navLinks = document.querySelectorAll('.navigation__link');

function closeMenu(event) {
	if (event.target.classList.contains('navigation__link')) {
		// здесь код, удаляющий класс `'open'` у гамбургер-иконки и у меню
		burgerIcon.classList.remove('open');
		navMenu.classList.remove('open');
	}
}

navMenu.addEventListener('click', closeMenu);
//*END of BURGER========================================================//

//*START of Сonversion of percentages===================================//
const percentCounter = document.querySelectorAll('.level__percent');
const percentLine = document.querySelectorAll('.level__line span');

percentCounter.forEach( (item, i) => {
	percentLine[i].style.width = item.innerHTML
});
//*END of Сonversion of percentages=====================================//

