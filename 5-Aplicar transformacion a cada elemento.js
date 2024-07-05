var map = function(arr, fn) {
    let numeros = [];
    for (let i = 0; i < arr.length; i++){
        numeros[i] = fn(arr[i], i);//aplica fn a cada elemento y lo guarda
    }
    return numeros;
};