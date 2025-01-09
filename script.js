// bouton click erreur veuillez saisir les champs !

let btnClick = document.querySelector("button");
let formform = document.querySelector(".formform");

console.log(btnClick);

input.value.trim();
textarea.value.trim();

btnClick.addEventListener('click', (event) => {

    if (input.value == "" || textarea.value == "") {
        formform.style.backgroundColor = "red";
    }

});

