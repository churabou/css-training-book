---
title: Listコンポネント
section: 2
page: 7
---

### Input の装飾

シンプルにやると

@BEGIN_LIVE_EDITOR

```css
ul {
  padding: 0px;
  list-style: none;
  width: 400px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);
}

li {
  padding: 10px 20px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid #bbb;
}

li:last-child {
  border-bottom: 1px solid #bbb;
}

li:hover {
  background: #f0f0f0;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: red;
  margin-right: 16px;
  overflow: hidden;
}

p {
  flex: auto;
}

button {
  width: 100px;
  height: 30px;
  border: none;
  border: 1px solid pink;
  border-radius: 15px;
  color: pink;
  font-weight: bold;
  transition: 0.2s;
}

button:hover {
  background: pink;
  color: white;
}
```

```html
<ul>
  <li>
    <img src=" " alt="" />
    <p>Hello Bob!!</p>
    <button>follow</button>
  </li>
  <li>
    <img src=" " alt="" />
    <p>Hello Bob!!</p>
    <button>follow</button>
  </li>
  <li>
    <img src=" " alt="" />
    <p>Hello Bob!!</p>
    <button>follow</button>
  </li>
</ul>
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
