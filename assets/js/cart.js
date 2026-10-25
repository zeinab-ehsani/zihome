let cartCurrent = document.querySelector(".cart-current")

let cartLater = document.querySelector(".cart-later")
let deleteCurrent = document.querySelector(".delete-current")
let cartItem = document.querySelector(".cart-item")
let leftCart = document.querySelector(".left-cart")

let shoppingEmpty = document.querySelector(".shopping-empty")


// let active=document.querySelector(".active")
cartLater.addEventListener("click", function () {

    deleteCurrent.classList.add("d-none")
    cartItem.classList.add("d-none")
    leftCart.classList.add("d-none")
    shoppingEmpty.classList.remove("d-none")
    cartLater.classList.add("active")
    cartCurrent.classList.remove("active")
    leftCartBuy.classList.add("d-none")

})

cartCurrent.addEventListener("click", function () {

    deleteCurrent.classList.remove("d-none")
    cartItem.classList.remove("d-none")
    leftCart.classList.remove("d-none")
    shoppingEmpty.classList.add("d-none")
    cartLater.classList.remove("active")
    cartCurrent.classList.add("active")
        leftCartBuy.classList.add("d-none")

})
let leftCartBuy = document.querySelector(".left-cart-buy")

let btnMove=document.querySelector(".btn-move")


btnMove.addEventListener("click",function(){
    leftCart.classList.add("d-none")

    leftCartBuy.classList.remove("d-none")
})
