const shift = require('./shift').shift;

const valid = [3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];

function affine(str, multi, shiftNum) {
    if (!valid.includes(multi)) {
        return 'invalid'
    }

    if (shiftNum < 0) {
        shiftNum = Math.abs(((Math.floor(shiftNum / 26) * 26) - shiftNum)) % 26
    } else if (shiftNum === 0) {
        return str;
    } else {
        shiftNum = shiftNum % 26;
    }

    shiftNum -= 26;

    let decipherMulti = 2;

    while ((multi * decipherMulti) % 26 !== 1) {
        decipherMulti++;
    }

    return shift(str, (c) => {
        if (c === ' ') return c;
        c = c.toUpperCase();
        let letterCode = ((((c.charCodeAt(0) - 64) - shiftNum) * decipherMulti) % 26);
        if (letterCode === 0) letterCode = 26;
        return String.fromCharCode(letterCode + 64);
    });
}

export {affine as affine};