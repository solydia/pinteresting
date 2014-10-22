// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .

// var slides, slides_total, slide_current;

// function changePicture (slide) {
// 	for(var i = 0; i < slides_total; i++) {
// 		slides[i].style.display = 'none';
// 	}
// 	slides[slide].style.display = 'block';
// };

// document.addEventListener('DOMContentLoaded', function(){
// 	slides = document.getElementByClassName('col-sm-12');
// 	slides_total = slides.length;
// 	slides_current = 0;
// 	changePicture(1);
// 	changePicture(2);
// });


var slides, slides_total, slide_current;

document.addEventListener('DOMContentLoaded', function(){

	slides = document.getElementsByClassName('col-sm-12');
	slides_total = slides.length;
	slide_current = 0;
	changePicture(slide_current);

	document.getElementsByClassName('prev')[0].addEventListener('click', function () {
	  if(slide_current > 0){
	    slide_current--;
	  }else{
	    slide_current = (slides_total - 1);
	  }
	  console.log(slide_current);
	  changePicture(slide_current);
	  ga('send', 'event', 'slider', 'click next', 'click the next button', 1);
	  mixpanel.track("previous button click");
	});

	document.getElementsByClassName('next')[0].addEventListener('click', function () {
	  if(slide_current < (slides_total -1)){
	    slide_current++;
	  }else{
	    slide_current = 0;
	  }
	  console.log(slide_current);
	  changePicture(slide_current);
	});

	document.getElementsByClassName('reset')[0].addEventListener('click', function () {
	  slide_current = 0
	  console.log(slide_current);
	  changePicture(slide_current);
	});

});

function changePicture (slide) {
  for(var i = 0; i < slides_total; i++){
  slides[i].style.display = 'none'; //turn all pictures off
  }
  slides[slide].style.display = "block"; // turn on slide passed to change picture
};







// // First we declare all the variables will be using
// var slides, slides_total, slide_current;

// // This function receives a number and then will hide all the images
// // and display only that image number
// function changePicture (slide) {
// for(var i = 0; i < slides_total; i++){
// slides[i].style.display = 'none';
// }
// slides[slide].style.display = 'block';

// };

// // Here we create an event listener to make sure that our code
// // will execute after all the HTML is available to our code
// document.addEventListener('DOMContentLoaded', function(){
//  // here we get the div that contains the images
//   slides = document.getElementsByClassName('col-sm-12');
//   slides_total = slides.length;
//   slide_current = 0;
//   changePicture(slide_current);
//  // set interval will call a function every number of miliseconds 
//   window.setInterval(function () {
//    // we check which slide number we're using, if is the last one
//   // we wanna set it up so it starts over
//     if(slide_current >= (  slides_total - 1 ) ) {
//       slide_current = 0;
//     }else {
//       slide_current++;
//     }
//     changePicture(slide_current);
//     // this outputs information to the console, is used for debugging
//     console.log(slide_current);
//   }, 3000);
// });

//      // First we get the element with class .prev, we want to add an event listener
//     // to that element so we can perform a function every time teh element is clicked
//     document.getElementsByClassName('prev')[0].addEventListener('click', function () {
//       // the idea is to decrease slide_current by one, to show the previous image
//       if(slide_current > 0){
//         slide_current--;
//       }else{
//         // if the slide_current is less than 0 we want to move to the last image
//         slide_current = (slides_total - 1);
//       }
//       // then we call the function that changes the current image we had previously coded
//       changePicture(slide_current);
//     });