---
title: ボタンのスタイリング
section: 1
page: 7
---

共通 CSS

@BEGIN_COMMON_CSS

```css
:root {
  background: #f4f4f4;
  padding: 40px;
}
```

@END_COMMON_CSS

### 実装例 2

@BEGIN_LIVE_EDITOR

```css
div {
  background-color: tomato;
  width: 200px;
  height: 40px;
  color: white;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
  border-radius: 20px;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
}

div:hover {
  opacity: 0.8;
  transform: scale(1.05, 1.05);
}
```

```html
<div>こんにちは</div>
```

@END_LIVE_EDITOR
