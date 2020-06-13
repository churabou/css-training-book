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

### 実装例 1

@BEGIN_LIVE_EDITOR

```css
button {
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

  border: none;
}

button:hover {
  opacity: 0.8;
  transform: scale(1.05, 1.05);
}
```

```html
<button>こんにちは</button>
```

@END_LIVE_EDITOR

### 実装例 2

@BEGIN_LIVE_EDITOR

```css
button {
  border-radius: 17px;
  border: 1px solid #00c4cc;
  color: #00c4cc;
  font-size: 12px;
  line-height: 18px;
  padding: 9px 16px;
  text-align: center;
}

button:hover {
  background: #00c4cc;
  color: white;
}
```

```html
<button>メールアドレスでログイン</button>
```

@END_LIVE_EDITOR
