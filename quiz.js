// DOM selectors for div sections
const currentQuestion = document.querySelector("#question")
const currentAnswers = document.querySelector("#answers")

// all questions are stored in the questions object below
const questions = {
    // array of objects. each object contains questions and answers for each age group
    // TODO: don't really need this age array. try to reformat questions to an array of objects
    age: [
        // below object contains questions for range 21 to 29
        {
            ageRange: '21 to 29',
            questions: [
                {
                    question: 'Do you have an inheritance?',
                    answers: {
                        a1: 'Yes',
                        a2: 'No'
                    }
                },
                {
                    question: 'Do you have money to invest?',
                    answers: {
                        a1: 'Yes',
                        a2: 'No'
                    }
                },
                {
                    question: 'Do you have student debt?',
                    answers: {
                        a1: 'Yes',
                        a2: 'No'
                    }
                },
                {
                    question: 'Do you have a company 401K or stock options?',
                    answers: {
                        a1: 'Yes',
                        a2: 'No'
                    }
                },
                {
                    question: 'Have you had more than 1 employer over the last 5 years?',
                    answers: {
                        a1: 'Yes',
                        a2: 'No'
                    }
                },
                {
                    question: 'Do you need help with your budget?',
                    answers: {
                        a1: 'Yes',
                        a2: 'No'
                    }
                }
            ]
        },
        // below object contains questions for range 30 to 44
        {
            ageRange: '30 to 44',
            questions: [
                {
                    question: 'Do you have an inheritance?',
                    answers: {
                        a1: 'Yes',
                        a2l: 'No'
                    }
                },
                {
                    question: 'Do you have money to invest?',
                    answers: {
                        a1: 'Yes',
                        a2l: 'No'
                    }
                },
                {
                    question: 'Do you have a company 401K / stock options?',
                    answers: {
                        a1: 'Yes',
                        a2l: 'No'
                    }
                },
                {
                    question: 'Are you looking to purchase a property soon?',
                    answers: {
                        a1: 'Yes',
                        a2l: 'No'
                    }
                },
                {
                    question: 'Are you looking to have a child / currently have a young child and want to plan for college?',
                    answers: {
                        a1: 'Yes',
                        a2l: 'No'
                    }
                },
                {
                    question: 'Do you need help with your budget and/or debt services?',
                    answers: {
                        a1: 'Yes',
                        a2l: 'No'
                    }
                }
            ]
        },
        // below object contains questions for range 45 to 64
        {
            ageRange: '45 to 64',
            questions: [
                {
                    question: 'Do you have an inheritance?',
                    answers: {
                        a1: 'Yes',
                        a2l: 'No'
                    }
                },
                {
                    question: 'Do you have money to invest?',
                    answers: {
                        a1: 'Yes',
                        a2l: 'No'
                    }
                },
                {
                    question: 'Do you have a company 401K or stock options?',
                    answers: {
                        a1: 'Yes',
                        a2l: 'No'
                    }
                },
                {
                    question: 'Are you looking to upsize your home?',
                    answers: {
                        a1: 'Yes',
                        a2l: 'No'
                    }
                },
                {
                    question: 'Do you want help planning to send you kid(s) to college? ',
                    answers: {
                        a1: 'Yes',
                        a2l: 'No'
                    }
                },
                {
                    question: 'Are you caring for elderly parents?',
                    answers: {
                        a1: 'Yes',
                        a2l: 'No'
                    }
                },
                {
                    question: 'Do you want to create a retirement plan?',
                    answers: {
                        a1: 'Yes',
                        a2l: 'No'
                    }
                },
                {
                    question: 'Would you like to get a better handle on your debt?',
                    answers: {
                        a1: 'Yes',
                        a2l: 'No'
                    }
                }
            ]
        },
        // below object contains questions for ages 65+
        {
            ageRange: '65+',
            questions: [
                {
                    question: 'Are you retired?',
                    answers: {
                        a1: 'Yes',
                        a2l: 'No'
                    }
                },
                {
                    question: 'Are you planning to retire in the next 5 years?',
                    answers: {
                        a1: 'Yes',
                        a2l: 'No'
                    }
                },
                {
                    question: 'Do you have an inheritance?',
                    answers: {
                        a1: 'Yes',
                        a2l: 'No'
                    }
                },
                {
                    question: 'Do you want to create a wealth legacy for your kids and grandkids?',
                    answers: {
                        a1: 'Yes',
                        a2l: 'No'
                    }
                },
                {
                    question: 'Do you want to give to charity?',
                    answers: {
                        a1: 'Yes',
                        a2l: 'No'
                    }
                },
                {
                    question: 'Do you want to help put your kids/ grandkids through college?',
                    answers: {
                        a1: 'Yes',
                        a2l: 'No'
                    }
                },
                {
                    question: 'Do you have retirement plans still with former employers?',
                    answers: {
                        a1: 'Yes',
                        a2l: 'No'
                    }
                },
                {
                    question: 'Have you created a consistent retirement income steam?',
                    answers: {
                        a1: 'Yes',
                        a2l: 'No'
                    }
                }
            ]
        },
    ]
};

