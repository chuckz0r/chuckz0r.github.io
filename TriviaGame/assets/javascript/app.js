//Timer

var number = 60;
var intervalId;
var correct = 0;
var incorrect = 0;
var selValue1;
var selValue2;
var selValue3;
var selValue4;
var selValue5;
var selValue6;

function runTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;

    $(".timer").html("<h2>" + number + " seconds left</h2>");

    if (number === 0) {

        stop();

        alert("Time is up!");
    }
}

function stop() {

    clearInterval(intervalId);
  }

runTimer();

//Game

    $(document).ready(function(){
        $('#btnGetValue').click(function() {
            var selValue1 = $('input[name=q1a]:checked').val(); 
            var selValue2 = $('input[name=q2a]:checked').val();
            var selValue3 = $('input[name=q3a]:checked').val();
            var selValue4 = $('input[name=q4a]:checked').val();
            var selValue5 = $('input[name=q5a]:checked').val();
            var selValue6 = $('input[name=q6a]:checked').val();
            console.log("The selValues are " + selValue1 + ", " + selValue2 + ", " + selValue3 + ", " + selValue4 + ", " + selValue5 + ", " + selValue6);

            function answerCheck1() {
                if (selValue1 === "Deandre Ayton") {
                    console.log("#1 is correct");
                    correct++;
                } else {
                    incorrect++;
                }
            }

            function answerCheck2() {
                if (selValue2 === "Walter Davis") {
                    console.log("#2 is correct");
                    correct++;
                } else {
                    incorrect++;
                }
            }

            function answerCheck3() {
                if (selValue3 === "1968-69") {
                    console.log("#3 is correct");
                    correct++;
                } else {
                    incorrect++;
                }
            }

            function answerCheck4() {
                if (selValue4 === "13") {
                    console.log("#4 is correct");
                    correct++;
                } else {
                    incorrect++;
                }
            }

            function answerCheck5() {
                if (selValue5 === "A gorilla") {
                    console.log("#5 is correct");
                    correct++;
                } else {
                    incorrect++;
                }
            }

            function answerCheck6() {
                if (selValue6 === "2009-10") {
                    console.log("#6 is correct");
                    correct++;
                } else {
                    incorrect++;
                }
            }
    
            console.log(selValue1);
             answerCheck1();
             answerCheck2();
             answerCheck3();
             answerCheck4();
             answerCheck5();
             answerCheck6();

             alert("You got " + correct + " correct and " + incorrect + " incorrect.");
      
       
       
        });

        
        


    });



