const quizform = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit");
const output = document.querySelector(".output");

const answers = [
    "80°",
    "one right angle",
    "12,16,20",
    "45°",
    "85°",
    "equilateral",
    "48"
];

submitBtn.addEventListener("click",calculateScore);

function calculateScore(){
    let score=0,index=0;
    const formResult = new FormData(quizform);

    for(let value of formResult.values()){
        if(value===answers[index]){
            score++;
        }
        index++;
    }
    output.innerText = `Your score is ${score} out of ${answers.length}`;
}

