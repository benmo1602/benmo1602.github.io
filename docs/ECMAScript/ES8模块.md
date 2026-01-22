# ES8 (2017) 模块

ECMAScript 2017 (ES8) 于 2017 年 6 月正式发布。本次更新引入了 JavaScript 历史上最重要的特性之一：**Async Functions (异步函数)**，彻底改变了异步编程的写法。

## 发布内容 (Released Features)

以下是 ES2017 正式包含的新特性：

### 1. Async / Await

这是基于 Promise 的语法糖，它使异步代码的编写和阅读更像同步代码，极大地提高了代码的可读性和可维护性。

- **`async`**: 用于声明一个异步函数，该函数隐式返回一个 Promise。
- **`await`**: 只能在 async 函数内部使用，用于等待一个 Promise 完成并返回其结果。

```javascript
function fetchUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Alice'), 1000);
  });
}

// 旧写法 (Promise chain)
fetchUser().then(name => {
  console.log(name);
});

// 新写法 (Async/Await)
async function getUser() {
  try {
    const name = await fetchUser();
    console.log(name);
  } catch (error) {
    console.error(error);
  }
}

getUser();
```

### 2. `Object.values()` 和 `Object.entries()`

类似于 `Object.keys()`，这两个方法提供了遍历对象内容的新方式。

- **`Object.values(obj)`**: 返回一个包含对象自身所有可枚举属性值的数组。
- **`Object.entries(obj)`**: 返回一个包含对象自身所有可枚举属性 `[key, value]` 对的数组。

```javascript
const obj = { foo: 'bar', baz: 42 };

console.log(Object.values(obj)); 
// ['bar', 42]

console.log(Object.entries(obj)); 
// [['foo', 'bar'], ['baz', 42]]

// 配合 for...of 使用非常方便
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}
```

### 3. String Padding (`padStart` / `padEnd`)

用于在字符串的开头或结尾填充指定的字符，直到达到给定的长度。常用于格式化输出（如日期、金额）。

```javascript
// padStart(targetLength, padString)
console.log('5'.padStart(2, '0'));   // "05"
console.log('10'.padStart(2, '0'));  // "10"

// padEnd(targetLength, padString)
console.log('Hello'.padEnd(10, '.')); // "Hello....."
```

### 4. `Object.getOwnPropertyDescriptors()`

返回指定对象所有自身属性的属性描述符（property descriptors）。这在复制对象时非常有用，特别是想保留 getter/setter 时。

```javascript
const obj = {
  get foo() { return 'bar' }
};

const descriptors = Object.getOwnPropertyDescriptors(obj);
/* 
{
  foo: {
    get: [Function: get foo],
    set: undefined,
    enumerable: true,
    configurable: true
  }
}
*/
```

### 5. 函数参数列表结尾逗号 (Trailing Commas in Functions)

允许在函数定义和调用的参数列表末尾添加逗号。这使得在版本控制（Git）中修改参数列表时产生的 diff 更干净。

```javascript
function test(
  a,
  b, // 允许这里的逗号
) { 
  // ...
}

test(
  1,
  2, // 允许这里的逗号
);
```

### 6. Shared Memory 和 Atomics

引入了 `SharedArrayBuffer` 和 `Atomics` 对象，允许在主线程和 Web Worker 之间共享内存并进行原子操作。这是高性能多线程编程的基础（通常用于 WebAssembly 或高计算量任务）。

---

## 参考资料
- [ECMAScript® 2017 Language Specification](https://262.ecma-international.org/8.0/)
- [TC39 Finished Proposals](https://github.com/tc39/proposals/blob/main/finished-proposals.md)
