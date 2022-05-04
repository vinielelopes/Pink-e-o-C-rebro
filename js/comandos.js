const botao = document.getElementById("bot");

botao.addEventListener("click", function inicio(){
    var nome = prompt("Para começar, diga seu nome: ");
    window.location.pathname = ("/Pink-e-o-Cerebro/html/pag2.html");
    alert("Olá, " + nome +  "! Vamos começar o jogo?")
})


