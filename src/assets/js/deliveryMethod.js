import {orderCheck, orderSend} from "./summary";

export let address;
export let postDeliveryPlace;

//2.Способ получения
const courierDelivery = document.getElementById('courierDelivery');
const postDelivery = document.getElementById('postDelivery');
const postDeliveryButton = document.getElementById('postDeliveryButton');

const chooseDelivery = document.getElementById('chooseDelivery');
const chooseDelivery2 = document.getElementById('chooseDelivery2');
const deliveryPrice = document.getElementById('deliveryPrice');
const summaryDeliveryPrice = document.getElementById('summaryDeliveryPrice');
const summaryTotalPrice = document.getElementById('summaryTotalPrice');

//2.1.Курьерская доставка
//Доставка курьером. Всплывающее окно с формой
const courierDeliveryWindow = document.getElementById('courierDeliveryWindow');
const courierDeliveryForm = document.getElementById('courierDeliveryForm');

const placeField = document.getElementById('placeField');
const streetField = document.getElementById('streetField');
const homeField = document.getElementById('homeField');
const flatField = document.getElementById('flatField');

const courierDeliveryButtonOk = document.getElementById('courierDeliveryButtonOk');
const courierDeliveryButtonCancel = document.getElementById('courierDeliveryButtonCancel');
//

courierDelivery.addEventListener('click', courierDeliveryWindowOpen);
courierDeliveryButtonOk.addEventListener('click', courierDeliveryOk);
courierDeliveryButtonCancel.addEventListener('click', courierDeliveryCancel);

function courierDeliveryWindowOpen() {
    if (event.target.id == 'courierDeliveryButtonOk' || event.target.id == 'courierDeliveryButtonCancel') {
        return;
    }
    courierDelivery.style.border = "2px solid blue";
    postDelivery.style.borderColor = "white";
    courierDeliveryWindow.style.display = "flex";
}

function courierDeliveryOk(event) {
    if (anotherPaymentButton.style.display == "none") {
        return;
    }

    if (placeField.value * streetField.value * homeField.value * flatField.value != 0) {
        address = {
            place: placeField.value,
            street: streetField.value,
            home: homeField.value,
            flat: flatField.value
        }

        courierDeliveryWindow.style.display = "none";
        chooseDelivery.style.display = "none";
        chooseDelivery2.style.display = "none";
        postDeliveryButton.style.display = "none";
        postDelivery.style.cursor = "pointer";
        selectedDelivery.style.display = "flex";
        anotherPaymentButton.style.display = "flex";
        cardPaymemt.style.display = "flex";
        deliveryPrice.innerHTML = "100 ₽";
        summaryDeliveryPrice.innerHTML = "100 ₽";
        summaryDeliveryPrice.style.color = "red";
        summaryTotalPrice.innerHTML = "300 ₽"

        postDelivery.addEventListener('click', postDeliveryWindowOpen);
        orderCheck();
    }
}

function courierDeliveryCancel(event) {
    courierDeliveryWindow.style.display = "none";
}


//2.2.Доставка в пункты выдачи.
//Доставка в пункты выдачи. Элементы формы.
const postDeliveryWindow = document.getElementById('postDeliveryWindow');
const postDeliveryButtonOk = document.getElementById('postDeliveryButtonOk');
const postDeliveryButtonCancel = document.getElementById('postDeliveryButtonCancel');
//

postDeliveryButton.addEventListener('click', postDeliveryWindowOpen);
postDeliveryButtonOk.addEventListener('click', postDeliveryOk);
postDeliveryButtonCancel.addEventListener('click', postDeliveryCancel);

function postDeliveryWindowOpen() {
    if (event.target.id == 'selectPostDeliveryOk' || event.target.id == 'selectPostDeliveryCancel') {
        return;
    }
    postDeliveryWindow.style.display = "flex";
    postDelivery.style.border = "2px solid blue";
    courierDelivery.style.borderColor = "white";
}

function postDeliveryOk(event) {
    function isCheck(name) {
        return document.querySelector('input[name="' + name + '"]:checked');
    }
    postDeliveryPlace = isCheck('place-get').value;
    orderCheck();
    postDeliveryWindow.style.display = "none";
    chooseDelivery.style.display = "none";
    chooseDelivery2.style.display = "none";
    selectedDelivery.style.display = "flex";
    cardPaymemt.style.display = "flex";
    deliveryPrice.innerHTML = "0 ₽";
    summaryDeliveryPrice.innerHTML = "Бесплатно";
    summaryDeliveryPrice.style.color = "green";

    if (anotherPaymentButton.style.display == "none") {
        return;
    }
    anotherPaymentButton.style.display = "flex";
}

function postDeliveryCancel(event) {
    postDeliveryWindow.style.display = "none";
}