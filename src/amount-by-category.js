function getAmountByCategoryInPeriod(transactions = [], category, startTime, endTime){
    return transactions.reduce((balance,transaction)=>{
        if(transaction.category === category 
            && new Date(transaction.time) >= startTime
            && new Date(transaction.time) < endTime){
            return balance + transaction.amount;
        } else {
            return balance;
        }
    },0.0);
}



module.exports = getAmountByCategoryInPeriod;