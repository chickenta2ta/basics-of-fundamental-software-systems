const expression = "1 2 + 4 2 - * 2 /";

const expressionArray: string[] = expression.split(' ');
const operators: string[] = ['+', '-', '*', '/'];
const operandStack: number[] = [];
for (const character of expressionArray) {
  if (operators.includes(character)) {
    const operand2: number | undefined = operandStack.pop();
    const operand1: number | undefined = operandStack.pop();
    if (!(typeof operand1 === 'number' && typeof operand2 === 'number')) {
      throw new Error('The expression is invalid.');
    }
    const result = calculate(character, operand1, operand2);
    operandStack.push(result);
  } else {
    operandStack.push(Number(character));
  }
}
console.log(operandStack.pop());

function calculate(operator: string, operand1: number, operand2: number): number {
  if (operator == '+') {
    return operand1 + operand2;
  } else if (operator == '-') {
    return operand1 - operand2;
  } else if (operator == '*') {
    return operand1 * operand2;
  } else {
    return operand1 / operand2;
  }
}
