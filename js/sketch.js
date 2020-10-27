
let loading;
let posX;
let posY;

function preload(){
  loading = loadImage("html/p5project/loading.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHight);

  for(let i=0; i < 50; i++){
    image(loading, random(windowWidth), random(windowHight), 50, 50)
  }

}

function draw() {


}
