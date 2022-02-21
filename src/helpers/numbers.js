export const formatBigNumbers = (number) => {
    if (number === 'unknown') return number;
    let parsedNumber = Number(number);
    let prefix = '';
    if (parsedNumber/1000 > 1) {
        prefix = 'K';
        parsedNumber = parsedNumber/1000
        if (parsedNumber/1000 > 1) {
            prefix = 'M';
            parsedNumber = parsedNumber/1000;
        }
    }
    return parsedNumber + prefix;
}