let button = document.querySelector("button");

button.setAttribute("class", "guzik");
button.setAttribute("true", "");
let test = document.querySelectorAll('item');
let element = document.createElement("Item");
let a = 4
function onClick (){

  for (let i = 0; i <1; i++) { 
    let nowy= document.createElement('li');
    nowy.innerText = 'Item ' + a;
    let other= document.createElement('li');
    other.innerText = 'Item ' + a ++;
    items.appendChild(nowy, other);
    // console.log(nowy);



}
}
button.onclick = onClick;
