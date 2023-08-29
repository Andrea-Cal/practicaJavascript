// ----------------------- PRACTICA INTRO-JAVASCRIPT -----------------------
// EJERCICIO 1-2-3-4-5
let nombre = "andrea";
let apellido = "lopez";
let edad = 39;
let mascota = "Oli";
let edadMascota = 7;

// EJERCICIO 6
let nombreCompleto = nombre + " " + apellido;

// EJERCICIO 7
console.log(`El nombre completo es ${nombre}  ${apellido} y su edad es: ${edad}`);

// EJERCICIO 11
/* Crear un objeto llamado alumno con un mínimo de 5 propiedades, mostrar dicho
objeto utilizando console.table( ) y también mostrar cada una de las propiedades del
objeto por separado. */
const alumno = {
  nombre: "andrea",
  apellido: "lopez",
  edad: 39,
  mascota: "Oli",
  edadMascota: 7,
}
console.table(alumno);
console.log(Object.keys(alumno));
console.log(Object.values(alumno));

alumno.curso = "mindhub";
alumno.edad = 25;
console.table(alumno);
delete alumno.curso;
console.table(alumno);
console.log(Object.entries(alumno));

// EJERCICIO 12
/* Crear un array llamado frutas con un mínimo de 5 elementos y mostrar por consola el
array completo y cada uno de los elementos por separado. */
let frutas = ["pera", "manzana", "anana", "uva", "kiwi"];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);

// EJERCICIO 13
/* Compare su edad ingresada por pantalla con prompt( ) con el número 18 y guardarlo
en una variable llamada soyMayorDeEdad y mostrar por consola un mensaje que diga:
Soy mayor de edad y el valor de la variable. */
let n = 18;
let miEdad = +prompt("Ingrese su edad");
let soyMayorDeEdad = miEdad >= n;
console.log("Soy mayor de edad: " + soyMayorDeEdad);

// EJERCICIO 16
/* Crear una variable llamada textoAleatorio formando una frase con el segundo
elemento del array del punto 12, el cuarto elemento del punto 14 y el quinto objeto del
array del punto 15. */
let frutas2 = ["pera", "manzana", "anana", "uva", "kiwi"];
let nombres = ["norma", "viviana", "pedro", "graciela", "mauricio"];
let apellidos = ["lopez", "martinez", "godoy", "perez", "navarro"];

let textoAleatorio = `${frutas2[1]} ${nombres[3]} ${apellidos[4]}`;
console.log(textoAleatorio);

// EJERCICIO 17
/* Utilizar prompt() para leer por pantalla mi edad y la edad de un compañero y mostrar
por consola los resultados de comparar los valores y guardarlos en variables llamadas
por ejemplo: edadesIguales, soyMayor, soyMenor, etc. y mostrar mensajes en consola
como los siguientes:
a. Mi edad es igual a la de mi compañero: false
b. Mi edad es mayor a la de mi compañero: true
c. Mi edad es menor a la de mi compañero: false */
let miEdad1 = +prompt("Ingresá tu edad:");
let edadCompanero = +prompt("Ingresá la edad de tu compañero:");
let edadesIguales =  miEdad1 == edadCompanero;
let soyMayor = miEdad1 > edadCompanero;
let soyMenor = miEdad1 < edadCompanero;

console.log(`Mi edad es igual a la de mi compañero: ${edadesIguales}`); 
console.log(`Mi edad es mayor a la de mi compañero: ${soyMayor}`);
console.log(`Mi edad es menor a la de mi compañero: ${soyMenor}`);


/* Introducir por pantalla la edad y la altura de una persona y guardarlas en variables
separadas y en una variable llamada puedeSubir el resultado de la operación
resultante de si la persona es mayor de 6 años y además tiene una altura mínima de
120 cm y mostrar por consola un mensaje como el siguiente: Puede subir a la
atracción y el valor de la variable resultante. */
let miEdad2 = +prompt("Ingresá tu edad:");
let miAltura = +prompt("Ingresá tu altura en cm:");
let puedeSubir = miEdad2 > 6 && miAltura >= 120;
console.log(`Puede subir a la atraccion : ${puedeSubir}`);

// ----------------------- PRACTICA CONDICIONALES -----------------------
// EJERCICIO 1
/* Realizar un programa que reciba 2 números y que imprima por consola si el primer
número es mayor que el segundo. */

function esMayor(numero1, numero2) {
  if(numero1 > numero2){
    console.log(`El numero ${numero1} es mayor al numero ${numero2}`);
  }else{
    console.log(`El numero ${numero1} NO es mayor al numero ${numero2}`);
  }
}
esMayor(24, 25);

// EJERCICIO 2
/* Realizar un programa que reciba 2 números y que imprima por consola si los números
2 son iguales o si son diferentes. */

