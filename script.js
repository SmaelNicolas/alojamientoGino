let menuButton = document.getElementById("menuButton");
let navBarLista = document.getElementById("navBarLista");
let navBarLi = document.getElementsByClassName("navBarListaLink");
navBarLi = [...navBarLi];
let clicked = true;
let add = "";
let effect = "";
let positionY;

menuButton.addEventListener("click", () => {
	menuButton.classList.toggle("active");
	clicked ? (add = "flex") : (add = "none");
	clicked ? (effect = "aparecer") : (effect = "desaparecer");
	clicked = !clicked;
	navBarLista.style.display = `${add}`;
	navBarLista.style.animation = `${effect} 0.2s linear`;
});

const position = () => {
	setInterval(() => {
		positionY = window.scrollY + 35;
		navBarLista.style.top = `${positionY}px`;
	}, 1);
};

navBarLi.forEach((li) => {
	li.addEventListener("click", () => {
		menuButton.classList.toggle("active");
		clicked = !clicked;
		add = "none";
		navBarLista.style.display = add;
	});
});

setInterval(() => {
	add === "flex"
		? (document.body.style.overflow = "hidden")
		: (document.body.style.overflow = "unset");
	position();
}, 1);
