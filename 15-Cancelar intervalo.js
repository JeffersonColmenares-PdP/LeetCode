var cancellable = function(fn, args, t) {
    
    let intervalo;

    const tiempoInicio = Date.now();
    
    const resultados = [];
    
    // Función que se ejecutará inmediatamente y luego repetidamente
    function ejecutarFn() {
        const result = fn(...args);
        const tiempoCorrido = Date.now() - tiempoInicio;
        resultados.push({ "tiempo": tiempoCorrido, "devuelto": result });
    }

    ejecutarFn();

    // Configuracion intervalo 
    intervalo = setInterval(ejecutarFn, t);

    return function cancelarIntervalo() {
        clearInterval(intervalo);
    };
}