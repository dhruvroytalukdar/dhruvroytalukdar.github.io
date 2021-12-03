const button = document.querySelector('#button')
const input = document.querySelector('#input')
const result = document.querySelector('#result')

button.addEventListener('click',()=>{
    if(input.value.length > 0){
        let num = parseFloat(input.value)
        num = num + num/2 + num/4 + num/8
        result.innerText = num.toString()
    }
})