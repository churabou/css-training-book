---
title: ボタンのスタイリング
section: 1
page: 7
---

@BEGIN_LIVE_EDITOR

```css
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

button {
  background: orange;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
}
```

```html
<div class="wrapper">
  <button>完了</button>
</div>
```

@END_LIVE_EDITOR
