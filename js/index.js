const questions = [
    {
      question: "Em que ano foi lançado?",
      choices: ["2015", "2010", "1990", "2023"],
      answer: "2015",
      url: 'https://image.tmdb.org/t/p/w185/spydMyyD81HjGJVwZvjajkrWW1h.jpg'
    },
];

const questionElement = document.querySelector('#question');
const choiceElements = Array.from(document.querySelectorAll('#choice'));
const nextButton = document.querySelector('#next');
const scoreElement = document.querySelector('#score');
const wrongElement = document.querySelector('#wrong');
const img_question = document.querySelector('#img-question');

let currentQuestion = 0;
let score = 0;
let wrong = 0;
let answerChosen = false;

function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionElement.innerHTML = currentQuestionData.question;
    img_question.src = currentQuestionData.url;

    const choices = currentQuestionData.choices;

    for(let i = 0; i < choiceElements.length; i++) {
        choiceElements[i].innerHTML = choices[i];
    }
}

loadQuestion();