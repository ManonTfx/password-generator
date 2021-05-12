const passwordOutput = document.getElementById('passwordOutput');

const dataLowercase = "azertyuiopqsdfghjklmwxcvbn".split('');
const dataUppercase = "AZERTYUIOPQSDFGHJKLMWXCVBN".split('');
const dataNumbers = "123456789".split('');
const dataSymbols = "~!@#$%^&*-_=+;:,.<>/?|".split('');


function generatePassword(){
    const data = [].concat(
    lowercase.checked ? dataLowercase : [],
    uppercase.checked ? dataUppercase : [],
    numbers.checked ? dataNumbers : [],
    symbols.checked ? dataSymbols : []
    );
    
    let passwordLength = parseInt(document.getElementById('displayPasswordLenght').value);
    let newPassword = '';

    if (data.length === 0) {
        passwordOutput.value = "Password Generator";
        alert('Please, select the password criteria');
        return;
    } 

    for (let i = 0; i < passwordLength; i++){
        newPassword += data[Math.floor(Math.random() * data.length)];
    }
    passwordOutput.value = newPassword;

    passwordOutput.select();
    document.execCommand('copy');
    generateButton.innerHTML = "Copié !";
    setTimeout(() => {generateButton.innerHTML = "Generate Password !"}, 3500);
}
