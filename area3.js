const inputs = document.querySelectorAll('.length')
const calculateButton = document.querySelector('#calculate-button')
const output = document.querySelector('#output')

function processing(A,b,c){
    var area = ((1 / 2.0)*b*c*Math.sin(A*Math.PI/180));
    return area
}



function calculateArea(){
    
    const res = processing(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))
    output.innerText = "Final Answer is: " + res

}






calculateButton.addEventListener('click',calculateArea)