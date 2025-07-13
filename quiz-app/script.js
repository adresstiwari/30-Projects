const questions = [
    {
        question: 'What is your name ?',
        answers: ['Adarsh', 'Ashish', 'Akash', 'Abhishek'],
        correct: 0
    },
    {
        question: 'What is your age ?',
        answers: ['20', '21', '22', '23'],
        correct: 1
    },
    {
        question: 'What is your favorite color ?',
        answers: ['Red', 'Blue', 'Green', 'Yellow'],
        correct: 1
    },
    {
        question: 'What is your favorite food ?',
        answers: ['Pizza', 'Burger', 'Pasta', 'Salad'],
        correct: 0
    }
];

let current = 0, score = 0;

const card = document.createElement('div');
card.className = 'card';
card.innerHTML = `
    <h1 class="heading">Quiz App</h1>
    <h2 class="question"></h2>
    <div class="answers"></div>
    <button id="nextBtn" class="nextBtn" disabled style="opacity:0.5">Next</button>
`;
document.body.appendChild(card);

const questionElem = card.querySelector('.question');
const answersElem = card.querySelector('.answers');
const nextBtn = card.querySelector('#nextBtn');

const resultCard = document.createElement('div');
resultCard.className = 'result-card';
resultCard.style.display = 'none';
resultCard.innerHTML = `<h1>Quiz Result</h1><p></p>`;
document.body.appendChild(resultCard);

function loadQuestion() {
    const q = questions[current];
    questionElem.textContent = `${current + 1}. ${q.question}`;
    answersElem.innerHTML = '';
    q.answers.forEach((ans, i) => {
        const btn = document.createElement('button');
        btn.className = 'answerBtn';
        btn.textContent = `${String.fromCharCode(97 + i)}. ${ans}`;
        btn.onclick = () => selectAnswer(i, btn);
        answersElem.appendChild(btn);
    });
    nextBtn.disabled = true;
    nextBtn.style.opacity = 0.5;
}

function selectAnswer(i, btn) {
    Array.from(answersElem.children).forEach(b => b.disabled = true);
    const correct = questions[current].correct;
    if (i === correct) {
        btn.style.backgroundColor = '#4CAF50';
        score++;
    } else {
        btn.style.backgroundColor = '#f44336';
        answersElem.children[correct].style.backgroundColor = '#4CAF50';
    }
    nextBtn.disabled = false;
    nextBtn.style.opacity = 1;
}

nextBtn.onclick = () => {
    current++;
    if (current < questions.length) {
        loadQuestion();
    } else {
        card.style.display = 'none';
        resultCard.style.display = 'block';
        resultCard.querySelector('p').textContent = `You scored ${score} out of ${questions.length}!`;
    }
};

document.addEventListener('DOMContentLoaded', loadQuestion);
