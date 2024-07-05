const compose = function(functions) {
    function fx(x){
        for(let i = functions.length - 1;i >= 0 ;i--){
            x = functions[i](x)
        }
        return x;
    }
    return fx;
};