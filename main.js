let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

/*-- ------about me ------ -- */
var tablinks= document.getElementsByClassName("tab-links");
var tabcontents= document.getElementsByClassName("tab-contents");
var bloglinks= document.getElementsByClassName("blog");

function opentab(tabname){
	for(tablink of tablinks){
		tablink.classList.remove("active-link");
	}
	for(tabcontent of tabcontents){
		tabcontent.classList.remove("active-tab");
	}
	event.currentTarget.classList.add("active-link");
	tabname.classList.add("active-tab");
}
function openblog(tabname){
	for (bloglink of bloglinks){
		bloglink.classList.remove("active-blog");
	}
	tabname.classList.add("active-blog");
}
/*-- ------Load transition ------ -- */


	
var aboute= document.getElementsByClassName("about");
var navee=document.getElementsByClassName("nav");

window.addEventListener('scroll',reveal);
function reveal(){
	if (document.documentElement.scrollTop > navee.length)
		about.classList.add("load");
}
function loading(){
	Heading.classList.add("load");

}

/*-- ------Image evnt ------ -- */
/*var imges=document.getElementsByClassName("img");
function yeb(slider){
	slider.classList.add("slide");
	timeout = setTimeout(yeb, 1000);
    
}

function slide(slider){
	for(imge of imges){
		imge.classList.remove("slide");
	}
	yeb(slider);
}
*/
window.addEventListener("DOMContentLoaded", function(e) {

    // Original JavaScript code by Chirp Internet: chirpinternet.eu
    // Please acknowledge use of this code by including this header.

    var stage = document.getElementById("image");
    var fadeComplete = function(e) { stage.appendChild(arr[0]); };
    var arr = stage.getElementsByTagName("a");
    for(var i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }

  }, false);
