const button = document.querySelector('#button')
const input = document.querySelector('#input')

button.addEventListener('click',()=>{
    if(input.value.length > 0){
        navigator.clipboard.writeText(input.value).then(()=>{
            alert('text copied to clipboard')
        },(error) => {
            alert('Comething went wrong')
        })
    }
})