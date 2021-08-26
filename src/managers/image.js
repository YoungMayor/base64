const Manager = require('../manager');

/**
 * @class
 * @extends Manager
 */
class ImageManager extends Manager {
    /**
     * @constructor ImageManager constructor
     * 
     * @param {string} base64 The base64 encoding of the image
     * @param {string} type The image type
     * 
     * @returns Manager
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