var filter = function(arr, fn){

    let elementosFiltrados = [];

    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)) {//para los que retornen true

            elementosFiltrados.push(arr[i]);

        }
    }
    return elementosFiltrados;
};