
class InvalidCaseError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidCaseError";
    }
}

//<!-- MODULE -->//
if(typeof module !== 'undefined' && module.exports) {
    module.exports = InvalidCaseError;
}
//<!-- /MODULE -->//