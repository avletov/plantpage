export const a = 0;
export let phone;
export let code;

//1.Ваши данные. Получение кода подтверждения
const userFormButton = document.getElementById('userFormButton');
const userForm = document.getElementById('userForm');

userFormButton.addEventListener('click', userFormProcess);

function userFormProcess() {
    const reg = /^\d[\d\(\)\ -]{4,14}\d$/;
    if (reg.test(userForm.elements.phoneField.value)) {
        phone = userForm.elements.phoneField.value;
        code = Math.floor(Math.random()*1000000);
        alert(`Ваш код подтверждения: ${code}`);
    } else {
        alert('Не корректный телефон'); 
    }
}