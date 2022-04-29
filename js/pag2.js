const botaoEscolha = document.getElementById("escolha");

botaoEscolha.addEventListener("click", function personagem(){
    if (document.getElementById("Pink").checked){
        alert("Você escolheu " + document.getElementById("Pink").value);
    } else if (document.getElementById("Felicia").checked){
        alert("Você escolheu " + document.getElementById("Felicia").value);
    } else if (document.getElementById("Cerebro").checked){
        alert("Você escolheu " + document.getElementById("Cerebro").value);
    } else {
        alert("Você não escolheu nenhum!")
    }

})