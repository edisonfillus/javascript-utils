function findDuplicateTransactions(transactions = []) {

    const groups = [];
    transactions.forEach(transaction => {
        const group = groups.find(group => group.find(element => isTransactionDuplicate(element, transaction)));
        if (group) {
            group.push(transaction);
        } else {
            groups.push([transaction])
        }
    })
    return groups
        .filter(group => group.length > 1)
        .map(group => group.sort((a, b) => new Date(a.time) - new Date(b.time)));
}

function isTransactionDuplicate(transactionA, transactionB) {
    return (transactionA.sourceAccount === transactionB.sourceAccount
        && transactionA.targetAccount === transactionB.targetAccount
        && transactionA.category === transactionB.category
        && transactionA.amount === transactionB.amount
        && Math.abs(new Date(transactionA.time).getTime() - new Date(transactionB.time).getTime()) < 60*1000
    )
}

module.exports = findDuplicateTransactions;