let botaoAtualizar = document.getElementById(
  'atualizar-saldo'
) as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = `${0}`;

function somarAoSaldo(soma: number) {
  if (campoSaldo) {
    let oldValue = Number(campoSaldo.innerHTML);
    let result = oldValue + soma;

    campoSaldo.innerHTML = result.toString();
  }
}

function limparSaldo() {
  if (campoSaldo) {
    campoSaldo.innerHTML = '';
  }
}

botaoAtualizar?.addEventListener('click', function () {
  somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
  limparSaldo();
});
