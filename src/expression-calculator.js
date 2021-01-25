const CONSTAINS_OPERATION = /[\+\-\/\*]+/
const NUMBER = /\d+/

function expressionCalculator(expression = ''){
    if(!expression) return 0;
    
    const expressionArray = expression.split(" ");
    if(!expression.match(CONSTAINS_OPERATION)) return parseInt(expressionArray.pop())
    
    const memoryStack = [];

    for (let i = 0; i < expressionArray.length; i++) {
        const element = expressionArray[i];
        if(element === "+"){
            const op2 = memoryStack.pop();
            const op1 = memoryStack.pop();
            memoryStack.push(op1 + op2);
        } else if(element === "-"){
            const op2 = memoryStack.pop();
            const op1 = memoryStack.pop();
            memoryStack.push(op1 - op2);
        } else if(element === "*"){
            const op2 = memoryStack.pop();
            const op1 = memoryStack.pop();
            memoryStack.push(op1 * op2);
        } else if(element === "/"){
            const op2 = memoryStack.pop();
            const op1 = memoryStack.pop();
            memoryStack.push(op1 / op2);
        } else {
            memoryStack.push(parseInt(element));
        }
    }
    return memoryStack.pop();

}

module.exports = expressionCalculator;