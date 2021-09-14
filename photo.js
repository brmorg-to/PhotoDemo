class Photo {
  constructor(width = 8, height = 10) {
    this.width = width;
    this.height = height;
  }

  price() {
    if (this.width === 8 && this.height == 10) {
      return 4;
    } else if (this.width === 10 && this.height === 12) {
      return 6;
    } else {
      return 10;
    }
  }

  toString() {
    return `This is a ${this.width} by ${
      this.height
    } photo and it costs $${this.price()}`;
  }
}

class MattedPhoto extends Photo {
  constructor(width, height, color) {
    super(width, height);
    this.color = color;
  }

  price() {
    return super.price() + 10;
  }

  toString() {
    return `This is a ${this.width} by ${this.height} matted ${
      this.color
    } photo and it costs $${this.price()}`;
  }
}

class FramedPhoto extends Photo {
  constructor(width, height, material, style) {
    super(width, height);
    this.material = material;
    this.style = style;
  }

  price() {
    return super.price() + 25;
  }

  toString() {
    return `This is a ${this.width} by ${
      this.height
    } framed photo. The style is ${this.style} and it costs $${this.price()}`;
  }
}

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
