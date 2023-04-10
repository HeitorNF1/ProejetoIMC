
var botao = document.querySelector('#adicionar-paciente');


var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];
    
    
    var tdpeso = paciente.querySelector('.info-peso') // informa TD do peso

    var peso = tdpeso.textContent; // informa o conteúdo escrito dentro da TD
    
    console.log(peso);
    
    var TDaltura = paciente.querySelector('.info-altura')  // informa td da altura
    
    
    var altura = TDaltura.textContent; //informa o contéudo escrito dentro da Td 
        
    console.log(altura)
    
    var tdimc = paciente.querySelector(".info-imc");
    
    
    //verifica se as informações passadas estão corretas
    
    
    var AlturaEhValida = validaAltura(altura);
    
    var PesoEhValido = validaPeso(peso);


    
    if (!PesoEhValido){
    
        paciente.classList.add('pacienteInvalido');

        PesoEhValido = false;

        tdpeso.textContent = ('peso inválido')

        
        
        

        
    }
    
    if (!AlturaEhValida){
        
        paciente.classList.add('pacienteInvalido');
        
        
        TDaltura.textContent= ('altura inválida')
        
        
        AlturaEhValida = false;
       
    }
    
    if (AlturaEhValida && PesoEhValido){
        
        var imc = calculaIMC(peso,altura);
        tdimc.textContent = imc;
    
       
    }

}

function calculaIMC(peso,altura){
    
    var imc = 0;

     imc = peso / (altura * altura);
    
     

    return imc.toFixed(2);
}

function validaPeso(peso){

    if (peso > 0 && peso < 1000){
        return true;
    }else{
            return false;
        }
}

function validaAltura(altura){
    if(altura > 0 && altura < 4.00){
        return true;
    }else{
        return false;
    }
}














