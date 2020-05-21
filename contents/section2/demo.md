---
title: ブログとかの一覧画面
section: 2
page: 7
---

### ブロック要素の場合

padding-taop を指定する。
padding-top が親要素の width をもとに決まることを利用したハック。

> padding-top and padding-bottom is based on the parent element’s width
> padding-top should be (height / width) %

@BEGIN_LIVE_EDITOR

```css
:root {
  background: #f0f0f0;
  padding: 40px;
  --theme-color: #8fcdc4;
}

#container {
  width: 400px;
  margin: 0 auto;
}

.header {
  background: #8fcdc4;
  color: white;
  font-weight: bold;
  padding: 10px;
}
.card {
  margin-top: 10px;
}

.card {
  background: white;
  padding: 10px;
  display: flex;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
}

.card .img-wrapper {
  background: red;
  flex: 0 0 40%;
}

img {
  flex: 0 0 40%;
  /*  search with img flex-basis  */
  width: 0%;
  object-fit: cover;
}

.card-wrapper {
  flex: 1 1 auto;
  padding: 8px;
  box-sizing: border-box;
}

.card-wrapper p,
.card-wrapper h5 {
  margin: 0px;
}

.card-date {
  text-align: right;
}

.card-tags {
  color: var(--theme-color);
}
```

```html
<div id="container">
  <div class="header">
    最近の投稿
  </div>
  <div class="card">
    <img
      src="https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      alt=""
    />

    <div class="card-wrapper">
      <h5 class="card-title">タイトルタイトルタイトル</h5>
      <div class="card-tags">タグ　タグ　タグ</div>
      <p class="card-date">2020年01月22日</p>
    </div>
  </div>
  <div class="card">
    <img
      src="https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      alt=""
    />

    <div class="card-wrapper">
      <h5 class="card-title">タイトルタイトルタイトル</h5>
      <div class="card-tags">タグ　タグ　タグ</div>
      <p class="card-date">2020年01月22日</p>
    </div>
  </div>
  <div class="card">
    <img
      src="https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      alt=""
    />

    <div class="card-wrapper">
      <h5 class="card-title">タイトルタイトルタイトル</h5>
      <div class="card-tags">タグ　タグ　タグ</div>
      <p class="card-date">2020年01月22日</p>
    </div>
  </div>
  <div class="card">
    <img
      src="https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      alt=""
    />

    <div class="card-wrapper">
      <h5 class="card-title">タイトルタイトルタイトル</h5>
      <div class="card-tags">タグ　タグ　タグ</div>
      <p class="card-date">2020年01月22日</p>
    </div>
  </div>
  <div class="card">
    <img
      src="https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      alt=""
    />

    <div class="card-wrapper">
      <h5 class="card-title">タイトルタイトルタイトル</h5>
      <div class="card-tags">タグ　タグ　タグ</div>
      <p class="card-date">2020年01月22日</p>
    </div>
  </div>
</div>
```

@END_LIVE_EDITOR
