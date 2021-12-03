const number1 = document.querySelector('#number1')
const number2 = document.querySelector('#number2')

const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const multiply = document.querySelector('#multiply')
const divide = document.querySelector('#divide')

const result = document.querySelector('#result')
const error = document.querySelector('#error')

plus.addEventListener('click',()=>{
    if(number1.value.length > 0 && number2.value.length > 0){
        let num1 = parseFloat(number1.value)
        let num2 = parseFloat(number2.value)
        result.innerText = (num1 + num2).toString()
        error.innerText = ""
    }else{
        error.innerText = "Please provide valid inputs"
        result.innerText = ""
    }
})

minus.addEventListener('click',()=>{
    if(number1.value.length > 0 && number2.value.length > 0){
        let num1 = parseFloat(number1.value)
        let num2 = parseFloat(number2.value)
        result.innerText = (num1 - num2).toString()
        error.innerText = ""
    }else{
        error.innerText = "Please provide valid inputs"
        result.innerText = ""
    }
})

multiply.addEventListener('click',()=>{
    if(number1.value.length > 0 && number2.value.length > 0){
        let num1 = parseFloat(number1.value)
        let num2 = parseFloat(number2.value)
        result.innerText = (num1 * num2).toString()
        error.innerText = ""
    }else{
        error.innerText = "Please provide valid inputs"
        result.innerText = ""
    }
})

divide.addEventListener('click',()=>{
    if(number1.value.length > 0 && number2.value.length > 0){
        let num1 = parseFloat(number1.value)
        let num2 = parseFloat(number2.value)
        result.innerText = (num1 / num2).toString()
        error.innerText = ""
    }else{
        error.innerText = "Please provide valid inputs"
        result.innerText = ""
    }
})