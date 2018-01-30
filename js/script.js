"use strict";
window.onload = function(e) {
	var nav_bar = document.getElementsByTagName("nav")[0],
		navElements = [],
		header = document.getElementsByTagName("header")[0],
		contentBlock = document.getElementById("contentBlock");
		
	document.getElementById("wrapper").style.transition = 0.5 + "s";
	document.getElementById("wrapper").style.opacity = 1;
	
	for (var i = 0; i < nav_bar.children.length; i++) {
		console.log((window.location.href).indexOf("index") != -1);
		console.log((window.location.href.toLowerCase()).indexOf(nav_bar.children[i].innerHTML.toLowerCase()) == -1)
		if ((window.location.href.toLowerCase()).indexOf(nav_bar.children[i].innerHTML.toLowerCase()) == -1) {
			if ((nav_bar.children[i].innerHTML.toLowerCase() == "home" && (window.location.href).indexOf("index") == -1) || (nav_bar.children[i].innerHTML.toLowerCase() != "home")) {
				nav_bar.children[i].addEventListener("click", function(e) {
					
					document.getElementById("wrapper").style.transition = 0.5 + "s";
					document.getElementById("wrapper").style.opacity = 0;
					
					var thisElement = this;
					
					setTimeout(function(e) {
						console.log("In here");
						var pageName = thisElement.innerHTML.toLowerCase();
						
						if (pageName == "home") {
							window.location.href = "index.html";					
						} else {
							window.location.href = pageName + ".html";	
						}
							
					}, 500);
				});
			} else {				
				nav_bar.children[i].style.backgroundColor = "rgba(0,0,0,0.15)";
			}
		} else {
			nav_bar.children[i].style.backgroundColor = "rgba(0,0,0,0.15)";
		}
	}
	
	// Header
	header.querySelector("div").style.paddingTop = window.innerHeight * 0.05 + "px";
	header.querySelector("div").style.paddingBottom = window.innerHeight * 0.05 + "px";
	
	window.addEventListener("resize", function(e) {		
		header.querySelector("div").style.paddingTop = window.innerHeight * 0.05 + "px";
		header.querySelector("div").style.paddingBottom = window.innerHeight * 0.05 + "px";
	});
}