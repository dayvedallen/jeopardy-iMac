// get cat id. to use as query para . api/clues. 100 quesiton in cateogry . randomize

// Your program will follow these general steps:

// Allow the user to respond to the question
// Determine if the user's answer was correct
// A correct answer awards one (1) point and continues the game
// An incorrect answer resets the game and resets the score to zero (0)
// Keep track of and display a user's score

let score = docuyment.getElementById('current-score'); 
let submitAnswer  = document.getElementById('submitAnswer')
let usersAnswerInput = document.getElemetnById('usersAnswerInput')

document.addEventListener("document-load", fetchData); 


let random = (Math.floor() * questionsArray.length);

// 1.0  Use fetch to pull questions from the API

function fetchData() {
  fetch("https://jservice.io/api/random") 
  .then((response) => { return response.json()})
  .then(data => { 
      fetch("https://jservice.io/api/clues?category=" + data[0].category_id)
      .then((response) => response.json())
      .then((data) => {
          console.log('Success:',data);
          questionsArray = data;
          nextQuestion(questionsArray);
      });
  });   
}



// 2.0 Present a single question to the user


function randomizeQuestions( questionsArray ) {
  
}
function getQuestionsLength( questionsArray ) {

}

function showQuestions() {
  question.show() 
  question [index] 
}  
function nextQuestion(questionsArray) {


  function questionCorrect() {
    score++
    nextQuestion()

  }



  function questionIncorrect() {
    gameover() 
    restart()
  }


  function restart() {
    goto('welcome')

  }


currentQuestion = questions. getRandom 
pop  
splice. 




let model = {

  state: null; 

  questionsArray: [];


}

let state = {
  username: null,
  selectedCategory: null,
  categoriesWithTodoItems: {
      "Personal": [
          { isFinished: false, text: "Find a good book to read" },
          { isFinished: false, text: "Pack the bag for my next travel" }
      ],
      "Kenzie": [
          { isFinished: true, text: "Prepare for the demo" },
          { isFinished: false, text: "Finish the todo app" },
      ]
  }
}

