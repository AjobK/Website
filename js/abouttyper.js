window.addEventListener("load", function(e){
	var typedTextBox = document.getElementById("typedText");
	var typedTextParagraph = typedTextBox.querySelector("p");
	var typedText = typedTextParagraph.innerHTML;
	var hasScrolled = false;
	
	console.log(typedText);
	
	typedTextParagraph.innerHTML = "";
	
	var currentCount = 0;
	
	window.addEventListener("scroll", function(e){
		if (currentCount > 30) hasScrolled = true;
	});
	
	function typeCharacter(speed) {
		setTimeout(function() {
			// Markup
			switch(typedText[currentCount]) {
				case "<":
					var txtNow = "<";
					
					for (var x = 1; x < 4; x++) {
						txtNow += typedText[currentCount + x];
						console.log(txtNow);
					}
					
					if (txtNow == "<br>") {
						currentCount += 4;
						typedTextParagraph.innerHTML += txtNow;
					}
					break;
				default:
					// Nothing
					break;
			}
			
			typedTextParagraph.innerHTML += typedText[currentCount];
			
			// Speed leverage
			switch(typedText[currentCount]) {
				case ".":
					speed = 200;
					break;
				case ":":
					speed = 200;
					break;
				case ",":
					speed = 175;
					break;
				case "<":
					speed = 0;
					break;
				case ">":
					speed = 0;
					break;
				case " ":
					speed = 0;
					break;
				default:
					speed = 50;
					break;
			}
			
			currentCount++;
			
			if (currentCount < typedText.length) {
				typeCharacter(speed);
			}
			
		}, speed);
		
		if (!hasScrolled) window.scrollTo(0,document.body.scrollHeight);
	}
	
	typeCharacter(0);
});