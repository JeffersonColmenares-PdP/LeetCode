const timeLimit = function(fn, t) {
    
    return async function(...args) {
        return new Promise((exito, error) => {
            setTimeout(() => {
                error("Time Limit Exceeded")//en caso de terminar t
            }, t)
            
            fn(...args).then((res) => {//ejecuta
                exito(res)
            }
            ).catch(err => error(err)); 
        })
        
    }
};