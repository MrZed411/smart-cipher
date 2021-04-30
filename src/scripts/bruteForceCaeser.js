const caesar = require('./caesarCipher');

function bruteForce(str, WordsNinja) {
    const shifts = [];

    for (let x = 1; x < 26; x++) {
        const val = {};
        const shifted = caesar(str, x);
        const split = WordsNinja.splitSentence(shifted);

        let total = 0;
        for (word of split) {
            total += word.length;
        }
        if (total / split.length < 2.75) continue;

        const joined = split.join(' ');

        val.shiftVal = x;
        val.shifted = shifted;
        val.split = split;
        val.joined = joined;
        val.averageLength = total / split.length;

        shifts.push(val);
    }

    return shifts;
}

module.exports = bruteForce;