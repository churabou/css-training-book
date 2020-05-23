---
title: スクロールビュー
section: 1
page: 7
---

### スクロールさせたいとき。

overflow:scroll;でスクロールしたいときは、height を決めないといけない。
ただ flexbox のバグなりなんなり height が指定されない時がある。
そんなときに。

scroll-wrapper は不要で、スクロールさせたい親要素を position: relative;にすれば良い。
ただ子要素が absolute で有ることを知る必要がないものにつけるのを避けられて責務が明確になったり、コンポネントとして使う場合は親要素に関係なく使えるように分けておいた。

@BEGIN_COMMON_CSS

```css
.scroll-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.scroll {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
}
```

@END_COMMON_CSS

うまく行かないときは試してみると良いかもしれない。

@BEGIN_LIVE_EDITOR

```css
.container {
  position: relative;
  width: 300px;
  height: 300px;
  background: white;
}

p {
  margin: 0px;
  background: blue;
  height: 1000px;
}
```

```html
<div class="container">
  <div class="scroll-wrapper">
    <div class="scroll">
      <p>big content</p>
    </div>
  </div>
</div>
```

@END_LIVE_EDITOR

React の場合はうまくラップできる。

```.jsx
<AspectRatio w="3" h="4>
```
