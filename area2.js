const inputs = document.querySelectorAll('.length')
const calculateButton = document.querySelector('#calculate-button')
const output = document.querySelector('#output')


function processing(a,b,c){
     if((a+b)>c && (b+c)>a && (a+c)>b){
        const semiperimeter = (a+b+c) /2
        const calculations = semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c);
        return calculations
    }
    else{
        return -1
    }
}

function calculateArea(){
   const res = processing(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))
   if(res === -1){
   output.innerText = "Invalid Input"

   }else{
   output.innerText = "The length of hypotenuse is: " + Math.sqrt(res)
   }
   
}

calculateButton.addEventListener('click',calculateArea)

