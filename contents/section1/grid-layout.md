---
title: グリッドレイアウト with Flexbox
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

### レイアウト 1

親の高さを画面いっぱいにする
header の高さを指定する
flex:auto;を指定して body が広がるようにする。
body のコンテントが大きいと縮まってしまうので flex

@BEGIN_LIVE_EDITOR

```css
.grid {
  padding: 10px;
  display: flex;
  width: 400px;
  flex-wrap: wrap;
}

.cell {
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border: 1px solid white;
}
.cell:hover {
  background: white;
}
```

```html
<div class="grid">
  <div class="cell">item</div>
  <div class="cell">item</div>
  <div class="cell">item</div>
  <div class="cell">item</div>
  <div class="cell">item</div>
  <div class="cell">item</div>
  <div class="cell">item</div>
  <div class="cell">item</div>
  <div class="cell">item</div>
  <div class="cell">item</div>
  <div class="cell">item</div>
</div>
```

@END_LIVE_EDITOR
