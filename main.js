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
