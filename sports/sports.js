// Questions will be asked
const Questions = [{
    id: 0,
    q: "1. What’s the diameter of a basketball hoop in inches?",
    a: [{ text: "25 inches", isCorrect: false },
        { text: "10 inches", isCorrect: false },
        { text: "19 inches", isCorrect: false },
        { text: "18 inches", isCorrect: true }
    ]

},
{
    id: 1,
    q: "2. The Olympics are held every how many years?",
    a: [{ text: "10 years", isCorrect: false, isCorrect: false },
        { text: "4 years", isCorrect: true },
        { text: "6 years", isCorrect: false },
        { text: "every year", isCorrect: false }
    ]

},
{
    id: 2,
    q: "3. What sport is best known as the ‘king of sports’?",
    a: [{ text: "Basquetball", isCorrect: false },
        { text: "Football", isCorrect: false },
        { text: "Soccer", isCorrect: true },
        { text: "Tennis", isCorrect: false }
    ]

},
{
    id: 3,
    q: "4. In which sports is the participant called pugilist?x",
    a: [{ text: "Boxing", isCorrect: true },
        { text: "Sprinter", isCorrect: false },
        { text: "Wrestrling", isCorrect: false },
        { text: "Javelin Throw", isCorrect: false }
    ]
},
{
    id:4,
    q: "5. The term ‘Butterfly Stroke’ is referred to in which sport?",
    a: [{ text: "Swimming", isCorrect: true },
        { text: "Wrestling", isCorrect: false },
        { text: "Voleyball", isCorrect: true },
        { text: "Tennis", isCorrect: false }
    ]
},
{
    id: 5,
    q: "6. The term ‘Beamer’ is associated with",
    a: [{ text: "Cricket", isCorrect: true },
        { text: "Hockey", isCorrect: false },
        { text: "Chess", isCorrect: false },
        { text: "Football", isCorrect: false }
    ]
},
{
    id: 6,
    q: "7. What is the capital of Nevada?",
    a: [{ text: "6", isCorrect: false },
        { text: "7", isCorrect: true },
        { text: "8", isCorrect: false },
        { text: "9", isCorrect: false }
    ]  
},
{
    id: 7,
    q: "8. In which sport would you have a touchdown?",
    a: [{text: "Soccer", isCorrect: false},
        {text: "Football", isCorrect: true},
        {text: "Tennis", isCorrect: false},
        {text: "Basquetball", isCorrect: false},
    ]
},
{
    id: 8,
    q: "9. How many players are there in a football (soccer) team?",
    a: [{text: "7", isCorrect: false},
        {text: "9", isCorrect: false},
        {text: "11", isCorrect: true},
        {text: "13", isCorrect: false},
    ]
},
{
    id: 9,
    q: "10. With which team did Michael Jordan win 6 titles?",
    a: [{text: "Chicago Bulls", isCorrect: true},
        {text: "Brooklin Nets", isCorrect: false},
        {text: "Phoenix Suns", isCorrect: false},
        {text: "Los Angeles Lakers", isCorrect: false},
    ]
},
{
    id: 10,
    q: "11. How many players are there in a cricket team?",
    a: [{text: "5", isCorrect: false},
        {text: "7", isCorrect: false},
        {text: "9", isCorrect: false},
        {text: "11", isCorrect: true},
    ]
}


]

let start = true;

function iterate(id) {
var result = document.getElementsByClassName("result");
result[0].innerText = "";


const question = document.getElementById("question");
question.innerText = Questions[id].q;


const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;


op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})


op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})


op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})
// setTimeout( () =>
//  ))


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


