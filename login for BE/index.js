var inputContainer0=document.getElementsByClassName('input-container')[0];
var inputContainer1=document.getElementsByClassName('input-container')[1];
var loginUsername0=document.getElementsByClassName('login-username')[0];
var loginUsername1=document.getElementsByClassName('login-username')[1];


var flag1 = true;
var flag2 = true;
function clearTxt1(){
	if(flag1){
		loginUsername0.value ='';
		flag1 = false;
			}
	}

function clearTxt2(){
	if(flag2){
		loginUsername1.value ='';
		flag2 = false;
			}
	}	


function colorChangeToBlue1(){
	inputContainer0.style.border="3px solid rgb(157,227,238)"
}

function colorChangeToBlue2(){
	inputContainer1.style.border="3px solid rgb(157,227,238)"
}

function colorChangeToGrey1(){
	inputContainer0.style.border="3px solid #aaaaaa"
}

function colorChangeToGrey2(){
	inputContainer1.style.border="3px solid #aaaaaa"
}

function typeChangeToPassword(){
	loginUsername1.type="password"
}



