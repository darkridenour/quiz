

let adolescence;
let bitch;
let bird;
let funeral;
let god;
let jerry;
let michealcera;
let notalent;
let people;
let pheobe;
let sad;
let sensitive;
let toast;
let check;
let check1;
let check2;
let check3;
let check4;
let check5;
let check6;
let check7;
let check8;
let check9;
let imgs = [];
let randomImage;
let quiz;

function preload(){
  for (let i=0; i<13; i++) {
    adolescence = loadImage("images/0.jpg")
    bitch = loadImage("images/1.jpg")
    bird = loadImage("images/2.jpg")
    funeral = loadImage("images/3.jpg")
    god = loadImage("images/4.jpg")
    jerry = loadImage("images/5.jpg")
    michealcera = loadImage("images/6.jpg")
    notalent = loadImage("images/7.jpg")
    people = loadImage("images/8.jpg")
    pheobe = loadImage("images/9.jpg")
    sad = loadImage("images/10.jpg")
    sensitive = loadImage("images/11.jpg")
    toast = loadImage("images/12.jpg")
    imgs[i] = loadImage("images/" + i + ".jpg");
  }
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
  imageMode(CENTER);

  buttonAsk = createButton("damn that's crazy");
  buttonAsk.position(400,400);
  buttonAsk.mousePressed(ask);

}

function ask(){
  if (buttonAsk.mousePressed()){
    buttonAsk.mousePressed(draw)

}
function draw(){
  randomImage = int(random(imgs.length));
  background(0);
  image(imgs[randomImage], windowWidth/2, windowHeight/2);
}
}
