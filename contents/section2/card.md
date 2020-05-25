---
title: cardのスタイリング
section: 2
page: 7
---

### Input の装飾

シンプルにやると

@BEGIN_LIVE_EDITOR

```css
.container {
  padding: 10px;
  background: #f0f0f0;
  width: 200px;
}

img {
  width: 100%;
  object-fit: cover;
  background: blue;
}

div {
  background: white;
  padding: 20px;
}

h3 {
  margin: 5px;
}

p {
  margin: 5px;
}
p:last-child {
  color: darkGray;
  font: 12px bold;
  text-align: right;
}
```

```html
<div class="container">
  <img src='https://www.soroptimistphil.org/wp-content/uploads/2019/10/105992231-1561667465295gettyimages-521697453.jpeg'></img>
  <div>
    <h3>Title Title Title</h3>
    <p>
      description description description descriptio
    </p>
    <p>yyyy/mm/dd</p>
  </div>
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
