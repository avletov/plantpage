import {phone} from "./userForm";
import {address, postDeliveryPlace} from "./deliveryMethod";
import {keyword} from "./payment";

export const d = 0;

const summaryButton = document.getElementById('summaryButton');
let paymentMethod = 'bank-card';

export function orderCheck() {
    if (keyword && (address != undefined || postDeliveryPlace != undefined)) {
        summaryButton.style.cursor = "pointer";
        summaryButton.style.backgroundColor = "green";
        summaryButton.addEventListener('click', orderSend);
    }
}

export function orderSend() {
    function isCheck(name) {
        return document.querySelector('input[name="' + name + '"]:checked');
    }
    paymentMethod = isCheck('payment-method').value;
    summaryButton.innerHTML = "Спасибо! Ваш заказ принят!";

    const orderData = {
        "phone": phone,
        "address": address,
        "postDeliveryPlace": postDeliveryPlace,
        "paymentMethod": paymentMethod
    }
    console.log(orderData);
}