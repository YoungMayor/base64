const Manager = require("../manager");

/**
 * @class
 * @extends Manager
 */
class PDFManager extends Manager {
    /**
     * @constructor PDFManager constructor
     * 
     * @param {string} base64 The base64 encoding of the image
     * 
     * @returns Manager
     */
    constructor(base64) {
        super(base64, 'application/pdf')
    }
}

module.exports = PDFManager