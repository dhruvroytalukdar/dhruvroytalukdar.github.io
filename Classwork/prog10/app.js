const result = document.querySelector('#result')
const button = document.querySelector('#button')
const input = document.querySelector('#input')

function bubbleSort(list){
    let n = list.length
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            if(list[i] > list[j]){
                let temp = list[i]
                list[i] = list[j]
                list[j] = temp
            }
        }
    }
    return list
}

button.addEventListener('click',()=>{
    if(input.value.length > 0){
        let list = input.value.split(',').filter(x=>parseFloat(x))
        list = bubbleSort(list)
        result.innerText = list.toString()
    }
})