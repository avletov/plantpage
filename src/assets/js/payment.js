import {code} from "./userForm";
import {orderCheck, orderSend} from "./summary";

export let keyword = false;

//3.Оплата
//Активация
const keywordForm = document.getElementById('keywordForm');
const keywordFormButton = document.getElementById('keywordFormButton');
const activationSuccessful = document.getElementById('activationSuccessful');

keywordFormButton.addEventListener('click', keywordControll);
anotherPaymentButton.addEventListener('click', anotherPaymentsOpen);

function keywordControll() {
    if (keywordForm.elements.keywordField.value == code) {
        keywordForm.style.display = "none";
        activationSuccessful.style.display = "flex";
        keyword = true;
        orderCheck();
        return;
    } 
    alert('Упс! Неверный код.');
}

function anotherPaymentsOpen() {
    otherPayments.style.display = "flex";
    anotherPaymentButton.style.display = "none";
}