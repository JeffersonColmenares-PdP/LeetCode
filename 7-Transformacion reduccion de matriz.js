var reduce = function(nums, fn, init) {
    let elementosFiltrados = [];

    if (nums.length === 0) {
        return init;
    }

    let result = init; 
    
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]); //garantizo que la funcion recibe los dos parametros que pide
    }
    
    return result;
};