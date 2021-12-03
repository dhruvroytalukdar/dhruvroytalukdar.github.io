const button = document.querySelector('#button')
const input = document.querySelector('#input')
const result = document.querySelector('#result')

function reverseInbuilt(name){
    return name.split("").reverse().join("")
}

function reverseMyImplementation(name){
    let left = 0, right = name.length-1
    let res = ""
    for(let ch of name)
        res = ch + res
    return res
}

button.addEventListener('click',()=>{
    if(input.value.length > 0){
        let val = input.value
        //result.innerText = reverseInbuilt(val)
        result.innerText = reverseMyImplementation(val)
    }
})