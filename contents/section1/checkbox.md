---
title: チェックボックスのスタイリング
section: 1
page: 7
---

@BEGIN_LIVE_EDITOR

```css
:root {
  background: #f3f3f3;
}

div {
  background: white;
  width: 300px;
  padding: 10px;
}

input {
  display: none;
}

input[type="checkbox"] + span {
  position: relative;
  padding-left: 20px;
}

input[type="checkbox"] + span:before,
span:after {
  content: " ";
  display: inline-block;
  position: absolute;
  width: 15px;
  height: 15px;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 15px;
}

input[type="checkbox"] + span:before {
  border: 1px solid red;
}

input[type="checkbox"] + span:after {
  transform: translateY(-50%) scale(0.8, 0.8);
  transition: 0.3s;
}

input[type="checkbox"]:checked + span:after {
  background: red;
}

label:hover {
  background: #f4f4f4;
}
```

```html
<div>
  <label>
    <input type="checkbox"></input>
    <span>checkbox</span>
  </label>
</div>

```

@END_LIVE_EDITOR
