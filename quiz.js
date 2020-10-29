// DOM selectors for div sections
const currentQuestion = document.querySelector("#question")
const currentAnswers = document.querySelector("#answers")

// all questions are stored in the questions object below
const questions = {
    // list of objects. each object contains questions and answers for each age group
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

var agesArray = [];
var currentQuestionString = '';

function getAge(){
    var currentQuestionString = 'What is your age?';
    
    var age = questions.age
    
    age.forEach(object => {
        agesArray.push(object.ageRange)
    });

    // add these items to the dom
    currentQuestion.innerHTML = currentQuestionString
    // loop create a button for all items in ages array
    for (let i = 0; i < agesArray.length; i++) {
        var answerButton = document.createElement('button');
        var answerText = document.createTextNode(agesArray[i]);
        answerButton.appendChild(answerText);
        answerButton.setAttribute("onclick", `selectAge('${agesArray[i]}')`)
        currentAnswers.appendChild(answerButton)
    }
}

// define build quiz function
function buildQuiz(){
    getAge();
}

// array that holds final service recommendations
var serviceRecommendation = []
// define function to handle answers
function answerSelected(groupNumber, questionNumber, answer){}

// define function that loads subsequent question
function nextQuestion() {
    questionCounter ++
    currentQuestion.innerHTML = questionArray[questionCounter].question
    // clear answers
    currentAnswers.innerHTML = ''
    answers = questionArray[questionCounter].answers
    for (answer in answers) {
        var answerButton = document.createElement('button');
        var answerText = document.createTextNode(answers[answer])
        answerButton.appendChild(answerText)
        // TODO: show results after we run out of questions. right now it's throwing a type error that we don't want
        answerButton.setAttribute("onclick", `answerSelected(1, ${questionCounter}, '${answers[answer]}'), nextQuestion()`)
        currentAnswers.appendChild(answerButton)
    }
}

// define a function for user to reset quiz
function reset(){}

var questionArray = []
var questionCounter = 0

// define functions that build the different quizzes associated with each age category in the DOM

// group one pertains to ages 21 to 29
function buildQuizGroupOne(){
    var questionItems = questions.age;
    for (let i = 0; i < questionItems.length; i++) {
        if (questionItems[i].ageRange == '21 to 29') {
            questionArray = questionItems[i].questions
        }
    };
    console.log(questionArray)
        currentQuestion.innerHTML = questionArray[questionCounter].question
        // clear answers
        currentAnswers.innerHTML = ''
        answers = questionArray[questionCounter].answers
        for (answer in answers) {
            var answerButton = document.createElement('button');
            var answerText = document.createTextNode(answers[answer])
            answerButton.appendChild(answerText)
            answerButton.setAttribute("onclick", `answerSelected(1, ${questionCounter}, '${answers[answer]}'), nextQuestion()`)
            currentAnswers.appendChild(answerButton)
        }
}

// group two pertains to ages 30 to 44
function buildQuizGroupTwo(){}
// group three pertains to ages 45 to 64
function buildQuizGroupThree(){}
// group four pertains to ages 65+
function buildQuizGroupFour(){}

// do something when age button is clicked
function selectAge(choice) {
    // build the quiz associated with each age group based on which category is selected
    try {
        if (choice === '21 to 29') {
            buildQuizGroupOne()
        } else if (choice === '30 to 44') {
            buildQuizGroupOne()
        } else if (choice === '45 to 64') {
            buildQuizGroupOne()
        } else if (choice === '65+') {
            buildQuizGroupOne()
        }
    } catch (err) {
        console.log(err)
    }
}

// build the quiz on page load
buildQuiz()