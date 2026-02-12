# ES7 (2016) 模块

ECMAScript 2016 (ES7) 于 2016 年 6 月正式发布。相比于 ES6 (2015) 的巨大变革，ES7 是一个非常小的版本，仅包含两个新特性。

## 发布内容 (Released Features)

以下是 ES2016 正式包含的新特性：

### 1. `Array.prototype.includes()`

这是一个非常实用的方法，用于判断数组是否包含某个指定的值，返回布尔值。

相比于 `indexOf`，它有两个主要优势：
1.  **语义更清晰**：直接返回 `true/false`，而不是 `-1`。
2.  **支持 NaN**：`indexOf` 无法查找 `NaN`，而 `includes` 可以。

```javascript
const arr = [1, 2, 3, NaN];

// 旧写法 (indexOf)
if (arr.indexOf(2) !== -1) {
  console.log('Found');
}

// 新写法 (includes)
if (arr.includes(2)) {
  console.log('Found');
}

// 对 NaN 的支持
console.log(arr.indexOf(NaN)); // -1
console.log(arr.includes(NaN)); // true
```

### 2. 指数操作符 (Exponentiation Operator `**`)

引入了 `**` 操作符来进行幂运算，功能等同于 `Math.pow()`。同时也支持赋值操作符 `**=`。

```javascript
// 旧写法
const x = Math.pow(2, 3); // 8

// 新写法
const y = 2 ** 3; // 8

// 赋值操作
let n = 3;
n **= 2; // n = n ** 2 = 9
console.log(n);
```

---

## 参考资料
- [ECMAScript® 2016 Language Specification](https://262.ecma-international.org/7.0/)
- [TC39 Finished Proposals](https://github.com/tc39/proposals/blob/main/finished-proposals.md)
