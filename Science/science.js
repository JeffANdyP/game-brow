// Questions will be asked
const Questions = [{
    id: 0,
    q: "1. What is the normal pH level of the human blood?",
    a: [{ text: "13.5", isCorrect: false },
        { text: "6.0", isCorrect: false },
        { text: "9.20", isCorrect: false },
        { text: "7.40", isCorrect: true }
    ]

},
{
    id: 1,
    q: "2. What is the pH and water?",
    a: [{ text: "6", isCorrect: false, isSelected: false },
        { text: "7", isCorrect: true },
        { text: "8", isCorrect: false },
        { text: "9", isCorrect: false }
    ]

},
{
    id: 2,
    q: "3. What is the chemical symbol for table salt?",
    a: [{ text: "S", isCorrect: false },
        { text: "NaCI", isCorrect: true },
        { text: "NH4F", isCorrect: false },
        { text: "NA", isCorrect: false }
    ]

},
{
    id: 3,
    q: "4. Which of the following planet was first discovered by a telescope?",
    a: [{ text: "Uranus", isCorrect: true },
        { text: "Venus", isCorrect: false },
        { text: "Jupiter", isCorrect: false },
        { text: "Mars", isCorrect: false }
    ]
},
{
    id:4,
    q: "5. Who invented the Bicycle?",
    a: [{ text: "Karl Von Drais", isCorrect: true },
        { text: "Da Vinci", isCorrect: false },
        { text: "Jonh  Kemp", isCorrect: false },
        { text: "Abraham Lincoln", isCorrect: false }
    ]
},
{
    id: 5,
    q: "6. Tinnitus problem is related to",
    a: [{ text: "Mouth", isCorrect: false },
        { text: "Nose", isCorrect: false },
        { text: "Ear", isCorrect: true },
        { text: "Eye", isCorrect: false }
    ]
},
{
    id: 6,
    q: "7. What is the most deadly infectious disease in America?",
    a: [{ text: "Hepatitis B", isCorrect: false },
        { text: "Hepatitis C", isCorrect: true },
        { text: "Heart Disease", isCorrect: false },
        { text: "Ebola", isCorrect: false }
    ]  
},
{
    id: 7,
    q: "8. What is the most common disease in America? ",
    a: [{ text: "Skin Cancer", isCorrect: false },
        { text: "Stroke", isCorrect: false },
        { text: "Diabetes", isCorrect: false },
        { text: "Heart disease", isCorrect: true }
    ]  
},
{
    id: 8,
    q: "9. What is the most commonly diagnosed cancer in men? ",
    a: [{ text: "Lung", isCorrect: false },
        { text: "Prostate", isCorrect: true },
        { text: "Colon", isCorrect: false },
        { text: "Lymphoma", isCorrect: false }
    ]  
},
{
    id: 9,
    q: "10. What is the medical term for low blood sugar?",
    a: [{ text: "Hyperglycaemia", isCorrect: false },
        { text: "Myocardial", isCorrect: false },
        { text: "Syncope", isCorrect: false },
        { text: "Hypoglycemia", isCorrect: true }
    ]  
},
{
    id: 10,
    q: "11. Which of the following is the largest bone in human body?",
    a: [{ text: "Femur", isCorrect: true },
        { text: "Sternum", isCorrect: false },
        { text: "Tibia", isCorrect: false },
        { text: "Stapes", isCorrect: false }
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

