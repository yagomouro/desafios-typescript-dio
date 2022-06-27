enum Profissao {
  Padeiro = 'Padeiro',
  Atriz = 'Atriz',
}

interface Person {
  nome: string;
  idade: number;
  profissao: string;
}

let pessoa1: Person = {
  nome: 'Maria',
  idade: 29,
  profissao: Profissao.Atriz,
};

let pessoa2: Person = {
  nome: 'Roberto',
  idade: 19,
  profissao: Profissao.Padeiro,
};
let pessoa3: Person = {
  nome: 'Laura',
  idade: 32,
  profissao: Profissao.Atriz,
};
let pessoa4: Person = {
  nome: 'Carlos',
  idade: 19,
  profissao: Profissao.Atriz,
};

console.log(pessoa1);
