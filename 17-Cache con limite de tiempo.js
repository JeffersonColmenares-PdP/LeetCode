const TimeLimitedCache = function() {
    this.cache = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let buscar = this.cache.hasOwnProperty(key); //busca en cache
    if (buscar){
        clearTimeout(this.cache[key].tiempo);
    }
    this.cache[key] = {
        valor: value,  
        tiempo: setTimeout(() => delete this.cache[key], duration)
    };
    return buscar;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.cache.hasOwnProperty(key) ? this.cache[key].valor : -1;// if else
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return Object.keys(this.cache).length;
};