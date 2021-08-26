class Base64 {
    /**
     * The class constructor
     * @constructor
     */
    constructor() {
        console.log('Instantiated');
        return 'Instantiated';
    }

    /**
     * A test method
     * @param {any} param Any parameter
     * @returns param
     */
    test(param) {
        console.log('Template', param);
        return param;
    }
}

module.exports = Base64