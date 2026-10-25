let faqLogin=document.querySelector(".faq-login")
let questionsMain=document.querySelector(".questions-main")
let faqSection1=document.querySelector(".faq-section1")



faqLogin.addEventListener("click",function(){
questionsMain.classList.add("d-none")
faqSection1.classList.remove("d-none")
faqLogin.classList.add("selected")
questionBox2.classList.add("d-none")
faqOrder.classList.remove("selected")
faqShipping.classList.remove("selected")
questionBox3.classList.add("d-none")
faqShipping.classList.remove("selected")
faqShipping.classList.remove("selected")
faqTracking.classList.remove("selected")
questionBox5.classList.add("d-none")
questionBox4.classList.add("d-none")

faqRefund.classList.remove("selected")


questionBox6.classList.add("d-none")


faqOther.classList.remove("selected")




})
let faqOrder=document.querySelector(".faq-order")
let questionBox2=document.querySelector(".faq-order-process-section ")


faqOrder.addEventListener("click",function(){
questionsMain.classList.add("d-none")
questionBox2.classList.remove("d-none")
faqOrder.classList.add("selected")
faqSection1.classList.add("d-none")
questionBox3.classList.add("d-none")
faqLogin.classList.remove("selected")
faqShipping.classList.remove("selected")
faqTracking.classList.remove("selected")
questionBox5.classList.add("d-none")


faqRefund.classList.remove("selected")
questionBox6.classList.add("d-none")


faqOther.classList.remove("selected")



})
let faqShipping=document.querySelector(".faq-shipping")
let questionBox3=document.querySelector(".faq-shipping-method-section ")

faqShipping.addEventListener("click",function(){
questionsMain.classList.add("d-none")
faqSection1.classList.add("d-none")
questionBox2.classList.add("d-none")
questionBox3.classList.remove("d-none")
faqShipping.classList.add("selected")
faqLogin.classList.remove("selected")
faqLogin.classList.remove("selected")
faqOrder.classList.remove("selected")
faqTracking.classList.remove("selected")
questionBox5.classList.add("d-none")


faqRefund.classList.remove("selected")

questionBox6.classList.add("d-none")


faqOther.classList.remove("selected")




})

let faqTracking=document.querySelector(".faq-tracking")
let questionBox4=document.querySelector(".faq-order-tracking-section ")
faqTracking.addEventListener("click",function(){
questionsMain.classList.add("d-none")
faqSection1.classList.add("d-none")
questionBox2.classList.add("d-none")
questionBox3.classList.add("d-none")
questionBox4.classList.remove("d-none")

faqTracking.classList.add("selected")

faqShipping.classList.remove("selected")
faqLogin.classList.remove("selected")
faqLogin.classList.remove("selected")
faqOrder.classList.remove("selected")
questionBox5.classList.add("d-none")


faqRefund.classList.remove("selected")
questionBox6.classList.add("d-none")


faqOther.classList.remove("selected")



})
let faqRefund=document.querySelector(".faq-refund")
let questionBox5=document.querySelector(".faq-refund-process-section ")
faqRefund.addEventListener("click",function(){
questionsMain.classList.add("d-none")
faqSection1.classList.add("d-none")
questionBox2.classList.add("d-none")
questionBox3.classList.add("d-none")
questionBox4.classList.add("d-none")
// faqSection1.classList.add("d-none")

questionBox5.classList.remove("d-none")


faqRefund.classList.add("selected")

faqTracking.classList.remove("selected")
faqShipping.classList.remove("selected")
faqLogin.classList.remove("selected")
faqLogin.classList.remove("selected")
faqOrder.classList.remove("selected")
faqLogin.classList.remove("selected")
questionBox6.classList.add("d-none")


faqOther.classList.remove("selected")




})
let faqOther=document.querySelector(".faq-other")
let questionBox6=document.querySelector(".faq-other-section ")
faqOther.addEventListener("click",function(){
questionsMain.classList.add("d-none")
faqSection1.classList.add("d-none")
questionBox2.classList.add("d-none")
questionBox3.classList.add("d-none")
questionBox4.classList.add("d-none")
questionBox5.classList.add("d-none")

questionBox6.classList.remove("d-none")


faqOther.classList.add("selected")

faqTracking.classList.remove("selected")
faqShipping.classList.remove("selected")
faqLogin.classList.remove("selected")
faqLogin.classList.remove("selected")
faqOrder.classList.remove("selected")
faqLogin.classList.remove("selected")
faqRefund.classList.remove("selected")




})
