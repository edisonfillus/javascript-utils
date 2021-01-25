function numberToOrdinal(number){
    if(number < 0) throw new RangeError('Number should be greater or equal to 0');
    if(number > 10000) throw new RangeError('Number should be less than or equal to 10000');

    const unit = number % 10;
    const tens = number % 100;

    if(unit === 1 && tens !== 11){
        return number+"st";
    } else if(unit === 2 && tens !== 12){
        return number+"nd";
    } else if(unit === 3 && tens !== 13){
        return number+"rd";
    } else {
        return number+"th"
    }



}
module.exports = numberToOrdinal;