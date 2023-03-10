// 基于数组实现栈
class Stack {
  constructor() {
    this.items = [] // 栈中的属性
  }

  push(value) { // 入栈
    this.items.push(value);
  }

  pop() { // 出栈
    return this.items.pop();
  }

  peek() { // 查看栈顶的元素
    return this.items[this.size() - 1];
  }

  isEmpty() { // 判断栈是否为空
    return this.items.length === 0;
  }

  size() { // 获取栈中元素的个数
    return this.items.length;
  }

  toString() {
    return this.items.join(' ');
  }
}

module.exports = Stack;
