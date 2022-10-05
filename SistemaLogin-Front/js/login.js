const form = document.querySelector('.form')
const usuarioLogin = document.querySelector('#usuario-login');
const passwordLogin = document.querySelector('#password-login');
//const btnLogin = document.querySelector('#login');
const inputs = form.querySelectorAll('input')
const btnShowPassword = form.querySelector('.eye-show')
const btnOcultPassword = form.querySelector('.eye-ocult')
const msgError = form.querySelector('.msg-error')

btnOcultPassword.addEventListener('click', function(){
   btnOcultPassword.classList.remove('active')
   btnShowPassword.classList.add('active')
   passwordLogin.type = 'text';
})
btnShowPassword.addEventListener('click', function(){
   btnShowPassword.classList.remove('active')
   btnOcultPassword.classList.add('active')
   passwordLogin.type = 'password';
})

form.addEventListener('submit', function(e){
   e.preventDefault()
   for(let input of inputs){
      if(input.value === ''){
         alert('Preencha todos os campos')
         return
      }
   }
   const checkLogin = json_obj.find(function(valor){
      return usuarioLogin.value === valor.username && passwordLogin.value === valor.password
   })
   if(checkLogin !== undefined){
      alert('Usuario Logado com Sucesso')
   }else{
      alert('Usuário não encontrado')
   }
})

function Get(yourUrl) {
   const Httpreq = new XMLHttpRequest();
   Httpreq.open("GET",yourUrl,false);
   Httpreq.send();
   return Httpreq.responseText;   

}
const json_obj = JSON.parse(Get("http://localhost:8080/usuarios"));




