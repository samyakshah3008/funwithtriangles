const inputs = document.querySelectorAll('.angle-input')
const isTriangleBtn = document.querySelector('#is-triangle-btn')
const output = document.querySelector('#output')

function calculateSum(angle1,angle2,angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    console.log(sumOfAngles);
    return sumOfAngles;
}

function isTriangle(){
     sumOfAngles = calculateSum(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))
    if(sumOfAngles===180){
       // console.log("Yes")
       output.innerText = "Hurrah! It forms a triangle"
    }
    else{
       // console.log("No")
       output.innerText = "Nope,try again"
    }
}

isTriangleBtn.addEventListener("click",isTriangle)