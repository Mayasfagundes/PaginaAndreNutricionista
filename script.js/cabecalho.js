// Seleciona o cabeçalho
var meuCabecalho = document.getElementById("meuCabecalho");

// Adiciona um evento de rolagem à página
window.addEventListener("scroll", function() {
    // Verifica a posição do scroll
    if (window.scrollY > meuCabecalho.offsetHeight) {
        // Quando o scroll ultrapassa a altura do cabeçalho, adiciona a classe "scroll"
        meuCabecalho.classList.add("scroll");
    } else {
        // Caso contrário, remove a classe "scroll"
        meuCabecalho.classList.remove("scroll");
    }
});




document.addEventListener('DOMContentLoaded', function() {
    const iconeMenu = document.getElementById('icone-menu');
    const menuLista = document.querySelector('.menu-hamburguer__lista');

    iconeMenu.addEventListener('click', function() {
        menuLista.classList.toggle('mostrar-menu');
    });
});




const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.scrollY + (window.innerHeight * 2) / 4;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

animeScroll();

if (target.length) {
  window.addEventListener('scroll', function () {
    animeScroll();
  });
}


const myObserver = new IntersectionObserver ( (entries) =>{
entries.forEach( (entry) =>{
  if(entry.isIntersecting){
    entry.target.classList.add('show')
  } else {
    entry.target.classList.remove('show')
  }
  
})

})