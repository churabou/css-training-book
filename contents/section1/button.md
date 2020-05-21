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