// create an array to store the ages from our questions object
var agesArray = [];
// create variable to store the current question (will change as quiz progresses)
var currentQuestionString = '';

// function that starts the quiz by asking for their age
// age will be then used later to build different quizzes based upon selection
function getAge(){
    // create variable for age question string
    var currentQuestionString = 'What is your age?';
    // create variable age to store age array from our question object
    var age = questions.age
    // for each age
    age.forEach(object => {
        // get the age range from the object and add it to the agesArray
        agesArray.push(object.ageRange)
    });

    // --- add these items to the dom ---
    // set inner html of currentQuestion selector to the current question string
    currentQuestion.innerHTML = currentQuestionString
    // loop create a button for all items in ages array
    // for all itesm in the agesArray
    for (let i = 0; i < agesArray.length; i++) {
        // store a new button element in the variable answerButton
        var answerButton = document.createElement('button');
        // store a new text node in the variable answerText
        // text node contains a string of an age range from the agesArray
        var answerText = document.createTextNode(agesArray[i]);
        // append our age range string to our new button as a child element
        answerButton.appendChild(answerText);
        // add onclick attribute to our new button element
        // when clicked it will run the selectAge function by passing in the age range
        answerButton.setAttribute("onclick", `selectAge('${agesArray[i]}')`)
        // append the new button element to the currentAnswers query selector
        // selector applies to the div with the id of answers
        currentAnswers.appendChild(answerButton)
    }
}

// define build quiz function that starts the quiz immediately
function buildQuiz(){
    // calls the get age function
    // get age adds the 'what is your age' question and all possible answer buttons to the dom
    getAge();
}

var finalUserChoices = []
// array that holds final service recommendations
var serviceRecommendation = []
// define function to handle answers
// this is how we will store answers based on user choices
function answerSelected(groupNumber, questionNumber, answer){
    // when an answer is selected, create a new object with our passed in data
    selecedDataObject = {
        groupNumber: groupNumber,
        questionNumber: questionNumber,
        answer: answer
    }
    // add this object to our finalUserChoices array for later processing
    finalUserChoices.push(selecedDataObject)
    // console log our final choices array for testing after each anser is selected
    console.log(finalUserChoices)
}

// define function that loads subsequent question
function nextQuestion() {
    // increment the question counter
    questionCounter ++
    // update the current question of the div element with id="question"
    // var questionArray is defined below. it 
    currentQuestion.innerHTML = questionArray[questionCounter].question
    // clear answers by emptying div with id="answers"
    currentAnswers.innerHTML = ''
    // store the answers contained in our new question object that we create with buildQuiz()
    answers = questionArray[questionCounter].answers
    // for each answer in answers...
    for (answer in answers) {
        // create a new button element...
        var answerButton = document.createElement('button');
        // create a new text node that contains an answer...
        var answerText = document.createTextNode(answers[answer])
        // append that answer to the new button...
        answerButton.appendChild(answerText)
        // TODO: show results after we run out of questions. right now it's throwing a type error that we don't want
        // add an attribute to the button...
        // runs answerSelected(groupNumber, questionNumber, answer) and nextQuestion()...
        answerButton.setAttribute("onclick", `answerSelected(1, ${questionCounter}, '${answers[answer]}'), nextQuestion()`)
        // append the answer button to the div with id="answers"
        currentAnswers.appendChild(answerButton)
    }
}

