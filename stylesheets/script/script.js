function redirectStart(){
	if(document.getElementById("inputStart").value.toLowerCase() == "start"){
		window.location.href = 'file:///C:/Users/Truls/Desktop/ReadyPlayerOne/lvl1.html';
	}
}

function redirectLvl1(){
	if(document.getElementById("inputLvl1").value.toLowerCase() == "challenge"){
		window.location.href = 'file:///C:/Users/Truls/Desktop/ReadyPlayerOne/lvl2.html';
	}
}


function redirectLvl2(){
	var input = document.getElementById("inputLvl1").value.toLowerCase();
	if( input == "learn" || input == "block" || input == "escape"){
		window.location.href = 'file:///C:/Users/Truls/Desktop/ReadyPlayerOne/lvl3.html';
	}
}

function redirectLvl3(){
	if(document.getElementById("inputLvl1").value.toLowerCase() == "start"){
		window.location.href = 'file:///C:/Users/Truls/Desktop/ReadyPlayerOne/lvl4.html';
	}
}

function redirectLvl4(){
	if(document.getElementById("inputLvl1").value.toLowerCase() == "start"){
		window.location.href = 'file:///C:/Users/Truls/Desktop/ReadyPlayerOne/final.html';
	}
}