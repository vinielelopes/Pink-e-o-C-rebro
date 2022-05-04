const botaoEscolha = document.getElementById("escolha");

botaoEscolha.addEventListener("click", function personagem(){
    if (document.getElementById("Pink").checked){
        alert("Você escolheu " + document.getElementById("Pink").value);
        window.location.pathname = ("/Pink-e-o-Cerebro/html/pagPink");
    } else if (document.getElementById("Felicia").checked){
        alert("Você escolheu " + document.getElementById("Felicia").value);
        window.location.pathname = ("/Pink-e-o-Cerebro/html/pagFelicia");
    } else if (document.getElementById("Cerebro").checked){
        alert("Você escolheu " + document.getElementById("Cerebro").value);
        window.location.pathname = ("/Pink-e-o-Cerebro/html/pagCerebro");
    } else {
        alert("Você não escolheu nenhum!")
    }

})