$(document).ready(function(){

    //armazenar html de pessoa
    const nome = document.querySelector("[data-nome]");
    const cargo = document.querySelector("[data-cargo");

    //armazenar html de experiencia
    const nomeExperiencia = document.querySelector("[data-experiencia-nome]");
    const anoExperiencia = document.querySelector("[data-experiencia-ano]");
    const descExperiencia = document.querySelector("[data-experiencia-descricao]");

    //armazenar informacoes pessoais
    const email = document.querySelector("[data-email]");
    const telefone = document.querySelector("[data-telefone]");
    const objetivo = document.querySelector("[data-objetivo]");

    let urlExperiencia = '/experiencia';
    let urlPessoa = '/registros';
    let urlSobre = '/sobre';

    //ajax para pegar informacoes pessoais
    $.ajax({
        url: urlPessoa,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            console.log(data);
            nome.innerHTML = data[0].nome;
            cargo.innerHTML = data[0].cargo;
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log(textStatus + ' ' + errorThrown);
        }
    });

    //ajax para pegar experiencias
    $.ajax({
        url: urlExperiencia,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            console.log(data);
            nomeExperiencia.innerHTML = data[0].nome_empresa;
            anoExperiencia.innerHTML = data[0].ano;
            descExperiencia.innerHTML = data[0].descricao;
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log(textStatus + ' ' + errorThrown);
        }
    });

    //ajax para pegar informacoes pessoais
    $.ajax({
        url: urlSobre,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            console.log(data);
            email.innerHTML = data[0].email;
            telefone.innerHTML = data[0].telefone;
            objetivo.innerHTML = data[0].objetivos;
        }
    });
});