let errors = [];
function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) 
        {errors.push ('Поле ' + input.placeholder + ' не заполнено');}

    if (validity.patternMismatch) 
		{ errors.push('Неверный формат заполнения Email'); }

}


function checkAll() {
    errors = [];
    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        checkValidity(input);
    }

   document.getElementById('errorMessage').innerHTML = errors.join('! <br>');
}

document.getElementById('password').onblur = function () {
    document.getElementById('errorPassword').innerHTML = '';
    if (document.getElementById('password').value.length < 8) 	
        {document.getElementById('errorPassword').innerHTML = 'Пароль должен содержать не менее 8 знаков!'; }}




