/**
* Nenhum campo vazio
* Usuario: 4 a 12 caracteres
* Senha: 6 a 12 caracteres
* 
*/
const containerPassword = document.querySelector('.container-password');
const btnShowPassword = containerPassword.querySelector('.eye-show');
const btnOcultPassword = containerPassword.querySelector('.eye-ocult');
const containerConfirmPassword = document.querySelector('.container-confirm-password');
const btnShowConfirmPassword = containerConfirmPassword.querySelector('.eye-show');
const btnOcultConfirmPassword = containerConfirmPassword.querySelector('.eye-ocult');

// consumindo api
function cadastrar() {
   fetch("http://localhost:8080/usuarios",
      {
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         method: "POST",
         body: JSON.stringify({
            username: inputUser.value,
            password: inputPassword.value
         })    
      })
      .then(function (res) { console.log(res) })
      .catch(function (res) { console.log(res)})
};

btnShowPassword.addEventListener('click', function(){
   btnShowPassword.classList.remove('active')
   btnOcultPassword.classList.add('active')
   inputPassword.type = 'password';
})
btnOcultPassword.addEventListener('click', function(){
   btnOcultPassword.classList.remove('active')
   btnShowPassword.classList.add('active')
   inputPassword.type = 'text';
})
btnShowConfirmPassword.addEventListener('click', function(){
   btnShowConfirmPassword.classList.remove('active')
   btnOcultConfirmPassword.classList.add('active')
   inputConfirmPassword.type = 'password';
})
btnOcultConfirmPassword.addEventListener('click', function(){
   btnOcultConfirmPassword.classList.remove('active')
   btnShowConfirmPassword.classList.add('active')
   inputConfirmPassword.type = 'text';
})

const form = document.querySelector('.form');
const inputs = form.querySelectorAll('input')
const inputUser = form.querySelector('#input-user');
const inputPassword = form.querySelector('#input-password');
const inputConfirmPassword = form.querySelector('#input-confirmPassword');
const btnCreateAccount = form.querySelector('#create-account');
const msgError = form.querySelectorAll('.msg-error');

const validateUser = () => inputUser.value.length >= 5 && inputUser.value.length <= 12;

const validatePassword = () => inputPassword.value.length >= 6 && inputPassword.value.length <= 12;  

const validateConfirmPassword =() => inputPassword.value === inputConfirmPassword.value && inputConfirmPassword.value !== '';


function createError(validate,i,msg){
   if(validate){
      msgError[i].innerHTML = '';
   } else{
      msgError[i].innerHTML = msg;
   }
}

const cleanInput = () => {
   inputUser.value = "";
   inputPassword.value = "";
   inputConfirmPassword.value = "";
}

form.addEventListener('submit',(e) => {
   e.preventDefault()

   for(let input of inputs){
      if(input.value === ''){
         alert('Preencha todos os campos')
         return
      }
   }

   createError(validateUser(), 0, 'Usuario precisa conter entre 5 e 12 caracteres');
   createError(validatePassword(), 1, 'Senha precisa conter entre 6 e 12 caracteres');
   createError(validateConfirmPassword(), 2, 'Senha e confirme senha precisam ser iguais')

   if(validateUser() && validatePassword() && validateConfirmPassword()){
      cadastrar();
      
      cleanInput();
      alert('Usuario cadastrado')
      window.location.href = 'index.html';
   }
});