window.addEventListener("load", function(e) {
	var textMessageField = document.getElementById("textMessageField");
	var messages = [
		"I'm going for a swim!",
		"I'm letting my dog out.",
		"I'm listening to music :)",
		"I am watching House of Cards.",
		"I am reading a book.",
		"My house is on fire, help!",
		"Can't talk, I'm at work...",
		"My phone battery is low (2%)."
	];
	var messageCount = 0;

	
	createGreyMessage("Hey");
	createBlueMessage("Hi, how are you doing?");
	createGreyMessage("Good, what about you?");
	createBlueMessage("I'm doing great!");
	createGreyMessage("Good, what are you up to?");
	
	typeMessages();
	
	// Background color
	
	/*	Not sure if I want to use this 
	var rgb = [0,100,100];
	var rgbchronological = [true, false, true];
	
	changeBackground(); */
	
	function createGreyMessage(innerContent) {
		var holderblock = document.createElement("div");
		holderblock.style.left = 0;
		
		var messageBlock = document.createElement("div");
		messageBlock.innerHTML = innerContent;
		messageBlock.className = "greyBlock";
		
		holderblock.append(messageBlock);
		textMessageField.querySelector("div").append(holderblock);
	}
	
	function createBlueMessage(innerContent) {
		var holderblock = document.createElement("div");
		holderblock.style.left = 0;
		
		var messageBlock = document.createElement("div");
		messageBlock.innerHTML = innerContent;
		messageBlock.className = "blueBlock";
		
		holderblock.append(messageBlock);
		textMessageField.querySelector("div").append(holderblock);
	}
	
	function typeMessages() {
		
		var writingField = textMessageField.querySelector("aside");
		var writingContent = writingField.innerHTML;
		var backspace = true;
		
		var counter = 0;
		
		var textInterval = setInterval(function() {
			if (backspace) {
				writingContent = writingContent.slice(0,-1);
				writingField.innerHTML = writingContent;
				if (writingContent.length <= 0) backspace = false;
			} else if (!backspace) {
				writingContent += messages[messageCount][counter];
				writingField.innerHTML = writingContent;
				if (messages[messageCount].length - 2 < counter) {
					setTimeout(typeMessages, 2000);
					clearInterval(textInterval);
				} else {
					counter++;
				}
			}
			
			console.log(writingContent);
		}, 75);
		
		messageCount < messages.length - 1 ? messageCount++ : messageCount = 0;
	}
	
	/* Not sure if I even want to use this
	function changeBackground() {
		// Red
		if (rgbchronological[0]) {
			rgb[0]++
			if (rgb[0] >= 200) {
				rgbchronological[0] = false;
			}
		} else {
			rgb[0]--;
			if (rgb[0] <= 50) {
				rgbchronological[0] = true;
			}
		}
		
		// Green
		if (rgbchronological[1]) {
			rgb[1] += 4;
			if (rgb[1] >= 200) {
				rgbchronological[1] = false;
			}
		} else {
			rgb[1] -= 2;
			if (rgb[1] <= 50) {
				rgbchronological[1] = true;
			}
		}
		
		// Blue
		if (rgbchronological[2]) {
			rgb[2] += 2
			if (rgb[2] >= 200) {
				rgbchronological[2] = false;
			}
		} else {
			rgb[2] -= 2;
			if (rgb[2] <= 50) {
				rgbchronological[2] = true;
			}
		}
		
		document.getElementById("phone").style.boxShadow = "0 0 20px rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
		document.getElementsByTagName("main")[0].querySelector("h1").style.textShadow = "0 0 15px rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
		
		setTimeout(changeBackground, 50);
		
	} */
});