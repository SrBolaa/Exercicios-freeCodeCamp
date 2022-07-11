/* Retorne a string fornecida com a primeira letra de cada palavra em letra maiúscula. Certifique-se de que o resto da palavra esteja em letras minúsculas.

Para o propósito desse exercício, você também deve capitalizar as palavras conectoras como the e of. */
//REPOSTA

// Quando li a questão não tive muitas idéias de como resolver, busquei por dicas do exercício do que estudar, algumas da coisas que falou para estudar foi replace()
// comecei por ai, logo notei que precisaria de lembrar como usar expressões regulares que foi ensinado nas aulas anteriores, tive que pegar formula pronta porque
// era ainda muito complicado para mim fazer essa decoreba, metade do exercício estava pronto porem tinha um problema que quando passava uma frase com letra maiúscula no
// no meio dela não era corregido, então logo no começo da função a frase toda era transformada em minúscula, e logo apos pegava a primeira letra de cada palavra
// e deixava em maiúscula



function titleCase(str) {
  let min = str.toLowerCase();
  
  let correction =  min.replace(/(^\w{1})|(\s+\w{1})/g,letra => letra.toUpperCase());
  
  return correction;
};



titleCase("aPenas SoMenTe, Xesque No DELE.");

// retornara "Apenas Somente, Xesque no Dele." 
