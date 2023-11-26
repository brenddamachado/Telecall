window.onscroll = function() { mostrarSeta() };

function mostrarSeta() {
  var seta = document.querySelector('.seta_subir');
  var servicosDiv = document.getElementById('servicos_1');
  var servicosOffsetTop = servicosDiv.offsetTop;

  if (window.pageYOffset > servicosOffsetTop) {
    seta.style.display = 'block'; // Torna a seta visível
  } else {
    seta.style.display = 'none'; // Oculta a seta
  }
}

function scrollToServicos() {
  var servicosDiv = document.getElementById('servicos_1');
  var servicosOffsetTop = servicosDiv.offsetTop;

  window.scrollTo({
    top: servicosOffsetTop,
    behavior: 'smooth'
  });
}