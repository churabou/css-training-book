---
title: 失敗集
section: 3
page: 7
---

###

overflow: scroll にしたいときは高さを指定する必要がある。
デフォルトだと auto でコンテンツが自身の height をはみ出ていないのでスクロール対象にならない。

position absolute 　で親要素にくっつけるとき。
高さを指定しないとスクロールしない。
高さを 100%にしても、親と同じになるのでだめである。

child の子要素が高さを持つような場合は正常にスクロールする。

@BEGIN_LIVE_EDITOR

```css
:root {
  padding: 40px;
  background: #f0f0f0;
}

div.container {
  position: relative;
  background: white;
  padding: 40px;
  width: 300px;
  height: 300px;
  overflow: scroll;
}

div.child {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  /* 高さを指定してあげないとスクロールはしない*/
  /* height: 3000px;  */
}
```

```html
<div class="container">
  <div class="child">child</div>
</div>
```

@END_LIVE_EDITOR