// define a function for user to reset quiz
function reset(){}

var questionArray = []
var questionCounter = 0

// --- define functions that build the different quizzes associated with each age category in the DOM ---

// TODO: the next question function should run answerSelected with the right group number
// to do this, we can simply pass the group number into nextQuestion()
// we'll subsequently update nextQuestion() by changing answerSeleced() to include passed in parameter
// to reproduce this issue, run the quiz and check the console logged arrays after each selection
// you will see that the first group number is correct, but all others after are wrong
// this is because 1 is currently hard coded into answerSelected() within nextQuestion()

// group one pertains to ages 21 to 29
function buildQuizGroupOne(){
    // create a local variable to contain all question objects
    var questionItems = questions.age;
    // for all items in question items...
    for (let i = 0; i < questionItems.length; i++) {
        // if the age range of the object is equal to 21 to 29...
        if (questionItems[i].ageRange == '21 to 29') {
            // store the associated questions in the variable questionArray
            questionArray = questionItems[i].questions
        }
    };
    // output questionArray to the console to ensure we have the right questions...
    console.log(questionArray)
    // set the div with id="question" to the first question of the questionArray...
    currentQuestion.innerHTML = questionArray[questionCounter].question
    // clear answers by emptying the div with id="answers"...
    currentAnswers.innerHTML = ''
    // store the answers for the first question in questionArray...
    answers = questionArray[questionCounter].answers
    // then for each answer...
    for (answer in answers) {
        // create a new button element...
        var answerButton = document.createElement('button');
        // create a new text node for an answer...
        var answerText = document.createTextNode(answers[answer]);
        // append new text node to our new answer button...
        answerButton.appendChild(answerText);
        // set attributes of the button element to run functions once clicked...
        // functions are answerSelected(groupNumber, questionNumber, answer) and nextQuestion()
        answerButton.setAttribute("onclick", `answerSelected(1, ${questionCounter}, '${answers[answer]}'), nextQuestion()`);
        // and append new answer button to the answers div
        currentAnswers.appendChild(answerButton)
    }        
}

