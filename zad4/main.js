
const submitForm= (event)=>{
    event.preventDefault();
    console.log('Submit form');
    let fName = document.querySelector('[name = "fname"]'); 
    let lName = document.querySelector('[name = "lname"]');
    console.log(`Imię:${fName.value}, Nazwisko: ${lName.value}`);
}


let form = document.getElementById('form');
form.addEventListener('submit', submitForm);
console.log(form);