var numSquares = 9
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons event listners
    setModeButtons();
    setupSquares();
    reset();
}

function setModeButtons(){
    for(var i =0; i<modeButton.length; i++){
        modeButton[i].addEventListener("click", function(){
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            //debugger
            this.classList.add("selected");
            this.textContent === "Easy"? numSquares = 6 : numSquares = 9;
            console.log(numSquares);
            reset();
            //figure out how many squares to show
            //pick new colors
            //pick a new pickedColor
            //update page to reflect changes
    
        });
    }
}

function setupSquares(){
    for(var i = 0; i<squares.length; i++){
        //add click lisnters to squares
        squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            //this will also stop the error message to show up, so the players will know they need to refresh the game
            h1.style.backgroundColor = pickedColor;
        } else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
        
    });
    }
}

function reset(){
     //generate new colors
     //debugger
     colors = generateRandomColors(numSquares);
     //pick a new random color from array
     pickedColor = pickColor();
     //change colorDisplay to match picked color
     colorDisplay.textContent = pickedColor;
     //change colors of squares
     for(var i = 0; i<squares.length; i++){
        if(colors[i]){
        squares[i].style.display ="block";
        squares[i].style.backgroundColor = colors[i];
        } else{
        squares[i].style.display = "none";
        }
         
     }
     h1.style.backgroundColor = "steelblue";
     resetButton.textContent = "New Colors";
     messageDisplay.textContent = "";
}



resetButton.addEventListener("click", function(){
reset();
});



function changeColors(color){
    //loop through all squares 
    for(var i = 0; i<squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
    
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
    
}
function generateRandomColors(num){
    //make an array
    var arr =[];
    //repeat num times
    for (var i = 0; i<num ; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
//return that array
    return arr;

}

function randomColor(){
    //pick a "red" from 0 to 255
    var r = Math.floor(Math.random() *256);
    //pick a "green" from 0 to 255
    var g = Math.floor(Math.random() *256);
    //pick a "blue" from 0 to 255
    var b = Math.floor(Math.random() *256);
    return "rgb(" + r + ", " + g + ", " + b  + ")";

}


// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0 ;i<squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else{
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0 ;i<squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });