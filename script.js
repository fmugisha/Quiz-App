/*-----Navigation and Caution page functional for page theme-----*/
const icon = document.getElementById("qz-icon");
const start = document.getElementById("qz-start-id");
const quit = document.getElementById("qz-quit-id");
const article = document.getElementById("article-id");
const title = document.getElementById("title-id");
const main = document.getElementById("qz-main-id");

/*-----Theme(Dark and Light Mode)-----*/
icon.onclick = () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        icon.src = "./light.png";
    } else {
        icon.src="./dark.png";
    }
};

/*-----Start and Quit button-----*/
start.onclick = () => {
    document.getElementById("qz-main-id").style.display = "none";
    document.getElementById("qz-id").style.display = "block";
}

quit.onclick = () => {
    main.innerHTML = `
    <span style="height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    font-family: var(--font2);
    padding: 50px 0 0 41%;
    color: var(--first-color);">Thank you!</span>

    <div style="padding: 35px 20% 15px 20%;
    color: var(--first-color);
    font-size: 20px;
    text-align: center;
    font-family: var(--font2);
    line-height: 25px;">It will be our pleasure, if you take this Quiz, but we care about our user's desicion. We appreciate you for your time, but if you rethink on your desicion you can take a Quiz by click on Rethink button below.</div>
    
    <button 
            style="width: 150px;
            height: 60px;
            margin: 0 50% 2vh 40%;
            font-size: 20px;
            font-weight: 500;
            font-family: var(--font1);
            cursor: pointer;
            transition: all 0.3s ease;
            background-color: var(--blue);
            border: none;
            border-radius: 5px;
            color: var(--second-color);" 
            onclick="location.reload()">Rethink</button>
    `;
};

/*-----Next question button function-----*/
const dataStore = [
    {
        question: "What is JavaScript?",
        a: "JavaScript is a scripting language used to make the website interactive",
        b: "JavaScript is an assembly language used to make the website interactive",
        c: "JavaScript is a compiled language used to make the website interactive",
        d: "None of the mentioned",
        correct: "a",
    },
    {
        question: "Which of the following is correct about JavaScript?",
        a: "JavaScript is an Object-Based language",
        b: "JavaScript is Assembly-language",
        c: "JavaScript is an Object-Oriented language",
        d: "JavaScript is a High-level language",
        correct: "a",
    },
    {
        question: "Among the given statements, which statement defines closures in JavaScript?",
        a: "JavaScript is a function that is enclosed with references to its inner function scope",
        b: "JavaScript is a function that is enclosed with references to its lexical environment",
        c: "JavaScript is a function that is enclosed with the object to its inner function scope",
        d: "None of the mentioned",
        correct: "b",
    },
    {
        question: "Arrays in JavaScript are defined by which of the following statements?",
        a: "It is an ordered list of values",
        b: "It is an ordered list of objects",
        c: "It is an ordered list of string",
        d: "It is an ordered list of functions",
        correct: "a",
    },
    {
        question: "Will the following JavaScript code work? var js = (function(x) {return x*x;}(10));",
        a: "Exception will be thrown",
        b: "Memory leak",
        c: "Error",
        d: "Yes, perfectly",
        correct: "d",
    },
    {
        question: "Which of the following is not javascript data types?",
        a: "Null type",
        b: "Undefined type",
        c: "Number type",
        d: "All of the mentioned",
        correct: "d",
    },
    {
        question: "Where is Client-side JavaScript code is embedded within HTML documents?",
        a: "A URL that uses the special javascript:code",
        b: "A URL that uses the special javascript:protocol",
        c: "A URL that uses the special javascript:encoding",
        d: "A URL that uses the special javascript:stack",
        correct: "b",
    },
    {
        question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        a: "Position",
        b: "Window",
        c: "Standard",
        d: "Location",
        correct: "b",
    },
    {
        question: "Which of the following can be used to call a JavaScript Code Snippet?",
        a: "Function/Method",
        b: "Preprocessor",
        c: "Triggering Event",
        d: "RMI",
        correct: "a",
    },
    {
        question: "Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",
        a: "will work perfectly well on a Windows Machine",
        b: "will be displayed as JavaScript text on the browser",
        c: "will throw errors and exceptions",
        d: "must be restricted to a Unix Machine only",
        correct: "a",
    },
];

const quizId = document.getElementById('qz-id');
const answerCl = document.querySelectorAll('.answer');
const questionId = document.getElementById('qn');
const ansAtext = document.getElementById('ans-a-text');
const ansBtext = document.getElementById('ans-b-text');
const ansCtext = document.getElementById('ans-c-text');
const ansDtext = document.getElementById('ans-d-text');
const nextBtn = document.getElementById('next-qn');

let currentQn = 0;
let score = 0;

jsQuiz();

function jsQuiz() {

    notSelected();

    const currentqnData = dataStore[currentQn];

    questionId.innerHTML = currentqnData.question;
    ansAtext.innerHTML = currentqnData.a;
    ansBtext.innerHTML = currentqnData.b;
    ansCtext.innerHTML = currentqnData.c;
    ansDtext.innerHTML = currentqnData.d;

};

function notSelected() {
    answerCl.forEach(answer => answer.checked = false);
};

function getSelected() {
    let answered;
    answerCl.forEach(answer => {
        if (answer.checked) {
            answered = answer.id;
        }
    })
    return answered;
};

nextBtn.addEventListener('click', () => {
    const answered = getSelected();
    let perc;
    let bonus;
    let bonusAns;

    function getBonus() {
        if (perc > 80) {
            text = "You should be proud of yourself!";
            return bonusAns = 3;
        } else if (perc > 60) {
            text = "You should be proud of yourself!";
            return bonusAns = 2;
        } else if (perc > 40) {
            text = "You should be proud of yourself!";
            return bonusAns = 1;
        } else {
            text = "This is only the beginning, You can try again!";
            return bonusAns = 0;
        }
    }

    if (answered) {
        if (answered === dataStore[currentQn].correct) {
            score++;
        };

        currentQn++;

        if (currentQn < dataStore.length - 1) {
            jsQuiz();
        } else if (currentQn < dataStore.length) {
            nextBtn.innerHTML = "Submit";
            jsQuiz();
        } else {
            quizId.innerHTML = `
            <h1 style="font-weight: 200;
            padding: 30px 0 20px 0;
            font-size: 25px;
            font-family: var(--font1);">Thank you for your time to take this quiz.</h1>
            <h1 style="font-weight: 100;
            padding: 5px 0;
            font-family: var(--font2);
            font-size: 20px;">${score} of 10 correct questions.</h1>
            <h1 style="font-weight: 200;
            padding: 5px 0;
            font-size: 35px;">Result:</h1>
            <h1 style="font-weight: 200;
            padding: 5px 0;
            font-family: var(--font1);
            font-size: 20px;">Score: ${perc = (score * 100) / 10}%</h1>
            <h1 style="font-weight: 200;
            padding: 5px 0;
            font-family: var(--font1);
            font-size: 20px;">Bonus: ${bonus = getBonus()}</h1>
            <h1 style="font-weight: 100;
            padding: 10px 0;
            font-family: var(--font2);
            font-size: 20px;">${text}</h1>
            
            <button 
            style="width: 150px;
            height: 60px;
            margin: 5vh 50% 5vh 40%;
            font-size: 20px;
            font-weight: 500;
            font-family: var(--font1);
            cursor: pointer;
            transition: all 0.3s ease;
            background-color: var(--blue);
            border: none;
            border-radius: 5px;
            color: var(--second-color);" 
            onclick="location.reload()">Try again!</button>
            `;
        }
    };
});