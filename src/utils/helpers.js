function toBlob(base64_encoding, type) {
    const byteCharacters = atob(base64_encoding)

    const byteNumbers = new Array(byteCharacters.length)
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i)
    }

    const byteArray = new Uint8Array(byteNumbers)

    return new Blob([byteArray], {
        type,
    })
}

function toObjectURL(blob) {
    return window.URL.createObjectURL(blob)
}

function toDataURL(blob, callback) {

    var reader = new FileReader();

    reader.addEventListener("load", function() {
        callback(reader.result);
    }, false);

    reader.readAsDataURL(blob);
}

function download(url, fileName) {
    if (!fileName) {
        fileName = `sample_download`
    }

    var link = document.createElement('a')
    link.href = url
    link.download = fileName
    link.click()

    return;
}

function open(url) {
    var link = document.createElement('a')
    link.href = url
    link.target = '_blank'
    link.click()

    return;
}


module.exports = {
    toBlob,
    toObjectURL,
    toDataURL,
    download,
    open
}