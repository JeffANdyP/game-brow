const Questions = [{
    id: 0,
    q: "1. Which of these countries did the Soviet Union NEVER invade?",
    a: [{ text: "Afghanistan", isCorrect: false },
        { text: "Finland", isCorrect: false },
        { text: "Poland", isCorrect: false },
        { text: "Sweden", isCorrect: true }
    ]

},
{
    id: 1,
    q: "2. Who was the first person to orbit the Earth?",
    a: [{ text: "Neil Armstrong", isCorrect: false, isSelected: false },
        { text: "Yuri Gagarin", isCorrect: true },
        { text: "Jonh Glenn", isCorrect: false },
        { text: "Valentina Tereshkova", isCorrect: false }
    ]

},
{
    id: 2,
    q: "3. Which of these cities was NOT founded by the Romans?",
    a: [{ text: "London", isCorrect: false },
        { text: "Paris", isCorrect: false },
        { text: "Alexandria", isCorrect: true },
        { text: "Cologne", isCorrect: false }
    ]

},
{
    id: 3,
    q: "4. Where did Zoroastrianism originate?",
    a: [{ text: "Persia", isCorrect: true },
        { text: "Egypt", isCorrect: false },
        { text: "South America", isCorrect: false },
        { text: "India", isCorrect: false }
    ]
},
{
    id:4,
    q: "5. Which of these writers was NOT English?",
    a: [{ text: "Oscar Wilde", isCorrect: true },
        { text: "Jane Austen", isCorrect: false },
        { text: "Agatha Dickens", isCorrect: false },
        { text: "Jane Austen", isCorrect: false }
    ]
},
{
    id: 5,
    q: "6. What does a dendrochronologist use to establish dates?",
    a: [{ text: "Carbon isotopes", isCorrect: false },
        { text: "Ice cores", isCorrect: false },
        { text: "Solar Eclipses", isCorrect: false },
        { text: "Tree Rings", isCorrect: true }
    ]
},
{
    id: 6,
    q: "7. In terms of weapons, what is a pike?",
    a: [{ text: "An improvised Explosive device", isCorrect: false },
        { text: "A very long spear", isCorrect: true },
        { text: "a trench knife", isCorrect: false },
        { text: "A spiked helmet", isCorrect: false }
    ]  
},
{
    id:7,
    q: "8. Why did whalers hunt sperm whales?",
    a: [{ text: "for meat", isCorrect: false },
    { text: "for sport", isCorrect: false },
    { text: "for skin to nake leather", isCorrect: false },
    { text: "for oil to make candles", isCorrect: true }
    ]
},
{
    id:8,
    q: "9. How many wives did Henry VIII have?",
    a: [{ text: "1", isCorrect: false },
    { text: "2", isCorrect: false },
    { text: "6", isCorrect: true },
    { text: "4", isCorrect: false }
    ]
},
{
    id:9,
    q: "Which of the following was NOT originally invented in China?",
    a: [{ text: "Silk", isCorrect: false },
    { text: "Gunpowder", isCorrect: false },
    { text: "Paper Money", isCorrect: false },
    { text: "Concrete", isCorrect: true }
    ]
},
{
    id:10,
    q: "When was the last time Moscow was ever captured by a foreign power?",
    a: [{ text: "By Napoleon in 1812", isCorrect: true },
    { text: "By Jefferson in 1238", isCorrect: false },
    { text: "By Hitler in 1942", isCorrect: false },
    { text: "Never", isCorrect: false }
    ]
}


]
14. 
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

