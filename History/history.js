
    // _t.questions = [{
    //     question: "1. What was the term for the official policy of racial segregation in South Africa until 1994?",
    //     choices: ["oversight", "Apartheid", "libel", "civility"],
    //     images: ["../images/Rajah.gif"],
    //     correct: 2
    // }, {
    //     question: "2. Published after her death, what did teenager Anne Frank leave behind?",
    //     choices: ["Diary", "Poem", "Novel", "Ballad"],
    //     correct: 1

    // }, {
    //     question: "3. In 1912, which famous human made sea vessel sunk?",
    //     choices: ["Le Raymound", "Titanic", "Hands Hedtoft", "Albatross"],
    //     correct: 2

    // }, {
    //     question: "4. In 1999, Boris Yeltsin resigned as President of Russia, who replaced him?",
    //     choices: ["Dmitry", "Alexander Rutskoy", "Vladimir Putin", "Victor Chernomyrdin"],
    //     correct: 3

    // }, {
    //     question: "5. In 1994, Jordan and Israel signed a peace treaty that ended a state of war between the two countries that had existed since what year?",
    //     choices: ["1944", "1946", "1948", "1952"],
    //     correct: 3

    // }, {
    //     question: "6. What is the roman name for the goddess Hecate?",
    //     choices: ["Trivia", "Juno", "Minerva", "Hera"],
    //     correct: 1 

    // }, {
    //     question: "7. Who was the first US President to declare war?",
    //     choices: ["Martin Van Buren", "James Monroe", "James Madison", "John Quincy Adams"],
    //     correct: 3

    // }, {
    //     question: "8. The United States bought Alaska from which country?",
    //     choices: ["Mexico", "Canada", "Spain", "Russia"],
    //     correct: 4
    // }];
   // Questions will be asked
const Questions = [{
    id: 0,
    q: "1. Where might one find the Acropolis?",
    a: [{ text: "Rome", isCorrect: false },
        { text: "Beijing", isCorrect: false },
        { text: "Moscow", isCorrect: false },
        { text: "Athens", isCorrect: true }
    ]

},
{
    id: 1,
    q: "2. Where is Stonehenge located?",
    a: [{ text: "Iceland", isCorrect: false, isSelected: false },
        { text: "England", isCorrect: true },
        { text: "Stone Mountain", isCorrect: false },
        { text: "Estonia", isCorrect: false }
    ]

},
{
    id: 2,
    q: "3. Where might one go to see giant stone heads?",
    a: [{ text: "Stonehenge", isCorrect: false },
        { text: "The Kremlin", isCorrect: false },
        { text: "Estern Island", isCorrect: true },
        { text: "cape Canarveral", isCorrect: false }
    ]

},
{
    id: 3,
    q: "4. Where was the Bastille?",
    a: [{ text: "Paris", isCorrect: true },
        { text: "Rome", isCorrect: false },
        { text: "New York", isCorrect: false },
        { text: "London", isCorrect: false }
    ]
},
{
    id:4,
    q: "5.  In what city would one find the Brandenburg Gate?",
    a: [{ text: "Paris", isCorrect: true },
        { text: "Vienna", isCorrect: false },
        { text: "Berlin", isCorrect: true },
        { text: "London", isCorrect: false }
    ]
},
{
    id: 5,
    q: "6. What is the largest US state by land area?",
    a: [{ text: "Alaska", isCorrect: true },
        { text: "California", isCorrect: false },
        { text: "texas", isCorrect: false },
        { text: "London", isCorrect: false }
    ]
},
{
    id: 6,
    q: "7. What is the capital of Nevada?",
    a: [{ text: "Jefferson City", isCorrect: false },
        { text: "Carson City", isCorrect: true },
        { text: "Reno", isCorrect: false },
        { text: "Las Vegas", isCorrect: false }
    ]  
}


]

// Set start
let start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;
// op1.innerText = Questions[id].a[].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;
// op1.value = Questions[id].a[1].isCorrect;

var selected = "";

// Show selection for op1
// op1.addEventListener("click", () => {
//     if()
// })
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2

op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "Rigth";
        result[0].style.color = "green";
        
    } else {
        result[0].innerHTML = "Wrong!";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next  = document.getElementsByClassName("next")[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 11) {
    id++;
    iterate(id);
    console.log(id);
} 

})

// // grab the result botttom 
const rigth = document.getElementById("rigth")

rigth.addEventListener("click", () => {
    if(selected == "true") {
        rigth[0].innerHTML = "rigth";
        right[0].style.color= "blue"
    } else {
        rigth[0].innerHTML = "false";
        rigth[0].style.color = "brown";
    }
})

