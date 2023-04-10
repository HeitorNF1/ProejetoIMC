//faz com que toda vez que aperte o botão ele exiba uma mensagem no console

botao.addEventListener('click',function(event){
    
    event.preventDefault(); // não deixa com que o botão faça sua função padrão de atualizar a página
    
    var form = document.querySelector('#form-add');

    //extraindo valores informados no formulário

    var paciente = obtemPaciente(form);
    
    //chama a função criaTR
    
    var pacienteTR =  criaTR(paciente);

    
    //validando o paciente. Caso ele não teenha valores compatíveis, ele não será inserido na tabela e aparecerá uma mensagem de erro (poderia ter sido feita com alert também)

    var erros = validaPaciente(paciente);
    
    
    
    
    
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    
    
    
    //imprimindo as tabelas na tela 

    tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTR);


    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    
    mensagensErro.innerHTML = "";

    

});

//funções usadas



function obtemPaciente(form){

    var paciente = {
    nome:form.nome.value,
    peso:form.peso.value,
    altura:form.altura.value,
    gordura:form.gordura.value,
    imc:calculaIMC(form.peso.value, form.altura.value)

    
    }
    return paciente;
}



function criaTR(paciente){
    
    var pacienteTR = document.createElement('tr');


    pacienteTR.classList.add("paciente");

    //criando as td´s e as colocando como filhos da TR

    pacienteTR.appendChild(montaTD(paciente.nome, 'info-nome'));
    pacienteTR.appendChild(montaTD(paciente.peso,'info-peso'));
    pacienteTR.appendChild(montaTD(paciente.altura,'info-altura'));
    pacienteTR.appendChild(montaTD(paciente.gordura,'info-gordura'));
    pacienteTR.appendChild(montaTD(paciente.imc,'info-imc'));

    return pacienteTR;


}


function montaTD(dado, classe){

var td = document.createElement('td');

td.textContent = dado;

td.classList.add(classe);

return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    return erros;
}


function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = '';
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