function sonIguales(numero1, numero2) {
  if(numero1 == numero2){
    console.log(`Los numeros son iguales`);
  }else{
    console.log(`Los numeros son diferentes`);
  }
}
sonIguales(25, 25);

// EJERCICIO 3
/* Realizar un programa que reciba 2 números y que imprima por consola cuál de los 2
números es el más grande o si son iguales. */

function sonIguales2(numero1, numero2) {
  if(numero1 == numero2){
    console.log(`Los numeros son iguales`);
  }else if (numero1 > numero2){
    console.log(`El numero ${numero1} es mas grande`);
  }else{
    console.log(`El numero ${numero2} es mas grande`);
  }
}
sonIguales2(26, 26);

// EJERCICIO 4 
/* Realizar un programa que reciba 3 números y que imprima por pantalla cual de los 3 es
el más chico. */

function elMasChico(numero1, numero2, numero3) {
  if(numero1 <= numero2 && numero1 <= numero3){
    console.log(`El numero ${numero1} es mas chico`);
  }else if (numero2 <= numero1 && numero2 <= numero3){
    console.log(`El numero ${numero2} es mas chico`);
  }else{
    console.log(`El numero ${numero3} es mas chico`);
  }
}
elMasChico(36, 61, 16);

// EJERCICIO 5
/* Realizar un programa que reciba 2 objetos representando personas con las propiedades:
● nombre
● edad
● altura
y que imprima por pantalla:
1. cual de las dos personas es la más alta
2. cual es la de mayor edad. */

const persona1 ={
  nombre: "Claudia",
  edad: 25,
  altura: 180
}
const persona2 ={
  nombre: "Manuel",
  edad: 25,
  altura: 170
}

function comparador(a, b,) {
  if(a.altura > b.altura){
    console.log(`${a.nombre} es mas alto/a`);
  }else if(a.altura < b.altura){
    console.log(`${b.nombre} es mas alto/a`);
  }else{
    console.log(`${a.nombre} y ${b.nombre} miden los mismo`);
  }
  if(a.edad > b.edad){
    console.log(`${a.nombre} es mayor a ${b.nombre}`);
  }else if(a.edad < b.edad){
    console.log(`${b.nombre} es mayor a ${a.nombre}`);
  }else{
    console.log(`${a.nombre} y ${b.nombre} tienen la misma edad`);
  }
}
comparador(persona1, persona2);

// EJERCICIO 6
/* Realizar un programa que permita ingresar por pantalla:
● tu nombre
● tu edad
● tu altura
● tu visión
y determine si estás capacitado para conducir, para saber esto la persona deberá
● Tener edad mínima de 18 años.
● Medir más de 150 cm.
● Tener una visión como mínimo de 8 de 10. */

let nombre1 = prompt("Ingrese su nombre");  
let edad1 = prompt("Ingrese su edad"); 
let altura1  = prompt("Ingrese su altura en cm");
let vision1 = prompt("Ingrese su vision (del 1 al 10)");

function capacitadoParaConducir(nombre1, edad1, altura1, vision1){
  if(edad1 >= 18 && altura1 > 150 && vision1 >= 8){
    console.log(`${nombre1} está capacitado para conducir.`);
  }else{
    console.log(`${nombre1} NO está capacitado para conducir.`);      
  }
}
capacitadoParaConducir(nombre1, edad1, altura1, vision1);

// ----------------------- PRACTICA BUCLES -----------------------

// EJERCICIO 1
/* Realizar un programa que permita el ingreso de un número y muestre su tabla de
multiplicar (Los primeros 10 múltiplos). */

let numeroo = 8;
for (let i = 1; i <= 10; i++) {  
  console.log( `${numeroo} x ${i} = ${numeroo*i}`);  
}

// EJERCICIO 2
/* Realizar un programa que permita el ingreso de números los cuales se tienen que ir
acumulando. El ingreso de datos terminará cuando el usuario ingrese un valor 0. */

let sumatoria = 0;
let nro;
do {
  nro = +prompt("Ingrese un numero");
  sumatoria += nro;
} while (nro !=0);
console.log(`El total acumulado es ${sumatoria}`);

let resultadoFinal = 100;
if(sumatoria <=100) {
  resultadoFinal = sumatoria;
}
// console.log(`El resultado final es ${resultadoFinal}`);

// EJERCICIO 3
/* Guarda el número final del ejercicio N°2 en una variable, el mismo deberá estar en un
rango entre 1 - 100. La persona deberá poder ingresar números hasta adivinar el valor
guardado en dicha variable. Si el valor ingresado es mayor al número secreto, avisarle
al usuario, lo mismo si el valor es menor. Así sucesivamente hasta que el usuario
adivine el número secreto. Por último mostrar un mensaje de felicitaciones y decirle en
cuantos intentos lo ha realizado. */

