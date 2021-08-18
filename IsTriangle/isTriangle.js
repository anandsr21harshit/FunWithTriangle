const angle1 = document.getElementById("angle1");
const angle2 = document.getElementById("angle2");
const angle3 = document.getElementById("angle3");
const output = document.getElementById("output")
const checkBtn = document.getElementById("check");

checkBtn.addEventListener("click",()=>{
    console.log("clicked");
    checkTriangle(Number(angle1.value),Number(angle2.value),Number(angle3.value));
    }
);

function checkTriangle(value1,value2,value3){
    if((value1 + value2+ value3) === 180){
        output.innerText = "It is a triangle 🥳";
    }
    else{
        output.innerText ="Triangle cannot be formed ☹";
    }
}