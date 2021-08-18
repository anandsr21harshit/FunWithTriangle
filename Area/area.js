const side1 = document.getElementById("side1");
const side2 = document.getElementById("side2");
const side3 = document.getElementById("side3");
const btnArea = document.getElementById("btn-area");
const output = document.getElementById("output");

btnArea.addEventListener("click",()=>{
    let a=Number(side1.value);
    let b =Number(side2.value);
    let c =Number(side3.value);
    if(validateSide(a,b,c)){
        calculateArea(a,b,c);
    }
});

function validateSide(a,b,c){
    if((a+b)<c || (b+c)<a || (c+a)<b ){
        alert("Sides are not valid. Sum of two sides must be greater than third side.");
        return false;
    }
    else{
        return true;
    }
    
}
function calculateArea(a,b,c){
    let s = (a+b+c)/2;
    console.log(s);
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(3);
    console.log(area);
    output.innerText = `Area of triangle is ${area}`;
}
