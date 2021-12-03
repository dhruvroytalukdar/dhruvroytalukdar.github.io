const result = document.querySelector('#result')
const button = document.querySelector('#button')
const input = document.querySelector('#input')

button.addEventListener('click',()=>{
    if(input.value.length > 0){
        let res = input.value
        console.log(res,res.split("").sort().join(""))
        result.innerText= res.split("").sort().join("")
    }
})