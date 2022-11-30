'use strict';

// get current years 
const year = document.querySelector('#year')
year.innerHTML = new Date().getFullYear();



// Sidebar 
document.querySelector('#menubar').addEventListener('click', function () {
  document.querySelector('.sidebar').classList.toggle('show');
  document.querySelector('body').style.overflow = 'hidden';
})

// outside click 
document.querySelector('.sidebar').addEventListener('click', function (event) {

  if (event.target.matches('#menubar') || !event.target.closest('.sidebar-content')) {
    document.querySelector('.sidebar').classList.remove('show')
    document.querySelector('body').style.overflow = 'auto';
  }
})