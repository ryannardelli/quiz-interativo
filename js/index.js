const questions = [
    {
        question: "Em que ano foi lançado?",
        choices: ["2015", "2010", "1990", "2023"],
        answer: "2023",
        url: 'http://image.tmdb.org/t/p/w185/wDWAA5QApz5L5BKfFaaj8HJCAQM.jpg'
    },

    {
        question: "Qual gênero NÃO pertence a este filme?",
        choices: ["Aventura", "Fantasia", "Ação", "Terror"],
        answer: "Terror",
        url: ''
    },

    {
        question: "Qual o nome do protagonista principal?",
        choices: ["Wade Wilson", "Vanessa", "Ajax", "Colossus"],
        answer: "Wade Wilson",
        url: ''
    },

    {
        question: "Em que país foi produzido?",
        choices: ["Estados Unidos", "Brasil", "Holanda", "Itália"],
        answer: "Estados Unidos",
        url: ''
    },

    {
        question: "Quem dirgiu o filme?",
        choices: ["Susanne Bie", "Christopher Nolan", "Quentin Tarantino", " Steven Spielberg"],
        answer: "Susanne Bie",
        url: ''
    },

    {
        question: "Em que ano foi lançado?",
        choices: ["2021", "1978", "2005", "1960"],
        answer: "1978",
        url: ''
    },

    {
        question: "Qual gênero pertence a este filme?",
        choices: ["Ação", "Suspense", "Terror", "Drama"],
        answer: "Ação",
        url: ''
    },

    {
        question: "Em que ano foi lançado?",
        choices: ["2019", "1990", "2018", "2023"],
        answer: "2019",
        url: ''
    },

    {
        question: "Qual o nome do ator que interpreta o Forest Gump?",
        choices: ["Tom Hanks", "Robin Wright", "Arnold Schwarzenegger", "Vin Diesel"],
        answer: "Tom Hanks",
        url: ''
    },

    {
        question: "Qual personagem NÃO faz parte deste filme?",
        choices: ["Burro", "Sherk", "Fiona", "Lorde Farquaad"],
        answer: "Lorde Farquaad",
        url: ''
    },

    {
        question: 'Qual é o nome verdadeiro do personagem conhecido como "O Professor"?',
        choices: ["Sergio Marquina", "Andres de Fonollosa", "Aníbal Cortés", "Agustín Ramos"],
        answer: "Sergio Marquina",
        url: ''
    },

    {
        question: 'Quem é o criador da série?',
        choices: ["Vince Gilligan", "David Chase", "Matthew Weiner", "J.J. Abrams"],
        answer: "Vince Gilligan",
        url: ''
    },

    
    {
        question: 'Qual é o animal que representa o personagem Mordecai?',
        choices: ["Guaxinim", "Pica-pau", "Gato", "Esquilo"],
        answer: "Pica-pau",
        url: ''
    },

    {
        question: 'Qual é o nome do mundo paralelo assustador que é central para a trama de Stranger Things?',
        choices: ["Mundo Invertido", "Dimensão Sombria", "Terra Obscura", "Reino do Demogorgon"],
        answer: "Mundo Invertido",
        url: ''
    },

    {
        question: 'Qual é o nome do capitão dos Piratas do Chapéu de Palha em "One Piece"?',
        choices: ["Roronoa Zoro", "Monkey D. Luffy", "Portgas D. Ace", "Trafalgar Law"],
        answer: "Monkey D. Luffy",
        url: ''
    },

    {
        question: 'Qual é o nome do cientista louco que protagoniza "Rick and Morty"?',
        choices: ["Dr. Smith", "Professor Brown", "Rick Sanchez", "Dr. Wily"],
        answer: "Rick Sanchez",
        url: ''
    },

    {
        question: 'Qual é o evento catastrófico que é o foco principal da série "Chernobyl"?',
        choices: ["Explosão de um reator nuclear", "Guerra Civil", "Tsunami", "Epidemia"],
        answer: "Explosão de um reator nuclear",
        url: ''
    },

    {
        question: 'Qual é o nome do supervilão que é o principal antagonista em "O Espetacular Homem-Aranha"?',
        choices: ["Duende Verde", "Doutor Octopus", "Venom", "Rei do Crime"],
        answer: "Duende Verde",
        url: ''
    },

    {
        question: 'Qual é o nome do quartel de bombeiros principal onde se passa a série "Chicago Fire"?',
        choices: ["Estação 51", "Base 12", "Quartel 33", "Central de Incêndios 17"],
        answer: "Estação 51",
        url: ''
    },

    {
        question: 'Qual é o nome do protagonista humano que foi congelado e acordou no futuro em "Futurama"?',
        choices: ["Bender Rodríguez", "Fry Philip J.", "Leela Turanga", "Professor Farnsworth"],
        answer: "Fry Philip J.",
        url: ''
    },
];

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjFmMWE3OWY5ODljM2ViMWNhNWZjNzM5ZjBmMDRkYSIsIm5iZiI6MTczMDg2NjM3MS43MTEwODQ0LCJzdWIiOiI2NjEzMTA0ZDI4M2VkOTAxNjIxZDFmOTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TnuVYQk9iEMrJb02g517J5E9xrJG-ddIeOhLabzaJKY'
    }
};