let intentos = 0;
do {
  numeroIngresado = +prompt("Ingrese un numero");
  if(numeroIngresado > resultadoFinal){
    alert(`Te pasaste!`);
  }else if (numeroIngresado < resultadoFinal){
    alert(`Te falta!`);
  }
  intentos++  
} while (numeroIngresado != resultadoFinal);
console.log(`Acertaste! el numero era ${resultadoFinal}! Lo adivinaste en ${intentos} intentos!`);

// EJERCICIO 4
/* Realizar un programa que reciba un número y muestre de alguna forma todos sus divisores. */

let divisores = [];
let numero = +prompt("Ingrese un numero");
for (let i = 0; i <= numero; i++) {
  if(numero%i === 0){
    divisores.push(i);
  }  
}
console.log(`Los numeros divisores de ${numero} son ${divisores}`);

// EJERCICIO 5
/* Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre
un mensaje por consola con cada uno de los elementos del array. */

let arrayDeElementos = ["papa", "banana", "fideos", "pan", "arroz", "lentejas", "queso", "huevos", "yogurt", "leche"];

for (let i = 0; i < arrayDeElementos.length; i++) {
  console.log(`La lista de compras incluye: ${arrayDeElementos[i]}`);  
}

// EJERCICIO 6
/* Dado un array de 10 números, realizar un programa que muestre por consola el doble
de cada uno de los elementos. */

let arrayDeNumeros = [2, 5, 8, 14, 32, 36, 45, 56, 81, 99];
for (let i = 0; i < arrayDeNumeros.length; i++) {
  console.log(`El doble de ${arrayDeNumeros[i]} es ${arrayDeNumeros[i]*2}`);  
}

// EJERCICIO 7
/* Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
objeto representa a 1 persona con al menos 4 propiedades, realizar un programa que
muestre un mensaje de presentación por cada elemento del array. */

const personas = [
  {nombre: "Andrea", apellido: "Lopez", edad: 39, mascota: "Oli"},
  {nombre: "Salome", apellido: "Gonzalez",edad: 38,mascota: "Roma"},
  {nombre: "Paula", apellido: "Garcia", edad: 35, mascota: "Otilia"},
  {nombre: "Mariel", apellido: "Fuentes", edad: 33, mascota: "Gala"},
  {nombre: "Julieta", apellido: "Rodriguez", edad: 30, mascota: "Lolo"}];

for (let persona of personas) {
  console.log(`Hola, mi nombre es ${persona.nombre} ${persona.apellido} tengo ${persona.edad} años de edad y mi mascota se llama ${persona.mascota}.`);  
}

// EJERCICIO 8
/* Dado un array de 10 números, realizar un programa que recorra el array y solo muestre
los números impares. */

let arrayDeNumeros2 = [2, 5, 8, 14, 32, 36, 45, 56, 81, 99, 101, 113];
let numerosImpares = [];
for (let i = 0; i < arrayDeNumeros2.length; i++) {
  if(arrayDeNumeros2[i]%2 !== 0){
    numerosImpares.push(arrayDeNumeros2[i])
  } 
}
console.log(`Los numeros impares son: ${numerosImpares}`); 

// EJERCICIO 9
/* Realizar un programa que permita la entrada de números y calcule la suma de los
números pares por un lado y los impares por otro, el ingreso de dato finaliza cuando el
usuario ingresa un 0. */

let sumatoriaPares = 0;
let sumatoriaImpares = 0;
let num;
do {
  num = +prompt("Ingrese un numero");
  if(num%2 == 0){
    sumatoriaPares += num;
  }else{
    sumatoriaImpares += num;
  }  
} while (num !=0);
console.log(`La suma de los numeros pares ingresados es ${sumatoriaPares} y la suma de los impares ingresados es ${sumatoriaImpares}.`);

// EJERCICIO 10
/* Dado un array de 10 números, realizar un programa que imprima por pantalla el
número más grande. */

let arrayDeNumeros3 = [20, 5, 118, 140, 32, 560, 81, 99, 101, 13];
let numeroMasGrande = 0;

for (let i = 0; i < arrayDeNumeros3.length; i++) {
  if(arrayDeNumeros3[i] > numeroMasGrande){
    numeroMasGrande = arrayDeNumeros3[i];
  } 
}
console.log(`El numero mas grande es: ${numeroMasGrande}`);

// ----------------------- PRACTICA FUNCIONES -----------------------
// EJERCICIO 1
/* Crea una función llamada "saludar" que tome un parámetro de tipo cadena/string que represente un nombre, y muestre en la consola un saludo personalizado utilizando el nombre proporcionado. Llama a la función con tu propio nombre para verificar que funcione correctamente. */

function saludar(nombre){
  console.log(`Hola ${nombre}! Como estas?`);
}
saludar("Andrea");

