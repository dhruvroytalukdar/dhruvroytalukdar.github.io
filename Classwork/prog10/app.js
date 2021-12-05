const result = document.querySelector("#result");
const button = document.querySelector("#button");
const input = document.querySelector("#input");

function bubbleSort(list) {
  let n = list.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (parseFloat(list[i]) > parseFloat(list[j])) {
        let temp = list[i];
        list[i] = list[j];
        list[j] = temp;
      }
    }
  }
  return list;
}

button.addEventListener("click", () => {
  if (input.value.length > 0) {
    let list = input.value.split(",");
    list = bubbleSort(list);
    result.innerText = list.toString();
  }
});
