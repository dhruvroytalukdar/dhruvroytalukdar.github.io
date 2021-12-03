const button = document.querySelector('#button')
const result = document.querySelector('#result')

const input = document.querySelector('#input')

button.addEventListener('click',()=>{
    if(input.value.length > 0){
        let val = input.value
        let len = val.split("").filter(x => (x=='a' || x=='e' || x=='i' || x=='o' || x=='u' || x=='A' || x=='E' || x=='I' || x=='O' || x=='U')).length
        result.innerText = len
    }
})
