"use strict";
var Profissao;
(function (Profissao) {
    Profissao["Padeiro"] = "Padeiro";
    Profissao["Atriz"] = "Atriz";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz,
};
let pessoa2 = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro,
};
let pessoa3 = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz,
};
let pessoa4 = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissao.Atriz,
};
console.log(pessoa1);
