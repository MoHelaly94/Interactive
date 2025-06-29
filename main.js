console.log("Welcome to RT Land Learning!");
        console.log("I’m excited to talk to you.");
        let botName = "RT Bot";
        let botLocation = "RT Land";
        let botPurpose = "to help you learn in a fun and interactive way.";
        console.log("Allow me to introduce myself.")
        let botIntro = "My name is " + botName + ", and I’m here in " + botLocation + " " + botPurpose;
        console.log(botIntro);
        console.log("Feel free to ask me anything about respiratory therapy");



let myBtnElement = document.querySelector(".survey");
let myBtn = document.querySelector("button");


function one () {
    console.log("You clicked the button!");

};

function two () {
    console.log("You left the button!");

};

function three () {
    console.log("You hovered over the button!");
}

myBtnElement.addEventListener("click", one);
myBtnElement.addEventListener("mouseleave", two);
myBtnElement.addEventListener("mouseover", three);

myBtn.addEventListener("click", one);
myBtn.addEventListener("mouseleave", two);
myBtn.addEventListener("mouseover", three);


window.onresize = function() {
    console.log("The window has been resized!");
};

window.onscroll = function() {
   console.log("You scrolled the page!");
}
