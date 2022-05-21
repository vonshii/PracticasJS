/* while
while (condicion logica)
{
    todo el codigo q quiero repetir varias veces
    cambiar la condicion logica

}

*/
// ejercicio 1
// var edad = parseInt(prompt('ingrese su edad'));

// if (edad >= 18){
//     document.write('Ya tienes edad de conducir')
// }
// else
// {
//     document.write('El numero ingresado es incorrecto')
// }

// ejerccio 2

// var nota = parseInt(prompt('ingrese su nota: '));

// if(nota <= 2){
// alert('Muy deficiente');
// }else if(nota <= 4)
// {
//     alert('insuficiente');
// }else if(nota <= 6)
// {
//     alert('suficiente');
// }else if(nota <= 7)
// {
//     alert('bien');
// }else if(nota <= 9)
// {
//     alert('notable');
// }else if(nota <= 10)
// {
//     alert('sobresaliente');
// }else{
//     alert('introduce un numero valido');
// }

// ejercicio 3


// let texto = ""

// do{
//     let text = prompt('introduce un texto');
//     if(texto == ""){
//         texto = texto + text;
//     }
//     else
//     {
//         texto = texto + '-' + text;
//     }
// }while(confirm('Ingresar mas texto'));
// document.write(texto);

// ejercicio 4

// let numero = 0;

// do {
//     let n = prompt('ingrese un nro');
//     if(Number(n) == n){
//         n = Number(n);
//         numero = numero + n
//     }else{
//         if(n !=Number){
//             alert('No es un numero')
//         }

//     }
// } while (confirm('ingrese otro numero'))
// document.write('el resultado es: ' , numero)


// ejercicio 6
// let i, rep;

// for ( i = 1; i <= 30 ; i++){
//     for(rep = 0; rep < i ; rep++){
//         document.write(i)
//     }
//     document.write('<br>')
// }

// ejercicio 7

let i, rep;
let n1 = parseInt(prompt('ingrese un numero del 1 al 50'))

for ( i = 0; i <= n1 ; i++){
    for(rep = 1; rep <= i ; rep++){
        document.write(rep)
    }
    document.write('<br>')
}