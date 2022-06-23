var expression = "1 2 + 4 2 - * 2 /";
var expressionArray = expression.split(' ');
var operators = ['+', '-', '*', '/'];
var operandStack = [];
for (var _i = 0, expressionArray_1 = expressionArray; _i < expressionArray_1.length; _i++) {
    var character = expressionArray_1[_i];
    if (operators.includes(character)) {
        var operand2 = operandStack.pop();
        var operand1 = operandStack.pop();
        if (!(typeof operand1 === 'number' && typeof operand2 === 'number')) {
            throw new Error('The expression is invalid.');
        }
        var result = calculate(character, operand1, operand2);
        operandStack.push(result);
    }
    else {
        operandStack.push(Number(character));
    }
}
console.log(operandStack.pop());
function calculate(operator, operand1, operand2) {
    if (operator == '+') {
        return operand1 + operand2;
    }
    else if (operator == '-') {
        return operand1 - operand2;
    }
    else if (operator == '*') {
        return operand1 * operand2;
    }
    else {
        return operand1 / operand2;
    }
}
