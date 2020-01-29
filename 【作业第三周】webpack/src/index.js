import "./index.scss";
import logo from "./logo.png";
import happy from "./happy.jpg";

let logoImg = new Image();
let happyImg = new Image();

logoImg.src = logo;
happyImg.src = happy;

let picElement = document.createElement("div");

picElement.appendChild(happyImg);
picElement.appendChild(logoImg);

document.body.appendChild(picElement);

console.log("hello webpack!");
