let title = document.querySelector(".product-details__name").textContent;
let price;
let oldPrice = document.querySelector(".product-details__old-price");

if (oldPrice) {
  price = oldPrice.nextSibling.textContent.trim();
} else {
  price = document.querySelector(".js-product-price").textContent;
}

let div = document.createElement("div");
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

// injecting elements
path.appendChild(div);

// cloning the button
const sourceElement = document.querySelector(".js-product-details-submit-wrapper button");
const destination = document.querySelector(".button");
const copy = sourceElement.cloneNode(true);
destination.appendChild(copy);

let stickyBtn = document.querySelector(".button button");
stickyBtn.disabled = false;

// triger the new button with existing one
stickyBtn.onclick = () => sourceElement.click();

// hide & show the stickybar with scroll position
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 1800) {
    document.getElementById("sticky-nav").style.display = "flex";
  } else {
    document.getElementById("sticky-nav").style.display = "none";
  }
});
