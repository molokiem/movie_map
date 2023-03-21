var moveLeftButton = document.querySelector(".move-left-button");

var moveMovieTickerLeft = document.querySelector(".john-wick-4-link");


moveLeftButton.addEventListener("click", moveLeft);

function moveLeft() {

    moveMovieTickerLeft.setAttribute("style", "right: 395px;");
    
    console.log(moveLeft)
}

