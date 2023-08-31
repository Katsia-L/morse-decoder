const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decodedCharsArr = [];

    let MorseChar = {
        '00': '',
        '10': '.',
        '11': '-',
        '**': '**'
    };

    for (let i = 0; i < expr.length; i += 10) {
        let MorseChar = '';
        for (let j = 0; j < 10; j += 2) {
            let code = expr.slice(i + j, i + j + 2);
            if (code === '10') {
                MorseChar += '.';
                } else if (code === '11') {
                MorseChar += '-';
                } else {
                MorseChar += '';
            }
        }
        if (MorseChar === '') {
            decodedCharsArr.push(' ');
        } else {
            decodedCharsArr.push(MORSE_TABLE[MorseChar]);
        }
    }
    return decodedCharsArr.join('');
}

module.exports = {
    decode
}
