'use strict';

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

const store = {
  questions: [
    {
      question: 'The average person does what 13 times a day?',
      answers: [
        'Sneeze',
        'Use the restroom',
        'Laughs',
        'Swear'
      ],
      correctAnswer: 'Laughs'
    },
    {
      question: 'In Texas it\'s illegal to swear in front of a what?',
      answers: [
        'A corpse',
        'Children',
        'Women',
        'Police Officer'
      ],
      correctAnswer: 'A corpse'
    },
    {
      question: 'In Kansas it\'s illegal to eat cherry pie with what?',
      answers: [
        'Spork',
        'Your Hands',
        'Spinach',
        'Ice Cream'
      ],
      correctAnswer: 'Ice Cream'
    },
    {
      question: 'The average American does what 22 times a day?',
      answers: [
        'Swears',
        'Posts a Tweet',
        'Swallows a Bug',
        'Open the Fridge'
      ],
      correctAnswer: 'Open the Fridge'
    },
    {
      question: 'In Blythe, CA you can\'t wear cowboy boots unless you own at least 5 what?',
      answers: [
        'Head of Cattle',
        'Guns',
        'Acres of Land',
        'Cowboy Hats'
      ],
      correctAnswer: 'Head of Cattle'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
};

// Template generation functions.

function startScreenTemplate() {
  //provides HTML template to initial render
  //This might be unnecessary? could just define initialRender with the start screen HTML because intial render will only ever render the start screen which is static
  return [`
    <div class='start-screen-text'>
      <h3>This quiz will test you on strange or obscure facts you might not have known</h3>
      <button class='js-button-new-game new-game-button'>New Game</button>
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
        <button class='js-button-answer button-answer' id='answerOne' name='name' value='${store.questions[questionNumber].answers[0]}'>${store.questions[questionNumber].answers[0]}</button>
        <button class='js-button-answer button-answer' id='answerTwo' name='name' value='${store.questions[questionNumber].answers[1]}'>${store.questions[questionNumber].answers[1]}</button>
        <button class='js-button-answer button-answer' id='answerThree' name='name' value='${store.questions[questionNumber].answers[2]}'>${store.questions[questionNumber].answers[2]}</button>
        <button class='js-button-answer button-answer' id='answerFour' name='name' value='${store.questions[questionNumber].answers[3]}'>${store.questions[questionNumber].answers[3]}</button>
      </form>
    </div>
  `,
  `
    <header>
      <h1 class='question-header'>Question ${questionNumber + 1} of ${store.questions.length}</h1>
    </header>
  `];
}

function feedbackScreenTemplate(questionNumber, isCorrect) {
  //this function creates the template for the feedback screen displayed after each question is answered
  //hands the template to renderScreen
  if (isCorrect) {
    store.score++;
  } 
  return [`
    <div>
      <p><img src="/${isCorrect ? 'img/green_check.png' : 'img/red_x.png'}" alt=${isCorrect ? 'Green Checkmark' : 'Red X'}></p>
      <h3>${isCorrect ? 'That\'s correct!' : 'The correct answer is: ' + store.questions[questionNumber].correctAnswer}</h3>
      <div>
        <h2 class='score-header'>Score:</h2>
        <h4 class='score-text'>Right: ${store.score}</h4>
        <h4 class='score-text'>Wrong: ${store.questionNumber - store.score + 1}</h4>
      </div>
      <button class='js-button-next button-next'>Next</button>
    </div>
  `,
  `
    <header>
      <h1 class='feedback-header'>${isCorrect ? 'Correct!' : 'Wrong! :-('}</h1>
    </header>
  `];
}

function endScreenTemplate() {
  //this function creates the template for the end scree
  //passes template to render screen function
  return [`
    <div>
      <img src="img/finished_.png" alt="Checkered Flags Finish Line">
      <div class'end-screen'>
        <h2 class='score-header'>Score:</h2>
        <h4 class='score-text'>Right: ${store.score}</h4>
        <h4 calss='score-text'>Wrong: ${store.questionNumber - store.score}</h4>
      </div>
      <button class='js-button-restart endgame-button'>New Game</button>
    </div>
  `,
  `
    <header>
      <h1 class='results-header'>Your Results</h1>
    </header>
  `];
}


function renderScreen(template) {
  //takes in HTML templates from each template function
  //add htmle to the <header> element of the page and
  //adds html to the <main> element of the page
  //runs each time a new screen is needed
  $('header').html(template[1]);
  $('main').html(template[0]);
}

// Event handler functions.

function eventHandler() {
  eventNewGame();
  eventSubmitAnwser();
  eventNext();
  eventRestart();
}

function eventNewGame(){
  $('body').on('click', '.js-button-new-game', () => {
    console.log('New game button was clicked');
    renderScreen(questionScreenTemplate(store.questionNumber));
    store.quizStarted = true;
  });
}

function eventSubmitAnwser() {
  $('body').on('click', '.js-button-answer', event => {
    event.preventDefault();
    let userAnwser = $(event.target).attr('value');
    console.log(`Clicked an anwser button: ${$(event.target).attr('value')}`);
    renderScreen(feedbackScreenTemplate(store.questionNumber, userAnwser === store.questions[store.questionNumber].correctAnswer));
  });
}

function eventNext() {
  $('body').on('click', '.js-button-next', () => {
    console.log('Clicked next button');
    store.questionNumber++;
    if(store.questionNumber === store.questions.length) {
      renderScreen(endScreenTemplate());
    } else {
      renderScreen(questionScreenTemplate(store.questionNumber));
    }
  });
}

function eventRestart() {
  $('body').on('click', '.js-button-restart', () => {
    store.questionNumber = 0;
    store.quizStarted = false;
    store.score = 0;
    renderScreen(startScreenTemplate());
  });
}


function executeQuizApp() {
  if (!store.quizStarted){
    renderScreen(startScreenTemplate());
  }
  eventHandler();
 
}






$(executeQuizApp);