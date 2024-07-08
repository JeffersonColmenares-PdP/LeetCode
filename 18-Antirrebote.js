const debounce = function(fn, t) {
    let tiempo;
    return function(...args) {
        clearTimeout(tiempo);
        tiempo=setTimeout(()=>fn(...args),t);
    }
};