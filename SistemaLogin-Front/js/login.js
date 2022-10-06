const form = document.querySelector('.form')
const usuarioLogin = document.querySelector('#usuario-login');
const passwordLogin = document.querySelector('#password-login');
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
   logar()

})

function logar(){
   fetch("http://localhost:8080/usuarios")
   .then((response) => response.json())
   .then((obj) => {
      return checkLogin = obj.find((valor) => {
         return usuarioLogin.value === valor.username && passwordLogin.value === valor.password
      }) 
      
   })
   .then((login) => {
      if(login !== undefined){
         alert('Usuario Logado com Sucesso!')
      } else {
         alert('Usuario não encontrado')
      }
   })
   .catch((e) => alert(e))
}





