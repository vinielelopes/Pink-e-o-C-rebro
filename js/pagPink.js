const botao = document.getElementById("bot");

botao.addEventListener("click", function jogoPink(){
    var pergunta1 = prompt("1- Que animal o Cérebro é?");
    if (pergunta1 === "rato"){
        alert("Você acertou!");
        var pergunta2 = prompt("2- Qual o nome da dona do Cérebro?");
    } else {
        alert("Você errou! Comece de novo.");
        window.location = ("file:///Users/vinielelopes/Downloads/projeto1/html/index.html");
    }
});
