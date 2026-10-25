let product=document.querySelectorAll(".product")
// let product2=document.querySelector(".product2")
// let product3=document.querySelector(".product3")
// let product4=document.querySelector(".product4")
// let product5=document.querySelector(".product5")
// let product6=document.querySelector(".product6")
let selectedProducts = [];


product.forEach(elem => {
    

elem.addEventListener("click",function(){
 let item = {
 id: elem.dataset.id,
  name: elem.dataset.name,
  img: elem.dataset.img,    };

     let exists = selectedProducts.some(function (p) {
      return p.id === item.id;
    });
    if (exists) {
      return;
    }

    if (selectedProducts.length >=2) {
      return;
    }




    selectedProducts.push(item);
selectedProducts.push(item);
render();

})





});


function render() {
  let box = document.getElementById("compare-box");
  box.innerHTML = "";

  selectedProducts.forEach(function (p) {
    box.innerHTML += `
      <div class="selected-item col-2">
        <div class="compare-card fill d-flex flex-column gap-2 justify-content-between border rounded p-2 ">

                <div>
                    <img src="${p.img}">
                    <span class="text-danger">حذف</span>
                </div>
                <div class="d-flex flex-row">
                    <img src="./assets/img/compare/pic (2).svg">
                    <div class="d-flex flex-column font14 gap-1">
                        <span class="text-end ">${p.name}</span>
                        <span class="text-end">N-lITE 203
                        </span>
                        <span class="d-flex flex-column text-start">
                            <span class="text-decoration-line-through">۲,۴۰۰,۰۰۰</span>
                            <span class="font16 text-black">۱,۶۴۰,۰۰۰ تومان </span>

                        </span>
                    </div>
                </div>
                <div>
                    <button class="red border-0 text-light rounded-5 w-100 py-2 px-3 ">افزودن به سبد خرید</button>
                </div>
            </div>
      </div>
    `;
  });
}









array.forEach(elem => {
    
});

forEach


product.addEventListener("click",function(){


})



















// product.addEventListener("click",function(){
     
// };

//  console.log(product);

//     selectedProducts.push(product);

//     console.log(selectedProducts);
// );