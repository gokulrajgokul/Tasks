const questions = [
    {
        question: "Which keyword is used to exit a loop in Python?",
        options: ["stop", "exit", "Break", "return"],
        correct: "Break"
    },
    {
        question: "What is the correct extension for Python files?",
        options: [".pyt", ".py", ".python", ".pyth"],
        correct: ".py"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: "4"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const scoreText = document.getElementById("score");

function showQuestion() {
    let q = questions[currentQuestionIndex];
    questionText.innerText = q.question;
    optionsContainer.innerHTML = "";
    
    q.options.forEach(option => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.addEventListener("click", () => checkAnswer(option, q.correct));
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionText.innerText = "Quiz Completed!";
        optionsContainer.innerHTML = "";
        nextButton.style.display = "none";
        scoreText.innerText = `Your score: ${score} / ${questions.length}`;
    }
}

nextButton.addEventListener("click", showQuestion);
showQuestion();
