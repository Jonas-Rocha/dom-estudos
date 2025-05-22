/*

//Visualizar o conteúdo do document.
//console.log(document)

//obter o title da página.

// console.log(document.title);

//acessar elemento pelo ID
// const guest = document.getElementById("guest-2");
// console.log(guest);

//mostra as propriedades do objeto
// console.dir(guest);

//acessar elemento com class (SELETOR class)
//const guestsByClass = document.getElementsByClassName("guest");
//console.log(guestsByClass);

//Exibir o primeiro elemento da lista
//console.log(guestsByClass.item(0)); //pegando o "item da lista de metodos"
//console.log(guestsByClass[1]);

//Selecionar uma lista de elementos pela tag
// const guestByTag = document.getElementsByTagName("li");
// console.log(guestByTag);

// Acessa o elemento pelo selector ID
// const guest = document.querySelector("#guest-1");
// console.log(guest);

//Acessa o elemento pelo selector class
//const guests = document.querySelector(".guest");

//Retorna todos os elementos encontrados pelo query
// const guests = document.querySelectorAll(".guest");
// console.log(guests);

//>>>>>>>>>>>>>>>>>>> Manipulando Elementos

//Retorna o conteúdo como texto.
//const guest = document.querySelector("#guest-1 span"); //OBS 2: PORÉM, se eu coloco o espaço e o nome da  "tag" ele usa a tag como referencia e mantem.
//console.log(guest.textContent);
// OBS: O textContent substitui tudo pelo texto, ele tira e substitui qualquer tag e apenas adiciona um texto.
//guest.textContent = "João";

// const guest = document.querySelector("#guest-1");
// console.log(guest.textContent); //Retorna o conteúdo visível e oculto.
// console.log(guest.innerText); //Retorna sem formatação o texto.
// console.log(guest.innerHTML); //Retorna o HTML do elemento como texto.

// const input = document.querySelector("#name");
//Adiciona a classe.
//input.classList.add("input-error");

//Remove a classe.
//input.classList.remove("input-error");

//Se tiver a classe ele remove. se não tiver, ele adicona.
//input.classList.toggle("input-error");

// const button = document.querySelector("button");

//Modificar as propriedades css do elemento.
// button.style.backgroundColor = "red";

//>>>>>>>>>>>>>>>Criando Elementos e inserindo HTML por meio de JS

// const guests = document.querySelector("ul");
// console.log(guests);
// const newGuest = document.createElement("li");
// newGuest.classList.add("guest");

// const guestName = document.createElement("span");

// guestName.textContent = "Diego";

//const guestSurname = document.createElement("span");
//guestSurname.textContent = "Fernandes";

//adiciona após o último filho.
//newGuest.append(guestName, guestSurname Também funciona com virgula*); //adiciona dentro do "li" o "span" do guestName
//adiciona antes do primeiro filho.
// newGuest.prepend(guestSurname);

//é mais simples que o append e aceita apenas um argumento sem virgula
// newGuest.appendChild(guestName);

// guests.append(newGuest);

//>>>>>>>>>>>>>>>>>>Manipulando Atributos

//const input = document.querySelector("input");

// Atualizar um atributo.
//input.setAttribute("disabled", true);
//input.setAttribute("type", "file");

// Remover um atributo.
//input.removeAttribute("id");

// >>>>>>>>>>>>>>>>>>>>>>>>TREINO FREESTYLE LOL

// const input = document.querySelector("input");

// let inputValue = "";

// input.addEventListener("keyup", (abobora) => {
//   console.log(abobora);
//   inputValue = input.value;
//   console.log(inputValue);
// });

// const addNewGuest = (event) => {
//   event.preventDefault();
//   const guests = document.querySelector("ul");
//   const newGuest = document.createElement("li");
//   newGuest.classList.add("guest");
//   const guestName = document.createElement("span");
//   guestName.textContent = inputValue;
//   newGuest.appendChild(guestName);
//   guests.append(newGuest);
// };

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Aprendendo Eventos

// window.addEventListener("load", () => {
//   console.log("A página foi carregada!");
// });

// addEventListener("click", (event) => {
//   event.preventDefault();

//   Retorna todas as informações do evento.
//   console.log(event);

//   Retorna o elemento clickado.
//   console.log(event.target.text);
// });

//>>>>>>>>>>>>>>>>>>>Eventos em um elemento específico

// const ul = document.querySelector("ul");
// ul.addEventListener("scroll", () => {
//   console.log(ul.scrollTop);

//   if (ul.scrollTop > 302) {
//     console.log("Fim da lista");

//     ul.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }
// });

// const button = document.querySelector("button");

// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("Clickou!");
// });

// const form = document.querySelector("form");

//form.addEventListener("//aqui eu poderia escolher qual evento eu iria querer lidar",);

// form.onsubmit aqui eu poderia escolher especificamente o evento "onsubmit" para trabalhar =
//   (event) => {
//     event.preventDefault();
//     console.log("Você fez submit no formulário #1");
//     o evento "onsubmit" diferente do "Onclick" aceita imprimir a tecla "enter" por exemplo, diferente do "onclick" que é apenas clickando
//   };

// form.onsubmit aqui eu poderia escolher especificamente o evento "onsubmit" para trabalhar =
//   (event) => {
//     event.preventDefault();
//     console.log("Você fez submit no formulário #2");
//     o evento "onsubmit" diferente do "Onclick" aceita imprimir a tecla "enter" por exemplo, diferente do "onclick" que é apenas clickando
//   };

//>>>>>>>>>SEMPRE QUE FAZEMOS COM O ONSUBMIT ELE APENAS IRÁ CONSIDERAR O ÚLTIMO QUE VOCÊ CRIOU E NÃO IRÁ CONSIDERAR OS QUE VIERAM ANTES
//MESMO USANDO O ONSUBMIT COMO EXEMPLO, A IDEIA É A MESMA COM O ONCLICK ETC

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("Você fez submit no formulário #3");
// });

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("Você fez submit no formulário #4");
// });

//>>>>>>>>>>>>O addEventListener IRÁ SEMPRE CONSIDERAR TODOS OS CRIADOS

//>>>>>>>>>>>>>>>>>>>>>>>>>>EVENTOS DE INPUT

// const input = document.querySelector("input");

//Keydown - quando uma tecla é pressionada (captura tudo, incluindo ctrl, shift, etc.)
// input.addEventListener("keydown", (event) => {
//   console.log(event.key);
// });

//Keypress - quando uma tecla do tipo caractere é pressionada (letras, números, pontos, etc.)
// input.addEventListener("keypress", (event) => {
//   console.log(event.key);
// });

// input.onchange = () => {
//   console.log("O INPUT MUDOU!");
// };

// input.onchange = () => {
//   inputChange();
// };

// function inputChange() {
//   console.log("O INPUT MUDOU!");
// }

*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>EXPRESSÃO REGULAR
//REGEXR.COM

const input = document.querySelector("input");
const form = document.querySelector("form");
const regex = /\D+/;
input.addEventListener("input", () => {
  const value = input.value;
  //   Retorna o padrão encontrado na string
  //   console.log(value.match(regex));
  //   Testa se atende o padrão
  //   const isValid = regex.test(value);
  //   console.log(isValid);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;

  if (!regex.test(value)) {
    alert("Padrão não encontrado");
  }
  // const value = input.value.replace(regex, "");

  // console.log(value);
});
