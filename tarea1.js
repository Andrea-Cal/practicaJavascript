//1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
/* para valor 6
1
12
123
1234
12356 */

/* para valor 3
1
12
123 */

function piramide(numero){
  let listado = [];
  for(let i=1; i<=numero; i++){
    listado.push(i);
    console.log(listado);
  }
}
piramide(3);
piramide(6);

// 2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

// Ejemplo:
let array1= ['rojo', 'azul', 'amarillo'];
let array2= ['blanco', 'negro', 'rojo'];
//Resultado: ['rojo']

// Ejemplo 2:
let array3= [4, 3, true, 'manzana'];
let array4= ['pera', 3, false, true, 3, true];
// Resultado: [3, true]

function comparador(lista1, lista2){
  let coinciden = [];
  for(let i=0; i<lista1.length; i++){
    for(let j=0; j<lista2.length; j++){
      if(lista2[j] === lista1[i]){
        if(!coinciden.includes(lista2[j])){
          coinciden.push(lista1[i]);
        }
      }
    }    
  }
  return coinciden;
}
console.log(comparador(array1, array2));
console.log(comparador(array3, array4));

//3)
//3.1) Dado el siguiente objeto
let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}

//Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.
class Carrito {
  constructor(montoTotal, productos) {
  this.montoTotal = montoTotal;
  this.productos = productos;  
  }

  //3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal 
  //3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades”
  agregarProducto(nombre, precio, unidades){
    if(this.productos.includes(nombre)){
      console.log("Ya existe " +nombre);
    }else{
      this.productos.push(nombre);    
      this.montoTotal += (precio * unidades);
    }   
  };
}

// Ej:
//Resultado esperado
/* carrito = {
    montoTotal: 20,
    productos: ["Leche", "Azucar"]
} */
const carrito1 = new Carrito(10, ["Leche"]);
carrito1.agregarProducto("Azucar", 5, 2);
console.log(carrito1);

//3.3) probamos la validacion:
carrito1.agregarProducto("Azucar", 3, 3);