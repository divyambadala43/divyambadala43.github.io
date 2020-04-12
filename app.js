numSquares = 6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newColors = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn")
var hardBtn = document.getElementById("hardBtn");


     colorDisplay.textContent = pickedColor;
    easyBtn.addEventListener("click", function(){
            hardBtn.classList.remove("selected");
            easyBtn.classList.add("selected");
            numSquares = 3;
            colors = generateRandomColor(numSquares);
            pickedColor = pickColor();
            colorDisplay.textContent = pickedColor;
            for(var i=0;i<squares.length;i++)
            {
                if(colors[i]) 
                {
                    squares[i].style.background = colors[i];
                }
                else{
                    squares[i].style.display = "none";
                }
            }


    });

    hardBtn.addEventListener("click", function(){
             hardBtn.classList.add("selected");
             easyBtn.classList.remove("selected");
             numSquares = 6
             colors = generateRandomColor(numSquares);
             pickedColor = pickColor();
            colorDisplay.textContent = pickedColor;
            for(var i=0;i<squares.length;i++)
            {
               squares[i].style.display = "block"
            }
    });
    
    for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct"
            changeColor(clickedColor);
            h1.style.background = clickedColor
            newColors.textContent = "Play Again"
		} else {
            this.style.background = "#232334";
            messageDisplay.textContent = "Try Again"
		}
	});
}

function changeColor(color)
{
    for(var i=0; i<squares.length;i++)
    {
        squares[i].style.background = color;
    }
}
function pickColor()
{
  var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColor(num)
{
    var arr = [];
    for(var i=0;i<num;i++)
    {
          arr.push(randomColor());
    }
  
    return arr;
}
function randomColor()
{
    //for red color
   var r = Math.floor(Math.random() * 256);
    //for blue color
   var g = Math.floor(Math.random() * 256);
    //for green color
   var b =  Math.floor(Math.random() * 256);
   return "rgb(" + r + ", " + g + ", " + b + ")";
}

newColors.addEventListener("click", function(){
   colors = generateRandomColor(numSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   this.textContent = "New Colors"
   messageDisplay.textContent = ""
   for(var i=0;i<squares.length;i++)
   {
       squares[i].style.background = colors[i];
   }
   h1.style.background = "steelblue"
});