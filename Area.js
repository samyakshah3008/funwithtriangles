const inputs = document.querySelectorAll('.length')
const calculateButton = document.querySelector('#calculate-button')
const output = document.querySelector('#output')

function processing(a,b){
    const calculations = a*b/2
    return calculations
}


function calculateArea(){
   const answer =  processing(Number(inputs[0].value),Number(inputs[1].value))
   output.innerText = ("Area is: " + answer)

}






calculateButton.addEventListener('click',calculateArea)