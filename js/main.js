function conocimientosPrevios(){
// let a = 5;
// let b = 10;
// let suma = a+b;
// console.log("la suma de los dos valores es: "+suma );

// // 2.2 Operadores de comparacion
// // Se utilizan para comparar dos valores y devolver un boolean

// console.log(a===b);
// console.log(a!==b)
// console.log(a<b)
// console.log(a>b)
// console.log(a<=b)
// console.log(a<=b)

// // Operadores logicos 
// // Se utilizan para combinar o negar expresiones logicas, devuelven valores boolean
// // AND = deben cumplirse las dos condiciones 
// //- OR = debe cumplirse al menos una condicion

// let x = 10
// let y = 8
// let z = 20

// console.log(x<y && x<z) // FALSE
// console.log(x<y || x<z) // TRUE

// // 3. Estructuras de control
// // Son bloques de codigo que permiten determinar el flujo de ejecucion de una funcion

// // 3.1 Estructuras condicionales "basicamente son estructuras boleanas"
// // if else - switch

// let edad = 16;

// if(edad >= 18){
//     console.log("es un adulto")
// }else{
//     console.log("es un joven")
// }

// let hora = 13

// if (hora<12) {
//     console.log("Buenos dias")
// }else if(hora>=12 && hora<18){
//     console.log("Buenas tardes")
// }else{
//     console.log("Buenas noches")
// }



// // switch case
// let diaDeSemana = 4

// switch (diaDeSemana) {
//     case 1:
//         console.log("hoy es lunes")
//         break;
//     case 2:
//         console.log("hoy es martes")
//         break;
//     case 3:
//         console.log("hoy es miercoles")
//         break;
//     case 4:
//         console.log("hoy es jueves")
//         break;
//     case 5:
//         console.log("hoy es viernes")
//         break;

//     default:
//         console.log("dia no valido")
//         break;
// }

// // estructuras de control Ciclos/Bucles
// // Los bucles son bloques de codigo que queremos se ejecuten repetidamente n numero de veces
// // WHILE
// // FOR

// let contador = 0

// while (contador < 100) {
//     console.log("al contador se le sumaron 10 ahora es : "+ contador)
//     contador = contador + 10
// }
// // FOR aqui 
// // se declara la variable dentro del bucle para contador siempre se declara i y todo se sepára con ;
// // mientras que i sea menor que 100, 
// // se suma
// // lo que se ejecuta
// for(let i = 0; i < 100; i++ ){
//     console.log("el numero ahora es: " + i)
// }

// // FUNCIONES
// // es un bloque de codigo que realiza una tarea especifica y puede ser llamada o invocada desde cualquier parte del programa

// function saludar(nombre) {
//     console.log("Su nombre es: " + nombre)
// }

// saludar("77")

// function sumarValores() {
//     let a = parseInt(prompt("ingrese un valor"))
//     var b = parseInt(prompt("ingrese segundo valor"))
//     let suma = a + b
//     alert("el resultado de la suma es: " + suma)
// }

// sumarValores()
}

function saludar(){
    alert("Hola Usuario")
}

// Algoritmos Secuenciales

function opBasicas(){
    //declaro las variables necesarias para la ejecucion
    let A, B, S, R, M, D = 0
    // Notifico al usuario que realiza este algoritmo
    alert("Este algoritmo realiza una suma, resta, multiplicacion y division entre dos valores ingresados")
    // Capturar los datos de entrada o inputs
    A = parseInt(prompt("Por favor ingrese el primer valor "))
    B = parseInt(prompt("Por favor ingrese el segundo valor "))
    // Realizar el proceso
    S = A + B
    R = A - B
    M = A * B
    D = A / B
    // Imprimir el resultado al usuario
    alert("El resultado de la suma es: " + S)
    alert("El resultado de la resta es: " + R)
    alert("El resultado de la miltiplicacion es: " + M)
    alert("El resultado de la division es: " + D)

}

function areaTriangulo(){

    let B, H, A = 0
    
    alert("Este algoritmo calcula el area de un triangulo a partir de su base y su altura")

    B = parseInt(prompt("Ingrese el valor de base"))
    H = parseInt(prompt("Ingrese el valor de Altura"))

    A = (B * H)/2

    alert("El area del trinagulo es: " + A)
}

function conversionUnidades(){
    let M, P, CM, KM = 0

    alert("Este algoritmo convierte en centimetros, pulgadas y kilometros un valor dado en metros")

    M = parseInt(prompt("Ingrese el valor en metros a convertir"))
    
    P =  M * 39.37
    CM = M * 100
    KM = M / 1000

    alert(M + " metros en pulgadas son: " + P)
    alert(M + " metros en centimetros son: "  + CM)
    alert(M + " metros en kilometros son: "+ KM)
}

// Algoritmos Condicionales

function servicioMilitar(){
    let edad = 0
    let genero = ""
    let hijoUnico = ""

    alert("Algoritmo que determinara si eres apto para prestar el servicio militar obligatorio")

    edad = parseInt(prompt("Por favor ingrese su edad"))
    genero = prompt("Por favor ingrese su genero: F - Femenino o M - Masculino")
    hijoUnico = prompt("Por favor ingrese Si o No, de ser hijo unico")

    if (edad>=18 && edad<=26) {
        // se puede agregar un OR para la M mayuscula
        if (genero === "m" || genero === "M") {
            // se puede agregar OR para las mayusculas
            if (hijoUnico === "no" || hijoUnico === "No" || hijoUnico === "NO" || hijoUnico === "nO") {
              // se puede agregar OR para mayusculas
                alert("Eres apto para prestar el servicio militar")
                
            }else{
                alert("No eres apto para prestar el servicio militar")
            }

        }else{
            alert("No eres apta para prestar el servicio militar")
        }
    }else{
        alert("No eres apto por tu edad")
    }
}

