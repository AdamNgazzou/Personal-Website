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

startImageTransition();
function startImageTransition() {
    let images = document.getElementsByClassName("img");
    for (let i = 0; i < images.length; ++i) {
        images[i].style.opacity = 1;
    }
    let top = 1;
    let cur = images.length - 1;
    setInterval(changeImage, 3000);
    async function changeImage() {
        let nextImage = (1 + cur) % images.length;
        images[cur].style.zIndex = top + 1;
        images[nextImage].style.zIndex = top;
        await transition();
        images[cur].style.zIndex = top;
        images[nextImage].style.zIndex = top + 1;
        top = top + 1;
        images[cur].style.opacity = 1;
        cur = nextImage;
    }
    function transition() {
        return new Promise(function (resolve, reject) {
            let del = 0.01;
            let id = setInterval(changeOpacity, 10);
            function changeOpacity() {
                images[cur].style.opacity -= del;
                if (images[cur].style.opacity <= 0) {
                    clearInterval(id);
                    resolve();
                }
            }
        })
    }
}
//--------------------*blog changer*---------------------------------//
  const img1 = document.getElementById("blogg1");
  const img2 = document.getElementById("blogg2");
  const img3 = document.getElementById("blogg3");
  const btn = document.getElementById("btn");
  const btn1 = document.getElementById("btn1");
  var x=600;
  var y=-600;
  btn1.addEventListener("click", function() {
	  if(x>-600 && y>-1800){
	  img1.style.transform = "translateY(calc(0% + " + y + "px))";
	  img2.style.transform = "translateY(calc(-215% + " + x + "px))";
	  img3.style.transform = "translateY(calc(-215% + " + x + "px))";
	  x=x-600;
	  y=y-600;}
  });
  
  btn.addEventListener("click", function() {
	if(y!=0 || x!=1200){
		x=x+600;
		y=y+600;
		img1.style.transform = "translateY(calc(-2% + " + y + "px))";
		img2.style.transform = "translateY(calc(-215% + " + x + "px))";
		img3.style.transform = "translateY(calc(-215% + " + x + "px))";}
  });
