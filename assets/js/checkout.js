// let everyBodyBtn=document.querySelector("#every-body-btn")

// let otherReceiverBox=document.querySelector("#otherReceiverBox")

// everyBodyBtn.addEventListener("click",function(){
//     otherReceiverBox.classList.remove("d-none")
// })



let receiverSelf = document.querySelector("#receiverSelf")
let receiverOther = document.querySelector("#receiverOther")
let otherReceiverBox = document.querySelector("#otherReceiverBox")

receiverOther.addEventListener("change", function () {
    otherReceiverBox.classList.remove("d-none")
})

receiverSelf.addEventListener("change", function () {
    otherReceiverBox.classList.add("d-none")
})

let saveaddress = document.querySelector("#saveaddress")
let shippingType = document.querySelector("#shippingType")
let productsBox = document.querySelector("#productsBox")
let billBox = document.querySelector("#billBox")
let error = document.querySelectorAll("#error")
let addAddressBtn=document.querySelector("#addAddressBtn")
let addres1=document.querySelector(".addres1")

saveaddress.addEventListener("click", function () {
    shippingType.classList.remove("disabled-step")
    billBox.classList.remove("disabled-step")
    productsBox.classList.remove("disabled-step")
addAddressBtn.classList.add("d-none")
addres1.classList.remove("d-none")

    error.forEach(elem => {
        elem.classList.add("d-none")


    });
})
let send = document.querySelector(".send-box")

let standardDelivery = document.querySelector("#standard-delivery")
let oldDate = document.querySelector(".old-date")
let expressDelivery = document.querySelector(".express")
let expressInput = document.querySelector("#expressinput")
let standardInput = document.querySelector("#standard")
let method = document.querySelector(".method")
standardDelivery.addEventListener("change", function () {

    send.classList.remove("d-none")
    standardInput.classList.add("active")

    oldDate.classList.add("d-none")
    expressDelivery.classList.add("d-none")
    expressInput.classList.remove("active")
    method.innerHTML = `
    <img style="width: 24px;" src="./assets/img/checkout/Delivery, Truck, Fast.svg"> <span>ارسال عادی</span>

`
// mainPayment.classList.add("d-none")

        ;
})
expressInput.addEventListener("change", function () {
    send.classList.add("d-none")
    oldDate.classList.add("d-none")
    standardInput.classList.remove("active")
    expressInput.classList.add("active")
    expressDelivery.classList.remove("d-none")
    method.innerHTML = `
                    <img style="width: 24px;" src="./assets/img/checkout/space-rocket.svg">
 <span>ارسال سریع</span>

`
// mainPayment.classList.add("d-none")


})

// let day = document.querySelectorAll(".day")

// day.addEventListener("click", function () {
// day.forEach(elem => {

    
//         elem.classList.add("active")

// });
// })

let day = document.querySelectorAll(".day");

day.forEach(elem => {
    elem.addEventListener("click", function () {

        day.forEach(item => {
            item.classList.remove("active");
        });

        elem.classList.add("active");
    });
});

// let com=document.querySelector(".complete-order-express")
// // let addAddressBtn=document.querySelector("#addAddressBtn")

// com.addEventListener("click",function(){
// // addAddressBtn.classList.add("d-none")
// console.log=("salam")

// });


let completeOrderExpress = document.querySelector(".complete-order-express");
// let shippingType=document.querySelector("#shippingType")

let mainPayment=document.querySelector(".main-payment")


completeOrderExpress.addEventListener("click", function () {
    addAddressBtn.classList.add("d-none");
    shippingType.classList.add("d-none");
    productsBox.classList.add("d-none");
    mainPayment.classList.remove("d-none")
});

let continueBtn=document.querySelector("#continueBtn")
let container=document.querySelector(".container")
let parentall=document.querySelector(".parentall")
let finaly=document.querySelector(".finaly")
continueBtn.addEventListener("click",function(){

container.classList.add("d-none")
parentall.classList.add("d-none")
finaly.classList.remove("d-none")
})