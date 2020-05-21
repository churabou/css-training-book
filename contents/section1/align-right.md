---
title: 右寄せにする方法
section: 1
page: 2
---

共通 CSS

@BEGIN_COMMON_CSS

```css
:root {
  padding: 40px;
  background: #f4f4f4;
}

div.container {
  background: white;
  padding: 10px;
  width: 300px;
}

button {
  background: tomato;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  color: white;
  font-weight: bold;
}
```

@END_COMMON_CSS

### flexbox を使う方法

@BEGIN_LIVE_EDITOR

```html
<div class="container">
  <button>click me</button>
</div>
```

```css
div.container {
  display: flex;
  justify-content: flex-end;
}
```

@END_LIVE_EDITOR

### float right を使う方法

use clearfix to prevent parent div callapse

これもある種のハックである。

@BEGIN_LIVE_EDITOR

```html
<div class="container">
  <button>click me</button>
</div>
```

```css
div.container::after {
  content: " ";
  display: block;
  clear: both;
}

div.container button {
  float: right;
}
```

@END_LIVE_EDITOR
