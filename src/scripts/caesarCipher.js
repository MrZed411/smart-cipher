const shift = require('./shift');

function caesar(str, shiftNum) {
    if (shiftNum < 0) {
        shiftNum = Math.abs(((Math.floor(shiftNum / 26) * 26) - shiftNum)) % 26
    } else if (shiftNum === 0) {
        return str;
    } else {
        shiftNum = shiftNum % 26;
    }

    shiftNum -= 26;

    return shift(str, (c) => {
        if (c === ' ') return c;
        c = c.toUpperCase();
        return String.fromCharCode((((c.charCodeAt(0) - 65) - shiftNum) % 26) + 65);
    });
}

module.exports = caesar;