//codigo del cuadrado
console.group("cuadrados");
//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden : " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
return lado * 4;
} 
//console.log("el perimetro del cuadrado es : " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado; 
}
//console.log("el area de mi cuadrado es : " + areaCuadrada + "cm");
console.groupEnd();

//codigo del triangulo
console.group("triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;


//console.log("los lados del triangulo : " 
//+ ladoTriangulo1 + "cm, "
//+ ladoTriangulo2 + "cm, "
//+ baseTriangulo + "cm" );

//const alturaTriangulo = 5.5;
//console.log("la altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
return lado1 + lado2 + base;
}

//console.log("el perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura){
    return base * altura /2;
}
//console.log("el area de mi triangulo es: " + areaTriangulo + "cm");


console.groupEnd();

//codigo del circulo

console.group("circulos");
 
//radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");

//diametro

function diametroCirculo (radio){
  return radio * 2;  
}
//console.log("El radio del circulo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI es: " + PI );

//CIRCUFERENCIAS
function perimetroCirculo(radio){
 const diametro = diametroCirculo(radio);
 return diametro * PI;
}

//console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

//area
function areaCirculo(radio){
 return (radio * radio) * PI;
}

//console.log("El areaCirculo del circulo es: " + areaCirculo + "cm");

console.groupEnd();

//aqui interactuamos con el html

function calcularPerimetroCuadrado(){
const input = document.getElementById("InputCuadrado");
const value = input.value;
const perimetro = perimetroCuadrado(value);
alert(perimetro);
}

function calcularAreaCuadrado(){

    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);

}



















