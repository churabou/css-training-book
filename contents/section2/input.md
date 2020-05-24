---
title: Inputのスタイリング
section: 2
page: 7
---

### Input の装飾

シンプルにやると

@BEGIN_LIVE_EDITOR

```css
:root {
  padding: 40px;
  background: #f4f4f4;
  --hilight-color: #fba0ba;
  --normal-color: #ccc;
}

* {
  box-sizing: border-box;
}

div {
  width: 400px;
  padding: 20px;
  background: white;
  position: relative;
}

input {
  width: 100%;
  border: none;
  outline: none;
  background: #f0f0f0;
  padding: 10px 20px;
  border-bottom: 2px solid var(--normal-color);
  transition: 0.2s;
}

input:focus {
  border-bottom: 2px solid var(--hilight-color);
}
```

```html
<div>
  <input type="text" />
</div>
```

@END_LIVE_EDITOR

### よりマテリアルポック

bar のアニメーション。

background-image を使って実装する。

@BEGIN_LIVE_EDITOR

```css
div {
  background: white;
  padding: 10px;
  width: 400px;
  positon: relative;
}

p::after {
  content: "";
  display: block;
  bottom: 0;
  left: 0;
  height: 7px;
  width: 100%;
  transition: all 0.4s ease-in-out;
  background-position: 50%;
  background-size: 200% 200%;
  background-image: radial-gradient(circle, pink 10%, rgba(0, 0, 0, 0) 11%);
}

div:hover > p::after {
  background-repeat: no-repeat;
  background-size: 1000% 1000%;
  background-image: radial-gradient(circle, pink 10%, rgba(0, 0, 0, 0) 11%);
}
```

```html
<div>
  <p>hover me</p>
</div>
```

@END_LIVE_EDITOR

### Label をあわせると・・
