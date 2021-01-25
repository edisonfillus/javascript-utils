const ONLY_NUMBERS = /\d+/g;
const NUMBER = /\d/;

function maskCreditCardNumber(creditCardNumber) {
    if(!creditCardNumber) return '';
    let digits = creditCardNumber.match(ONLY_NUMBERS) && creditCardNumber.match(ONLY_NUMBERS).join('');
    if(!digits || digits.length < 6) return creditCardNumber;
    let currentDigitPosition = 0;
    let maskedOutput = [];
    for (let i = 0; i < creditCardNumber.length; i++) {
        if(creditCardNumber[i].match(NUMBER)){
            if(currentDigitPosition > 0 && currentDigitPosition < digits.length - 4){
                maskedOutput.push('X');
            } else {
                maskedOutput.push(creditCardNumber[i]);
            }
            currentDigitPosition++;
        }  else {
            maskedOutput.push(creditCardNumber[i]);
        }
    }
    return maskedOutput.join('');
}

module.exports = maskCreditCardNumber