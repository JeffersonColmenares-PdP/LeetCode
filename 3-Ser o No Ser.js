var expect = function(val) {
    function toBe(a){
        if (val===a){
            return true;
        }
        throw new Error("Not Equal");
    }
    function notToBe(a){
        if (val!==a){
            return true;
        }
        throw new Error("Equal");
    }
    return {
        toBe: toBe,
        notToBe: notToBe
    };

};