const botao = document.getElementById("bot");

botao.addEventListener("click", function jogoFelicia(){
    var pergunta1 = prompt("1- Qual o sonho do Cérebro?");
    if (pergunta1 === "conquistar o mundo"){
        alert("Você acertou!");
        var pergunta2 = prompt("2- Qual o melhor amigo do Cérebro?");
    } else {
        alert("Você errou! Comece de novo.");
        window.location = ("file:///Users/vinielelopes/Downloads/projeto1/html/index.html");
    }
});