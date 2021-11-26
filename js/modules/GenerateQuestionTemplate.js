window.onload = () => {
    setData();
}

/* QuestionScript */
let currentQuestion = 1;
let currentAnswer = "";
let questionsArray = null;
let answers = [];

async function readQuestionsFromFile() {
    const array = [];
    const response = await fetch("../questions/questions.json");
    const data = await response.json();

    for (let i = 0; i < Object.keys(data).length; i++) {
        array.push(Object.values(data)[i]);
    }

    return array;
}

async function setData() {
    questionsArray = await readQuestionsFromFile();
    generateQuestionTemplate(currentQuestion);
}

async function generateQuestionTemplate(questionNum) {
    const body = document.querySelector(".questions-container");
    body.innerHTML = "";

    const templateBox = document.getElementById("question-row");
    const template = templateBox.content;
    const quest = questionsArray[questionNum - 1];

    const row = template.cloneNode(true);
    const currQuestion = row.querySelector(".current-question");
    const progressBar = row.querySelector(".progress-bar");
    const question = row.querySelector(".question");
    const answerContainer = row.querySelectorAll(".answers *");
    const answer1 = row.querySelector("#answer1-label");
    const answer2 = row.querySelector("#answer2-label");
    const answer3 = row.querySelector("#answer3-label");
    const answer4 = row.querySelector("#answer4-label");
    const answer1Input = row.querySelector("#answer1");
    const answer2Input = row.querySelector("#answer2");
    const answer3Input = row.querySelector("#answer3");
    const answer4Input = row.querySelector("#answer4");
    const closeFormButton = row.querySelector("#close-question-form");
    const nextQuestionButton = row.querySelector("#next-question");
    const prevQuestionButton = row.querySelector("#previous-question");

    for (let i = 0; i < answerContainer.length; i++) {
        if (answerContainer[i].className == "form-check") {
            answerContainer[i].addEventListener("click", addAnswer);
        }
    }

    currQuestion.textContent = currentQuestion;
    question.textContent = quest.question;
    progressBar.style = `width: ${currentQuestion * (100 / questionsArray.length)}%`;
    answer1.textContent = quest.answer1;
    answer1Input.value = quest.answer1;
    answer2.textContent = quest.answer2;
    answer2Input.value = quest.answer2;
    answer3.textContent = quest.answer3;
    answer3Input.value = quest.answer4;
    answer4.textContent = quest.answer4;
    answer4Input.value = quest.answer4;
    nextQuestionButton.addEventListener("click", nextQuestion);
    prevQuestionButton.addEventListener("click", prevQuestion);
    currentQuestion != 1 ? prevQuestionButton.classList.remove("disabled") : prevQuestionButton.classList.add("disabled");

    closeFormButton.addEventListener("click", closeQuestionForm);
    body.appendChild(row);
}

function addAnswer(e){
    if(e.target.className == "form-check-input"){
        const id = e.target.id;
        const elem = document.getElementById(id);
        currentAnswer = elem.value;
    }

    answers[currentQuestion-1] = currentAnswer;
    unlockButton();
}

function unlockButton() {
    const nextQuestionButton = document.getElementById("next-question");

    if (currentQuestion < questionsArray.length) {
        nextQuestionButton.classList.remove("disabled");
    }
}

function nextQuestion() {
    currentQuestion += 1;
    generateQuestionTemplate(currentQuestion)
}

function prevQuestion() {
    answers.pop();
    currentQuestion -= 1;
    generateQuestionTemplate(currentQuestion);
}

function closeQuestionForm() {
    console.log(answers);
}