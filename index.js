const sectionCards = document.querySelector(".projects");

const projectCard = document.querySelector(".project");

const projects = [
  {
    name: "Boot4Free",
    description:
      "Plataforma que centraliza informações de bootcamp gratuitos. Projeto Final do bootcamp do front-end da reprograma.",
    link: "http://boot4free.org/",
    img: "./img/boot4free.png",
  },
  {
    name: "Coohabras",
    description: "Novo site da ONG Coohabras",
    link: "https://www.coohabras.org.br/",
    img: "./img/coohabras.png",
  },
  {
    name: "Github Search",
    description: "Projeto desenvolvido em React, com consumo da API do Github.",
    link: "https://github-search-reprograma.netlify.app/",
    img: "./img/github-search.png",
  },
  {
    name: "Mundo Gelado",
    description:
      "Projeto desenvolvido na semana 3 do bootcamp, utilizando HTML e CSS",
    link: "https://natalialuizas.github.io/mundo-gelado/",
    img: "./img/mundo-gelado.png",
  },
  {
    name: "M Maravilhosa",
    description:
      "Projeto desenvolvido na semana 4 do bootcamp, utilizando HTML e CSS.",
    link:
      "https://grace-murray-hopper.netlify.app/personalidade/grace-hopper/index.html",
    img: "./img/m-maravilhosa.png",
  },
  {
    name: "Todo List",
    description:
      "Projeto desenvolvido na semana 8 do bootcamp, utilizando JavaScript",
    link: "https://natalialuizas.github.io/todo-list/",
    img: "./img/todo-list.png",
  },
  {
    name: "Cozinha da Rê",
    description:
      "Projeto realizado durante a semana de projeto com clientes reais. Desenvolvido em HTML, CSS, Bootstrap, JavaScript e JQuery.",
    link: "http://cozinhadare.com.br/",
    img: "./img/cozinhadare.png",
  },
];

projects.map((project) => {
  const { img, description, link, name } = project;
  const cardClone = projectCard.cloneNode(true);
  cardClone.querySelector(".project__img").src = img;
  cardClone.querySelector(".project__title").textContent = name;
  cardClone.querySelector(".project__description").textContent = description;
  cardClone.querySelector(".link__site").href = link;
  sectionCards.appendChild(cardClone);
});

projectCard.remove();
