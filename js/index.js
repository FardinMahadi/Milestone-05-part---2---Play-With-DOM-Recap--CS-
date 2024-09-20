const item2 = document.getElementById("item2");
const parent = item2.parentElement;
console.log(parent);

const previousSibling = item2.previousElementSibling;
console.log(previousSibling);

const nextSibling = item2.nextSibling;
console.log(nextSibling);

const nextElementSibling = item2.nextElementSibling;
console.log(nextElementSibling);

const container4 = document.querySelector(".container4");
console.log(container4.innerText);
console.log(container4.textContent);
console.log(container4.innerHTML);
