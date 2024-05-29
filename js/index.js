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
const toastBody = document.querySelector('.toast-body');

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

    answerChosen = false;
}

activeToast();

function checkAnswer(e) {
    if(answerChosen) return;
    answerChosen = true;

    document.querySelector('#liveToast').classList.remove('d-none');

    if(e.target.innerText === questions[currentQuestion].answer) {
        score++
        scoreElement.innerHTML = `Pontuação ${score}`;
        toastBody.innerHTML = 'Resposta correta! Parabéns, você acertou.';
    } else {
        wrong++;
        wrongElement.innerHTML = `Erros: ${wrong}`;
        toastBody.innerHTML = 'Infezlimente, você errou. A resposta correta é 2015.'
    }

    choiceElements.forEach(element => {
        element.disabled = true;
    });
}

choiceElements.forEach((element) => {
  element.addEventListener("click", checkAnswer);
});

function activeToast() {
    document.addEventListener('DOMContentLoaded', function () {
        const toastEl = document.getElementById('liveToast');
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    });
}


loadQuestion();