/*const lista1 = [
    100,
    200,
    300,
    500,
];*/





function calcularMediaAritmrtica(lista){
   

const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento){
    return valorAcumulado + nuevoElemento;
    }
);

const promedioLista = sumaLista / lista.length;
return promedioLista;
}

 /* let sumaLista= 0;
    for (let i = 0; i < lista.length; i++){
        sumaLista1 = sumaLista + lista[i]
    
}*/