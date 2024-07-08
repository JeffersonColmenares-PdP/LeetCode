const promiseAll = function(functions) {
    // Devuelve una nueva promesa
    return new Promise((exito, error) => {
        // Crear un array para almacenar los resultados
        const resultado = [];
        // Contador para seguir cuántas promesas se han resuelto
        let contador = 0;

        // Para cada función en el array
        functions.forEach((fn, i) => {
            // Ejecuta la función y maneja la promesa que devuelve
            fn()
            .then(valor => {
                // Almacena el resultado en la posición correspondiente
                resultado[i] = valor;
                // Incrementa el contador
                contador++;
                // Si todas las promesas se han resuelto, resuelve la promesa principal
                if (contador === functions.length) exito(resultado);
            })
            .catch(err => {
                // Si alguna promesa se rechaza, rechaza la promesa principal
                error(err);
            });
        });
    });
};
