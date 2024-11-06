var lista = [1,2,3,4,5,6,7,8,9]
    
   function som(lista) {
       var soma = 0;
       for (var i = 0; i < lista.length; i++) {
           soma += lista[i];
       }
       return soma;
   }
   
   function maior(lista) {
       var maior = lista[0];
       for (var i = 1; i < lista.length; i++) {
           if (lista[i] > maior) {
               maior = lista[i];
           }
       }
       return maior;
   }
   


   function contarPares(lista) {
       var contador = 0;
       for (var i = 0; i < lista.length; i++) {
           if (lista[i] % 2 === 0) {
               contador++;
           }
       }
       return contador;
   }

   function mediaAritmetica(lista) {
       if (lista.length === 0) return 0;
       var soma = 0;
       for (var i = 0; i < lista.length; i++) {
           soma += lista[i];
       }
       return soma / lista.length;
   }
   
   function contarPositivosNegativos(lista) {
       var positivos = 0;
       var negativos = 0;
       for (var i = 0; i < lista.length; i++) {
           if (lista[i] >= 0) {
               positivos++;
           } else {
               negativos++;
           }
       }
       console.log(`Positivos: ${positivos}, Negativos: ${negativos}`);
   }

   function multiplicarElementos(lista, numero) {
       var novoArray = [];
       for (var i = 0; i < lista.length; i++) {
           novoArray.push(lista[i] * numero);
       }
       return novoArray;
   }