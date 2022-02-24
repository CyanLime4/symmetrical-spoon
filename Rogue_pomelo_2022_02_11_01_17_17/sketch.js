var placephoneNumber
var phoneNumber
var Name
var KindofFood
var database;

function setup() {

  database = firebase.database();

  createCanvas(2000, 3000);
  phoneNumber = createInput();
  phoneNumber.position(675,270)
  phoneNumber.size(300)

  background(255,255,100);
  placephoneNumber = createInput();
  placephoneNumber.position(675,330)
  placephoneNumber.size(300)

  Name = createInput();
  Name.position(675,390)
  Name.size(300)

  KindofFood = createInput();
  KindofFood.position(675,460)
  KindofFood.size(300)

  textSize(25)
  textFont("Monospace")
  text("Welcome to the Homeless", 710, 50)
  text("Shelter-Restaurant Food Donation App!", 630, 80)
  textSize(10)
  text("© Copyright 2022 by Akram Fadl", 790, 1090)
  text("Phone number:",675, 245)
  text("Homeless shelter/restaraunt phone number:",675, 305)
  text("What is the name of the restaraunt you are at?",675, 365)
  text("What kind of food do you serve/want to donate?",675, 435)

  submitButton = createButton('Submit')
  submitButton.position(800,550);
 
 
}

  function mousePressed(){
    database.ref("/").update({
      'meals-available': KindofFood,
      'name-of-place': Name,
      'phone-number': phoneNumber,
    })
  }
    function hide(){
      phoneNumber.hide()
      Name.hide()
      KindofFood.hide()
      placephoneNumber.hide()
    }
function draw() {
  
}


