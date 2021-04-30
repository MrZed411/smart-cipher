const multiplicative = require('./multiplicativeCipher').multiplicative;

const valid = [3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function bruteForce(str, WordsNinja) {
    const shifts = [];

    for (let x of valid) {
        const val = {};
        const shifted = multiplicative(str, x);
        const split = WordsNinja.splitSentence(shifted);

        let total = 0;
        for (let word of split) {
            total += word.length;
        }
        if (total / split.length < 2.75) continue;

        const shiftedKey = multiplicative(alphabet, x);
        const joined = split.join(' ');

        val.multiVal = x;
        val.shifted = shifted;
        val.split = split;
        val.joined = joined;
        val.averageLength = total / split.length;
        val.shiftedKey = shiftedKey;

        shifts.push(val);
    }

    return shifts;
}

export { bruteForce };