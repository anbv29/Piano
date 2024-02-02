var numOfPianoButtons = document.querySelectorAll(".piano").length;

for (var i = 0; i < numOfPianoButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function () {
       var buttonInnerHTML = this.innerHTML;
       makeSound(buttonInnerHTML);
       buttonAnimation(buttonInnerHTML);
    })
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);

    
})

function makeSound(event) {
    switch (event) {
        case "q":
            var audio = new Audio("key01.mp3");
            audio.play();
            break;
        case "w":
            var audio = new Audio("key02.mp3");
            audio.play();
            break;
        case "e":
            var audio = new Audio("key03.mp3");
            audio.play();
            break;
        case "r":
            var audio = new Audio("key04.mp3");
            audio.play();
            break;
        case "t":
            var audio = new Audio("key05.mp3");
            audio.play();
            break;
        case "y":
            var audio = new Audio("key06.mp3");
            audio.play();
            break;
        case "u":
            var audio = new Audio("key07.mp3");
            audio.play();
            break;
        case "i":
            var audio = new Audio("key08.mp3");
            audio.play();
            break;
        case "o":
            var audio = new Audio("key09.mp3");
            audio.play();
            break;
        case "p":
            var audio = new Audio("key10.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("key11.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("key12.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("key13.mp3");
            audio.play();
            break;
        case "f":
            var audio = new Audio("key14.mp3");
            audio.play();
            break;
        case "g":
            var audio = new Audio("key15.mp3");
            audio.play();
            break;
        case "h":
            var audio = new Audio("key16.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("key17.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("key18.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("key19.mp3");
            audio.play();
            break;
        case "z":
            var audio = new Audio("key20.mp3");
            audio.play();
            break;
        case "x":
            var audio = new Audio("key21.mp3");
            audio.play();
            break;
        case "c":
            var audio = new Audio("key22.mp3");
            audio.play();
            break;
        case "v":
            var audio = new Audio("key23.mp3");
            audio.play();
            break;
        case "b":
            var audio = new Audio("key24.mp3");
            audio.play();
            break;
       
        default: console.log(buttonInnerHTML);
            break;
       }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }