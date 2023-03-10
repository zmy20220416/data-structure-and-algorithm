const Stack = require('../../src/01-stack');
// 十进制转二进制
const dec2bin = (decNum) => {
  const stack = new Stack();
  let binaryString = '';

  while(decNum > 0) {
    // 将余数入栈
    stack.push(decNum % 2);

    // 重新赋值 decNum
    decNum = Math.floor(decNum / 2);
  }

  while(!stack.isEmpty()) {
    binaryString += stack.pop();
  }

  return binaryString;
}

module.exports = dec2bin;
