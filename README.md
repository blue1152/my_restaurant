# Ivy的餐廳清單

利用 Node.js 跟 Express建立簡單的伺服器，並搭配 Bootstrap 打造出餐廳清單

## 如何啟動本專案

### 透過 npm 安裝 Node.js、Express、與 nodemon

1. 打開終端機，輸入以下指令，來建立 package.json：
```
$ npm init -y
```

2. 輸入以下指令，安裝 Express套件：
```
$ npm i express
```

3. 輸入以下指令，安裝 nodemon套件：
```
$ npm install -g nodemon
```

### 透過 nodemon 來啟動伺服器

打開終端機，輸入以下指令，並在瀏覽器檢視伺服器的回應：
```
$ nodemon app.js
```

## 餐廳清單的內容

* 導覽列、首頁具有搜尋框，可輸入關鍵字尋找餐廳
* 餐廳分類：每一間餐廳都有分類標籤
* 餐廳評價：以星等標示
* 餐廳資料：點擊餐廳卡片，可以查看餐廳的詳細資料，包含地址、電話、簡介
