---
title: Chromeのダイアログ
section: 2
page: 7
---

### Google Chrome のショートカット編集モーダル

@BEGIN_LIVE_EDITOR

```css
.container {
  display: inline-block;
  padding: 40px;
  background: #f0f0f0;
}

.dialog {
  background: white;
  width: 400px;
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);
  padding: 24px;
}

.dialog > div {
  margin-top: 16px;
}

.dialog h3 {
  margin: 0;
}

.dialog label {
  display: flex;
  height: 100%;
  flex-direction: column;
}

.dialog label span {
  font-size: 0.7em;
}

.dialog input {
  background: #f0f0f0;
  color: #333;
  flex: auto;
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 10px;
}

.dialog input:focus {
  background-size: 100% 2px, 100% 1px;
}

.dialog input:focus + label span {
  color: orange;
}

.dialog .button-container {
  display: flex;
}

.dialog button {
  padding: 10px;
  border: none;
  border-radius: 4px;
  background: rgb(26, 115, 232);
  color: white;
}

button:not(:last-child) {
  color: rgb(26, 115, 232);
  border: 1px #bbb solid;
  background: white;
}

button:first-child {
  margin-right: auto;
}

button:last-child {
  margin-left: 10px;
}
```

```html
<div class="container">
  <div class="dialog">
    <h3>ショートカットの編集</h3>
    <div>
      <label>
        <span>名前</span>
        <input type="text" />
      </label>
    </div>
    <div>
      <label>
        <span>URL</span>
        <input type="text" />
      </label>
    </div>
    <div>
      <div class="button-container">
        <button>削除</button>
        <button>キャンセル</button>
        <button>完了</button>
      </div>
    </div>
  </div>
</div>
```

@END_LIVE_EDITOR
