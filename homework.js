/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código: 
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var nuevoArreglo= array.map(function(elemento)
   {
      return elemento + 1;
   });

   return nuevoArreglo;

   
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var fraseArreglada=palabras.join(" ");
   return fraseArreglada;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   for (let i=0; i<array.length; i++)
   {
      if (array[i] === elemento)
      {
         return true;
      }
   }
   {
      return false;
   }
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var sumaDeElementos=0;
   for(let i=0; i<arrayOfNums.length; i++)
   {
   var sumaDeElementos= sumaDeElementos + arrayOfNums[i];
   }
   return sumaDeElementos;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var promedio=0;
   var sumaDeNotas=0;
   for(let i=0; i<resultadosTest.length; i++)
   {
      var sumaDeNotas= sumaDeNotas + resultadosTest[i];
   }
   promedio=sumaDeNotas/resultadosTest.length;
   return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let MayorNumero=arrayOfNums[0];
   for(let i=0; i<arrayOfNums.length; i++)
   {
      if(arrayOfNums[i]>MayorNumero)
      {
         MayorNumero=arrayOfNums[i]
      }
   }
return MayorNumero;

}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length===0)
   {
      return 0;
   }
   if(arguments.length===1)
   {
      return arguments[0];
   }
   let producto=1;
   for(let i=0; i<arguments.length; i++)
   {
      producto=producto*arguments[i];
   }
   return producto;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let cont=0;
   for(let i=0; i<array.length; i++)
   {
      if(array[i]>18)
      {
         cont++;
      }
   }
   return cont;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia===1 || numeroDeDia===7)
   {
      return "Es fin de semana";
   }
   else
   {
      return "Es dia laboral";
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

      // Convertimos el número a una cadena (string)
      var numStr = num.toString();
    
      // Verificamos si el primer carácter de la cadena es '9'
      if (numStr.charAt(0) === '9') {
        return true;
      } else {
        return false;
      }
    
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
 const primerElemento = array[0];
  for (let i = 1; i < array.length; i++) {
   if (array[i] !== primerElemento) {
     return false; // Si encontramos un elemento distinto al primero, no todos son iguales.
   }
 }
 return true; // Si no se encontró ningún elemento distinto al primero, todos son iguales.
}


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var nuevoArray=[];
   var encontrados=0;
   for(let i=0; i<array.length; i++)
   {
      if (array[i]=== "Enero" || array[i]=== "Marzo" || array[i]=== "Noviembre")
      {
         nuevoArray.push(array[i]);
         encontrados++;
      }
   }
     if (encontrados===3)
     {
      return nuevoArray;
     }
     else
     {
      return "No se encontraron los meses pedidos";
     }
   
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let tabla=[];
   for(let i=0; i<=10; i++)
   {
      tabla.push(6*i);
   }
   return tabla;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var arrayMayor=[];
   for(let i=0; i<array.length; i++)
   {
      if(array[i]>100)
      {
         arrayMayor.push(array[i]);
      }
   }
   return arrayMayor;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
var resultArray = [];
  let sum = num;

  for (let i = 0; i < 10; i++) {
    resultArray.push(sum);
    sum = sum + 2;

    if (sum === i ) {
      return "Se interrumpió la ejecución";
      break;
    }
  }

  return resultArray;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   const resultArray = [];

   for (let i = 0; i < 10; i++) {
     if (i === 5) {
       continue; // Saltar a la siguiente iteración cuando i sea igual a 5
     }
 
     num += 2;
     resultArray.push(num);
   }
 
   return resultArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
