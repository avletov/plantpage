export const a = 0;
export let phone;
export let code;

//1.Ваши данные. Получение кода подтверждения
const userFormButton = document.getElementById('userFormButton');
const userForm = document.getElementById('userForm');

userFormButton.addEventListener('click', userFormProcess);

function userFormProcess() {
    const reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    if (reg.test(userForm.elements.phoneField.value)) {
        phone = userForm.elements.phoneField.value;
        code = Math.floor(Math.random()*900000+100000);
        alert(`Ваш код подтверждения: ${code}`);
    } else {
        alert('Не корректный телефон'); 
    }
}