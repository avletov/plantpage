export const a = 0;

//1.Ваши данные. Получение кода подтверждения
const userFormButton = document.getElementById('userFormButton');
const userForm = document.getElementById('userForm');

userFormButton.addEventListener('click', userFormProcess);

let phone;
let code;

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


//2.Способ получения
const courierDelivery = document.getElementById('courierDelivery');
const postDelivery = document.getElementById('postDelivery');
const postDeliveryButton = document.getElementById('postDeliveryButton');

const chooseDelivery = document.getElementById('chooseDelivery');
const chooseDelivery2 = document.getElementById('chooseDelivery2');
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
    postDelivery.style.border = "none";
    courierDeliveryWindow.style.display = "flex";
}

let address;

function courierDeliveryOk(event) {
    courierDeliveryWindow.style.display = "none";

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

        chooseDelivery.style.display = "none";
        chooseDelivery2.style.display = "none";
        postDeliveryButton.style.display = "none";
        postDelivery.style.cursor = "pointer";
        postDelivery.addEventListener('click', postDeliveryWindowOpen);
        selectedDelivery.style.display = "flex";
        anotherPaymentButton.style.display = "flex";
        cardPaymemt.style.display = "flex";

        orderCheck();
    }
}

function courierDeliveryCancel(event) {
    courierDeliveryWindow.style.display = "none";
}


//2.2.Доставка в пункты выдачи.
const postDeliveryWindow = document.getElementById('postDeliveryWindow');

postDeliveryButton.addEventListener('click', postDeliveryWindowOpen);

//Доставка в пункты выдачи. Элементы формы.
const postDeliveryButtonOk = document.getElementById('postDeliveryButtonOk');
const postDeliveryButtonCancel = document.getElementById('postDeliveryButtonCancel');

postDeliveryButtonOk.addEventListener('click', postDeliveryOk);
postDeliveryButtonCancel.addEventListener('click', postDeliveryCancel);


function postDeliveryWindowOpen() {
    if (event.target.id == 'selectPostDeliveryOk' || event.target.id == 'selectPostDeliveryCancel') {
        return;
    }
    postDeliveryWindow.style.display = "flex";
    postDelivery.style.border = "2px solid blue";
    courierDelivery.style.border = "none";
}

let postDeliveryPlace;

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

    if (anotherPaymentButton.style.display == "none") {
        return;
    }
    anotherPaymentButton.style.display = "flex";
}

function postDeliveryCancel(event) {
    postDeliveryWindow.style.display = "none";
}


//3.Оплата
//Активация
const keywordForm = document.getElementById('keywordForm');
const keywordFormButton = document.getElementById('keywordFormButton');
const activationSuccessful = document.getElementById('activationSuccessful');

keywordFormButton.addEventListener('click', keywordControll);

let keyword = false;

function keywordControll() {
    if (keywordForm.elements.keywordField.value == code) {
        keywordForm.style.display = "none";
        activationSuccessful.style.display = "flex";
        keyword = true;
        orderCheck();
        return;
    } 
    alert('упс!');
}


anotherPaymentButton.addEventListener('click', anotherPaymentsOpen);

function anotherPaymentsOpen() {
    otherPayments.style.display = "flex";
    anotherPaymentButton.style.display = "none";
}



//Подтверждение заказа
const summaryButton = document.getElementById('summaryButton');
let paymentMethod = 'bank-card';

function orderCheck() {
    if (keyword && (address != undefined || postDeliveryPlace != undefined)) {
        summaryButton.style.cursor = "pointer";
        summaryButton.style.backgroundColor = "green";
        summaryButton.addEventListener('click', orderSend);
    }
}

function orderSend() {
    function isCheck(name) {
        return document.querySelector('input[name="' + name + '"]:checked');
    }
    paymentMethod = isCheck('payment-method').value;

    const orderData = {
        "phone": phone,
        "address": address,
        "postDeliveryPlace": postDeliveryPlace,
        "paymentMethod": paymentMethod
    }
    console.log(orderData);
}







