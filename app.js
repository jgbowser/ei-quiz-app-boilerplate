'use strict';

/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)


//Start screen with button to start quiz
//at least 5 questions 1 at a time
//can't skip questions
//see question # on each question screen
//display correct/incorrect screen based on answer show total correct and incorrect questions
//overall score at end of quiz correct/incorrect
// ability to restart quiz




function startScreenTemplate() {
  //provides HTML template to initial render
  //This might be unnecessary? could just define initialRender with the start screen HTML because intial render will only ever render the start screen which is static
  return [`
    <div class='start-screen-text'>
      <h3>This quiz will test you on strange or obscure facts you might not have known</h3>
      <button class='new-game-button'>New Game</button>
    </div>
  `,
  `
    <h1>Strange Facts Quiz</h1>
  `];
}

function questionScreenTemplate(questionNumber) {
  //this function creates the template for the question strings 
  //hands template off to the render screen function
  //probably need to create a seperate function to retrieve correct item <------
  return [`
    <div>
      <h3>${store.questions[questionNumber].question}</h3>
      <form>
        <button id='answerOne' name='name' value='${store.questions[questionNumber].answers[0]}'>${store.questions[questionNumber].answers[0]}</button>
        <button id='answerTwo' name='name' value='${store.questions[questionNumber].answers[1]}'>${store.questions[questionNumber].answers[1]}</button>
        <button id='answerThree' name='name' value='${store.questions[questionNumber].answers[2]}'>${store.questions[questionNumber].answers[2]}</button>
        <button id='answerFour' name='name' value='${store.questions[questionNumber].answers[3]}'>${store.questions[questionNumber].answers[3]}</button>
      </form>
      <a href='/feedback_screen.html'><button>Submit</button></a>
    </div>
  `,
  `
    <header>
      <h1>Question ${questionNumber + 1} of ${store.questions.length}</h1>
    </header>
  `];
}

function feedbackScreenTemplate(questionNumber, isCorrect) {
  //this function creates the template for the feedback screen displayed after each question is answered
  //hands the template to renderScreen 
  return [`
    <div>
      <p><img src="/${isCorrect ? 'green_check.jpg' : 'red_x.png'}" alt=${isCorrect ? 'Green Checkmark' : 'Red X'}></p>
      <h3>The correct answer is: ${store.questions[questionNumber].correctAnswer}</h3>
      <div>
        <h2>Score:</h3>
        <h4>Right: 3</h4>
        <h4>Wrong: 5</h4>
      </div>
      <a href='end_game_screen.html'><button>Next</button></a>
    </div>
  `,
  `
    <header
      <h1>${isCorrect ? 'Correct!' : 'Wrong! :-('}</h1>
    </header>
  `];
}

function endScreenTemplate() {
  //this function creates the template for the end scree
  //passes template to render screen function
  return `
    <div>
      <h1>Results</h1>
      <p><img src="/finished_.jpg" alt="Red X"></p>
      <div>
        <h2>Score:</h3>
        <h4>Right: 3</h4>
        <h4>Wrong: 5</h4>
      </div>
      <a href='index.html'><button>New Game</button></a>
    </div>
  `;
}


function renderScreen(template) {
  //takes in HTML templates from each template function
  //add htmle to the <header> element of the page and
  //adds html to the <main> element of the page
  //runs each time a new screen is needed
  $('header').html(template[1]);
  $('main').html(template[0]);
}




function executeQuizApp() {
  renderScreen(questionScreenTemplate(store.questionNumber));
 
}






$(executeQuizApp);