window.addEventListener("load", function(e) {
	console.log("Homescript loaded");
	
	var lastOpacityNumber = 0,
		amountOfBlocks = 0;
	
	// Content blocks
	addContentBlock("Artists", "By: Ajob Kustra", "http://www.billboard.com/files/media/lil-dicky-press-2015-billboard-650.jpg");
	addContentBlock("Food", "By: Ajob Kustra", "https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2016/12/19/18/sush0istock-gkrphoto.jpg");
	addContentBlock("Hobbys", "By: Ajob Kustra", "https://everskate.com/wp-content/uploads/2015/07/skateboarding-health-benefits.jpg");
	addContentBlock("Series", "By: Ajob Kustra", "http://cdn2us.denofgeek.com/sites/denofgeekus/files/2016/01/mr-robot-usa-rami-malek.jpg");
	addContentBlock("IT", "By: Ajob Kustra", "https://www.filepicker.io/api/file/UCDr0K3lQXGDjOqvHHsL");
	addContentBlock("Music", "By: Ajob Kustra", "https://s-media-cache-ak0.pinimg.com/originals/93/bc/4a/93bc4a04f8e0b8681c36e3132aa717f0.jpg");
	addContentBlock("Charity", "By: Ajob Kustra", "https://l1.nl/content/images/old-assets/a700150942de644295d21826eb13b3f9-logo_leger_des_heils.png");
	addContentBlock("Work", "By: Ajob Kustra", "https://cmgpbpprotectingyourpocket.files.wordpress.com/2015/02/door-to-door.jpg");
	addContentBlock("Games", "By: Ajob Kustra", "https://images.g2a.com/images/1024x768/1x1x0/d0bee9236b53/5912ec3f5bafe3d7e20d6014");
	addContentBlock("Social Media", "By: Ajob Kustra", "http://www.univcongress.info/static/2017/02/social-media.jpg");
	addContentBlock("Sports	", "By: Ajob Kustra", "http://www.sportakampen.be/assets/uploads/camps/kampsoorten/852/header/freerunning-1480945945.jpg");
	addContentBlock("Art", "By: Ajob Kustra", "http://4.bp.blogspot.com/-x36Nxu8WEvg/URruut8F8ZI/AAAAAAAADVw/yL1V4G_OJCI/s1600/67X67+2.jpg");
	addContentBlock("Anime", "By: Ajob Kustra", "https://images5.alphacoders.com/596/596534.jpg");
	addContentBlock("Education", "By: Ajob Kustra", "http://i.huffpost.com/gen/1306604/images/o-EDUCATION-facebook.jpg");
	addContentBlock("Adventure", "By: Ajob Kustra", "http://pop.h-cdn.co/assets/17/06/1600x800/landscape-1486481542-gettyimages-172174540.jpg");
	
	// Functions
	function addContentBlock(title, description, imageUrl) {
		
		amountOfBlocks++;
		
		var startBlock = document.createElement("div");
		var containerDiv = document.createElement("div");
		var innerDiv1 = document.createElement("div");
		var innerDiv2 = document.createElement("div");
		var descriptionText = document.createElement("p");
		var titleText = document.createElement("h2");
		
		
		if (window.innerWidth > 1400) {
			startBlock.style.height = window.innerWidth * 0.2 + "px";
		} else if (window.innerWidth > 1000 && window.innerWidth <= 1400) {
			startBlock.style.height = window.innerWidth * 0.25 + "px";
		} else {
			startBlock.style.height = window.innerWidth * 0.5 + "px";
		}
		
		window.addEventListener("resize", function(e) {
			if (window.innerWidth > 1400) {
			startBlock.style.height = window.innerWidth * 0.2 + "px";
			} else if (window.innerWidth > 1000 && window.innerWidth <= 1400) {
				startBlock.style.height = window.innerWidth * 0.25 + "px";
			} else {
				startBlock.style.height = window.innerWidth * 0.5 + "px";
			}
		});
		
		if (imageUrl == null) {
			var opacityNumber = Math.floor(Math.random() * 6);
			
			opacityNumber == lastOpacityNumber ? opacityNumber -= 1 : opacityNumber = opacityNumber;
			opacityNumber += 1;
			
			if (opacityNumber == lastOpacityNumber) {
				if (lastOpacityNumber < 3) {
					opacityNumber += 1;
				} else {
					opacityNumber -= 1;
				}
			}
			startBlock.style.backgroundColor = "rgba(0,0,0,0." + opacityNumber + ")";
		} else {
			startBlock.style.backgroundImage = "url('" + imageUrl + "')";
		}
		
		
		titleText.innerHTML = title;
		
		descriptionText.innerHTML = description;
		
		containerDiv.appendChild(titleText);
		containerDiv.appendChild(descriptionText);
		innerDiv1.appendChild(containerDiv);
		innerDiv1.style.backgroundColor = "rgba(255,255,255,0.5)";
		innerDiv1.style.opacity = 0;
		innerDiv1.style.height = "100%";
		
		startBlock.appendChild(innerDiv1);
		startBlock.appendChild(innerDiv2);
		startBlock.className = "contentBlockItem";
		
		startBlock.addEventListener("mousemove", function(e){
			innerDiv1.style.transition = "0.2s";
			innerDiv1.style.opacity = 1;
		});
		
		startBlock.addEventListener("mouseleave", function(e){
			innerDiv1.style.transition = "0.2s";
			innerDiv1.style.opacity = 0;
		});
		
		contentBlock.appendChild(startBlock);
	}
});