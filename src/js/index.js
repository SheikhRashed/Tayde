'use strict';

// get current years 
const year = document.querySelector('#year')
year.innerHTML = new Date().getFullYear();



// Sidebar 
document.querySelector('#menubar').addEventListener('click', function () {
  document.querySelector('.sidebar').classList.toggle('show');
  document.querySelector('body').classList.toggle('overflow-hidden')

})

// outside click 
document.querySelector('.sidebar').addEventListener('click', function (event) {

  if (event.target.matches('#menubar') || !event.target.closest('.sidebar-content')) {
    document.querySelector('.sidebar').classList.remove('show')
    document.querySelector('body').style.overflow = 'auto';
  }
})


// countdown js 

$("#time")
  .countdown("2022/12/31")
  .on("update.countdown", function (event) {
    var $this = $(this).html(
      event.strftime(
        "" +
        ` 
        <div>
            <span>%D</span>
            <p>Days</p>
        </div>
      ` +
        `
        <div>
          <span>%H</span>
          <p>Hours</p>
        </div>
        ` +
        `
        <div>
          <span>%M</span>
          <p>Minutes</p>
        </div>
        `
        +
        `
          <div>
            <span>%S</span>
            <p>Seconds</p>
          </div>
        `
      )
    );
  });
