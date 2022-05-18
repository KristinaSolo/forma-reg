let nameInput = document.getElementById('name');
console.log(nameInput.value);

let surnameInput =document.getElementById('surname');
console.log(surnameInput.value);

let emailInput = document.getElementById('email');
console.log(emailInput.value);

let replaypassInput =document.getElementById('replaypass');
console.log(replaypassInput.value);

let phoneInput = document.getElementById('phone');
console.log(phoneInput.value);




function clickMe() {
    document.getElementById('errorMessageName').innerHTML ='';
    document.getElementById('errorMessageSurname').innerHTML ='';
    document.getElementById('errorMessageEmail').innerHTML ='';
    document.getElementById('errorMessageReplaypass').innerHTML ='';
    document.getElementById('errorMessagePhone').innerHTML ='';

if (nameInput.value == ''){
document.getElementById('errorMessageName').innerHTML += 'Имя не заполнено<br>';
}

else if (surnameInput.value == ''){
document.getElementById('errorMessageSurname').innerHTML += 'Фамилия не заполнено<br>';
}

else if (emailInput.value == ''){
document.getElementById('errorMessageEmail').innerHTML += 'Email не заполнено<br>';
}

else if (replaypassInput.value == ''){
document.getElementById('errorMessageReplaypass').innerHTML += 'Пароль не заполнен<br>';
 }

else if (phoneInput.value == ''){
document.getElementById('errorMessagePhone').innerHTML += 'Телефон не заполнен<br>';
}
else alert('Добро пожаловать!' + nameInput.value );
}



