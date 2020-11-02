

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
let yes;
let imgs = [];
let randomImage;

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
  background(40,50,20);
  imageMode(CENTER);

  buttonAsk1 = createButton("time to take your quiz");
  buttonAsk1.position(50,100);
  buttonAsk1.mousePressed(ask);

}

function ask(){
  if (buttonAsk1.mousePressed()){
    buttonAsk2 = createButton("question #1");
    buttonAsk2.position(500,200);
    buttonAsk2.mousePressed(mousePressed);
  }
}
function mousePressed(){
  if (buttonAsk2.mousePressed()) {
      fill(0);
      text("are you happy in life?", 500, 250);

      check = createCheckbox('yes', false);
	    check.position(520, 270);
      check.changed(checkChanged);

      check1 = createCheckbox('no', false);
      check1.position(570, 270);
      check1.changed(checkChanged);
    }
}

function checkChanged(){
  if (check.checked() || check1.checked()){
    buttonAsk3 = createButton("question #2");
    buttonAsk3.position(120, 300);
    buttonAsk3.mousePressed(click);
  }
}

function click(){
  if (buttonAsk3.mousePressed()){
    fill(0);
    text("have you internalized your misogyny yet today?", 120, 350);

    check2 = createCheckbox('of course', false);
    check2.position(125, 360);
    check2.changed(tres);

    check3 = createCheckbox('no sorry', false);
    check3.position(210, 360);
    check3.changed(tres);

  }
}

function tres() {
  if(check2.checked() || check3.checked()){
    buttonAsk4 = createButton("question #3");
    buttonAsk4.position(400,400);
    buttonAsk4.mousePressed(last);
  }
}

function last(){
  if (buttonAsk4.mousePressed()){
    fill(0);
    text("do you love me?", 400, 445);

    check4 = createCheckbox('obviously, you are the one, true, all-knowing being', false);
    check4.position(420,460);
    check4.changed(agh);
  }
}

function agh(){
  if (check4.checked()){
    buttonAsk = createButton("click to get your #moodaf");
    buttonAsk.position(600,500);
  }
}
//function draw(){
    //randomImage = int(random(imgs.length));
    //background(40,50,20);
  //  image(imgs[randomImage], windowWidth/2, windowHeight/2);
//}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
