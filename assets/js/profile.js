// let all = document.querySelector("#sidebar-my-orders")
// let tableImg = document.querySelector(".table-img")
// let tableFill = document.querySelector(".table-filled")
// let orders = document.querySelector(".my-orders-li")
// let hoverRed = document.querySelector(".hover-red")
// flag = true
// all.addEventListener("click", function () {
//     if (flag == true) {
//         tableImg.classList.add("d-none");
//         tableFill.classList.remove("d-none");
//         // orders.classList.add("active");

//         flag = false

//     }
//     else {
//         flag = true
//         tableImg.classList.remove("d-none");
//         tableFill.classList.add("d-none");
//         // orders.classList.remove("active");
//     }
// });


// let editProfile = document.querySelector(".edit-profile")
// let information = document.querySelector(".information")
// let tableAsli = document.querySelector(".table-asli")
// let order = document.querySelector(".order")
// let orderHistory = document.querySelector(".order-history")
// let editTrigger = document.querySelector(".edit-trigger")
// let formEdit = document.querySelector(".form-edit")
// flag2 = true

// editProfile.addEventListener("click", function () {
//     if (flag2 == true) {

//         editProfile.classList.add("hover-red");
//         tableFill.classList.add("d-none");
//         tableImg.classList.add("d-none");
//         orders.classList.remove("hover-red");
//         information.classList.remove("d-none");
//         tableAsli.classList.add("d-none")
//         order.classList.add("d-none")
//         orderHistory.classList.add("d-none")
//         flag2 = false
//     }
//     else {
//         flag2 = true
//         editProfile.classList.remove("hover-red");
//         tableFill.classList.remove("d-none");
//         orders.classList.add("hover-red");
//         information.classList.add("d-none");
//         tableAsli.classList.remove("d-none")
//         order.classList.remove("d-none")
//         orderHistory.classList.remove("d-none");
//         if (flag == true) {
//             tableImg.classList.remove("d-none");
//             tableFill.classList.add("d-none");
//         } else {
//             tableImg.classList.add("d-none");
//             tableFill.classList.remove("d-none");
//         }

//     }
// });
// editTrigger.addEventListener("click", function () {

//     formEdit.classList.remove("d-none")
//     information.classList.add("d-none");

// });

// let btnEdit = document.querySelector(".btn-edit")
// btnEdit.addEventListener("click", function () {
//     formEdit.classList.add("d-none")
//     information.classList.remove("d-none");

// });
// let sidebarAddressBtn = document.querySelector(".sidebar-address-btn")
// let addressCard = document.querySelector(".address-card")
// let profileLeft = document.querySelector(".profile-left")
// let flag3 = true
// sidebarAddressBtn.addEventListener("click", function () {
//     if (flag3 == true) {
//         profileLeft.classList.add("d-none");

//         addressCard.classList.remove("d-none");
//         orders.classList.remove("hover-red");
//         sidebarAddressBtn.classList.add("hover-red");

//         flag3 = false

//     }
//     else {
//         flag3 = true
//         sidebarAddressBtn.classList.remove("hover-red");
//         addressCard.classList.add("d-none");
//         profileLeft.classList.remove("d-none");
//         sidebarAddressBtn.classList.remove("hover-red");


//     }
// });
// // برای دکمه ادرس 
// let btnAddAddress = document.querySelector(".btn-add-address")
// let addressFill = document.querySelector(".address-fill")

// btnAddAddress.addEventListener("click", function () {
//     addressFill.classList.remove("d-none")
//     addressCard.classList.add("d-none")
// })

// // برای دکمه فیلترکیف پول
// let filterBtn = document.querySelector(".wallet-filter-btn")
// let walletFilled = document.querySelector(".wallet-filled")
// let walletEmpty = document.querySelector(".wallet-empty")
// filterBtn.addEventListener("click", function () {
//     walletEmpty.classList.add("d-none")
//     walletFilled.classList.remove("d-none")

// })
// const sidebarBtns = [btnOrders, btnEditProfile, btnAddress, btnWallet].filter(Boolean);
// const allBlocks = [order, orderHistory, information, formEdit, addressCard, walletSection].filter(Boolean);


