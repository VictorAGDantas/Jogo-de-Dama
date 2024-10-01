console.log("teste")

let texto = "texto"

console.log("texto da variavel é " + texto)

let vetor = [1,2,3,4,5,6,7,8,9,10,133,444,666,14,19]

console.log(vetor)

console.log("O valor do indice 5 é: " + vetor[5])

console.log("O valor: " + vetor[8])



for(let i=0; i < vetor.length; i++) {
    console.log(vetor[i])
}

for(let item=0; item < vetor.length; item++) {
    console.log("O valor no indice " + item + " é " + vetor[item])
}

for(let cont=0; cont < vetor.length; cont++) {
    if(!(vetor[cont] % 2) == 0) {
        console.log("O valor no indice " + cont + " é um numero impar. Que é " + vetor[cont])
    } else {
        console.log("O valor no indice " + cont + " é um numero par. Que é " + vetor[cont])
    }
}

vetor.forEach(function(element) {
    console.log(element)
});


let nome = prompt("Digite seu nome: ");

function imprimirNome(texto) {
    let textoRecebido = "O texto recebido foi " + texto
    //return textoRecebido
    console.log(textoRecebido)
    return 1
};

//console.log(imprimirNome(nome))

let imprimir = imprimirNome(nome)
console.log(imprimir);


let number_1 = 2

let number_2 = 10

function verificarPar (a, b) {
    let calculo = (a + b) % 2

    if(calculo == 0) {
        return "par"  
    } else {
        return "impar"
    }
}

let resultado = verificarPar(10,6)
//console.log(resultado)
if (resultado == "par") {
    console.log("A soma dos 2 numeros é par") 
} else {
    console.log("A soma dos 2 numeros é impar")
}

//jogo de adivinhar número

//gerar um número aleatorio

//Solicitar um número para o Usuario

//Dizer se o Número é igual ao numero aleatorio

//let numeroAleatorio = Math.floor(Math.random() * 30) + 1

let numeroUsuario = Number(prompt("Digite um número: "))

//if(numeroAleatorio === numeroUsuario) {
//    console.log("Numero Igual")
//} else {
//    console.log("Números Diferentes: Numero do Usuario é " + numeroUsuario + 
//        ", e numero aleatorio é " + numeroAleatorio)
//}

function solicitarNumero () {
    let numeroUsuario = Number(prompt("Digite um número: "))
    if (numeroUsuario === numeroAleatorio) {
        console.log("Numeros Iguais")
        return numeroUsuario
    } else {
        console.log("Números Diferentes: Numero do Usuario é " + numeroUsuario)
        solicitarNumero()
    }
} 

//solicitarNumero()

function novoSolicitarNumero () {
    let novoNumeroUsuario = Number(prompt("Digite um número: "))
    if (novoNumeroUsuario === numeroAleatorio) {
        console.log("Numeros Iguais")
        return novoNumeroUsuario
    } else {
        if (novoNumeroUsuario > numeroAleatorio) {
            console.log("Numero sorteado é menor que " + novoNumeroUsuario)
        } else {
            console.log("Numero sorteado é maior que " + novoNumeroUsuario)
        }
        novoSolicitarNumero()
    }
} 

//novoSolicitarNumero()

let jog01 = true
let jog02 = false

function solicitarNumeroJogador (nomeJogador1, nomeJogador2) {
    let novoNumeroUsuario = Number(prompt("Digite um número: "))
    if (novoNumeroUsuario === numeroAleatorio) {
        console.log("Numeros Iguais")
        if(jog01) {
            console.log("Jogador " + nomeJogador1 + " GANHOUU!!!")
        } else {
            console.log("Jogador " + nomeJogador2 + " GANHOUU!!!")
        }
        return novoNumeroUsuario
    } else {
        if (novoNumeroUsuario > numeroAleatorio) {
            console.log("Numero sorteado é menor que " + novoNumeroUsuario)
        } else {
            console.log("Numero sorteado é maior que " + novoNumeroUsuario)
        }
        jog01 = !jog01
        jog02 = !jog02
        solicitarNumeroJogador(nomeJogador1, nomeJogador2)
    }
} 

