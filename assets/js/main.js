"use strict";

/* ======= Header animation ======= */   
const header = document.getElementById('header');  

window.onload=function() 
{   
    headerAnimation(); 
    document.getElementById('navigation').addEventListener('show.bs.collapse', function () {
        header.classList.add('header-shrink');  
    })
    document.getElementById('navigation').addEventListener('hidden.bs.collapse', function () {
        header.classList.add('header-shrink');
        headerAnimation();  
    })
};

window.onresize=function() 
{   
    headerAnimation(); 

}; 

window.onscroll=function() 
{ 
    headerAnimation(); 

}; 
    

function headerAnimation () {

    var scrollTop = window.scrollY;
	
	if ( scrollTop > 100 ) {	    
	    header.classList.add('header-shrink');    
	    	    
	} else {
	    header.classList.remove('header-shrink');
	}

};


/* ===== Smooth scrolling ====== */
/*  Note: You need to include smoothscroll.min.js (smooth scroll behavior polyfill) on the page to cover some browsers */
/* Ref: https://github.com/iamdustan/smoothscroll */


let scrollLinks = document.querySelectorAll('.scrollto');
const pageNavWrapper = document.getElementById('navigation');

scrollLinks.forEach((scrollLink) => {

	scrollLink.addEventListener('click', (e) => {
		
		e.preventDefault();

		let element = document.querySelector(scrollLink.getAttribute("href"));
		
		const yOffset = 69; //page .header height
		
		//console.log(yOffset);
		
		const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
		
		window.scrollTo({top: y, behavior: 'smooth'});
		
		
		//Collapse mobile menu after clicking
		if (pageNavWrapper.classList.contains('show')){
			pageNavWrapper.classList.remove('show');
		}

		
    });
	
});
    

/* ===== Gumshoe SrollSpy ===== */
/* Ref: https://github.com/cferdinandi/gumshoe  */
// Get the sticky header


// Initialize Gumshoe
var spy = new Gumshoe('#navigation a', {
	offset: 69 //page .header heights
});


/* ======= Countdown ========= */
// set the date we're counting down to
var target_date = new Date("Jun 13, 2022").getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown =  document.getElementById("countdown-box");
var days_span = document.createElement("SPAN");
days_span.className = 'days';
countdown.appendChild(days_span);
var hours_span = document.createElement("SPAN");
hours_span.className = 'hours';
countdown.appendChild(hours_span);
var minutes_span = document.createElement("SPAN");
minutes_span.className = 'minutes';
countdown.appendChild(minutes_span);
var secs_span = document.createElement("SPAN");
// secs_span.className = 'secs';
// countdown.appendChild(secs_span);
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value.
    days_span.innerHTML = '<span class="number">' + days + '</span>' + '<span class="unit">Days</span>';
    hours_span.innerHTML = '<span class="number">' + hours + '</span>' + '<span class="unit">Hrs</span>';
    minutes_span.innerHTML = '<span class="number">' + minutes + '</span>' + '<span class="unit">Mins</span>';
    // secs_span.innerHTML = '<span class="number">' + seconds + '</span>' + '<span class="unit">Secs</span>';
 
}, 1000);

/* ==== Schedule ==== */

