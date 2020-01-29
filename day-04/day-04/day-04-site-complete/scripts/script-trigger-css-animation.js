// JavaScript Document

const sticker = document.querySelector('.rotating-sticker');
const nav = document.querySelector('.fly-in-nav');

sticker.addEventListener('animationend', () => {
	nav.classList.add('play');
});