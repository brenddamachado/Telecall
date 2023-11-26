let userLogado = JSON.parse( localStorage.getItem('userLogado'))
let logado = document.querySelector('#logado')

logado.innerHTML = `Olá, ${userLogado.nome}`

if(localStorage.getItem('token') == null){
  document.body.innerHTML = '';  // Define o conteúdo do corpo da página como vazio
  document.body.style.backgroundColor = 'white';

  document.write('<h1>Você não está logado!</h1>'); // Escr
 window.location.href = 'https://projetotelecall.rianefm.repl.co/html/Login.html'
}
function sair() {
  localStorage.removeItem('token');
  localStorage.removeItem('userLogado');
  localStorage.setItem('userLogado', JSON.stringify({ nome: '' })); // Zera o nome de usuário
  window.location.href = 'https://projetotelecall.rianefm.repl.co/html/Login.html';
}


