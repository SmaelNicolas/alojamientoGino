let navbarSupportedContent = document.getElementById("navbarSupportedContent");

let linkMenuHamb = document.getElementsByClassName("nav-link");
linkMenuHamb = [...linkMenuHamb];

linkMenuHamb.forEach((link) => {
	link.addEventListener("click", (e) => {
		navbarSupportedContent.classList.remove("show");
		console.log("HACE CLICK");
	});
});
