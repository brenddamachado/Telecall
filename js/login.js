let btn = document.querySelector('#verSenha');




btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha')
  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})



function entrar() {
  let usuario = document.querySelector("#login");
  let senha = document.querySelector("#senha");
  let mensagem = document.querySelector("#mensagem");
  let listaUser = JSON.parse(localStorage.getItem('listaUser'));
  let userValid = {
    email: '',
    user: '',
    nome: '',
    senha: '',
  };

  // Verifique se os campos de login e senha estão preenchidos
  if (usuario.value.trim() === "" || senha.value.trim() === "") {
    mensagem.innerHTML = "Preencha todos os campos!";
    return; // Impede que o formulário seja enviado
  }

  listaUser.forEach((item) => {
    if (usuario.value === item.login && senha.value === item.senha) {
      userValid = {
        nome: item.nome,
        user: item.login,
        senha: item.senha,
        email: item.email,
      };
    }
  });

  if (usuario.value === userValid.user && senha.value === userValid.senha) {
    window.open("https://projetotelecall.rianefm.repl.co/html/cpaas.html", "_blank");
    
    let token = Math.random().toString(16).substr(2);
    localStorage.setItem('token', token);
    localStorage.setItem('userLogado', JSON.stringify(userValid))

    // Limpar valores dos campos ao entrar na outra página
    usuario.value = "";
    senha.value = "";
    mensagem.innerHTML = "";


  } else {
    mensagem.innerHTML = "Usuário ou senha incorretos";
    usuario.focus();
  }
}