function mayorDosN() {

    let N1, N2 = 0

    alert("Valida el mayor de dos numeros")

    N1 = parseInt(prompt("Ingrese el primer valor"))
    N2 = parseInt(prompt("Ingrese el segundo valor"))

    if(N1 === N2){
        alert("No hay ningun numero mayor, Ambos son iguales")
    }else if(N1>N2){
        alert(N1 + " es mayor que " + N2)
    }else{
        alert(N2 + " es mayor que " + N1)
    }
}

function parOImpar(){

    let X = 0

    alert("Determinar si un numero es par o impar")

    X = parseInt(prompt("Ingrese el numero a verificar"))
    
    if (X % 2 === 0) {
        alert(X + " Es un numero par")
    }else{
        alert(X + " Es impar")
    }
}
// FUNCION POR CONSOLA
// function rangoNumeros() {
//     alert("Imprimir en consola los numeros existentes entre un valor inicial y un valor final")

//     let inicio = parseInt(prompt("Ingrese el valor de punto de partida"))
//     let fin    = parseInt(prompt("Ingrese el punto de final"))

//     let contador = inicio

//     while (contador <= fin){

//         console.log(contador)

//         contador ++
//     }
//         alert("En consola mostraremos los numeros que hay entre " + inicio + " y " + fin)
// }

function rangoNumeros() {
    alert("Imprimir en ventanas los numeros existentes entre un valor inicial y un valor final")

    let inicio = parseInt(prompt("Ingrese el valor de punto de partida"))
    let fin    = parseInt(prompt("Ingrese el punto de final"))

    let contador = inicio

    while (contador <= fin){

        alert("existe el numero: "+contador)

        contador ++
    }
        alert("En ventanas emergentes viste los numeros que hay entre " + inicio + " y " + fin)
}

function sumaRango() {

    alert("Suma los valores entre un rango ingresado")

    let inicio = parseInt(prompt("Ingrese el valor de inicio"))
    let fin = parseInt(prompt("Ingrese el punto final"))

    let suma = 0

    contador = inicio

    while (contador <= fin) {
        suma += contador

        contador ++
    }

    alert("La suma de los numeros del " + inicio + " al " + fin + " es: " + suma)
    
}

function esPrimo(){

    alert("Determina si un numero es primo")

    let numero = parseInt(prompt("Ingrese el numero"))

    if (numero<=1){
        alert(numero + " No es un numero primo")
    }

    for(let i = 2; i <= numero/2; i++){
        
        if(numero % i === 0){
            alert(numero + " No es un numero primo")
            return;
        }
    }
    alert(numero + " Si es un numero primo")
}


function conversionMoneda(){

    // objeto como dato de partida
    let tasaCambio = {
        USD : 0.00028,
        EUR : 0.00024
    }

    alert("realiza la conversion de dinero en pesos colombianos a dolares y euros")

    let cantidadPesos = parseFloat(prompt("Ingrese la cantidad a convertir"))
    let tasa = parseInt(prompt("Seleccione la divisa a cambiar: USD = 1, EUR = 2"))
    let conversion

    switch (tasa) {
        case 1:
            conversion = cantidadPesos * tasaCambio.USD
            alert(cantidadPesos + " Pesos colombianos son " + conversion + " Dolares")
            break;
    
        case 2:
            conversion = cantidadPesos * tasaCambio.EUR
            alert(cantidadPesos + " Pesos colombianos son " + conversion + " Euros")
            break;

        default:
            alert("Tasa de cambio no permitida")
            break;
    }

}

function calcularPromedio(){
    alert("Este algoritmo determina el promedio de calificaciones ingresadas por el usuario")

    let calificaciones = []

    let cantidadNotas = parseInt(prompt("Ingrese la cantidad de calificaciones"))

    for(let i = 1; i <= cantidadNotas; i++){
        calificaciones.push(parseFloat(prompt("Ingrese la calificacion # " + i + " :")))
    }

    let sumaCalif = 0
    for(let calificacion of calificaciones){
        sumaCalif += calificacion
    }

    let promedio = sumaCalif/calificaciones.length

    alert("El promedio de las calificaiones es: " + promedio)

}

function consultarPeli(){

    alert("Este algoritmo muestra la informacion de una pelicula que elijas entre: \nEl padrino \ninterestelar \nHarry Potter")

    let peliculas = [
        {
            titulo : "El padrino",
            director : "Francis Ford Coppola",
            anio : " 1972",
            genero : " Drama"
        },
        {
            titulo : "interestelar",
            director : "Matthew McConaughey",
            anio : " 2014",
            genero : " Ficcion"
        },
        {
            titulo : "Harry Potter",
            director : " Nombre del director",
            anio : " 2008",
            genero : " Ficcion"
        }

    ]

    let nombrePelicula = prompt("Por favor ingrese el nombre de la pelicula")

    let infoPelicula = ""

    for(let pelicula of peliculas){

        if(pelicula.titulo === nombrePelicula){
            infoPelicula =  "Titulo: " + pelicula.titulo + "\n" +
                            "Director:" + pelicula.director+ "\n" + 
                            "Año:" + pelicula.anio+ "\n" + 
                            "Genero:" + pelicula.genero
            break
         }
    }

    if ( infoPelicula !== ""){
        alert("La pelicula consultada tiene la siguiente informacion: \n" + infoPelicula)
    }else{
        alert("La pelicula no se encuentra en el sistema")
    }
}