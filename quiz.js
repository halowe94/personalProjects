//Create var to grab buttons
let buttons = document.getElementsByClassName("btn");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function clickButton(){
        console.log("COngrats!!!!!")
    });
 }
//add on event listener to buttons
//check for event in console log
//create start page
//create function for start button
//if start is clicked, open first question, and start timer
//grab first property in question array
//append first question to question div
//append [0]A to #button-1
//append [0]B to #button-2
//append [0]C to #button-3
//append [0]D to #button-4

//button click triggers correct or wrong 
//next question click brings up next index in array

//append [1]A to #button-1
//append [1]B to #button-2
//append [1]C to #button-3
//append [1]D to #button-4

//button click triggers correct or wrong 
//next question click brings up next index in array

//append [2]A to #button-1
//append [2]B to #button-2
//append [2]C to #button-3
//append [2]D to #button-4

//button click triggers correct or wrong 
//next question click brings up next index in array

//append [3]A to #button-1
//append [3]B to #button-2
//append [3]C to #button-3
//append [3]D to #button-4

//button click triggers correct or wrong 
//next question click brings up high score prompt
//high score is stored in localStorage.setItem