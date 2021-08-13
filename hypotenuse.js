const inputs = document.querySelectorAll('.side-input');
const calculatebutton = document.querySelector('#calculate-button')
const output = document.querySelector('#output')

function processing(a,b){
    const sumOfSquares = a*a  + b*b
   
    return sumOfSquares
}

function calculateHypotenuse(){
    
   const sumOfSquares= processing(Number(inputs[0].value),Number(inputs[1].value))
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    output.innerText = "The length of hypotenuse is: " + lengthOfHypotenuse
    

}

calculatebutton.addEventListener('click',calculateHypotenuse)


