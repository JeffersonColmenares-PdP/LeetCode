var cancellable = function(fn, args, t) {
    
    let contador;

    const cancelar = () => {
        // Si el contador existe, se cancela
        if (contador) {
            clearTimeout(contador);
            console.log("Ejecución cancelada.");
        }
    };

    // Configura el temporizador para ejecutar después de t 
    contador = setTimeout(() => {
        const resultado = fn(...args);
        // console.log({ time: t, returned: resultado });
    }, t);

    return cancelar;
};