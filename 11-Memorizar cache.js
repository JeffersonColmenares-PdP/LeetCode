const memoize = fn => {
    
    const cache = {};

    return (...args) => {
        const clave = args.join(',');

        if (cache[clave] !== undefined) { // Si ya esta en cache
            return cache[clave];//retorna valor
        } else {
            const valor = fn(...args);
            cache[clave] = valor;
            return valor;
        }
    };
};