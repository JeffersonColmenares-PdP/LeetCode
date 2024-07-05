var once = function(fn) {
    let llamada = false;

    function a(...args){
        if (!llamada){
            llamada = true;
            return fn(...args);
        }
        return undefined;
    }
    
    return a
};