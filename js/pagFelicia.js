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
    if (pergunta2 === "pink"){
        alert("Você acertou!");
        var pergunta3 = prompt("3- Onde o Cérebro trabalha?");
    } else {
        alert("Você errou! Comece de novo.");
        window.location = ("file:///Users/vinielelopes/Downloads/projeto1/html/index.html");
    }
    if (pergunta3 === "laboratorio" || pergunta3 === "laboratório"){
        alert("Você acertou!");
        var pergunta4 = prompt("4- Qual turno o Cérebro trabalha?");
    } else {
        alert("Você errou! Comece de novo.");
        window.location = ("file:///Users/vinielelopes/Downloads/projeto1/html/index.html");
    }
    if (pergunta4 === "noite"){
        alert("Você acertou!");
        var pergunta5 = prompt("5-Felicia ama ap _ _ _ _r seus ratos. ");
    } else {
        alert("Você errou! Comece de novo.");
        window.location = ("file:///Users/vinielelopes/Downloads/projeto1/html/index.html");
    }
    if (pergunta5 === "apertar"){
        alert("Você acertou!");
        var pergunta6 = prompt("6- Você está quase lá!! Qual desenho de animação está no reboot com Pink e o Cérebro? ")
    } else {
        alert("Você errou! Comece de novo.");
        window.location = ("file:///Users/vinielelopes/Downloads/projeto1/html/index.html");

    }
    if (pergunta6 === "animaniacs"){
        alert("Você venceu!!");
        window.location = ("file:///Users/vinielelopes/Downloads/projeto1/html/venceu.html")
    } else {
        alert("Você errou! Comece de novo.");
        window.location = ("file:///Users/vinielelopes/Downloads/projeto1/html/venceuFelicia.html");

    }
});

