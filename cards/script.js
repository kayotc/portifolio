const fr = document.querySelector(".FirstRight");
const fb = document.querySelector(".FirstBottom");

const sl = document.querySelector(".SecondLeft");
const sb = document.querySelector(".SecondBottom");

const tl = document.querySelector(".ThirdLeft");
const tt = document.querySelector(".ThirdTop");

const ft = document.querySelector(".FourthTop");
const frt = document.querySelector(".FourthRight");


const cardOne = document.querySelector(".cardOne");
const cardTwo = document.querySelector(".cardTwo");
const cardTree = document.querySelector(".cardTree");
const cardFour = document.querySelector(".cardFour");

const containerOne = document.querySelector(".cardsOne");
const containerTwo = document.querySelector(".cardsTwo");

function left(){
    cardOne.classList.toggle("back");
    cardTwo.classList.toggle("back");
    cardTree.classList.toggle("back");
    cardFour.classList.toggle("back");

    cardOne.classList.remove("hide");
    cardTwo.classList.remove("hide");
    cardTree.classList.remove("hide");
    cardFour.classList.remove("hide");
}

function right(){
    cardOne.classList.toggle("hide");
    cardTwo.classList.toggle("hide");
    cardTree.classList.toggle("hide");
    cardFour.classList.toggle("hide");

    cardOne.classList.remove("back");
    cardTwo.classList.remove("back");
    cardTree.classList.remove("back");
    cardFour.classList.remove("back");
}

function topper(){
    containerOne.classList.toggle("top");
    containerTwo.classList.toggle("top");

    containerOne.classList.remove("bottom");
    containerTwo.classList.remove("bottom");
    
}

function bottom(){
    containerOne.classList.toggle("bottom");
    containerTwo.classList.toggle("bottom");

    containerOne.classList.remove("top");
    containerTwo.classList.remove("top");
}

fr.addEventListener("click", () => {
    right();
});
fb.addEventListener("click", () => {
    bottom();
});

sl.addEventListener("click", () => {
    left();
});
sb.addEventListener("click", () => {
    bottom();
});

tl.addEventListener("click", () => {
    left();
});
tt.addEventListener("click", () => {
    topper();
});


frt.addEventListener("click", () => {
    right();
});
ft.addEventListener("click", () => {
    topper();
});


const text = "Desenvolvedor Web";
const typingEl = document.getElementById("typing");

let index = 0;
let isDeleting = false;

function typeEffect() {
    if (!isDeleting && index <= text.length) {
    typingEl.textContent = text.substring(0, index);
    index++;
    setTimeout(typeEffect, 120); // velocidade ao digitar
    } 
    else if (isDeleting && index >= 0) {
    typingEl.textContent = text.substring(0, index);
    index--;
    setTimeout(typeEffect, 80); // velocidade ao apagar
    } 
    else {
    isDeleting = !isDeleting; 
    setTimeout(typeEffect, 1500); // pausa entre digitar/apagar
    }
}

typeEffect();

