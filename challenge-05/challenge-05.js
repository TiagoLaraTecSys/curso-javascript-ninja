/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [1,'tiago','tiago@gmail.com',null,undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg){
    return arg;
}
console.log(myFunction(myArray));

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
function myFunction2(arg){
    return arg[1];
}
console.log(myFunction2(myArray));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var myFunction3 = function(arg,num){
    return arg[num];
}
console.log(myFunction3(myArray,2));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var myArray2 = ['tiago ribeiro',22,991021102,null,undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(myFunction(myArray2));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(livro){
    var obj = {
        'Antifragil': {quantidadePaginas: 600,
                 autor: 'Nassin taleb',
                 editora: 'bunda Cagada'},
        'tiaguete': {quantidadePaginas: 300,
                 autor: 'Tiagao',
                 editora: 'Andrea'},
        'guia': {quantidadePaginas: 60,
                 autor: 'Preguiçoso',
                 editora: 'Facin editar'}
    };

    var retornar = livro===undefined ? obj : obj[livro];
    return retornar;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Antifrágil tem '+ book('Antifragil').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Antifrágil é '+ book('Antifragil').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Antifrágil foi publicado pela editora '+ book('Antifragil').editora )
