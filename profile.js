//global variables go here
var username;
var city;
var favoriteColor;
var nameLabel;
var favoriteColorLabel;
var cityLabel;
var submitButton;



function setup() {

  noCanvas();
  nameLabel = createElement("h2", "What's your name?");
  username = createInput();
  cityLabel = createElement("h2", "What City are you from?");
  city = createInput();
  favoriteColorLabel = createElement("h2", "What's your favorite color?");
  favoriteColor = createInput();
  submitButton = createButton("Submit");
  submitButton.mousePressed(makeProfile);
  submitButton.mouseOver(hover);
  submitButton.mouseOut(nohover);


}



//write your custom functions here
function makeProfile(){

  var submittedName = username.value();
  var submittedCity = city.value();
  var submittedColor = favoriteColor.value();

  username.hide();
  city.hide();
  favoriteColor.hide();
  cityLabel.hide();
  favoriteColorLabel.hide();
  nameLabel.hide();
  submitButton.hide();

  var nameElement = createElement ('h2', submittedName);
  nameElement.position (100,100);
  nameElement.style("color", submittedColor);
  nameElement.style ("font-size", Math.floor(random(200)));

  var cityElement = createElement ('h3', submittedCity);
  cityElement.position(200,200);




}

function hover(){

submitButton.style("background-color","lightgrey");

}

function nohover(){

submitButton.style("background-color","white");

}
