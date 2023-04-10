var pacientes = document.querySelectorAll('.paciente');

var tabela = document.querySelector('table');



    tabela.addEventListener("dblclick", function(event){

        var alvoEvento  = event.target;

        var paiDoAlvo = alvoEvento.parentNode; // TR = papciente = remover
    
        paiDoAlvo.classList.add("fadeOut"); // faz com que o comando seja executado com delay, assim sendo acionado após 380 milisegundos
        setTimeout(function(){
            paiDoAlvo.remove();
        },500)

        
    });






