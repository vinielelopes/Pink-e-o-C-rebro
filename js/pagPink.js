const botao = document.getElementById("bot");

botao.addEventListener("click", function jogoPink(){
    var pergunta1 = prompt("1- Que animal o Cérebro é?\n 1- gato\n 2- rato \n 3- macaco");
    while (pergunta1 != 1 && pergunta1 != 2 && pergunta1 != 3) {
        if (pergunta1 === "2"){
            alert("Você acertou!");
            var pergunta2 = prompt("2- Qual o nome da dona do Cérebro?\n 1- marisa\n 2- isa\n 3- felicia");
        } else {
            alert("Você errou! Comece de novo.");
            window.location.pathname = ("/Pink-e-o-Cerebro/");
        }
    }

    while (pergunta2 != 1 && pergunta2 != 2 && pergunta2 != 3) {
        if (pergunta2 === "3"){
            alert("Você acertou!");
            var pergunta3 = prompt("3- Onde Pink e Cérebro moram?\n 1- casa\n 2- árvore \n 3- laboratório ");
        } else {
            alert("Você errou! Comece de novo.");
            window.location.pathname = ("/Pink-e-o-Cerebro/");
        }
    }

    while (pergunta3 != 1 && pergunta3 != 2 && pergunta3 != 3) {
        if (pergunta3 === "3"){
            alert("Você acertou!");
            var pergunta4 = prompt("4- Você está quase lá! O que Cérebro fará hoje a noite?\n 1- conquistar o mundo\n 2- dormir\n 3- estudar");
        } else {
            alert("Você errou! Comece de novo.");
            window.location.pathname = ("/Pink-e-o-Cerebro/");
        }
    }

    while (pergunta4 != 1 && pergunta4 != 2 && pergunta4 != 3) {
        if (pergunta4 === "1"){
            alert("Você venceu!!!");
            window.location.pathname = ("/Pink-e-o-Cerebro/html/venceu.html")
        } else {
            alert("Você errou! Comece de novo.");
            window.location.pathname = ("/Pink-e-o-Cerebro/");
        }
    }

});
