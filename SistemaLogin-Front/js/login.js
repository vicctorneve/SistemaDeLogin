const form = document.querySelector('.form')
const usuarioLogin = document.querySelector('#usuario-login');
const passwordLogin = document.querySelector('#password-login');
const inputs = form.querySelectorAll('input')
const btnShowPassword = form.querySelector('.eye-show')
const btnOcultPassword = form.querySelector('.eye-ocult')
const msgError = form.querySelector('.msg-error')
const confirmLogin = false;

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

async function logar(){
   try {
      const url = await fetch("http://localhost:8080/usuarios");
      if(url.status !== 200) throw new error('ERROR')
      const obj_json = await url.json();
      const confirm = await obj_json.find(valor => {
         return usuarioLogin.value === valor.username && passwordLogin.value === valor.password
      })
      checkLogin(confirm)
   } catch (error) {console.error(error)}
}

const checkLogin = confirm => confirm ? alert('Usuario Logado com Sucesso!') : alert('Usuario não encontrado')

