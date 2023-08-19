//--------------Ejercicio 1: Extraer Valores de un Array --------------------------
//Dado el siguiente array, extrae los valores indicados utilizando la desestructuración:

const numeros = [1, 2, 3, 4, 5];

// Extraer el primer y tercer valor del array utilizando la desestructuración

const [num1,num2,num3,num4,num5] = numeros
console.log(num1)
console.log(num3)

//-------------------------ejercicio 2-------------------------------------------
//Dado el siguiente array, utiliza el operador de rest para extraer los últimos dos
//valores en una nueva variable:
const letras = ['a', 'b', 'c', 'd', 'e'];
// Utilizar el operador de rest para extraer los dos últimos valores en una nueva variable

const [let_a,let_b,let_c,...restoLetras] = letras

console.log(restoLetras)


//--------------ejercicio 3-------------Desestructuración de Arrays Anidados-------------------------------------

//Dado el siguiente array que contiene información sobre pedidos, utiliza la
//desestructuración para extraer información específica:

const pedidos = [
[1, 'Producto A', 10],
[2, 'Producto B', 15],
[3, 'Producto C', 5]
];

// Extraer los nombres de los productos y las cantidades utilizando la desestructuración

const [[ordenA, nombPedidoA, cantPedidoA],[ordenB, nombPedidoB, CantPedidoB],[ordenC, nombPedidoC, CantPedidoC]] = pedidos
console.log(nombPedidoA); // Imprime 'productaA'
console.log(cantPedidoA)
console.log(nombPedidoB); // Imprime producto B
console.log(CantPedidoB);
console.log(nombPedidoC);
console.log(CantPedidoC);



//-------------------Ejercicio 4: Desestructuración con Valores por Defecto-------------------------------------------------

//Dado el siguiente array que contiene información sobre estudiantes, utiliza la
//desestructuración con valores por defecto para manejar casos donde la información
//está incompleta:

const estudiantes = [
    ['Juan', 25],
    ['María'],
    ['Pedro', 30]
    ]
// Extraer nombres y edades de los estudiantes, asignando edades
//por defecto si no están disponibles

const [[estudiante_1, edad1], [estudiante_2, edad2=0], [estudiante_3,edad3]] = estudiantes

console.log(estudiante_1); 
console.log(edad1)
console.log(estudiante_2); // 
console.log(edad2)
console.log(estudiante_3)
console.log(edad3)
 
//---------Ejercicio 1: Extraer Propiedades de un Objeto---------------------------------------------------------------------

//Dado el siguiente objeto, extrae las propiedades indicadas utilizando la
//desestructuración:

const persona = {
nombre: 'Ana',
edad: 28,
ciudad: 'México'
};

const {nombre, edad, ciudad} = persona;
console.log(nombre)
console.log(edad)
console.log(ciudad)

// Extraer el nombre y la ciudad utilizando la desestructuración

//--------Ejercicio 2: Renombrar Propiedades----------------------------------------------------//--------

//Dado el siguiente objeto, utiliza la desestructuración para asignar las propiedades
//con nombres diferentes:

const producto = {
nombreProducto: 'Camisa',
precioProducto: 25,
disponible: true
};

// Renombrar las propiedades utilizando la desestructuración

const {nombreProducto:nombre, precioProducto:Precio,}
	
