const botaoEscolha = document.getElementById("escolha");

botaoEscolha.addEventListener("click", function personagem(){
    if (document.getElementById("Pink").checked){
        alert("Você escolheu " + document.getElementById("Pink").value);
        window.location = "file:///Users/vinielelopes/Downloads/projeto1/html/pagPink.html";
        // window.location.pathname = "/html/pagPink"
    } else if (document.getElementById("Felicia").checked){
        alert("Você escolheu " + document.getElementById("Felicia").value);
        window.location = "file:///Users/vinielelopes/Downloads/projeto1/html/pagFelicia.html";
                // window.location.pathname = "/html/pagFelicia"
    } else if (document.getElementById("Cerebro").checked){
        alert("Você escolheu " + document.getElementById("Cerebro").value);
        window.location = "file:///Users/vinielelopes/Downloads/projeto1/html/pagCerebro.html";
                // window.location.pathname = "/html/pagCerebro"
    } else {
        alert("Você não escolheu nenhum!")
    }

})