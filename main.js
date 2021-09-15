import { Photo, MattedPhoto, FramedPhoto } from "./photo.js";

//Class photo objects
let firstPhoto = new Photo();
let secondPhoto = new Photo(10, 12);
let thirdPhoto = new Photo(20, 25);

//Child classes objects
let mattedPhoto1 = new MattedPhoto(8, 10, "pink");
let mattedPhoto2 = new MattedPhoto(10, 12, "brown");
let mattedPhoto3 = new MattedPhoto(15, 20, "blue");

let framedPhoto1 = new FramedPhoto(8, 10, "wood", "modern");
let framedPhoto2 = new FramedPhoto(10, 12, "steel", "classic");
let framedPhoto3 = new FramedPhoto(15, 20, "glass", "artistic");

console.log("###############################################");
console.log(firstPhoto.toString());
console.log(secondPhoto.toString());
console.log(thirdPhoto.toString());
console.log("###############################################");
console.log(mattedPhoto1.toString());
console.log(mattedPhoto2.toString());
console.log(mattedPhoto3.toString());
console.log("###############################################");
console.log(framedPhoto1.toString());
console.log(framedPhoto2.toString());
console.log(framedPhoto3.toString());
console.log("###############################################");

//Get elements

let photo = document.querySelector(".photo");
let photo2 = document.querySelector(".photo2");
let matted = document.querySelector(".matted");
let matted2 = document.querySelector(".matted2");
let framed = document.querySelector(".framed");
let framed2 = document.querySelector(".framed2");

photo.textContent = firstPhoto.toString();
photo2.textContent = secondPhoto.toString();
matted.textContent = mattedPhoto1.toString();
matted2.textContent = mattedPhoto2.toString();
framed.textContent = framedPhoto1.toString();
framed2.textContent = framedPhoto2.toString();
