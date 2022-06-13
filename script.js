// let nameInput = document.getElementById('name');
// console.log(nameInput.value);

// let surnameInput =document.getElementById('surname');
// console.log(surnameInput.value);

// let emailInput = document.getElementById('email');
// console.log(emailInput.value);

// let replaypassInput =document.getElementById('replaypass');
// console.log(replaypassInput.value);

// let phoneInput = document.getElementById('phone');
// console.log(phoneInput.value);

// let input = document.querySelectorAll(".formInput");


// function clickMe() {
//     document.getElementById('errorMessageName').innerHTML ='';
//     document.getElementById('errorMessageSurname').innerHTML ='';
//     document.getElementById('errorMessageEmail').innerHTML ='';
//     document.getElementById('errorMessageReplaypass').innerHTML ='';
//     document.getElementById('errorMessagePhone').innerHTML ='';

// if (nameInput.value == ''){
// document.getElementById('errorMessageName').innerHTML += 'Имя не заполнено<br>';
// }

// else if (surnameInput.value == ''){
// document.getElementById('errorMessageSurname').innerHTML += 'Фамилия не заполнено<br>';
// }

// else if (emailInput.value == ''){
// document.getElementById('errorMessageEmail').innerHTML += 'Email не заполнено<br>';
// }

// else if (replaypassInput.value == ''){
// document.getElementById('errorMessageReplaypass').innerHTML += 'Пароль не заполнен<br>';
//  }

// else if (phoneInput.value == ''){
// document.getElementById('errorMessagePhone').innerHTML += 'Телефон не заполнен<br>';
// }
// else alert('Добро пожаловать!' + nameInput.value );
// }

let errors = [];

function checkValiditi(input){
    let nameInput = document.getElementById('name');
    let validity = input.validity;
    if(validity.valueMissing){
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    }
    if(validity.patternMismatch){
        errors.push('В поле ' + input.placeholder +' залолнено неверно' );
    }
    if(validity.tooShort){
        errors.push(input.placeholder + ' не менее 6 символов')
    }
    if(validity.tooLong){
        errors.push(input.placeholder + ' не более 13 символов')
    }
  if(validity.typeMismatch){
    errors.push('В поле ' + input.placeholder +' введите коректные значения')
  }

//   if(validity !='') {alert('Добро пожаловать!' + nameInput.value );}
  
    
}


function clickMe(){
    errors = [];
    let inputs = document.querySelectorAll('input');

    for (let input of inputs){
        checkValiditi(input);
    }
   document.querySelector('#error').innerHTML = errors.join('.<br>')
  
   
}