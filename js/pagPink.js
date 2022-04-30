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
    if (pergunta2 === "Felícia" || pergunta2 === "felicia"){
        alert("Você acertou!");
        var pergunta3 = prompt("3- Onde Pink e Cérebro moram?");
    } else {
        alert("Você errou! Comece de novo.");
        window.location = ("file:///Users/vinielelopes/Downloads/projeto1/html/index.html");
    }
    if (pergunta3 === "laboratorio" || pergunta3 === "laboratório"){
        alert("Você acertou!");
        var pergunta4 = prompt("4- Você está quase lá! O que Cérebro fará hoje a noite?");
    } else {
        alert("Você errou! Comece de novo.");
        window.location = ("file:///Users/vinielelopes/Downloads/projeto1/html/index.html");
    }
    if (pergunta4 === "tentar conquistar o mundo"){
        alert("Você venceu!!!");
        window.location = ("file:///Users/vinielelopes/Downloads/projeto1/html/venceu.html")
    } else {
        alert("Você errou! Comece de novo.");
        window.location = ("file:///Users/vinielelopes/Downloads/projeto1/html/index.html");
    }

});
