const { download, toBlob, toObjectURL, open } = require("./utils/helpers");

/**
 * @class 
 * @classdesc The super Manager class for managing the base64 encoding and transforming it
 */
class Manager {
    base64 = null;
    /**
     * @private
     */
    type = null;

    /**
     * @constructor
     * @param {string} base64 The base64 encoding
     * @param {string} type The type of document
     * 
     * @returns {null}
     */
    constructor(base64, type) {
        this.base64 = base64
        this.type = type
    }

    /**
     * Convert the encode to a Blob object
     * @returns {Blob}
     */
    toBlob() {
        return toBlob(this.base64, this.type)
    }

    /**
     * Convert the encode to a ObjectURL string
     * @returns {String}
     */
    toObjectURL() {
        const blob = this.toBlob();

        return toObjectURL(blob)
    }

    /**
     * Download the decoded format of the given encode
     * @param {string} filename The name to save the file as. Defaults  to ```sample_download```
     * @returns {null}
     */
    download(filename) {
        const url = this.toObjectURL()

        return download(url, filename)
    }

    /**
     * Open the decoded format of the given encode in a new tab
     * @returns {null}
     */
    open(filename) {
        const url = this.toObjectURL()

        return open(url, filename)
    }
}

module.exports = Manager