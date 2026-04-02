document.addEventListener("DOMContentLoaded", function() {
  const atores = document.querySelectorAll(".atores .ator");
  const botao = document.querySelector(".header-elenco button");
  let expandido = false;

  // Esconde todos os atores depois do 6º
  atores.forEach((ator, index) => {
    if (index >= 6) {
      ator.style.display = "none";
    }
  });

  botao.addEventListener("click", function() {
    if (!expandido) {
      // Mostrar extras
      atores.forEach((ator, index) => {
        if (index >= 6) {
          ator.style.display = "block";
        }
      });
      botao.textContent = "Ver menos";
      expandido = true;
    } else {
      // Esconder novamente
      atores.forEach((ator, index) => {
        if (index >= 6) {
          ator.style.display = "none";
        }
      });
      botao.textContent = "Ver mais";
      expandido = false;
    }
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const resenhas = document.querySelectorAll(".container-resenha .resenha");
  const botao = document.querySelector(".header-resenhas .button-resenha");
  let expandido = false;

  // Esconde todas as resenhas depois da 2ª
  resenhas.forEach((resenha, index) => {
    if (index >= 2) {
      resenha.style.display = "none";
    }
  });

  botao.addEventListener("click", function() {
    if (!expandido) {
      // Mostrar as demais
      resenhas.forEach((resenha, index) => {
        if (index >= 2) {
          resenha.style.display = "block";
        }
      });
      botao.textContent = "Ver menos";
      expandido = true;
    } else {
      // Esconder novamente
      resenhas.forEach((resenha, index) => {
        if (index >= 2) {
          resenha.style.display = "none";
        }
      });
      botao.textContent = "Ver mais";
      expandido = false;
    }
  });
});