# postcss-mpvue-wxss-patch

这个库是为了解决`postcss-mpvue-wxss`的bug创建的，主要是参考了[这个issue](https://github.com/Meituan-Dianping/mpvue/issues/39)的解决方案，其他人只要安装postcss-mpvue-wxss-patch

```
npm install postcss-mpvue-wxss-patch
```
然后把`.postcssrc.js`内容修改为

```
module.exports = {
  "plugins": {
    "postcss-mpvue-wxss": {},
    "postcss-mpvue-wxss-patch": {}
  }
}
```


