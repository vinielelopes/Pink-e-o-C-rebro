const botao = document.getElementById("bot");

botao.addEventListener("click", function jogoFelicia(){
    var pergunta1 = prompt("1- Qual o sonho do Cérebro?\n 1- ficar rico\n 2-conquistar o mundo\n 3- ser pai");
    if (pergunta1 === "2"){
        alert("Você acertou!");
        var pergunta2 = prompt("2- Qual o melhor amigo do Cérebro?\n 1- ninguém\n 2- pink\n 3-gato");
    } else {
        alert("Você errou! Comece de novo.");
        window.location.pathname = ("/Pink-e-o-Cerebro/");
    }
    if (pergunta2 === "2"){
        alert("Você acertou!");
        var pergunta3 = prompt("3- Onde o Cérebro trabalha?\n 1- escritório\n 2- laboratório \n 3- hospital");
    } else {
        alert("Você errou! Comece de novo.");
        window.location.pathname = ("/Pink-e-o-Cerebro/");
    }
    if (pergunta3 === "2"){
        alert("Você acertou!");
        var pergunta4 = prompt("4- Qual turno o Cérebro trabalha?\n 1- manhã\n 2- tarde\n 3- noite");
    } else {
        alert("Você errou! Comece de novo.");
        window.location.pathname = ("/Pink-e-o-Cerebro/");
    }
    if (pergunta4 === "3"){
        alert("Você acertou!");
        var pergunta5 = prompt("5-O que Felicia ama fazer com seus ratos. \n 1-apertar\n 2-brincar\n 3- dormir");
    } else {
        alert("Você errou! Comece de novo.");
        window.location.pathname = ("/Pink-e-o-Cerebro/");
    }
    if (pergunta5 === "1"){
        alert("Você acertou!");
        var pergunta6 = prompt("6- Você está quase lá!! Qual desenho de animação está no reboot com Pink e o Cérebro?\n 1- simpsons\n 2- animaniacs\n 3- looney tunes ")
    } else {
        alert("Você errou! Comece de novo.");
        window.location.pathname = ("/Pink-e-o-Cerebro/");

    }
    if (pergunta6 === "2"){
        alert("Você venceu!!");
        window.location.pathname = ("/Pink-e-o-Cerebro/html/venceuFelicia.html")
    } else {
        alert("Você errou! Comece de novo.");
        window.location.pathname = ("Pink-e-o-Cerebro/");

    }
});