// function showSection(activeBtn, blocksToShow) {
//   allBlocks.forEach((b) => b.classList.add("d-none"));
//   blocksToShow.filter(Boolean).forEach((b) => b.classList.remove("d-none"));
//   sidebarBtns.forEach((btn) => btn.classList.remove("hover-red"));
//   activeBtn.classList.add("hover-red");
// }


// function showState(emptyEl, filledEl, showFilled) {
//   if (emptyEl) emptyEl.classList.toggle("d-none", showFilled);
//   if (filledEl) filledEl.classList.toggle("d-none", !showFilled);
// }

// دکمه‌های سایدبار
let btnOrders = document.querySelector("#sidebar-my-orders");
let btnEditProfile = document.querySelector(".edit-profile");
let btnAddress = document.querySelector(".sidebar-address-btn");
let btnWallet = document.querySelector(".sidebar-wallet-btn");
let sidebarBtns = [btnOrders, btnEditProfile, btnAddress, btnWallet];

// بلوک‌های صفحه
let profileLeft = document.querySelector(".profile-left");
let order = document.querySelector(".order");
let orderHistory = document.querySelector(".order-history");
let information = document.querySelector(".information");
let formEdit = document.querySelector(".form-edit");
let addressCard = document.querySelector(".address-card");
let addressFill = document.querySelector(".address-fill");
let walletSection = document.querySelector(".wallet-section");
let allBlocks = [profileLeft, order, orderHistory, information, formEdit, addressCard, addressFill, walletSection];

// حالت خالی / پر
let tableImg = document.querySelector(".table-img");
let tableFill = document.querySelector(".table-filled");
let walletEmpty = document.querySelector(".wallet-empty");
let walletFilled = document.querySelector(".wallet-filled");

// تابع ۱: کدوم بخش نمایش داده بشه
function showSection(activeBtn, blocksToShow) {
  allBlocks.forEach(function (b) {
    b.classList.add("d-none");
  });
  blocksToShow.forEach(function (b) {
    b.classList.remove("d-none");
  });
  sidebarBtns.forEach(function (btn) {
    btn.classList.remove("hover-red");
  });
  activeBtn.classList.add("hover-red");
}

// تابع ۲: داخل یک بخش، خالی یا پر
function showState(emptyEl, filledEl, showFilled) {
  emptyEl.classList.toggle("d-none", showFilled);
  filledEl.classList.toggle("d-none", !showFilled);
}

// سایدبار
btnOrders.addEventListener("click", function () {
  showSection(btnOrders, [profileLeft, order, orderHistory]);
  showState(tableImg, tableFill,false);
});

btnEditProfile.addEventListener("click", function () {
  showSection(btnEditProfile, [profileLeft, information]);
});

btnAddress.addEventListener("click", function () {
  showSection(btnAddress, [addressCard]);
});

btnWallet.addEventListener("click", function () {
  showSection(btnWallet, [walletSection]);
  showState(walletEmpty, walletFilled, false);
});

// آدرس: از حالت خالی به پر
document.querySelector(".btn-add-address").addEventListener("click", function () {
  showState(addressCard, addressFill, true);
});

// کیف پول: فیلتر
document.querySelector(".wallet-filter-btn").addEventListener("click", function () {
  showState(walletEmpty, walletFilled, true);
});
document.querySelector(".order-history .filter-btn").addEventListener("click", function () {
  showState(tableImg, tableFill, true);
});
// ویرایش پروفایل: نمایش اطلاعات <-> فرم
document.querySelector(".edit-trigger").addEventListener("click", function (e) {
  e.preventDefault();
  showState(information, formEdit, true);
});

document.querySelector(".btn-edit").addEventListener("click", function () {
  showState(information, formEdit, false);
});

let receiverSelf = document.querySelector("#receiverSelf")

let receiverOther = document.querySelector("#receiverOther")

let otherReceiverBox = document.querySelector("#otherReceiverBox")
receiverOther.addEventListener("change", function () {
    otherReceiverBox.classList.remove("d-none")
})

receiverSelf.addEventListener("change", function () {
    otherReceiverBox.classList.add("d-none")
})
