//Visualizar o conteúdo do document.
//console.log(document)

//obter o title da página.

console.log(document.title);

//acessar elemento pelo ID
const guest = document.getElementById("guest-2");
console.log(guest);

//mostra as propriedades do objeto
console.dir(guest);

//acessar elemento com class (SELETOR class)
const guestsByClass = document.getElementsByClassName("guest");
console.log(guestsByClass);

//Exibir o primeiro elemento da lista
console.log(guestsByClass.item(0)); //pegando o "item da lista de metodos"
console.log(guestsByClass[1]);

//Selecionar uma lista de elementos pela tag
const guestByTag = document.getElementsByTagName("li");
console.log(guestByTag);