const apiKey = 'db1f1a79f989c3eb1ca5fc739f0f04da';
const questionElement = document.querySelector('#question');
const choiceElements = Array.from(document.querySelectorAll('#choice'));
const nextButton = document.querySelector('#next');
const restartButton = document.querySelector('#restart');
const scoreElement = document.querySelector('#score');
const wrongElement = document.querySelector('#wrong');
const img_question = document.querySelector('#img-question');
const toastBody = document.querySelector('.toast-body');

let currentQuestion = 0;
let score = 0;
let wrong = 0;
let answerChosen = false;

async function fetchApi(url, options) {
    try {
        const response = await fetch(url, options);
        return await response.json();
    } catch(e) {
        console.log(e)
    }
};

async function getConfigApi() {
    const config = await fetchApi('https://api.themoviedb.org/3/configuration', options);
    return config;
};

async function getsizeImg() {
    const config = await fetchApi('https://api.themoviedb.org/3/configuration', options);
    return config.images.poster_sizes[2];
};

async function getBaseUrl() {
    const response = await getConfigApi();
    return response.images.base_url;
};

async function getMovieDetails_zero() {
    const response = await fetchApi(`https://api.themoviedb.org/3/movie/${385687}?api_key=${apiKey}&language=pt-BR`, options);
    return response;
};

async function getMovieDetails_one() {
    const response = await fetchApi(`https://api.themoviedb.org/3/movie/${122}?api_key=${apiKey}&language=pt-BR`, options);
    return response;
};


async function getMovieDetails_two() {
    const response = await fetchApi(`https://api.themoviedb.org/3/movie/${293660}?api_key=${apiKey}&language=pt-BR`, options);
    return response;
};

async function getMovieDetails_three() {
    const response = await fetchApi(`https://api.themoviedb.org/3/movie/${218}?api_key=${apiKey}&language=pt-BR`, options);
    return response;
};

async function getMovieDetails_four() {
    const response = await fetchApi(`https://api.themoviedb.org/3/movie/${405774}?api_key=${apiKey}&language=pt-BR`, options);
    return response;
};

async function getMovieDetails_five() {
    const response = await fetchApi(`https://api.themoviedb.org/3/movie/${1924}?api_key=${apiKey}&language=pt-BR`, options);
    return response;
};

async function getMovieDetails_six() {
    const response = await fetchApi(`https://api.themoviedb.org/3/movie/${284052}?api_key=${apiKey}&language=pt-BR`, options);
    return response;
};

async function getMovieDetails_seven() {
    const response = await fetchApi(`https://api.themoviedb.org/3/movie/${301528}?api_key=${apiKey}&language=pt-BR`, options);
    return response;
};

async function getMovieDetails_eight() {
    const response = await fetchApi(`https://api.themoviedb.org/3/movie/${13}?api_key=${apiKey}&language=pt-BR`, options);
    return response;
};

async function getMovieDetails_nine() {
    const response = await fetchApi(`https://api.themoviedb.org/3/movie/${809}?api_key=${apiKey}&language=pt-BR`, options);
    return response;
};

async function getSerieDetails_one() {
    const response = await fetchApi(`https://api.themoviedb.org/3/tv/${71446}?api_key=${apiKey}&language=pt-BR`, options);
    return response;
};

async function getSerieDetails_two() {
    const response = await fetchApi(`https://api.themoviedb.org/3/tv/${1396}?api_key=${apiKey}&language=pt-BR`, options);
    return response;
};

async function getSerieDetails_three() {
    const response = await fetchApi(`https://api.themoviedb.org/3/tv/${31132}?api_key=${apiKey}&language=pt-BR`, options);
    return response;
};

async function getSerieDetails_four() {
    const response = await fetchApi(`https://api.themoviedb.org/3/tv/${66732}?api_key=${apiKey}&language=pt-BR`, options);
    return response;
};

async function getSerieDetails_five() {
    const response = await fetchApi(`https://api.themoviedb.org/3/tv/${37854}?api_key=${apiKey}&language=pt-BR`, options);
    return response;
};

async function getSerieDetails_six() {
    const response = await fetchApi(`https://api.themoviedb.org/3/tv/${60625}?api_key=${apiKey}&language=pt-BR`, options);
    return response;
};

