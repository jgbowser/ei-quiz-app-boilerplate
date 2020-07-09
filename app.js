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
  score: 0
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
  return `
    <div>
      <h1>Shall we play a game?</h1>
      <p>Basic details/intro about the quiz.</p>
      <button>New Game</button>
    </div>
  `;
}

function questionScreenTemplate() {
  //this function creates the template for the question strings 
  //hands template off to the render screen function
  //probably need to create a seperate function to retrieve correct item <------
  return `
    <div>
      <h1>Question 2 of 5</h1>
      <h3>What's your name?</h3>
      <form>
        <label for='answerOne'><input type='radio' id='answerOne' name='name' value='Bob'>Bob</label>
        <label for='answerTwo'><input type='radio' id='answerTwo' name='name' value='John'>John</label>
        <label for='answerThree'><input type='radio' id='answerThree' name='name' value='Gill'>Gill</label>
        <label for='answerFour'><input type='radio' id='answerFour' name='name' value='Jack'>Jack</label>
      </form>
      <a href='/feedback_screen.html'><button>Submit</button></a>
    </div>
  `;
}

function feedbackScreenTemplate() {
  //this function creates the template for the feedback screen displayed after each question is answered
  //hands the template to renderScreen 
  return `
    <div>
      <h1>Wrong</h1>
      <p><img src="/red_x.png" alt="Red X"></p>
      <h3>The correct answer is: bla</h3>
      <div>
        <h2>Score:</h3>
        <h4>Right: 3</h4>
        <h4>Wrong: 5</h4>
      </div>
      <a href='end_game_screen.html'><button>Next</button></a>
    </div>
  `;
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

function renderScreen() {

}









function executeQuizApp() {
  renderScreen(startScreenTemplate());
  
  questionScreenTemplate();
  feedbackScreenTemplate();
  endScreenTemplate();
  
}






$(executeQuizApp);