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


function initialRender() {
 // first function to run after page load.
 //refrences startScreenTemplate to get HTML to display start screen
 //runs again at end of quiz when user selects try again
}

function startScreenTemplate() {
 //provides HTML template to initial render
 //This might be unnecessary? could just define initialRender with the start screen HTML because intial render will only ever render the start screen which is static
}

function questionScreenTemplate() {
  //this function creates the template for the question strings 
  //hands template off to the render screen function
  //probably need to create a seperate function to retrieve correct item <------
}

function feedbackScreenTemplate() {
  //this function creates the template for the feedback screen displayed after each question is answered
  //hands the template to renderScreen 
}

function endScreenTemplate() {
  //this function creates the template for the end scree
  //passes template to render screen function
}

function renderScreen() {
  //takes in HTML templates from each template function
  //adds html to the <main> element of the page
  //runs each time a new screen is needed
}









function executeQuizApp() {
initialRender();
startScreenTemplate();
questionScreenTemplate();
feedbackScreenTemplate();
endScreenTemplate();
renderScreen();
};






$(executeQuizApp);