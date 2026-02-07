const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionNumberDisplay = document.getElementById('question-number');
const scoreDisplay = document.getElementById('score-display');
const progressBar = document.getElementById('progress');
const finalScoreDisplay = document.getElementById('final-score');
const totalQuestionsDisplay = document.getElementById('total-questions');
const feedbackMessage = document.getElementById('feedback-message');

const categorySelect = document.getElementById('category');
const difficultySelect = document.getElementById('difficulty');
const amountSelect = document.getElementById('amount');

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
    const category = categorySelect.value;
    const difficulty = difficultySelect.value;
    const amount = parseInt(amountSelect.value);

    let filteredQuestions = allQuestions.filter(q => {
        const categoryMatch = category === 'any' || q.category === category;
        const difficultyMatch = difficulty === 'any' || q.difficulty === difficulty;
        return categoryMatch && difficultyMatch;
    });

    if (filteredQuestions.length < amount && difficulty !== 'any') {
        const remainingNeeded = amount - filteredQuestions.length;
        const relaxDifficulty = allQuestions.filter(q => {
            const categoryMatch = category === 'any' || q.category === category;
            const diffNotMatch = q.difficulty !== difficulty;
            return categoryMatch && diffNotMatch;
        });

        relaxDifficulty.sort(() => Math.random() - 0.5);
        filteredQuestions = filteredQuestions.concat(relaxDifficulty.slice(0, remainingNeeded));
    }

    if (filteredQuestions.length < amount) {
        const remainingNeeded = amount - filteredQuestions.length;
         const finalFallback = allQuestions.filter(q => !filteredQuestions.includes(q));
         finalFallback.sort(() => Math.random() - 0.5);
         filteredQuestions = filteredQuestions.concat(finalFallback.slice(0, remainingNeeded));
    }

    if (filteredQuestions.length === 0) {
        alert("No questions found! Please reload.");
        return;
    }

    filteredQuestions.sort(() => Math.random() - 0.5);
    currentQuestions = filteredQuestions.slice(0, amount);

    if (currentQuestions.length < amount) {
        console.log(`Only ${currentQuestions.length} questions available matching criteria.`);
    }

    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    currentQuestionIndex = 0;
    score = 0;
    updateScore();
    loadQuestion();
}

function loadQuestion() {
    resetState();
    const currentQuestion = currentQuestions[currentQuestionIndex];

    questionText.textContent = currentQuestion.question;

    questionNumberDisplay.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    const progressPercent = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function resetState() {
    nextBtn.disabled = true;
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
}

function selectAnswer(selectedIndex) {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option-btn');
    const correctIndex = currentQuestion.correct;

    options.forEach(btn => {
        btn.disabled = true;
        btn.classList.add('disabled');
    });

    if (selectedIndex === correctIndex) {
        options[selectedIndex].classList.add('correct');
        score++;
        updateScore();
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[correctIndex].classList.add('correct');
    }

    nextBtn.disabled = false;

    const progressPercent = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    finalScoreDisplay.textContent = score;
    totalQuestionsDisplay.textContent = currentQuestions.length;

    const percentage = (score / currentQuestions.length) * 100;

    if (percentage === 100) {
        feedbackMessage.textContent = "Perfect! You're a master!";
    } else if (percentage >= 80) {
        feedbackMessage.textContent = "Great job! Keep it up!";
    } else if (percentage >= 60) {
        feedbackMessage.textContent = "Good effort! You're getting there!";
    } else {
        feedbackMessage.textContent = "Keep practicing! You can do better!";
    }
}

function restartQuiz() {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
}
