const ImageManager = require("./managers/image");
const PDFManager = require("./managers/pdf");
const StringManager = require("./managers/string");

/**
 * @class Base64
 */
class Base64 {
    /**
     * The class constructor
     * @constructor
     */
    constructor() {
        //
    }

    /**
     * Encode a string to base64
     * @param {string} string The string to encode
     * 
     * 
     * @returns String
     * @static
     */
    static encodeString(string) {
        return new Buffer(string).toString('base64')
    }

    /**
     * Treat the encoding as a PDF file
     * @param {string} encoded The base64 encoding of the PDF
     * 
     * 
     * @returns PDFManager()
     * @static
     */
    static managePDF(encoded) {
        return new PDFManager(encoded)
    }

    /**
     * Treat the encoding as a simple string
     * @param {string} encoded The base64 encoding of the PDF
     * @param {string} type The type of string
     * Allowed types are [ calendar, css, csv, html, javascript, plain, xml ]
     * 
     * 
     * @returns StringManager
     * @static
     */
    static manageString(encoded, type = 'plain') {
        return new StringManager(encoded, type)
    }

    /**
     * Treat the encoding as an image
     * @param {string} encoded The base64 encoding of the image
     * @param {string} type The type of image
     * Allowed types are [ bmp, gif, vnd.microsofticon, jpeg, png, svg+xml, tiff, webp ]
     * 
     * 
     * @returns ImageManager
     * @static
     */
    static manageImage(encoded, type = 'png') {
        return new ImageManager(encoded, type)
    }
}

module.exports = Base64