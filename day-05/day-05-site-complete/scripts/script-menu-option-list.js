// JavaScript Document

// Select Menu Script

const selectMenu = document.getElementById('menu');

selectMenu.addEventListener('change', goToPage);

function goToPage(){
    if(this.value){
        window.location.href = this.value;
    }
}