const Manager = require('../manager');

/**
 * @class
 * @extends Manager
 * @inheritdoc
 */
class ImageManager extends Manager {
    /**
     * @constructor ImageManager constructor
     * 
     * @param {string} base64 The base64 encoding of the image
     * @param {string} type The type of image
     * Allowed types are [ bmp, gif, vnd.microsofticon, jpeg, png, svg+xml, tiff, webp ]
     * 
     * @returns {Manager}
     */
    constructor(base64, type = 'plain') {
        const allowed_types = [
            'bmp',
            'gif',
            'vnd.microsoft.icon',
            'jpeg',
            'png',
            'svg+xml',
            'tiff',
            'webp'
        ]

        if (!allowed_types.indexOf(type) > 0) {
            type = 'png'
        }
        return super(base64, `image/${type}`)
    }
}

module.exports = ImageManager