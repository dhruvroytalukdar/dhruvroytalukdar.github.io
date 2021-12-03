const button = document.querySelector('#button')
const panel = document.querySelector('#datetime')

function makeTime(){
    var time = new Date()
    return time.getDate() + "/" + (time.getMonth()+1) + '/' + time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
}

button.addEventListener('click',()=>{
    console.log(makeTime())
    panel.innerText = makeTime()
})