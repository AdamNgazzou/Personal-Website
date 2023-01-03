let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

/*-- ------about me ------ -- */
var tablinks= document.getElementsByClassName("tab-links");
var tabcontents= document.getElementsByClassName("tab-contents");
var bloglinks= document.getElementsByClassName("blog-title");

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
		blog.classList.remove("active-blog");
	}
	tabname.classList.add("active-blog");
}
