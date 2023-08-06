//**************** Show Nav (Bar) ****************


let bars = document.querySelector(".bars");
let close = document.querySelector(".close");
let nav = document.querySelector("ul.navbar");

bars.addEventListener("click", () => {
    nav.style.right = 0;
});

close.addEventListener("click", () => {
    nav.style.right = `-300px`;
})


//**************** Cart Page ****************

let price = document.querySelectorAll("td.price");
let tprice = document.querySelectorAll("td.tprice");
let quantity = document.querySelectorAll("td.quantity input");


for (let i = 0; i < price.length; i++) {
    tprice[i].innerHTML = price[i].innerHTML;
}



function calc() {
    for (let i = 0; i < price.length; i++) {
        tprice[i].innerHTML = `$${(Number(price[i].innerHTML.slice(1)) * quantity[i].value).toFixed(2)}`;
    }
    subtotal();
    totalPrice();
}

let subtotalprice = document.querySelector(".subtotalprice");

function subtotal() {
    let sub = 0;
    for (let i = 0; i < tprice.length; i++) {
        sub += Number(tprice[i].innerHTML.slice(1));
    }
    subtotalprice.innerHTML = `$ ${sub.toFixed(2)}`;
}

let total = document.querySelector("td.total");
let shipping = document.querySelector("td.shipping");
let ship;

window.onload = subtotal();
window.onload = totalPrice();

let removeProduct = document.querySelectorAll("i.remove");
removeProduct.forEach((el) => {
    el.addEventListener("click", (eo) => {
        el.parentElement.parentElement.remove();
        tprice = document.querySelectorAll("td.tprice");
        subtotal();
        totalPrice();
    });

})


function totalPrice() {
    if (shipping.innerHTML === "Free") {
        ship = 0;
    } else {
        ship = Number(shipping.innerHTML.sli$(1));
    }
    total.innerHTML = `$ ${Number(subtotalprice.innerHTML.slice(1)) + ship}`;
}