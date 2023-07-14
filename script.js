const submit = document.querySelector('#submit');
const email = document.querySelector('#email');
const erroMsg = document.querySelector('.error');

const validarEmail = () => {
    let validationCaracteres = /\S+@\S+\.\S+/;

    if (validationCaracteres.test(email.value) == false) {
        erroMsg.id = 'active'
        email.style = 'border: 1px var(--Light--Red) solid;'
    } else {
        erroMsg.id = 'off'
        email.style = 'border: 2px var(--Pale--Blue) solid;'
    }
}
submit.addEventListener('click', validarEmail);