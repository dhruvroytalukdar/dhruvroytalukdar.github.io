const result = document.querySelector('#result')
const button = document.querySelector('#button')
const input = document.querySelector('#input')

button.addEventListener('click',()=>{
    if(input.value.length > 0){
        let inp = input.value
        let res = ""
        for(let ch of inp){
            //upper case
            if(ch == ch.toUpperCase())
                res += ch.toLowerCase()
            else // lower case
                res += ch.toUpperCase()
        }
        result.innerText = res
    }
})