//solicitarNumeroJogador("Natanael", "Victor")

/*
** Criar um jogo de numeros aleatorios
** Dar dicas para o usuario de o numero é maior ou menor
** E dizer qual foi o Jogador Campeão
** Ao final de cada partida, perguntar se os 2 usuarios jogar novamente
*** 2 sim, jogar novamente, 1 sim ou 2 não, para de jogar
** Quando os jogadores encerrarem, informar o numero de vitorias de cada um
*/

let jogador01 = true
let jogador02 = false
let vitoriaJog01 = 0
let vitoriaJog02 = 0
let numeroAleatorio = 0

let nameJogador01 = prompt("Digite o Nome do Jogador 01: ")
let nameJogador02 = prompt("Digite o Nome do Jogador 02: ")
let numeroMaximo = Number(prompt("Digite o maior número que pode ser sorteado: "))

function geradorNumeroAleatorio(maximo) {
    numeroAleatorio = Math.floor(Math.random() * maximo) + 1
    return numeroAleatorio
}

let menorNumero = 0
let maiorNumero = numeroMaximo

geradorNumeroAleatorio(numeroMaximo)

function solicitarNumeroJogador (nomeJogador1, nomeJogador2) {
    let novoNumeroUsuario = Number(prompt("Digite um número: "))

    if (novoNumeroUsuario === numeroAleatorio) {
        console.log("Numeros Iguais")

        if(jogador01) {
            console.log("Jogador " + nomeJogador1 + " GANHOUU!!!")
            vitoriaJog01 += 1

        } else {
            console.log("Jogador " + nomeJogador2 + " GANHOUU!!!")
            vitoriaJog02 += 1
        }
        let proximaJogada = jogarNovamente()

        if (proximaJogada) {
            jogador01 = true
            jogador02 = false
            menorNumero = 0
            maiorNumero = numeroMaximo
            geradorNumeroAleatorio(numeroMaximo)
            solicitarNumeroJogador(nomeJogador1, nomeJogador2)

        } else {
            console.log("JOGO ENCERRADO!!")

            if (vitoriaJog01 > vitoriaJog02) {
                console.log(nomeJogador1 + " GANHOU, por " + vitoriaJog01 + " X " + vitoriaJog02)

            } else if (vitoriaJog01 < vitoriaJog02) {
                console.log(nomeJogador2 + " GANHOU, por " + vitoriaJog02 + " X " + vitoriaJog01)

            } else {
                console.log("JOGO EMPATADO, por " + vitoriaJog01 + " X " + vitoriaJog02)
            }
        }

    } else {

        if (novoNumeroUsuario > numeroAleatorio) {
            if (novoNumeroUsuario < maiorNumero) {
                maiorNumero = novoNumeroUsuario
            }
            console.log("Numero sorteado é menor que " + novoNumeroUsuario + ". O Numero sorteado está entre " + menorNumero + " ___ " + maiorNumero )

        } else {
            if (novoNumeroUsuario > menorNumero) {
                menorNumero = novoNumeroUsuario
            }
            console.log("Numero sorteado é maior que " + novoNumeroUsuario + ". O Numero sorteado está entre " + menorNumero + " ___ " + maiorNumero )
        }

        jogador01 = !jogador01
        jogador02 = !jogador02

        solicitarNumeroJogador(nomeJogador1, nomeJogador2)
    }
} 

function jogarNovamente () {

    let respJog01 = prompt("Digite sua resposta Jog01: S/N")
    let respJog02 = prompt("Digite sua resposta Jog02: S/N")

    if(respJog01 == "S" && respJog02 == "S"){
        return true
    } else {
        return false
    }


}

solicitarNumeroJogador(nameJogador01, nameJogador02)

