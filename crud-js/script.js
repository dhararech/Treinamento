
const form = document.getElementById("formUsuario");


form.addEventListener("submit", function(event){


event.preventDefault();


 
let nome = document.getElementById("nome").value;
let cpf = document.getElementById("cpf").value;
let email = document.getElementById("email").value;
let senha = document.getElementById("senha").value;


let usuario = {
    nome: nome,
    cpf: cpf,
    email: email,
    senha: senha
};


let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


usuarios.push(usuario);


localStorage.setItem("usuarios", JSON.stringify(usuarios));

document.getElementById("mensagem").innerHTML =
'<div class="alert alert-success">Usuário cadastrado com sucesso!</div>';


form.reset();

});