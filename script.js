//Challenge Criteria

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

/////////// Questions for the questions with correct and wrong answer.

// 1. Whar 2 types of languages have you learned about in Tech Arts? (Not including javaScript)
//html and coding 
//css and html Correct!
//English and Spanish 
//binary and c++ 

// 2. HTML language
// is the coding used to create Websites Correct!
//is the coding used to create font sizes and colors Wrong
// is the coding used to create drawings Wrong
// is never used in the outside world Wrong

// 3. If you added an h1 tag, what would it look like?
// The smallest heading in the html language Wrong
// This tag does not exits Wrong
// The largest heading in html language Correct!
// A different colored heading Wrong


// 4. CSS language..
// is the language used to create Websites Wrong
// is the language used to create font sizes and colors Correct!
// is the coding used to creates pictures Wrong
// is never used in the outside world Wrong

// 5. What would the coding look like for <span> a heading written in red?
// { h1 color: red;} Wrong
// <h1> color; red Wrong
// h1 { color: green; } Wrong 
// h1 { color: red; } Correct!



//Variables

var startButton = document.querySelector(".start-btn");
var quizBox = document.querySelector("#quiz-box");
var quitButton = document.querySelector("quit-btn");
var questions1 = document.querySelector("#questions1")
var answers = document.querySelectorAll(".answer")

//If start quiz btn clicked
// how to remove and move to the next session.
// how to add all the correct answer within the same function

startButton.addEventListener("click", function(){
quizBox.classList.add("hidden")

//calling question 1 after clicking the start btn

questions1.classList.remove("hidden")
answers.forEach(function(answer){
    answer.addEventListener("click", function(event){ // calling correct answer with a function
        console.log(event.target.textContent, event.target.dataset.correct)//calling all correct answer
    })
})
})

// call question



