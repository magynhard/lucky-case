
class InvalidConstantError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidConstantError";
    }
}

//<!-- MODULE -->//
if(typeof module !== 'undefined' && module.exports) {
    module.exports = InvalidConstantError;
}
//<!-- /MODULE -->//