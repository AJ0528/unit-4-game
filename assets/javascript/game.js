
var randomResult=Math.floor(Math.random() * 69) + 30;
var loss=0;
var win =0;
var previous = 0;

// var startGame = function() {
    // $(".crystals").empty();

     
     console.log(randomResult)
// }
   
var result = $("<h1>" + randomResult +"</h1>");
$("#guess").append(result);


for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 10) + 1;
    console.log("random");

    var crystals = $("<div>");
    crystals.attr({
        "class": "crystals", "data-random": random
        });

        crystals.html(random);
    $(".crystals").append(crystal);
    }

    $("#previous").html("Your Score:" + previous);
    
    startGame();



    $(document).on("click", function () {

        var num = parseInt($(this).attr("data-random"));
        previous = num;
        console.log(previous);

        if(previous > randomResult){
           loss--;
           $("#loss").html(lost);

           previous = 0;

           startGame();
        }
        else if (previous === randomResult)
        win++;

        $("#win").hmtl("win" + win);
        
        previous = 0;
     
        startGame();


    });





// speudo code 
// game with 4 crystals 
// needs to have random number
// Every crystal needs a random number
// needs click functions
// crysal should add up. 

