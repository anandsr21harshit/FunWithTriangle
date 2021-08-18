const base = document.getElementById("base-value");
const height = document.getElementById("height-value");
const btnHypo = document.getElementById("calculateHypo");

const output = document.getElementById("output");

btnHypo.addEventListener("click",()=>{
    calculateHypo(base.value,height.value);
    }
);

function calculateHypo(b,h){
    let hypotenuse = Math.sqrt(b**2 + h**2).toFixed(2);
    output.innerText = `The length of hypotenuse is ${hypotenuse}`;
}