module.exports = function toReadable(number) {
    if (number === 0) return 'zero';
    let strNumber = number.toString();
    let result = '';
    const beforeSome = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };
    const afterSome = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }
    if (strNumber.length <= 2) {
        if (number <= 19) {
            Object.entries(beforeSome).forEach((el) => {
                if (strNumber === el[0]) {
                    result += el[1];
                }
            });
        } else if (number <= 99) {
            if (strNumber[1] == 0) {
                Object.entries(afterSome).forEach(el => {
                    if (strNumber[0] === el[0]) {
                        result += el[1];
                    }
                });
            } else {
                Object.entries(afterSome).forEach(el => {
                    if (strNumber[0] === el[0]) {
                        result += el[1];
                    }
                });
                Object.entries(beforeSome).forEach(el => {
                    if (strNumber[1] === el[0]) {
                        result += ' ' + el[1];
                    }
                })
            }
        }
    } else {
        let secondStr = strNumber[1] + strNumber[2];
        if (strNumber[1] == 0 && strNumber[2] == 0) {
            Object.entries(beforeSome).forEach(el => {
                if (strNumber[0] === el[0]) {
                    result += el[1] + ' hundred';
                }
            });
        } else if (strNumber[1] == 0 && strNumber[2] != 0) {
            Object.entries(beforeSome).forEach(el => {
                if (strNumber[0] === el[0]) {
                    result += el[1] + ' hundred ';
                }
            });
            Object.entries(beforeSome).forEach(el => {
                if (secondStr[1] === el[0]) {
                    result += el[1];
                }
            });
        }
        else {
            Object.entries(beforeSome).forEach(el => {
                if (strNumber[0] === el[0]) {
                    result += el[1] + ' hundred ';
                }
            });
            if (secondStr <= 19) {
                Object.entries(beforeSome).forEach((el) => {
                    if (secondStr === el[0]) {
                        result += el[1];
                    }
                });
            } else if (secondStr <= 99) {
                if (secondStr[1] == 0) {
                    Object.entries(afterSome).forEach(el => {
                        if (secondStr[0] === el[0]) {
                            result += el[1];
                        }
                    });
                } else {
                    Object.entries(afterSome).forEach(el => {
                        if (secondStr[0] === el[0]) {
                            result += el[1];
                        }
                    });
                    Object.entries(beforeSome).forEach(el => {
                        if (secondStr[1] === el[0]) {
                            result += ' ' + el[1];
                        }
                    });
                }
            }
        }
    }
    return result;
}