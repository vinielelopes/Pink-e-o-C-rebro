const botao = document.getElementById("bot");

botao.addEventListener("click", function jogoCerebro(){
    var pergunta1 = prompt("1- Quanto é 4 + 4?");
    if (pergunta1 === "8"){
        alert("Você acertou!");
        var pergunta2 = prompt("2- Quanto é 5 x 7?");
    } else {
        alert("Você errou! Comece de novo.");
        window.location = ("file:///Users/vinielelopes/Downloads/projeto1/html/index.html");
    }
    if (pergunta2 === "35"){
        alert("Você acertou!");
        var pergunta3 = prompt("3- Quanto é 45 / 9?");
    } else {
        alert("Você errou! Comece de novo.");
        window.location = ("file:///Users/vinielelopes/Downloads/projeto1/html/index.html");
    }
    if (pergunta3 === "5"){
        alert("Você acertou!");
        var pergunta4 = prompt("4- Quanto é 7 x 3?");
    } else {
        alert("Você errou! Comece de novo.");
        window.location = ("file:///Users/vinielelopes/Downloads/projeto1/html/index.html");
    }
    if (pergunta4 === "28"){
        alert("Você acertou!");
        var pergunta5 = prompt("5- Você está quase lá! Quanto é 5 x 5 + 3 / 2?");
    } else {
        alert("Você errou! Comece de novo.");
        window.location = ("file:///Users/vinielelopes/Downloads/projeto1/html/index.html");
    }
    if (pergunta5 === "14"){
        alert("Você venceu!!");
        window.location = ("file:///Users/vinielelopes/Downloads/projeto1/html/venceu.html")
    } else {
        alert("Você errou! Comece de novo.");
        window.location = ("file:///Users/vinielelopes/Downloads/projeto1/html/index.html");

    }
});

