# ES9 (2018) 模块

ECMAScript 2018 (ES9) 于 2018 年 6 月正式发布。本次更新主要增强了异步编程能力（异步迭代）以及对象和正则表达式的处理能力。

## 发布内容 (Released Features)

以下是 ES2018 正式包含的新特性：

### 1. 异步迭代 (Asynchronous Iteration)

引入了 `for await...of` 循环，允许遍历异步可迭代对象（即那些 Symbol.asyncIterator 属性定义了迭代器的对象）。这在处理流数据或分页 API 请求时非常有用。

```javascript
async function processData(array) {
  for await (const item of array) {
    console.log(item);
  }
}

// 示例：自定义异步迭代器
const asyncIterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next() {
        if (i < 3) {
          return Promise.resolve({ value: i++, done: false });
        }
        return Promise.resolve({ done: true });
      }
    };
  }
};

(async () => {
  for await (const num of asyncIterable) {
    console.log(num);
  }
})();
```

### 2. 对象扩展运算符 (Object Rest/Spread Properties)

将数组中常用的 Rest（剩余）和 Spread（展开）语法扩展到了对象。

#### Spread (展开)
用于克隆对象或合并对象。

```javascript
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 };
const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj); // { foo: 'baz', x: 42, y: 13 }
```

#### Rest (剩余)
用于提取对象中剩余的属性。

```javascript
const { x, ...others } = { x: 1, y: 2, z: 3 };

console.log(x);      // 1
console.log(others); // { y: 2, z: 3 }
```

### 3. `Promise.prototype.finally()`

`finally()` 方法返回一个 Promise。在 promise 结束时，无论结果是 fulfilled 或者是 rejected，都会执行指定的回调函数。这通常用于清理资源或重置 Loading 状态。

```javascript
fetch('/api/data')
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => {
    // 无论成功失败都会执行
    console.log('请求结束，隐藏 loading');
  });
```

### 4. 正则表达式增强

ES9 对正则表达式进行了多项重要更新：

#### 命名捕获组 (Named Capture Groups)
允许为捕获组指定一个名称，使结果更易读。

```javascript
const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = re.exec('2018-04-30');

console.log(match.groups.year);  // "2018"
console.log(match.groups.month); // "04"
console.log(match.groups.day);   // "30"
```

#### DotAll 模式 (`s` flag)
`.` 通常匹配除换行符以外的任何字符。启用 `s` 标志后，`.` 也可以匹配换行符。

```javascript
console.log(/foo.bar/.test('foo\nbar')); // false
console.log(/foo.bar/s.test('foo\nbar')); // true
```

#### Unicode 属性转义 (Unicode Property Escapes)
允许使用 `\p{...}` 匹配 Unicode 字符属性。

```javascript
const regex = /\p{Script=Greek}/u;
console.log(regex.test('π')); // true
```

#### Lookbehind Assertions (后行断言)
支持正向后行断言 `(?<=...)` 和负向后行断言 `(?<!...)`，即匹配“前面是/不是某内容”的情况。

```javascript
console.log(/(?<=\$)\d+/.exec('$100')[0]); // "100" (前面必须是 $)
```

---

## 参考资料
- [ECMAScript® 2018 Language Specification](https://262.ecma-international.org/9.0/)
- [TC39 Finished Proposals](https://github.com/tc39/proposals/blob/main/finished-proposals.md)
