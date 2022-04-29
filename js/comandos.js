const botao = document.getElementById("bot");

botao.addEventListener("click", function inicio(){
    var nome = prompt("Para começar, diga seu nome: ");
    // window.location.pathname = "/html/pag2.html";
    window.location = "file:///Users/vinielelopes/Downloads/projeto1/html/pag2.html";
    alert("Olá, " + nome +  "! Vamos começar o jogo?")
})

