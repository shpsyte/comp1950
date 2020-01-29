// JavaScript Document
const btn = document.querySelector('.btn-read-more');

btn.addEventListener('click', function(){
	this.textContent === 'Read More' ? this.textContent = 'Read Less' : this.textContent = 'Read More';
	this.parentElement.classList.toggle('read-more');
});