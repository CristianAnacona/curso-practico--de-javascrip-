
function calcularMediaAritmrtica(lista){
        const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
return promedioLista;
}


const lista1 = [
    100,
    200,
    500,
    400000000,
];
const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero){
if (numero % 2 === 0){
    return true;
}else {
    return false;
}
}


let mediana;

if (esPar (lista1.length)){
    const elemento1;lista1[mitadLista1];
    const elemento2;lista1[mitadLista1 - 1];
   const promedioElemento1y2 = calcularMediaAritmrtica([
       elemento1,
       elemento2,
   ])

   mediana = promedioElemento1y2;
    //necesitamos dos elementos
//-> el promedio
//-> mediana    
}else{
    mediana = lista1[mitadLista1];
    //la posiscion mitadlista1es real 
    //->mediana
}