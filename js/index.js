const questions = [
    {
      question: "Em que ano foi lançado?",
      choices: ["2015", "2010", "1990", "2023"],
      answer: "2015",
    },
];

const questionElement = document.querySelector('#question');
const choiceElements = Array.from(document.querySelectorAll('#choice'));
const nextButton = document.querySelector('#next');
const scoreElement = document.querySelector('#score');
const wrongElement = document.querySelector('#wrong');

let currentQuestion = 0;
let score = 0;
let wrong = 0;
let answerChosen = false;

function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionElement.innerHTML = currentQuestionData.question;

    const choices = currentQuestionData.choices;

    for(let i = 0; i < choiceElements.length; i++) {
        choiceElements[i].innerHTML = choices[i];
    }
}

loadQuestion();