module.exports = function(param) {
    var object = JSON.parse(param || '{}');

    for (property in object) {
        if (typeof object[property] === 'string') {
            object[property] = new RegExp(object[property], 'i');
        }
    }

    return object;
}