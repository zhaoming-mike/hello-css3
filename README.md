
# 学习 CSS3

## 环境准备

1. `brew install node`

- [x] 当保存文件时自动刷新浏览器
- [x] 添加 `单选` `多选` `下拉框` 等网页控件
- [x] 添加 `Font awesome` 字体图标


## 开启响应式
```html
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- [if lt IE 9]>
        <script  src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif] -->
</head>
```

1. 为了确保适当的绘制和触屏缩放，需要在<head>中添加viewport元数据标签
`width=device-width`:宽度等于设备宽度
`initial-scale`=1.0:初始显示大小——原始大小，即不进行缩放
