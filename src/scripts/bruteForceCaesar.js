const caesar = require('./caesarCipher');

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function bruteForce(str, WordsNinja) {
    const shifts = [];

    for (let x = 1; x < 26; x++) {
        const val = {};
        const shifted = caesar(str, x);
        const split = WordsNinja.splitSentence(shifted);

        let total = 0;
        for (let word of split) {
            total += word.length;
        }
        if (total / split.length < 2.75) continue;

        const shiftedKey = caesar(alphabet, x);
        const joined = split.join(' ');

        val.shiftVal = x;
        val.shifted = shifted;
        val.split = split;
        val.joined = joined;
        val.averageLength = total / split.length;
        val.shiftedKey = shiftedKey;

        shifts.push(val);
    }

    return shifts;
}

module.exports = bruteForce;