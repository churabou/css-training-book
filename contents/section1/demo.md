---
title: 比率でレイアウトを組む
section: 1
page: 7
---

比率でレイアウトを組む。

### img タグを揃える場合

img タグの場合は簡単で width を 100%にするだけである。

### ブロック要素の場合

padding-top を指定する。
padding-top が親要素の width をもとに決まることを利用したハック。

> padding-top and padding-bottom is based on the parent element’s width
> padding-top should be (height / width) %

@BEGIN_LIVE_EDITOR

```css
.wrapper {
  position: relative;
  width: 100px;
  background: red;
}

.wrapper:before {
  content: "";
  display: block;
  padding-top: 75%; /* 高さを幅の75%に固定 */
}

.content {
  /* 親要素いっぱいに広げる */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
```

```html
<div class="wrapper">
  <div class="content">4:3</div>
</div>
```

@END_LIVE_EDITOR

React の場合はうまくラップできる。

```.jsx
<AspectRatio w="3" h="4>
```
