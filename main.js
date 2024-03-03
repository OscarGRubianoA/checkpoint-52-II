/* function esNulooIndefenido(valor){
    if(valor===null || valor === undefined){
        return true;
    
    }return false
}
console.log(esNulooIndefenido("")) */
/* function foo(obj1,obj2){
    var resultado={}
    for(var clave in obj1){
        resultado[clave]=obj1[clave];

    }
    for(var clave in obj2){
        resultado[clave]=obj2[clave];
        
    }
    return resultado
}
var resultado = foo({a:1},{b:2})
console.log(resultado) */
/* if ("2"){
    console.log('verdadero')

}else{
    console.log('falso')
} */
/* function foo (arreglo){
    return arreglo.some(function(elemento){
        return elemento <0});
    

}
console.log( foo[1,2,3,-4,5]) */
/* function foo(texto){
    return texto.chartAt(0) === texto.charAt(texto.lenght -1);
}var resultado = foo("radar")
console.log(resultado) */
/* function foo (arreglo){
    return arreglo.reduce(function(a,b){
        return a+b},0);
    };
var resultado = foo ([1,2,3,4,5])
console.log(resultado) */
/* console.log(10==="0") */
/* var myVar= 2;
myVar *= 3+2
console.log(myVar)  */
/* function foo (palabra){
    return palabra.split("").sort().join("")
}
var resultado = foo ("banana")
console.log(resultado) */
/* var a = 5
var b = 10;
a = b
console.log(a) */
/* function foo (objeto){
    let my_var = 0;
    for (let key in objeto){
        my_var = my_var +objeto[key];
       
    }
    return my_var;
}
let resultado = foo ({a:3,b:7, c:1})
console.log (resultado) */
/* function foo (objeto){
    let suma = 0;
    for (let clave in objeto){
       suma += objeto[clave]
       
    }
    return suma;
}
let resultado = foo ({a:1,b:2, c:3})
console.log (resultado) */;

/* var resultado = 2+3*4/2
console.log (resultado) */
/* var myVar= 1;
myVar = myVar++ + 1
console.log ( myVar) */
/* function foo ( objeto , prop){
    delete objeto[prop];
    return objeto;
}
var resultado = foo ({a:1,b:2},b)
console.log(resultado) */
console.log(1||0)