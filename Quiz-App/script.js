const questions = [
    {
        question: "What was Margaery's house name?",
        answers: [
            { text: "Martell", correct: false},
            { text: "Tarly", correct: false},
            { text: "Tyrell", correct: true},
            { text: "Tully", correct: false},
        ]
    },
    {
        question: "What is Davos Seaworth’s nickname?",
        answers: [
            { text: "The Sand Snake", correct: false},
            { text: "The Onion Knight", correct: true},
            { text: "The Hound", correct: false},
            { text: "Hot Pie", correct: false},
        ] 
    },
    {
        question: "Who is the youngest of Ned Stark’s children?",
        answers: [
            { text: "Arya", correct: false},
            { text: "Bran", correct: false},
            { text: "Sansa", correct: false},
            { text: "Rickon", correct: true},
        ] 
    },
    {
        question: "Which of the following is not a name of one of Daenerys Targaryen’s dragons?",
        answers: [
            { text: "Rhaegal", correct: false},
            { text: "Viserion", correct: false},
            { text: "Drogon", correct: false},
            { text: "Balerion", correct: true},
        ] 
    },
    {
        question: "What are the “house words” of House Greyjoy?",
        answers: [
            { text: "We Do Not Sow", correct: true},
            { text: "Winter Is Coming", correct: false},
            { text: "Ours Is the Fury", correct: false},
            { text: "Unbowed, Unbent, Unbroken", correct: false},
        ] 
    }
];
const questionElement = document.getElementById("question");
const Msg = document.getElementById("msg");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
                 if(button.dataset.correct === "true"){
                    button.classList.add("correct");
                 }
                 button.disabled = true;
    });
    nextButton.style.display = "block";


}

function showScore(){
    resetState();
  
    if(score < questions.length - 1){
       Msg.innerHTML = `You know nothing John Snow`;
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    }else{
        Msg.innerHTML = `Well Done!!`;
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    }
    nextButton.innerHTML = "Play Again!!";
    nextButton.style.display = "block";
}

function handelNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
            if(currentQuestionIndex < questions.length){
                handelNextButton();
            }else{
                startQuiz();
            }
});




startQuiz();