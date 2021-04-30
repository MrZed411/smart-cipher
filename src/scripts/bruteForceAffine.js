const affine = require('./affineCipher').affine;

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const valid = [3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];

function bruteForce(str, WordsNinja) {
    const shifts = [];

    for(let x of valid) {
        for (let y = 1; y < 26; y++) {
            const val = {};
            const shifted = affine(str, x, y);
            const split = WordsNinja.splitSentence(shifted);

            let total = 0;
            for (let word of split) {
                total += word.length;
            }
            if (total / split.length < 2.75) continue;

            const shiftedKey = affine(alphabet, x, y);
            const joined = split.join(' ');

            val.multiVal = x;
            val.shiftVal = y;
            val.shifted = shifted;
            val.split = split;
            val.joined = joined;
            val.averageLength = total / split.length;
            val.shiftedKey = shiftedKey;

            shifts.push(val);
        }
    }

    return shifts;
}

export { bruteForce as bruteForce };