/*
Objetivos
1. Entender lo básico de ciclos for, declaraciones if/else, y funciones. 
2. Ser capaz de construir algoritmos básicos en preparación para el track de Java.

Trabaja en los siguientes desafíos y sube tu trabajo en un solo archivo.
 */
//---------------------------------------------------------------------------------------------------
/**
 * Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.
 */
function get_array() {
    var arr = [];
    //your code here
    for (var i = 1; i < 256; i++){
        arr.push(i);
    }
    return arr; 
}
//---------------------------------------------------------------------------------------------------
/**
 * Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números 
 * pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 
 */
function sum_even_numbers(){
    var sum = 0;
    //your code here
    for(var i = 1; i <= 1000; i++){
        if(i%2==0){
            sum = sum + i;
        }
    }
    return sum; 
}
//---------------------------------------------------------------------------------------------------
/**
 * Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números 
 * impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
 */
function sum_odd_5000() {
    var sum = 0;
    //your code here
    for (var i = 0; i <= 5000; i++){
        if (i%2 != 0){
            sum = sum + i;
        }
    }
    return sum; 
}
//---------------------------------------------------------------------------------------------------
/**
 * Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un 
 * array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 
 */
function iterArr(arr) {
    //your code here
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr [i];
    }
    return sum; 
}
//---------------------------------------------------------------------------------------------------
/**
 * Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva 
 * el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7).
 */
function findMax(arr) {
    //your code here
    var max = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max; 
}
//---------------------------------------------------------------------------------------------------
/**
 * Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que 
 * devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).
 */
function findAvg(arr) {
    //your code here
    var avg = 0;
    sum = 0
    
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    avg = sum/arr.length;
    return avg; 
}
//---------------------------------------------------------------------------------------------------
/**
 * Array de impares: Escribe una función que devuelva un array de todos los números impares entre 
 * 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
 */
function oddNumbers() {
    var arr = [];
    //your code here
    for(var i = 1; i<=50; i++){
        if(i%2 != 0){
            arr.push(i);
        }
    }
    return arr; 
}
//---------------------------------------------------------------------------------------------------
/**
 * Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores 
 * mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 
 * números en el array mayores que 3, esto son 5 y 7). 
 */
function greaterY(arr, Y) {
    //your code here
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i]>Y){
            count++;
        }
    }
    return count; 
}
//---------------------------------------------------------------------------------------------------
/**
 * Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor 
 * por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).
 */
function squareVal(arr) {
    //your code here
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr [i];
    }
    return arr; 
}
//---------------------------------------------------------------------------------------------------
/**
 * Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier 
 * número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera 
 * contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
 */
function noNeg(arr) {
    //your code here
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
    return arr; 
}
//---------------------------------------------------------------------------------------------------
/**
 * Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array 
 * que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original 
 * (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
 */
function maxMinAvg(arr) {
    //your code here
    var max = arr[0];
    var min = arr[0];
    var promedio = 0;
    var suma = 0;
    var arrnew = [];
    
    for(var i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
        
        if(arr[i]<min){
            min = arr[i];
        }
        
        suma = suma + arr[i];
    }
    
    promedio = suma/arr.length;
    
    arrnew.push(max);
    arrnew.push(min);
    arrnew.push(promedio);
    return arrnew; 
}
//---------------------------------------------------------------------------------------------------
/**
 * Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier 
 * array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
 */
function swap(arr) {
    //your code here
    var PrimerNumero = arr[0];
    var UltimoNumero = arr[arr.length-1];
    var temp = PrimerNumero;
    
    arr[0] = UltimoNumero;
    arr[arr.length-1] = temp;
    
    return arr; 
}
//---------------------------------------------------------------------------------------------------
/**
 * De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor 
 * negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función 
 * devolverá [‘Dojo’,‘Dojo’,2].
 */
function numToStr(arr) {
    //your code here
    for(var i=0; i<arr.length;i++){
        if(arr[i]<0){
            arr[i] = 'Dojo';
        }
    }
    return arr; 
}