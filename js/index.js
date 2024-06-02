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
        choices: ["Tom Hanks", "1990", "2018", "2023"],
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
];

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjQ3NWFlZGZlODQyZTg5OGZhM2RhMTU5MWZhM2YwMSIsInN1YiI6IjY2MTMxMDRkMjgzZWQ5MDE2MjFkMWY5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2QIie_En542SCmRXmSq-W3ohjTV38SlRE91OchVRrr4'
    }
};

const apiKey = 'df475aedfe842e898fa3da1591fa3f01';
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

async function getMovies() {
    const response = await fetchApi(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=19}`, options);
    return response.results;
};

async function getSeries() {
    const response = await fetchApi(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=pt-BR&page=2}`, options);
    return response.results;
};

async function setSeries() {
    const response = await getSeries();
    console.log(response);
}

setSeries();

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

function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionElement.innerHTML = currentQuestionData.question;
    img_question.src = currentQuestionData.url;

    const choices = shuffleArray(currentQuestionData.choices);

    for(let i = 0; i < choiceElements.length; i++) {
        choiceElements[i].innerHTML = choices[i];
    }

    answerChosen = false;
}

// nextButton.disabled = true;

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
        toastBody.innerHTML = `Resposta incorreta. A resposta correta é ${questions[currentQuestion].answer}.`
    }

    // choiceElements.forEach(element => {
    //     element.disabled = true;
    // });
}

function activeToast() {
    document.addEventListener('DOMContentLoaded', function () {
        const toastEl = document.getElementById('liveToast');
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    });
}

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

    if (currentQuestion < questions.length) {
      loadQuestion();
    }
});

choiceElements.forEach((element) => {
  element.addEventListener("click", checkAnswer);
});

activeToast();
loadQuestion();