const Manager = require('../manager');

/**
 * @class
 * @extends Manager
 * @inheritdoc
 */
class StringManager extends Manager {
    /**
     * @constructor StringManager constructor
     * 
     * @param {string} base64 The base64 encoding of the string
     * @param {string} type The type of string
     * Allowed types are [ calendar, css, csv, html, javascript, plain, xml ]
     * 
     * @returns {Manager}
     */
    constructor(base64, type = 'plain') {
        const allowed_types = [
            'calendar',
            'css',
            'csv',
            'html',
            'javascript',
            'plain',
            'xml'
        ]

        if (!allowed_types.indexOf(type) > 0) {
            type = 'plain'
        }
        super(base64, `text/${type}`)
    }

    /**
     * Decode the provided string
     * @returns {string}
     */
    decodeString() {
        return new Buffer(this.base64, 'base64').toString('ascii')
    }
}

module.exports = StringManager