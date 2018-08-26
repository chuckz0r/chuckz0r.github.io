

var userTotal = 0;
var computerTarget;
var crystalValue1;
var crystalValue2;
var crystalValue3;
var crystalValue4;
var wins = 0;
var losses = 0;
var overTarget = false;

function restartGame() {
    (computerTarget = Math.floor(Math.random() * 101) + 19),
    (crystalValue1= Math.floor(Math.random() * 12) + 1),
    (crystalValue2= Math.floor(Math.random() * 12) + 1),
    (crystalValue3= Math.floor(Math.random() * 12) + 1),
    (crystalValue4= Math.floor(Math.random() * 12) + 1),
    (userTotal = 0);
    $("#randomNum").text("Random Number: " + computerTarget);
    $("#userTotal").text("Your Total: " + userTotal);
    console.log("The new computer target is - " + computerTarget, " The new crystals are worth: " + crystalValue1, crystalValue2, crystalValue3, crystalValue4);
}

function gameFunction() {
    if (userTotal < computerTarget){
        overTarget = false;
        return;
    } else if (userTotal === computerTarget) {
        wins++;
        $("#wins").text("Wins: " + wins);
        restartGame();
    } else {
        overTarget = true;
        losses++;
        $("#losses").text("Losses: " + losses);
        restartGame();
    }
}

//Set the random number
//var computerTarget = Math.floor(Math.random() * 101) + 19;
//console.log("The computer chooses: " + computerTarget);

//Assign value to all four crystals
//var crystalValue1 = Math.floor(Math.random() * 12) + 1;
//console.log("This crystal value: " + crystalValue1);

//var crystalValue2 = Math.floor(Math.random() * 12) + 1;
//console.log("This crystal value: " + crystalValue2);

//var crystalValue3 = Math.floor(Math.random() * 12) + 1;
//console.log("This crystal value: " + crystalValue3);

//var crystalValue4 = Math.floor(Math.random() * 12) + 1;
console.log("This crystal value: " + crystalValue4);
//

$(document).ready(function () {
    restartGame();
    $("#randomNum").text("Random #: " + computerTarget);

$(".crystal1").click(function(){
    console.log("Crystal One has been clicked.");
    console.log("This crystal's value is: " + crystalValue1);
    userTotal = userTotal + crystalValue1;
    $("#userTotal").text("Your Total: " + userTotal);
    gameFunction();
});

$(".crystal2").click(function(){
    console.log("Crystal Two has been clicked.");
    console.log("This crystal's value is: " + crystalValue2);
    userTotal = userTotal + crystalValue2;
    $("#userTotal").text("Your Total: " + userTotal);
    gameFunction();
});

$(".crystal3").click(function(){
    console.log("Crystal Three has been clicked.");
    console.log("This crystal's value is: " + crystalValue3);
    userTotal = userTotal + crystalValue3;
    $("#userTotal").text("Your Total: " + userTotal);
    gameFunction();
});

$(".crystal4").click(function(){
    console.log("Crystal Four has been clicked.");
    console.log("This crystal's value is: " + crystalValue4);
    userTotal = userTotal + crystalValue4;
    $("#userTotal").text("Your Total: " + userTotal);
    gameFunction();
});


});