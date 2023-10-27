function validarFormulario() {
  var email = document.getElementById("email").value;
  var senha=document.getElementById("password").value;
  var erroSenha = document.getElementById("erroSenha");
  var erroEmail =document.getElementById("erroEmail");
  var formulario = document.getElementById("formulario");

  // Validação do e-mail (usando uma expressão regular simples)
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
     erroEmail.innerContent="E-mail inválido.";
    return false;
  } else {
    erroEmail.textContent = "";
  }


  // Validação da senha (pode adicionar mais critérios)
   var regexSenha = /^[a-zA-Z]{8}$/;

  if (!regexSenha.test(senha)) {
    erroSenha.textContent = "A senha deve conter exatamente 8 letras.";
    return false; // Impede o envio do formulário
  } else {
    erroSenha.textContent = "";
  }

    // Se todos os campos estiverem válidos, o formulário é enviado
    return true;
  }

document.getElementById('passwor')
