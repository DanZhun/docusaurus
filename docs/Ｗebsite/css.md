---
title: 'CSS 常用屬性'
label: 'CSS 常用屬性'
sidebar_position: 2
---
CSS 常用屬性
===
---
一、文字排版（Typography）
---
| 屬性 | 說明 | 範例 |
|:--|:--:|:--|
font-size | 字體大小 | font-size: 16px; 
font-family | 字型 | font-family: 'Arial';
font-weight | 粗細 | font-weight: bold;
line-height | 行高行與行間距） | line-height: 1.5;
letter-spacing | 字距 | letter-spacing: 0.1em;
text-align | 文字對齊 | text-align: center;
text-decoration | 裝飾線（如底線） | text-decoration: underline;
text-transform | 大小寫轉換 | text-transform: uppercase;
white-space | 控制空白與換行行為 | white-space: nowrap;
---
二、區塊排版（Box Model）
---
|屬性|說明|範例|
|:--|:--:|:--|
display|定義元素呈現方式|display: block; / flex
width|寬度|width: 100%;
height|高度|height: auto;
margin|外距（區塊與區塊之間）|margin: 20px;
padding|內距（內容與邊界之間）|padding: 10px;
border|邊框|border: 1px solid gray;
box-sizing|計算寬高方式|box-sizing: border-box;
---
三、排列對齊（Flexbox / Grid）
---
➤ Flexbox 主要屬性：
|屬性|功能|範例|
|:--|:--:|:--|
display: flex|啟用彈性排列	
flex-direction|主軸方向（row / column）|flex-direction: row;
justify-content|主軸對齊（左右）|justify-content: center;
align-items|副軸對齊（上下）|align-items: flex-start;
gap|元素間距（Flex & Grid皆適用）|gap: 16px;
---
➤ Grid 主要屬性：
|屬性|功能|範例|
|:--|:--:|:--|
display: grid|啟用格線系統	
grid-template-columns|	欄位數與寬度|	grid-template-columns: 1fr 2fr;
grid-gap / gap	|網格間距	|gap: 20px;
justify-items	|水平對齊子元素|	justify-items: start;
align-items	|垂直對齊子元素|	align-items: center;
---
四、浮動與清除（傳統排版）
---
|屬性|	說明|	範例|
|:--|:--:|:--|
float	|浮動|	float: left;
clear	|清除浮動|	clear: both;
overflow	|控制超出範圍的內容|	overflow: hidden;

🌟 <mark>現代排版已漸由 Flexbox 與 Grid 取代 float 排版方式。</mark>
---
五、定位屬性（Positioning）
---
|屬性|	功能|	範例|
|:--|:--:|:--|
position	|定位方式：static, relative, absolute, fixed, sticky	|position: relative;
top/right/bottom/left	|定位位置調整|	top: 10px;
z-index	|堆疊順序|	z-index: 1000;
---
六、對齊相關（輔助）
---
|屬性|	說明|	範例|
|:--|:--:|:--|
vertical-align	|行內元素垂直對齊|	vertical-align: middle;
text-align	|區塊中文字對齊（重複）|	text-align: right;