// group two pertains to ages 30 to 44
// contains the same functionality of buildQuizGroupOne but for a different age
function buildQuizGroupTwo(){
    // create a local variable to contain all question objects
    var questionItems = questions.age;
    // for all items in question items...
    for (let i = 0; i < questionItems.length; i++) {
        // if the age range of the object is equal to 21 to 29...
        if (questionItems[i].ageRange == '30 to 44') {
            // store the associated questions in the variable questionArray
            questionArray = questionItems[i].questions
        }
    };
    // output questionArray to the console to ensure we have the right questions...
    console.log(questionArray)
    // set the div with id="question" to the first question of the questionArray...
    currentQuestion.innerHTML = questionArray[questionCounter].question
    // clear answers by emptying the div with id="answers"...
    currentAnswers.innerHTML = ''
    // store the answers for the first question in questionArray...
    answers = questionArray[questionCounter].answers
    // then for each answer...
    for (answer in answers) {
        // create a new button element...
        var answerButton = document.createElement('button');
        // create a new text node for an answer...
        var answerText = document.createTextNode(answers[answer]);
        // append new text node to our new answer button...
        answerButton.appendChild(answerText);
        // set attributes of the button element to run functions once clicked...
        // functions are answerSelected(groupNumber, questionNumber, answer) and nextQuestion()
        answerButton.setAttribute("onclick", `answerSelected(2, ${questionCounter}, '${answers[answer]}'), nextQuestion()`);
        // and append new answer button to the answers div
        currentAnswers.appendChild(answerButton)
    }        
}
// group three pertains to ages 45 to 64
function buildQuizGroupThree(){
    // create a local variable to contain all question objects
    var questionItems = questions.age;
    // for all items in question items...
    for (let i = 0; i < questionItems.length; i++) {
        // if the age range of the object is equal to 21 to 29...
        if (questionItems[i].ageRange == '45 to 64') {
            // store the associated questions in the variable questionArray
            questionArray = questionItems[i].questions
        }
    };
    // output questionArray to the console to ensure we have the right questions...
    console.log(questionArray)
    // set the div with id="question" to the first question of the questionArray...
    currentQuestion.innerHTML = questionArray[questionCounter].question
    // clear answers by emptying the div with id="answers"...
    currentAnswers.innerHTML = ''
    // store the answers for the first question in questionArray...
    answers = questionArray[questionCounter].answers
    // then for each answer...
    for (answer in answers) {
        // create a new button element...
        var answerButton = document.createElement('button');
        // create a new text node for an answer...
        var answerText = document.createTextNode(answers[answer]);
        // append new text node to our new answer button...
        answerButton.appendChild(answerText);
        // set attributes of the button element to run functions once clicked...
        // functions are answerSelected(groupNumber, questionNumber, answer) and nextQuestion()
        answerButton.setAttribute("onclick", `answerSelected(3, ${questionCounter}, '${answers[answer]}'), nextQuestion()`);
        // and append new answer button to the answers div
        currentAnswers.appendChild(answerButton)
    }        
}
// group four pertains to ages 65+
function buildQuizGroupFour(){
    // create a local variable to contain all question objects
    var questionItems = questions.age;
    // for all items in question items...
    for (let i = 0; i < questionItems.length; i++) {
        // if the age range of the object is equal to 65+...
        if (questionItems[i].ageRange == '65+') {
            // store the associated questions in the variable questionArray
            questionArray = questionItems[i].questions
        }
    };
    // output questionArray to the console to ensure we have the right questions...
    console.log(questionArray)
    // set the div with id="question" to the first question of the questionArray...
    currentQuestion.innerHTML = questionArray[questionCounter].question
    // clear answers by emptying the div with id="answers"...
    currentAnswers.innerHTML = ''
    // store the answers for the first question in questionArray...
    answers = questionArray[questionCounter].answers
    // then for each answer...
    for (answer in answers) {
        // create a new button element...
        var answerButton = document.createElement('button');
        // create a new text node for an answer...
        var answerText = document.createTextNode(answers[answer]);
        // append new text node to our new answer button...
        answerButton.appendChild(answerText);
        // set attributes of the button element to run functions once clicked...
        // functions are answerSelected(groupNumber, questionNumber, answer) and nextQuestion()
        answerButton.setAttribute("onclick", `answerSelected(4, ${questionCounter}, '${answers[answer]}'), nextQuestion()`);
        // and append new answer button to the answers div
        currentAnswers.appendChild(answerButton)
    }        
}

// do something when age button is clicked
function selectAge(choice) {
    // build the quiz associated with each age group based on which category is selected
    try {
        // if age selected is 21 to 29...
        if (choice === '21 to 29') {
            // build quiz group one
            buildQuizGroupOne()
        // if age selected is 30 to 44...
        } else if (choice === '30 to 44') {
            // build quiz group two...
            buildQuizGroupTwo()
        // if age selected is 45 to 64...
        } else if (choice === '45 to 64') {
            // build quiz group three
            buildQuizGroupThree()
        // if age selected is 65+...
        } else if (choice === '65+') {
            // build quiz group four
            buildQuizGroupFour()
        }
    // TODO: handle errors in a clearer way
    // if there's an errror, catch it...
    } catch (err) {
        // then console log that error so that we can see it while testing
        console.log(err)
    }
}

// build the quiz on page load
buildQuiz()