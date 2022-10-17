let newsletterForm = document.getElementById('newsletter-form');
// console.log(newsletterForm);

let allAgreeChx = document.getElementById('all-agree');

const validate =(event)=>{
    let txtname = document.getElementById('name');
    let txtmail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors');
    errors.innerHTML = '';

    if(txtname.value.trim() ===''){


        let liError= document.createElement('li');
        liError.innerText = 'wpisz imie i nazwisko';
        errors.appendChild(liError);
    }

    if(txtmail.value.trim() ===''){


        let liError= document.createElement('li');
        liError.innerText = 'Wpisz adres e-mail';
        errors.appendChild(liError);
    }

    if(!txtmail.value.includes('@')){


        let liError = document.createElement('li');
        liError.innerText = 'Adres e-mail musi zawierać @';
        errors.appendChild(liError);
    }


    if(!agree1.checked){
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziles zgody nr 1';
        errors.appendChild(liError);
    }
    if (errors.children.length > 0){
        event.preventDefault();
    }

}



const allAgree = (event)=>{
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');
    agree1.checked =event.target.checked;
    agree2.checked =event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;

    // console.log(event.target.checked);
}

newsletterForm.addEventListener('submit', validate);
allAgreeChx.addEventListener('change', allAgree);