// EJERCICIO 2
/* Crea una función llamada "multiplicar" que reciba dos parámetros numéricos y
devuelva el resultado de la multiplicación de ambos. Llama a la función con dos valores diferentes y muestra el resultado en la consola. */

function multiplicar(a, b){
  return a*b;
}
console.log(multiplicar(3,2));
console.log(multiplicar(13,14));

// EJERCICIO 3
/* Crea una función llamada "areaTriangulo" que reciba dos parámetros numéricos que representen la base y la altura de un triángulo, y devuelva el área del mismo. Luego, crea otra función llamada "perimetroTriangulo" que reciba tres parámetros numéricos que representen los lados de un triángulo, y devuelva el perímetro del mismo. Utiliza estas funciones para calcular el área y el perímetro de un triángulo con base 5 y altura 3 y lados de 4, 5 y 6 respectivamente. */

function areaTriangulo(base, altura){
  return base*altura;
}
function perimetroTriangulo(lado1, lado2, lado3){
  return lado1+lado2+lado3;
}
console.log("El area del triangulo es " + areaTriangulo(5, 3));
console.log("El perimetro del triangulo es " + perimetroTriangulo(4, 5, 6));

// EJERCICIO 4
/* Crea una función llamada "calcularPrecio" que reciba dos parámetros numéricos que representen el precio y la cantidad de un producto, y devuelva el precio total de la compra. Si la cantidad de productos es mayor o igual a 10, aplica un descuento del 10% al precio total. Si la cantidad de productos es mayor o igual a 20, aplica un descuento del 20% al precio total. Llama a la función con diferentes valores de precio y cantidad para verificar que funcione correctamente */

function calcularPrecio(precio, cantidad){
  let precioTotal = precio*cantidad;
  if(cantidad>=20){
    precioTotal = precioTotal*0.8;
  }else if(cantidad>=10){
    precioTotal = precioTotal*0.9;
  }
  return precioTotal;  
}
console.log("El precio total es: " + calcularPrecio(2, 2));
console.log("El precio total es: " + calcularPrecio(2, 11));
console.log("El precio total es: " + calcularPrecio(2, 22));

// EJERCICIO 5
/* Crea una función llamada "esMayorDeEdad" que reciba un parámetro numérico que represente la edad de una persona, y devuelva un mensaje que indique si la persona es mayor de edad o no. Si la edad es mayor o igual a 18, el mensaje debe decir "Eres mayor de edad". Si la edad es menor a 18, el mensaje debe decir "Eres menor de edad".
Utiliza el operador ternario para implementar esta función. Llama a la función con diferentes valores de edad para verificar que funcione correctamente. */

function esMayorDeEdad(edad){
  return edad>=18 ? "Eres mayor de edad" : "Eres menor de edad";  
}
console.log(esMayorDeEdad(20));
console.log(esMayorDeEdad(8));

// EJERCICIO 6
/* Crea una función llamada "calcularImpuesto" que tome un parámetro numérico que represente el ingreso anual de una persona, y devuelva el impuesto que debe pagar. Si el ingreso es menor o igual a $10,000, el impuesto es del 10% del ingreso. Si el ingreso es mayor a $10,000 pero menor o igual a $20,000, el impuesto es del 15% del ingreso.
Si el ingreso es mayor a $20,000, el impuesto es del 20% del ingreso. Utiliza
condicionales anidados para implementar esta función. Llama a la función con
diferentes valores de ingreso para verificar que funcione correctamente. */

function calcularImpuesto(ingresoAnual){
  let impuesto = 0;
  if(ingresoAnual > 20000){
    impuesto = ingresoAnual*0.20;
  }else if(ingresoAnual > 10000){
    impuesto = ingresoAnual*0.15;
  }else{
    impuesto = ingresoAnual*0.10;
  }
  return impuesto;
}
console.log("El impuesto a pagar es de $ "+ calcularImpuesto(9000));
console.log("El impuesto a pagar es de $ "+ calcularImpuesto(12000));
console.log("El impuesto a pagar es de $ "+ calcularImpuesto(24000));

// EJERCICIO 7
/* Crea una función llamada "verificarDia" que reciba un parámetro numérico que
represente el número del día de la semana, y devuelva un mensaje que indique si es un día laboral o no. Si el número es 1, 2, 3, 4, 5, el mensaje debe decir "Es un día laboral". Si el número es 6 o 7, el mensaje debe decir "Es fin de semana". Utiliza la estructura de control switch anidada para implementar esta función. Llama a la función con diferentes valores de día para verificar que funcione correctamente. */

function verificarDia(dia){
  switch (dia) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      console.log("Es un día laboral")      
      break;
    case 6:
    case 7:
      console.log("Es fin de semana")  
      break;  
    default: console.log("Ingrese un dia del 1 al 7")
      break;
  }
}
verificarDia(1);
verificarDia(5);
verificarDia(6);
verificarDia(11);