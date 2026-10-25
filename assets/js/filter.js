let seoText = document.querySelector(".seo-text");
let seoToggle = document.querySelector(".seo-text-toggle");

seoToggle.addEventListener("click", function () {
  seoText.classList.toggle("open");

  if (seoText.classList.contains("open")) {
    seoToggle.textContent = "مشاهده کمتر";
  } else {
    seoToggle.textContent = "مشاهده بیشتر...";
  }
});


let btnFilter = document.querySelector(".category-filter-btn")

let filterBox = document.querySelector(".filter")
const row = document.querySelector('.products-row');

btnFilter.addEventListener("click", function () {


  btnFilter.classList.add("d-none")
  filterBox.classList.remove("d-none")
 row.classList.toggle('filter-open');
})




let btnClose = document.querySelector(".close")

btnClose.addEventListener("click", function () {
  filterBox.classList.add("d-none")
  btnFilter.classList.remove("d-none")


})







