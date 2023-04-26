var passwordInput = document.getElementById('password');


function genPassword(){
var chars = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM#$%&@_";
var passwordLength = document.getElementById('length').value;
let password = "";

for(i = 1; i <= passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber+1);
}

passwordInput.value = password;

}


function copyPassword(){

    passwordInput.select();
    passwordInput.setSelectionRange(0,999);
    document.execCommand('copy');
}


var passwordLength = document.getElementById('length').value;
