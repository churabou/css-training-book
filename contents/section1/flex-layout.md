---
title: Flexboxでのレイアウト実装例
section: 1
page: 7
---

比率でレイアウトを組む。

共通 CSS
@BEGIN_COMMON_CSS

```css
* {
  background: #f4f4f4;
  border: 1px solid #bbb;
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
.container {
  height: 100vh;
  background: #f0f0f0;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

header {
  height: 70px;
  background: orange;
  flex-shrink: 0;
}

main {
  flex: auto;
  background: pink;
}
```

```html
<div class="container">
  <header>header</header>
  <main>main</main>
</div>
```

@END_LIVE_EDITOR

### レイアウト 2

flex-item を更に flex コンテナとして使う。
よくあるレイアウトになる。
flex の孫要素はバグがあるらしいが、レイアウトを組むのが目的なので問題はない。

@BEGIN_LIVE_EDITOR

```css
.container {
  height: 100vh;
  background: #f0f0f0;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

header {
  height: 70px;
  background: orange;
  flex-shrink: 0;
}

main {
  flex: auto;
  background: pink;
  display: flex;
}

main div.left {
  width: 25%;
}

main div.right {
  flex: auto;
  background: gray;
}
```

```html
<div class="container">
  <header>header</header>
  <main>
    <div class="left">left</div>
    <div class="right">right</div>
  </main>
</div>
```

@END_LIVE_EDITOR
