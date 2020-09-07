/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'paranaense';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Coritiba','FC Cascavel', 'Athletico-PR','Operário','Cianorte'];
console.log(teams);

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
var showTeamPosition = function(num){
    if (num >=1 && num <=5) {
        return 'O time que está em '+num+'º lugar é o ' + teams[num-1];
    }
        return 'Não temos a informação do time que está nessa posição';
};
console.log(showTeamPosition(5));
/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(1));
console.log(showTeamPosition(2));
console.log(showTeamPosition(3));
console.log(showTeamPosition(6));
/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var numeros = 20;
while(numeros <=30){
    console.log(numeros++);
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(color){
    switch(color){
        case 'red':
            return 'O hexadecimal para a cor '+ color + ' é #ff0000'
        break;
        case 'green':
            return 'O hexadecimal para a cor '+ color + ' é #00ff00'
        break;
        case 'blue':
            return 'O hexadecimal para a cor '+ color +' é #0000ff';
        break;
        case 'yellow':
            return 'O hexadecimal para a cor '+ color +' é #ffff00';
        break;
        case 'orange':
            return 'O hexadecimal para a cor '+ color +' é #ff7200';
        break;
        default:
            return 'Não temos o equivalente hexadecimal para cor: ' + color;
    }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('red'));
console.log(convertToHex('green'));
console.log(convertToHex('orange'));
console.log(convertToHex('yellow'));
console.log(convertToHex('blue'));
console.log(convertToHex('black'));
console.log(convertToHex('white'));
console.log(convertToHex('purple'));
