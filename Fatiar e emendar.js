/*Fatiar e emendar
Você está recebendo dois arrays e um índice.

Copie cada elemento da primeira matriz para a segunda matriz, em ordem.

Comece inserindo elementos no índice n do segundo array.

Retorne o array resultante. Os arrays recebidos devem permanecer os mesmos após a função ser executada.*/

function frankenSplice(arr1, arr2, n) {

 let add2Array = [...arr2];

 add2Array.splice(n, 0, arr1);

  return add2Array.flat();
  
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
