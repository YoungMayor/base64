const { download, toBlob, toObjectURL } = require("./utils/helpers");

/**
 * @class Manager
 */
class Manager {
    base64 = null;
    /**
     * @private
     */
    type = null;

    constructor(base64, type) {
        this.base64 = base64
        this.type = type
    }

    toBlob() {
        return toBlob(this.base64, this.type)
    }

    toObjectURL() {
        const blob = this.toBlob();

        return toObjectURL(blob)
    }

    download(filename) {
        const url = this.toObjectURL()
        return download(url, filename)
    }

    decode() {
        if (!Boolean(this.payload.decode)) {
            return null;
        }

        return new Buffer(this.payload.base64, 'base64').toString(this.payload.decode)
    }
}

module.exports = Manager