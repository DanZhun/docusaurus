---
title: 'JavaScripts 常用語法'
label: 'JavaScripts 常用語法'
sidebar_position: 3
---
JavaScripts 常用語法
===
---
一、變數與資料型別
---
```JS showLineNumbers
// 宣告變數
let x = 10;
const y = "Hello";
var z = true;

// 資料型別
typeof 123        // "number"
typeof "abc"      // "string"
typeof true       // "boolean"
typeof {}         // "object"
typeof undefined  // "undefined"
typeof null       // "object"
typeof Symbol()   // "symbol"
```
---
二、流程控制
---
```JS showLineNumbers
// 條件判斷
if (x > 0) {
  console.log("正數");
} else {
  console.log("非正數");
}

// 三元運算子
let result = x > 0 ? "positive" : "non-positive";

// 迴圈
for (let i = 0; i < 5; i++) {
  console.log(i);
}

while (x > 0) {
  x--;
}

```
---
三、常用資料結構操作
---
1. 陣列 Array
```JS showLineNumbers
let arr = [1, 2, 3];
arr.push(4);        // [1, 2, 3, 4]
arr.pop();          // [1, 2, 3]
arr.shift();        // [2, 3]
arr.unshift(0);     // [0, 2, 3]

arr.includes(2);    // true
arr.indexOf(2);     // 1

arr.map(n => n * 2);      // [0, 4, 6]
arr.filter(n => n > 1);   // [2, 3]
arr.reduce((a, b) => a + b); // 總和

arr.forEach(item => console.log(item));

```
---
2. 物件 Object
```JS showLineNumbers
let person = {
  name: "Dan",
  age: 25
};

console.log(person.name);       // "Dan"
console.log(person["age"]);     // 25

person.city = "Taipei";         // 新增屬性
delete person.age;              // 刪除屬性
```
---
```JS showLineNumbers
```
---
```JS showLineNumbers
```
---
```JS showLineNumbers
```
---
```JS showLineNumbers
```
---
```JS showLineNumbers
```
