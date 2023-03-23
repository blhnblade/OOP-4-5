// first section
const firstInput = document.querySelector('#first');
const secondInput = document.querySelector('#second');
const inputs = document.querySelectorAll('.input input');

const res = document.querySelector('#res');

for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('click', function(){
        inputs[i].removeAttribute('value');
    })
}

let flag = true;

for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('input', function(){
        if(flag === true){inputs[1].value = 1; flag = false;}
        let r;
        try{
            if(new Number(inputs[1].value) == 0){
                throw new Error('Делить на ноль нельзя');
            }else{
            r = new Number(inputs[0].value) / new Number(inputs[1].value);
            res.textContent = ` =${r}`;
            } 
        }
        catch(er){
            console.log(er);
            res.textContent = 'Делить на ноль нельзя';
        }

    })
}


// second section
const userNameInput = document.querySelector('.user-name-input');
const userName = document.querySelector('.user-name');

userNameInput.addEventListener('input', function(){
    userName.textContent = `Здравствуйте, ${userNameInput.value}!`;
})


// third-section
const btn = document.querySelector('.select');
const heading = document.querySelector('.select-heading');
const container = document.querySelector('.list-ul');
const items = document.querySelectorAll('.list-ul li');

btn.addEventListener('click', function(){
    container.classList.toggle('hidden');
});

for(let i = 0; i < items.length; i++){
    items[i].addEventListener('click',function(){
        const temp = items[i].textContent;
        heading.textContent = `Эта информация о ${temp}`;
        container.classList.toggle('hidden');
    })
}

