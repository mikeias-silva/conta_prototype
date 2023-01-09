
function Conta(agencia, conta) {
    this.agencia = agencia;
    this.conta = conta
    this.saldo = 0;


}



const conta = new Conta(11, 22)
Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    return this.verSaldo();
}

Conta.prototype.verSaldo = function () {
    console.log(`Seu saldo é ${this.saldo}`);
}
Conta.prototype.sacar = function (valor) {

    if (valor > this.saldo) {
        console.log(`Saldo é insuficiente ${this.saldo}`);
    }
    console.log(`Sacado ${valor}. Seu saldo é ${this.saldo -= valor}`);

}
// console.log(conta);
// conta.depositar(100);
// conta.sacar(90);

function ContaCorrente(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
    
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente;

ContaCorrente.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

ContaCorrente.prototype.limite = function(valor){
    this.limite = valor;
}

const cc = new ContaCorrente(11, 22, 0);
// console.log(cc.);
cc.limite(5)

cc.depositar(100)
console.log(cc);
// cc.sacar(10)

function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo)
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.constructor = ContaPoupanca;

const cp = new ContaPoupanca(11, 22, 100)
cp.depositar(100);
// console.log(cp);
