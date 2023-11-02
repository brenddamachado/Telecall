let login = document.querySelector('#login');
let labelLogin = document.querySelector('#labelLogin');
let validelogin = false;
let btn = document.querySelector('#verSenha');

let labelSenha = document.querySelector('#labelSenha');
let senha = document.querySelector('#senha');
let letvalidesenha = false;

senha.addEventListener('input', () => {
  senha.value = senha.value.replace(/[^a-zA-Z]/g, ''); // Remove caracteres não alfabéticos

  if (senha.value.length < 8) {
    labelSenha.setAttribute('style', 'color: red');
    labelSenha.innerHTML = 'Senha *Insira no mínimo 8 caracteres';
    validesenha = false;
  } else {
    labelSenha.setAttribute('style', 'color: green');
    labelSenha.innerHTML = 'Senha';
    validesenha = true;
  }
});


btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha')
  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

login.addEventListener('input', function () {
  let inputValue = login.value;

  // Remova espaços em branco do início e do final do valor
  inputValue = inputValue.trim();

  // Remova todos os números do valor
  inputValue = inputValue.replace(/\d/g, '');

  login.value = inputValue; // Define o valor do campo sem os números

  if (inputValue.length === 6) {
    labelLogin.textContent = "Login:";
    labelLogin.style.color = "green";
    validelogin = true;
  } else {
    labelLogin.textContent = "Login: Digite exatamente 8 letras.";
    labelLogin.style.color = "red";
    validelogin = false;
  }
});