async function getSerieDetails_seven() {
    const response = await fetchApi(`https://api.themoviedb.org/3/tv/${87108}?api_key=${apiKey}&language=pt-BR`, options);
    return response;
};

async function getSerieDetails_eight() {
    const response = await fetchApi(`https://api.themoviedb.org/3/tv/${3854}?api_key=${apiKey}&language=pt-BR`, options);
    return response;
};

async function getSerieDetails_nine() {
    const response = await fetchApi(`https://api.themoviedb.org/3/tv/${44006}?api_key=${apiKey}&language=pt-BR`, options);
    return response;
};

async function getSerieDetails_ten() {
    const response = await fetchApi(`https://api.themoviedb.org/3/tv/${615}?api_key=${apiKey}&language=pt-BR`, options);
    return response;
};


async function setMovieDetails_zero() {
    const response = await getMovieDetails_zero();
    const base_url = await getBaseUrl();
    const size_img = await getsizeImg();
    questions[0].url = base_url + size_img + response.poster_path;
}


async function setMovieDetails_one() {
    const response = await getMovieDetails_one();
    const base_url = await getBaseUrl();
    const size_img = await getsizeImg();
    questions[1].url = base_url + size_img + response.poster_path;
}

async function setMovieDetails_two() {
    const response = await getMovieDetails_two();
    const base_url = await getBaseUrl();
    const size_img = await getsizeImg();
    questions[2].url = base_url + size_img + response.poster_path;
}

async function setMovieDetails_three() {
    const response = await getMovieDetails_three();
    const base_url = await getBaseUrl();
    const size_img = await getsizeImg();
    questions[3].url = base_url + size_img + response.poster_path;
}

async function setMovieDetails_four() {
    const response = await getMovieDetails_four();
    const base_url = await getBaseUrl();
    const size_img = await getsizeImg();
    questions[4].url = base_url + size_img + response.poster_path;
}

async function setMovieDetails_five() {
    const response = await getMovieDetails_five();
    const base_url = await getBaseUrl();
    const size_img = await getsizeImg();
    questions[5].url = base_url + size_img + response.poster_path;
}

async function setMovieDetails_six() {
    const response = await getMovieDetails_six();
    const base_url = await getBaseUrl();
    const size_img = await getsizeImg();
    questions[6].url = base_url + size_img + response.poster_path;
}

async function setMovieDetails_seven() {
    const response = await getMovieDetails_seven();
    const base_url = await getBaseUrl();
    const size_img = await getsizeImg();
    questions[7].url = base_url + size_img + response.poster_path;
}

async function setMovieDetails_eight() {
    const response = await getMovieDetails_eight();
    const base_url = await getBaseUrl();
    const size_img = await getsizeImg();
    questions[8].url = base_url + size_img + response.poster_path;
}

async function setMovieDetails_nine() {
    const response = await getMovieDetails_nine();
    const base_url = await getBaseUrl();
    const size_img = await getsizeImg();
    questions[9].url = base_url + size_img + response.poster_path;
}

async function setSerieDetails_one() {
    const response = await getSerieDetails_one();
    const base_url = await getBaseUrl();
    const size_img = await getsizeImg();
    questions[10].url = base_url + size_img + response.poster_path;
}

async function setSerieDetails_two() {
    const response = await getSerieDetails_two();
    const base_url = await getBaseUrl();
    const size_img = await getsizeImg();
    questions[11].url = base_url + size_img + response.poster_path;
}

async function setSerieDetails_three() {
    const response = await getSerieDetails_three();
    const base_url = await getBaseUrl();
    const size_img = await getsizeImg();
    questions[12].url = base_url + size_img + response.poster_path;
}

async function setSerieDetails_four() {
    const response = await getSerieDetails_four();
    const base_url = await getBaseUrl();
    const size_img = await getsizeImg();
    questions[13].url = base_url + size_img + response.poster_path;
}

async function setSerieDetails_five() {
    const response = await getSerieDetails_five();
    const base_url = await getBaseUrl();
    const size_img = await getsizeImg();
    questions[14].url = base_url + size_img + response.poster_path;
}

async function setSerieDetails_six() {
    const response = await getSerieDetails_six();
    const base_url = await getBaseUrl();
    const size_img = await getsizeImg();
    questions[15].url = base_url + size_img + response.poster_path;
}

async function setSerieDetails_seven() {
    const response = await getSerieDetails_seven();
    const base_url = await getBaseUrl();
    const size_img = await getsizeImg();
    questions[16].url = base_url + size_img + response.poster_path;
}

async function setSerieDetails_eight() {
    const response = await getSerieDetails_eight();
    const base_url = await getBaseUrl();
    const size_img = await getsizeImg();
    questions[17].url = base_url + size_img + response.poster_path;
}

