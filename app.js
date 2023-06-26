let favNumb;
let favNumb= "47"

let guessedNum = window.prompt("input a number");
console.log(guessedNum);

if(guessedNum < favNumb) {
    console.log ("too low");
   } else if (guessedNum > favNumb){
        console.log ("Too high")
    }else{ 
        console.log("congratulations!!!")

}

Let birthMonth = window.prompt ("what is your birth month?")

switch (birthMonth) {
case "September";
case "October";
case "November";
    console.log ("fall")
break;
case "December";
case "January";
case "february"
    console.log ("winter")
    break;
}

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

if (typeId == "01") {
  type = "Tank top";
} else if (typeId == "02") {
  type = "T-Shirt";
} else if (typeId == "03") {
  type = "Long Sleeve";
} else if (typeId == "04") {
  type == "Sweat Shirt";
} else {
  type = "Other";
}
 switch(typeId){
case "tanktop"
break;
 }case "02":{ 
type= "long sleeve";
break;
 }case "03" = "sweatshirt"{
break;
 }case "04" = "T-shirt"{
break;
 }default:{
    type = "other"
 }

if (colorId == "BK") {
  color = "Black";
} else if (colorId == "BL") {
  color = "Blue";
} else if (colorId == "RD") {
  color = "Red";
} else if (colorId == "PU") {
  color = "Purple";
} else {
  color = "White";
}

switch (colorId){
    case "BK":
    color == "black";
    break;
}case  "BL":{
    color == "Blue";
    break;
}case "RD":{
    color == "Red";
    break;
}case == "PU":{
    color =="Purple";
    break;
}case == "W":{
    color == "White";

}

if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
}

switch(sizeId){

case == "S":{
size == "small";
break;
}case == "M":{
size = "Medium";
break;
}case == "L":{
size == "Large";
break;
} case "XL":{
size == "Extra Large";
}break;{
} default = "One size fits all";

console.log(`Product: ${size} ${color} ${type}`);