var today = new Date();
var targetDate = new Date("Jun 13, 2022");
var conferenceDay = Math.max(Math.floor((today - targetDate) / (1000 * 3600 * 24)) + 1, 1)
var scheduleElement = document.getElementById('tab-'+conferenceDay)
if(scheduleElement){ scheduleElement.classList.add("active")}
var scheduleElement = document.getElementById('tab-'+conferenceDay+'-content')
if(scheduleElement){ scheduleElement.classList.add("active")}

  var buildSchedule = function(elSelector, data){
    var el = document.getElementById(elSelector);
    el.innerHTML = ''
    if(!el) return;
    var html = ''
    data.forEach(function( event ) {
      html += '<div class="item item-other">'
      html += '<div class="meta"><h4 class="time mb-3">'+event[0]+'</h4></div>'
      html += '<div class="content"><h3 class="title mb-3">'+event[1]+'</h3></div>'
      html += '</div>'
    });
    el.innerHTML = html;
  };
  var day1 = [
    ['5:00 - 5:30', 'Session 1 - Opening Remarks'],
    ['5:30 - 6:45', 'Plenary Lecture'],
    ['6:45 - 8:00', 'Welcome Dinner'],
    ['8:00 - 11:00', 'Meet and Greet']
  ]
  buildSchedule('tab-1-content', day1);
  
  var day2 = [
    ['7:30 - 8:45', 'Breakfast'],
    ['8:45 - 10:00', 'Session 2 - Tools to Study the Cell Wall'],
    ['10:00 - 10:45', 'Coffee/ Tea Break'],
    ['10:45 - 12:00', 'Session 3 - Cell Biology and Cell Wall Trafficking'],
    ['11:45 - 1:30', 'Lunch & Poster Set Up'],
    ['1:30 - 2:30', 'Session 4 - Secondary Cell Wall Synthesis & Formation'],
    ['2:30 - 3:15', 'Coffee/Tea Break'],
    ['3:15 - 4:00', 'Session 5 - Plant Development and the Cell Wall'],
    ['4:00 - 5:00', 'Writing Workshop'],
    ['6:00 - 6:45', 'Session 6 - Genetic Regulation of the Cell Wall'],
    ['6:45 - 8:00', 'Dinner'],
    ['8:00 - 11:00', 'Refreshments/Poster Session 1 (even numbers)']
  ]
  buildSchedule('tab-2-content', day2);
  
  var day3 = [
    ['7:30 - 8:45', 'Breakfast'],
    ['8:45 - 10:00', 'Session 7 - Cell Wall Mechanics'],
    ['10:00 - 10:45', 'Coffee/ Tea Break'],
    ['10:45 - 12:00', 'Session 8 - Cell Wall Mechanics Continued'],
    ['12:00 - 1:30', 'Lunch & MEEPs'],
    ['1:30 - 2:30', 'Session 9 - Pectin (Biosynthesis)'],
    ['2:30 - 3:15', 'Coffee/Tea Break'],
    ['3:15 - 4:00', 'Session 10 - Synthetic Biology'],
    ['4:00 - 5:30', 'DEI Workshop'],
    ['5:30 - 5:45', 'Picture'],
    ['6:00 - 6:45', 'Session 11 - Lignin'],
    ['6:45 - 8:00', 'Dinner'],
    ['8:00 - 11:00', 'Refreshments/Poster Session 2 (odd numbers)']
  ]
  buildSchedule('tab-3-content', day3);
  
  var day4 = [
    ['7:30 - 8:45', 'Breakfast'],
    ['8:45 - 10:00', 'Session 12 - Cell Wall Engineering (Polsaccharide)'],
    ['10:00 - 10:45', 'Coffee/ Tea Break'],
    ['10:45 - 12:00', 'Session 13 Continued'],
    ['12:15 - 1:30', 'Lunch'],
    ['1:30 - 2:30', 'Session 15 - Plant Cell Wall Signaling'],
    ['2:30 - 3:15', 'Coffee/Tea Break'],
    ['3:15 - 4:00', 'Business Meeting'],
    ['4:00 - 5:00', 'Commercialization Workshop'],
    ['5:00 - 6:45', 'Scientific Collaboration Time'],
    ['6:45 - 8:00', 'Gala Dinner'],
    ['8:00 - 11:00', 'Dance']
  ]
  buildSchedule('tab-4-content', day4);
  
  var day5 = [
    ['7:30 - 8:45', 'Breakfast'],
    ['8:45 - 10:00', 'Session 16 - Arabinogalactan Protein'],
    ['10:00 - 10:45', 'Coffee/ Tea Break'],
    ['10:45 - 12:00', 'Session 17 - Hemicellulose'],
    ['12:00 - 1:30', 'Farewell and Awards'],
    ['1:30', 'Poster Dismount']
  ]
  buildSchedule('tab-5-content', day5);