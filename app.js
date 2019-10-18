let title = document.querySelector(".product-details__name").textContent;
let price = document.querySelector(".js-product-price").textContent;
let div = document.createElement("div");
let path = document.querySelector("header");
div.innerHTML = `
<div id="sticky-nav" style="position: fixed;
top:110px;
display: none;
padding: 0 10px;
justify-content: space-between;
align-items: center;
visibiity: hidden;
background-color:#e4e4e4;
width: 100vw;" class='sticky-wrapper'>
    <div style="width:80%;" class='sticky-text-wrapper'>
           <p style="display: inline-block;" class='sticky-text'>${title}</p>
           <p style="float:right;" class='sticky-price'>${price}</p>
    </div>
    <button onClick = "handleClick()" name="button" type="submit" data-disable-with="Please wait ..." class="btn btn--filled product-details__submit js-add-to-cart-form-submit" disabled="" >Add to bag
    </button>
</div>`;

path.appendChild(div);

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 1000) {
    document.getElementById("sticky-nav").style.display = "flex";
  } else {
    document.getElementById("sticky-nav").style.display = "none";
  }
});
