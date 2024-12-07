// array of web shows that i have watched
const questions = [
    "The Sopranos?",
    "The Wire",
    "The Shield",
    "Bosch",
    "Westworld",
    "Fringe",
    "Supernatural",
    "Lucifer",
    "The Boys",
    "Sacred Games",
    "Family Man",
    "Bard of Blood",
    "Asur",
    "The OA",
    "Penny Dreadful",
    "Money Heist",
    "Peaky Blinders",
    "Dark",
    "Stranger Things",
    "Viking",
    "The Last Kingdom",
    "Rome",
    "Game of Thrones",
    "Raised by Wolves",
    "Dexter",
    "Mr. Robot",
    "Consultant",
    "Wheel of Time",
    "Rings of Power",
    "Breaking Bad",
    "Better Call Saul",
    "Prison Break",
    "From",
    "The Last Of Us",
    "Resident Evil",
    "Boardwalk Empire",
    "Queen's Gambit",
    "Wednesday",
    "Khakee",
    "1899",
    "Bandish Bandits",
    "Daredevil",
    "The Punisher",
    "Loki",
    "The Defenders",
    "Raakan",
    "House of Dragons",
    "Lost",
    "The Leftovers",
    "Indian Predator",
    "Sandman",
    "Moon Knight",
    "Hannibal",
    "Twin Peaks",
    "The Witcher",
    "Hawkeye",
    "What If?",
    "Wanda Vision",
    "Tandav",
    "Pataal Lok",
    "Mumbai Diary",
    "Special Ops",
    "Dom",
    "Grahan",
    "S*x Education",
    "The Falcon and the Winter Soldier",
    "Chernobyl",
    "Criminal Justice",
    "Panchayat",
    "The Aspirants",
    "Kota Factory",
    "Madmen",
    "Jubilie",
    "Farzi",
    "The Peripheral",
    "Ghost Stories",
    "Bosch Legacy",
    "Adhura",
    "Dahad",
    "Breath into the Shadows",
    "JL 50",
    "The Walking Dead",
    "Cargo",
    "True Detective",
    "Scam 1992",
    "The End of the f*cking World",
    "Narcos",
    "Gullak",
    "Sons of Anarchy",
    "Invincible",
    "Mirzapur",
    "Guns and Gulab",
    "Betaal",
    "The Big Bang Theory",
    "Young Sheldon",
    "The Suits",
    "Deadwood",
    "Reacher",
    "3 Body Problem",
    "Man in the High Castle",
    "Foundation",
    "Family Guy",
    "Fargo",
    "Fallout",
    "Continental",
    "Gen V",
    "Flash",
    "Arrow",
    "Legends of tomorrow"
];

let currentQuestionIndex = 0;
let yesCount = 0; 


const questionElement = document.getElementById("question");
const progressElement = document.getElementById("progress");
const yesButton = document.getElementById("yesBtn");
const noButton = document.getElementById("noBtn");


function loadQuestion() {
    questionElement.textContent = questions[currentQuestionIndex];
    progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}


function handleAnswer(answer) {
    if (answer === "Yes") {
        yesCount++; 
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}


function showResults() {
    questionElement.textContent = `You have Watched ${yesCount} out of ${questions.length} Web Shows.`;
    document.querySelector(".options").style.display = "none";
    progressElement.textContent = ""; 
    last.style.display = 'block';
    h1El.style.display=('none');
}


yesButton.addEventListener("click", () => handleAnswer("Yes"));
noButton.addEventListener("click", () => handleAnswer("No"));

// Setting default page

const containerElement = document.getElementById("container");
const h1El = document.getElementById("h1El");
const intro =document.getElementById("intro");
const last =document.getElementById("last");


const startBtn =document.getElementById("start");
containerElement.style.display = 'none';
last.style.display = 'none';

//start with 1st question
startBtn.addEventListener("click", function(){
    loadQuestion();
    intro.style.display = 'none';
    containerElement.style.display = 'block';
   
});

//link add to the button
const linkBtn = document.getElementById("link");
linkBtn.addEventListener('click', ()=>{
    window.open('https://youtu.be/xvFZjo5PgG0?si=QIdJh3X5C-T5OFkV','_blank')
})