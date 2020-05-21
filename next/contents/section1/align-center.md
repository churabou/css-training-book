---
title: 右寄せにする方法
section: 1
page: 6
---

共通 CSS

@BEGIN_COMMON_CSS

```css
:root {
  background: #f4f4f4;
  padding: 40px;
}

.parent {
  background: white;
  width: 300px;
  height: 100px;
  margin-bottom: 10px;
}

.child {
  background: tomato;
  color: white;
  width: 100px;
  height: 30px;
  padding: 10px;
  text-align: center;
}
```

@END_COMMON_CSS

### flexbox を使う方法

@BEGIN_LIVE_EDITOR

```html
<div class="parent ex1">
  <div class="child">child</div>
</div>
```

```css
/* example1 use flex-box */
.parent.ex1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

@END_LIVE_EDITOR

### float right を使う方法

@BEGIN_LIVE_EDITOR

```html
<div class="parent ex2">
  <div class="child">child</div>
</div>
```

```css
/* example2 use position: absolute; + margin: auto; */
.parent.ex2 {
  position: relative;
}

.ex2 .child {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
}
```

@END_LIVE_EDITOR

### float right を使う方法

@BEGIN_LIVE_EDITOR

```html
<div class="parent ex3">
  <div class="child">child</div>
</div>
```

```css
/* example3 use transform */
.parent.ex3 {
  position: relative;
}

.ex3 .child {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

@END_LIVE_EDITOR
