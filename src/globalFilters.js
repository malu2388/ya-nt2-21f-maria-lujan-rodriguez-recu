import Vue from "vue";
// 1) Codificado
/*
a por u, e por o, la i queda igual, o por e y u por a. 
Considerar pasar el texto ingresado a minúscula antes de realizar el cambio.
 */
Vue.filter('codificar', function(texto) {
    texto = texto.toLowerCase();
    var respuesta = '';
    for (let i = 0; i < texto.length; i++) {
        var char = texto[i];
        if (char === 'a') {
            respuesta += 'u';
        } else if (char === 'e') {
            respuesta += 'o';
        } else if (char === 'o') {
            respuesta += 'e';
        } else if (char === 'u') {
            respuesta += 'a';
        } else {
            respuesta += char;
        }
    }
    return respuesta;
})

// 2) Todo en mayúscula 
Vue.filter("pasarAMayuscula", function(texto) {
    return texto.toUpperCase();
});

// 3) Todo en minúscula 
Vue.filter("pasarAMinuscula", function(texto) {
    return texto.toLowerCase();
});

// 4) Minúsculas y mayúsculas intercaladas, empezando por mayúscula.
Vue.filter('mayusculaIntercalada', function(texto) {
    texto = texto.toLowerCase();
    var respuesta = '';
    for (let i = 0; i < texto.length; i++) {
        if (i % 2 == 0) {
            respuesta += texto[i].toUpperCase();
        } else {
            respuesta += texto[i].toLowerCase();
        }
    }
    return respuesta;
})

// 5) Minúsculas y mayúsculas intercaladas, empezando por minúscula
Vue.filter('minusculaIntercalada', function(texto) {
    texto = texto.toLowerCase();
    var respuesta = '';
    for (let i = 0; i < texto.length; i++) {
        if (i % 2 == 0) {
            respuesta += texto[i].toLowerCase();
        } else {
            respuesta += texto[i].toUpperCase();
        }
    }
    return respuesta;
});