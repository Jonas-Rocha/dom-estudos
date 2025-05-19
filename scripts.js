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

const guests = document.querySelector("ul");
//console.log(guests);

const newGuest = document.createElement("li");
newGuest.classList.add("guest");

const guestName = document.createElement("span");

guestName.textContent = "Diego";

//const guestSurname = document.createElement("span");
//guestSurname.textContent = "Fernandes";

//adiciona após o último filho.
//newGuest.append(guestName, guestSurname /*Também funciona com virgula*/); //adiciona dentro do "li" o "span" do guestName
//adiciona antes do primeiro filho.
//newGuest.prepend(guestSurname);

//é mais simples que o append e aceita apenas um argumento sem virgula
newGuest.appendChild(guestName);

guests.prepend(newGuest);
