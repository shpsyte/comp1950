// JavaScript Document

const btnIn = document.querySelector('.btn-animation-in');
const btnOut = document.querySelector('.btn-animation-out');
const animatedEl = document.querySelector('.jumbo-text');

btnIn.addEventListener('click', () => {
	animatedEl.classList.remove('rotateOut', 'paused');
	animatedEl.classList.add('rotateIn', 'play');
});

btnOut.addEventListener('click', () => {
	if(animatedEl.classList.contains('paused')){
		return;
	}
	animatedEl.classList.remove('rotateIn');
	animatedEl.classList.add('rotateOut');
});

