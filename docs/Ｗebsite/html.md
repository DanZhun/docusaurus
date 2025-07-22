---
title: 'HTML 常用語法'
label: 'HTML 常用語法'
sidebar_position: 1
---
HTML 常用語法
===
---
一、基本結構（Boilerplate
---
```HTML showLineNumbers 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>
  <!-- 內容寫這裡 -->
</body>
</html>
```
---
二、語意化結構標籤（Semantic Tags）
---
|標籤|	用途|
|:--|:--|
header|	頁首
nav|	導覽列
main|	主內容區域
section|	章節/區塊內容
article|	可獨立重複使用的內容
aside|	側邊欄、補充內容
footer|	頁尾
---
三、文字與排版
---
```HTML showLineNumbers
<h1>標題 1</h1> <h2>～<h6>
<p>段落</p>
<strong>加粗</strong> / <b>粗體</b>
<em>斜體</em> / <i>斜體</i>
<u>底線</u> / <mark>標記</mark>
<small>小字</small> / <sub>下標</sub> / <sup>上標</sup>
<blockquote>引言</blockquote>
<hr /> 水平線
<br /> 換行
```
---
四、連結與圖片
---
```HTML showNineNumbers
<a href="https://example.com" target="_blank">外部連結</a>
<a href="#section1">錨點連結</a>

<img src="image.jpg" alt="圖片描述" width="300" />
```
---
五、清單（List）
---
```HTML showLineNumbers
<ul>
  <li>無序清單項目</li>
</ul>

<ol>
  <li>有序清單項目</li>
</ol>

<dl>
  <dt>定義詞</dt>
  <dd>定義說明</dd>
</dl>
```
---
六、表格（Table）
---
```HTML showLineNumbers
<table>
  <thead>
    <tr><th>名稱</th><th>年齡</th></tr>
  </thead>
  <tbody>
    <tr><td>Dan</td><td>25</td></tr>
    <tr><td>Alice</td><td>30</td></tr>
  </tbody>
</table>
```
---
七、表單（Form）
```HTML showLineNumbers
<form action="/submit" method="post">
  <label for="name">姓名:</label>
  <input type="text" id="name" name="name" />
  
  <input type="email" name="email" required />
  <input type="password" name="pwd" />
  <input type="checkbox" />同意條款
  <input type="radio" name="gender" value="male" /> 男
  <select name="country">
    <option value="tw">台灣</option>
  </select>
  
  <textarea name="message"></textarea>
  <button type="submit">送出</button>
</form>
```
---
八、媒體（Media）
---
```HTML showLineNumbers
<img src="pic.jpg" alt="圖片" />
<video src="movie.mp4" controls autoplay></video>
<audio src="audio.mp3" controls></audio>
<iframe src="https://example.com" width="300" height="200"></iframe>
```
---
九、其他常用標籤
|標籤|	用途|
|:--|:--|
div|	區塊容器，無語意
span|	行內容器，無語意
meta|	設定編碼、描述、關鍵字等
script|	引入或寫入 JavaScript
link|	引入 CSS 檔案
style|	內嵌 CSS
---
🧠 小技巧與補充
---
使用 alt 屬性讓圖片具備無障礙功能。

target="_blank" 會開新分頁，建議搭配 rel="noopener" 增加安全性。

表單輸入欄位可加入 required、placeholder、readonly、disabled 等屬性強化 UX。

HTML5 語意標籤有助於 SEO 與程式維護性，能避免濫用 div。