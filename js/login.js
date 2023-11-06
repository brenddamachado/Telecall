let login = document.querySelector('#login');
let labelLogin = document.querySelector('#labelLogin');
let validelogin = false;
let btn = document.querySelector('#verSenha');

let labelSenha = document.querySelector('#labelSenha');
let senha = document.querySelector('#senha');
let letvalidesenha = false;




btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha')
  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})




function entrar() {
  let usuario = document.querySelector("#login")
  let userLabel = document.querySelector("#labelLogin")

  let senha = document.querySelector("#senha")
  let senhaLabel = document.querySelector("#labelSenha")


  let mensagem = document.querySelector("#mensagem")

  let listaUser = []
  let userValid = {
    email: '',
    user: '',
    nome: '',
    senha: '',

  }

  listaUser = JSON.parse(localStorage.getItem('listaUser'))

  listaUser.forEach((item) => {
    if (usuario.value == item.login && senha.value == item.senha) {
      userValid = {
        nome: item.nome,
        user: item.login,
        senha: item.senha,
        email: item.email
      }
    }
  })
if(usuario.value == userValid.user && senha.value == userValid.senha ){
  alert('certo')
}else{
  
  userLabel.setAttribute('style', 'color: red')
  usuario.setAttribute('style', 'border-color:red')
  senhaLabel.setAttribute('style', 'color: red')
  senha.setAttribute('style', 'border-color:red')
  mensagem.innerHTML= "usuário ou senha incorretos"
  usuario.focus()
}


}