async function setSerieDetails_nine() {
    const response = await getSerieDetails_nine();
    const base_url = await getBaseUrl();
    const size_img = await getsizeImg();
    questions[18].url = base_url + size_img + response.poster_path;
}

async function setSerieDetails_ten() {
    const response = await getSerieDetails_ten();
    const base_url = await getBaseUrl();
    const size_img = await getsizeImg();
    questions[19].url = base_url + size_img + response.poster_path;
}

// filme
setMovieDetails_zero();
setMovieDetails_one();
setMovieDetails_two();
setMovieDetails_three();
setMovieDetails_four();
setMovieDetails_five();
setMovieDetails_six();
setMovieDetails_seven();
setMovieDetails_eight();
setMovieDetails_nine();

// série
setSerieDetails_one();
setSerieDetails_two();
setSerieDetails_three();
setSerieDetails_four();
setSerieDetails_five();
setSerieDetails_six();
setSerieDetails_seven();
setSerieDetails_eight();
setSerieDetails_nine();
setSerieDetails_ten();

function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionElement.innerHTML = currentQuestionData.question;
    img_question.src = currentQuestionData.url;

    const choices = shuffleArray(currentQuestionData.choices);

    for(let i = 0; i < choiceElements.length; i++) {
        choiceElements[i].innerHTML = choices[i];
    }

    disabledButtonNext();
}

function checkAnswer(e) {
    const toastEl = document.querySelector('#liveToast');
    const toast = new bootstrap.Toast(toastEl);

    toastEl.classList.remove('d-none');

    if(e.target.innerText === questions[currentQuestion].answer) {
        score++;
        scoreElement.innerHTML = `Pontuação: ${score}`;
        toastBody.innerHTML = 'Resposta correta! Parabéns, você acertou.';
    } else {
        wrong++;
        wrongElement.innerHTML = `Erros: ${wrong}`;
        toastBody.innerHTML = `Resposta incorreta. A resposta correta é ${questions[currentQuestion].answer}.`;
    }

    toast.show();
}

function activeToast() {
    document.addEventListener('DOMContentLoaded', function () {
        const toastEl = document.getElementById('liveToast');
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const toastEl = document.getElementById('liveToast');
    toastEl.addEventListener('hidden.bs.toast', function () {
        toastEl.classList.add('d-none');
    });
});

function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

nextButton.addEventListener("click", () => {
    currentQuestion++;
    activeButtons();

    if (currentQuestion < questions.length) {
      disabledButtonNext();
      loadQuestion();
    }
});

function disabledButtons() {
    document.querySelectorAll('#choice').forEach(button => button.disabled = true);
}

function activeButtons() {
    document.querySelectorAll('#choice').forEach(button => button.disabled = false);
}

function disabledButtonNext() {
    nextButton.disabled = true;
}

function activeButtonNext() {
    nextButton.disabled = false;
}

choiceElements.forEach((element) => {
  element.addEventListener("click", checkAnswer);
  element.addEventListener("click", disabledButtons);
  element.addEventListener("click", activeButtonNext);
});

activeToast();
loadQuestion();

// script do temporarizador
function initTemp() {
    let seconds = document.querySelector('#seconds');
    let ss = document.querySelector('#ss');
    let seconds_cont = 10;
    let interval;

    function startTimer() {
        interval = setInterval(function() {
            seconds.textContent = seconds_cont;
            seconds_cont--;

            if (seconds_cont < 0) {
                seconds_cont = 10;
                wrong++;
                wrongElement.innerHTML = `Erros: ${wrong}`;
                currentQuestion++;

                if (currentQuestion < questions.length) {
                    loadQuestion();
                } else {
                    clearInterval(interval);
                    disabledButtons();
                    handleButtonRestart();
                }
            }

            ss.style.strokeDashoffset = 440 - (440 / 10) * (10 - seconds_cont);
        }, 1000);
    }

    function stopTimer() {
        clearInterval(interval);
    }

    startTimer();

    nextButton.addEventListener('click', () => {
        clearInterval(interval);
        seconds_cont = 10;
        
        if (currentQuestion < questions.length) {
            loadQuestion();
            startTimer();
        } else {
            disabledButtons();
            handleButtonRestart();
        }
    });

    choiceElements.forEach((element) => {
        element.addEventListener("click", stopTimer);
    });
}

function handleButtonRestart() {
    restartButton.style.display = 'block';
    restartButton.style.zIndex = 2;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    wrong = 0;
    scoreElement.innerText = "Pontuação: 0";
    wrongElement.innerText = "Erros: 0";
    loadQuestion();
    initTemp();
    disabledButtonNext();
}

restartButton.addEventListener('click', () => {
    activeButtons();
    restartQuiz();
    restartButton.style.display = 'none';
});

initTemp();