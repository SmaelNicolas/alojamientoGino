let menuButton = document.getElementById("menuButton");
let navBarLista = document.getElementById("navBarLista");
let clicked = true;
let add = "";
let effect = "";

menuButton.addEventListener("click", () => {
	menuButton.classList.toggle("active");
	clicked ? (add = "flex") : (add = "none");
	clicked ? (effect = "aparecer") : (effect = "desaparecer");
	clicked = !clicked;
	navBarLista.style.display = `${add}`;
	navBarLista.style.animation = `${effect} 0.4s linear`;
});
