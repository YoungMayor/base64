# Base64 Manager

[![npm version](https://img.shields.io/npm/v/@youngmayor/base64.svg?style=flat-square)](https://www.npmjs.org/package/@youngmayor/base64)
[![install size](https://packagephobia.now.sh/badge?p=@youngmayor/base64)](https://packagephobia.now.sh/result?p=@youngmayor/base64)
[![npm downloads](https://img.shields.io/npm/dm/@youngmayor/base64.svg?style=flat-square)](http://npm-stat.com/charts.html?package=@youngmayor/base64)
<!-- [![CDNJS](https://img.shields.io/cdnjs/v/@youngmayor/base64.svg?style=flat-square)](https://cdnjs.com/libraries/@youngmayor/base64) -->
<!-- [![build status](https://img.shields.io/travis/axios/axios/master.svg?style=flat-square)](https://travis-ci.org/axios/axios) -->
<!-- [![code coverage](https://img.shields.io/coveralls/mzabriskie/axios.svg?style=flat-square)](https://coveralls.io/r/mzabriskie/axios) -->
<!-- [![gitter chat](https://img.shields.io/gitter/room/mzabriskie/axios.svg?style=flat-square)](https://gitter.im/mzabriskie/axios) -->
<!-- [![code helpers](https://www.codetriage.com/axios/axios/badges/users.svg)](https://www.codetriage.com/axios/axios) -->

A base64 management tool

## Table of Contents
  - [Features](#features)
  - [Browser Support](#browser-support)
  - [Installing](#installing)
  - [Importing](#importing)
  - [Usage](#usage) 
  - [Credits](#credits)


___
## Features
___

- Encode string to base64
- Decode a base64 encoded string to any of the below listed formats 
  - Blob
  - ObjectURL
- Decode a base64 object to the appropriate format and download it directly in browser
- A uniform API for managing base64 objects of Image, Text and PDF

___
## Browser Support
___

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

<!-- [![Browser Matrix](https://saucelabs.com/open_sauce/build_matrix/axios.svg)](https://saucelabs.com/u/axios) -->

___
## Installing
___

- Using npm:
    ```bash
    $ npm install @youngmayor/base64
    ```

- Using bower:
    ```bash
    $ bower install @youngmayor/base64
    ```

- Using yarn:
    ```bash
    $ yarn add @youngmayor/base64
    ```

___
## Importing
___
- In a node based application, you can import the package using commonJS as shown below
    ```js
    const base64 = require('@youngmayor/base64');

    // or 

    import bas64 from '@youngmayor/base64';
    ```

- It can also be linked to using any of the below CDNs
    ```html
    <script src="https://cdn.jsdelivr.net/npm/@youngmayor/base64@latest" async></script>

    <!-- or -->

    <script src="https://unpkg.com/@youngmayor/base64" async></script>


    <!-- the package can now be accessed via window.base64 -->
    ```

___
## Usage
___

### Encoding to base64
- ### String

    ```base64``` has a very simple API for encoding a string to base64 using the ```encodeString()``` method.
    
    Example
    ```javascript
    const encoded_text = base64.encodeString('Hello World')
    console.log(encoded_text);

    // Result: SGVsbG8gV29ybGQ=
    ```

### Managers

What are Managers? 
___
Managers are Classes that expose you to a Unified API for handling the base64 object in it's right decode type...


```base64``` is inbuilted with the following managers:
- [Image Manager](#image-manager)
- [PDF Manager](#pdf-manager)
- [String Manager](#string-manager)

Invoking Managers
___
Invoking a Manager is easy. Call the Manager name on the base64 object with the base64 encoded data

Example 
```javascript
const stringmanager = base64.managePDF(encoded_text);
```
>Some managers require a second parameter: the type of the data. See the documentation the respective manager.

This creates a manager object for that file type. All managers extend the Base Manager class which exposes the below methods
 - ```toBlob(): Blob```: Convert the Base64 object to a BLOB (Binary large object)

    ```js
    ...
    blobData = stringmanager.toBlob();
    console.log(blobData);
    
    // Result: Blob Object
    ```

 - ```toObjectURL(): string```: Convert the Base64 object to a URL.createObjectURL

    ```js
    // ...
    url = stringmanager.toObjectURL();
    console.log(url)

    // Result: blob:null/8d20cde9-db64-49b2-8872-98ada802e85b
    ```

 - ```toDataURL(): string```: Convert the encoded file to a DataURL

    ```js
    // ...

    dataURL = stringmanager.toDataURL();
    console.log(dataURL)

    // Result: data:text/plain;base64,SGVsbG8gV29ybGQ=
    ```

 - ```download(filename): void```: Download the encoded file

    PARAMETERS
    
    ___
    - filename: The name to save the downloaded file with
    ```js
    // ...
    stringmanager.download('example-download.txt');
    // ...
    ```

 - ```open(): void```: Open the decoded data on a new tab

    ```js
    // ...
    stringmanager.open();
    // ...
    ```
    

Available Managers
___
The following Managers currently exist 
## Image Manager
- Instantiation

    ```js
    const base64 = require('@youngmayor/base64');
    
    const imagemanager = base64.manageImage(encoding, image_type)
    // image_type must be one of [ bmp, gif, vnd.microsofticon, jpeg, png, svg+xml, tiff, webp ]
    ```

## PDF Manager
- Instantiation

    ```js
    const base64 = require('@youngmayor/base64');

    const pdfmanager = base64.managePDF(encoding)
    ```

## String Manager
- Instantiation

    ```js
    const base64 = require('@youngmayor/base64');

    const stringmanager = base64.manageString(encoding, string_type)
    // string_type must be one of [ calendar, css, csv, html, javascript, plain, xml ]
    ```
- Methods
  - ```decodeString()```: Decode the string

    ```js
        let decoded = stringmanager.decodeString(); 
        console.log(decoded)

        // Result: Hello World
    ```


## Credits
[Meyoron Aghogho (YoungMayor)](https://youngmayor.dev).
