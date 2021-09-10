const BASE_JSERVICE = 'https://jservice.io'
const CLUE = `${BASE_JSERVICE}/api/clue`

let clue = `${BASE_JSERVICE}${CLUE}`
getAclue(clue);

function getAclue(clue) {
  // return  clue = object arrray promise 
  console.log('get a clue')
  console.log('api url', clue)
}

let request = 'https: //jservice.io/api/clues/?cateogy=5'


function cluesRequest() {
  let request = 'https: //jservice.io/api/clues/?cateogy=5'
  fetch(request) {

  }

}


let submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', submitBtnHandler)

function submitBtnHandler(event) {
  console.log(event);
}

let score = 0;
// let scoreLabelText = 
// // get score div <div id="score "
// document.getElementById('score'
// )
// // how do you get the span inside the
// // 






// // hide game elements 
// // array of all game elemnts domlist 
// // style="display: hidden;">


// // create game 
// // screens [ welcome, game-playing, game-over 


// // get random question 

// // get category of random question 



// let category = document.getElementById('category');
// let categoryText = `<b>${categry}</b>
// category.appendChild(categoryText)

// function onAnswerSubmit(e) {
// userAnswerInput = document.getElementById('answer-input');
// // so users answr is userAnswerInput inside button evnt handlr. onSubmit
// }

// type = "text"
// name = "answer-text"
// placeholder = "Submit your Answer to the Question here." >


// let clueText = document.getElementById("clue"); 
// let userAnswerInput = document.getElementById('answer-input');
// let usersAnswer = userAnswerInput.value
// let category  
// // gameContainer
// let question = document.getElementById('question');
// // question.inner or use append appendChild 




// function init() {
//    score = 0;

//    fetch('https://jservice.io/api/random')
//       .then(response => {
//          console.log(response)
//          return response.json()
//       })
//       .then(actualData => {
//          console.log(actualData)
//          console.log(JSON.parse(actualData))
//       });
// }




// // clear game 
// // reset game
// /  



function getQuestionsForCategory(categoryID) {
  console.log('   console.log('
    categoryid ', categoryID)
    ', categoryID)
  }
