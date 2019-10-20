let title = document.querySelector(".product-details__name").textContent;
// let price = document.querySelector(".js-product-price").textContent;
let price;
let oldPrice = document.querySelector(".product-details__old-price");

if (oldPrice) {
  price = oldPrice.nextSibling.textContent.trim();
} else {
  price = document.querySelector(".js-product-price").textContent;
}

// let buttonPath = document.querySelector(".js-product-details-submit-wrapper button");
// let button = buttonPath.toString();
let div = document.createElement("div");
// let buttonDiv = document.createElement("div");
let path = document.querySelector("header");
div.innerHTML = `
<div
      id="sticky-nav"
      style="position: fixed;
            top:110px;
            display: none;
            padding: 0 10px;
            justify-content: space-between;
            align-items: center;
            background-color:#e4e4e4;
            width: 100vw;"
      class="sticky-wrapper"
    >
      <div
        style="width:80%; display: flex; justify-content: space-between; align-items:center"
        class="sticky-text-wrapper"
      >
        <p style="margin: 0;" class="sticky-text">${title}</p>
        <p style="margin: 0;" class="sticky-price">${price}</p>
      </div>
      <span style="width: 18%; display: flex; justify-content: space-around;" class="button"></span>
    </div>`;

path.appendChild(div);
const sourceElement = document.querySelector(".js-product-details-submit-wrapper button");

const destination = document.querySelector(".button");
// const copy = document.importNode(sourceElement, true);
const copy = sourceElement.cloneNode(true);
destination.appendChild(copy);
let stickyBtn = document.querySelector(".button button")
stickyBtn.disabled = false;
stickyBtn.onclick = () => sourceElement.click();
// if (sourceElement.disabled) {
//   document.querySelector(".button button").disabled = true;
// } else {
//   document.querySelector(".button button").disabled = false;
// }

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 1500) {
    document.getElementById("sticky-nav").style.display = "flex";
  } else {
    document.getElementById("sticky-nav").style.display = "none";
  }
});

{
  /* <button onClick = "handleClick()" name="button" type="submit" data-disable-with="Please wait ..." class="btn btn--filled product-details__submit js-add-to-cart-form-submit" disabled="" >Add to bag
    </button> */
}

let radio = document.querySelector(".js-product-details-size-radio");

radio.focus;

radio.focus();

radio.onfocus();

radio.formAction;
