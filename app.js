let title = document.querySelector(".product-details__name").textContent;
let price = document.querySelector(".js-product-price").textContent;
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
        style="width:80%; display: flex; justify-content: space-between;"
        class="sticky-text-wrapper"
      >
        <p class="sticky-text">${title}</p>
        <p class="sticky-price">${price}</p>
      </div>
      <span style="width: 18%; display: flex; justify-content: space-around;" class="button"></span>
    </div>`;

path.appendChild(div);
const sourceElement = document.querySelector(".js-product-details-submit-wrapper button");

const destination = document.querySelector(".button");

// const copy = document.importNode(sourceElement, true);
const copy = sourceElement.copyNode(true);
destination.appendChild(copy);

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
