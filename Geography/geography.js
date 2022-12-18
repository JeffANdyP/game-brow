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


// state the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;
;

var selected = "";


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


const evaluate = document.getElementsByClassName("evaluate");


evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "Rigth";
        result[0].style.color = "green";
        
    } else {
        result[0].innerHTML = "Wrong!";
        result[0].style.color = "red";
    }
    setTimeout(() =>
    {
    result[0].innerHTML = "";
    }, 500
    )
})
}

if (start) {
iterate("0");
}


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

// const clear = getElementById('reset')

// function clear(){
// document.getElementsByClassName('panel').reset();

// }

