const shift = require('./shift').shift;

const valid = [3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];

function multiplicative(str, multi) {
    if (multi === 1) {
        return str.toUpperCase();
    } else if (!valid.includes(multi)) {
        return 'invalid'
    }

    let decipherMulti = 2;

    while ((multi * decipherMulti) % 26 !== 1) {
        decipherMulti++;
    }

    return shift(str, (c) => {
        if (c === ' ') return c;
        c = c.toUpperCase();
        let letterCode = (((c.charCodeAt(0) - 64) * decipherMulti) % 26);
        if (letterCode === 0) letterCode = 26;
        return String.fromCharCode(letterCode + 64);
    });
}

export { multiplicative };