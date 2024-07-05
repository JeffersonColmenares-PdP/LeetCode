var createCounter = function(init) {
    const inicial=init
    function increment(){
        return ++init;
    }
    function decrement(){
        return --init;
    }
    function reset(){
        init=inicial;
        return init;
    }
    return {
        increment: increment,
        decrement: decrement,
        reset: reset
    };
};