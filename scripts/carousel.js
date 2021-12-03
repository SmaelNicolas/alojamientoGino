let imgObject = [
	"https://i.ibb.co/FJVw4xg/1.jpg",
	"https://i.ibb.co/GsSJsFv/11.jpg",
	"https://i.ibb.co/G02f4S8/3.jpg",
	"https://i.ibb.co/0DyZ566/2.jpg",
	"https://i.ibb.co/TMSk33F/6.jpg",
	"https://i.ibb.co/zhp5SvZ/5.jpg",
	"https://i.ibb.co/hCJnG2n/4.jpg",
	"https://i.ibb.co/0mxBXD5/9.jpg",
	"https://i.ibb.co/64wJm4d/10.jpg",
	"https://i.ibb.co/bb1jS5Y/7.jpg",
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {
	let mainView = document.getElementById("mainView");
	mainView.style.background = "url(" + imgObject[mainImg] + ")";
	mainView.style.backgroundRepeat = "no-repeat";
	mainView.style.backgroundSize = "contain";
	mainView.style.backgroundPosition = "center";

	let leftView = document.getElementById("leftView");
	leftView.style.background = "url(" + imgObject[prevImg] + ")";

	let rightView = document.getElementById("rightView");
	rightView.style.background = "url(" + imgObject[nextImg] + ")";

	let linkTag = document.getElementById("linkTag");
	linkTag.href = imgObject[mainImg];
}

function scrollRight() {
	prevImg = mainImg;
	mainImg = nextImg;
	if (nextImg >= imgObject.length - 1) {
		nextImg = 0;
	} else {
		nextImg++;
	}
	loadGallery();
}

function scrollLeft() {
	nextImg = mainImg;
	mainImg = prevImg;

	if (prevImg === 0) {
		prevImg = imgObject.length - 1;
	} else {
		prevImg--;
	}
	loadGallery();
}

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);

loadGallery();
