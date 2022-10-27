# 小米商城中遇到的bug汇总



|   时间   |                         bug/问题描述                         | 是否解决 |     解决时间     |
| :------: | :----------------------------------------------------------: | :------: | :--------------: |
| 10月14日 |     语法错误：SyntaxError: Unexpected end of JSON input      |    是    |     10月14日     |
| 10月18日 |       接口环境配置错误，导致浏览器请求访问失败（404）        |    是    |     10月19日     |
| 10月18日 | 插件版本不兼容报错：Module build failed:Error: xxx version 版本号 is incompa with ^版本号 |    是    |     10月18日     |
| 10月18日 |     在style中引入图片，网页中无法正常显示，控制台无报错      |    是    |     10月18日     |
| 10月19日 | 在script标签中，使用变量获取图片，网页无法显示，控制台无报错 |    是    |     10月19日     |
| 10月19日 | 首页轮播图效果存在问题：1、自动轮播速度太快；2、导航小圆点无法显示 |    否    |        --        |
| 10月20日 |         调用函数忘记加参数，导致地址访问失败（400）          |    是    |     10月20日     |
| 10月21日 | 在点击“购物车”图标时，弹框提示显示成功，但是点击“×”，无法关闭弹框 |    否    |        --        |
| 10月21日 |                  部分懒加载图片无法加载出来                  |    否    |        --        |
| 10月23日 |          接口名称写错：导致浏览器请求访问失败(404)           |    是    |     10月23日     |
| 10月23日 | 路由跳转名称写错：控制台提示：this.$route.push is not a function； |    是    |     10月23日     |
| 10月23日 | 商品详情交互中，控制台提示：Property or method "id" is not defined on the instance but referenced during render. |    是    | 不知道怎么解决的 |
| 10月24日 |           在vue中的scss文件中引入图片路径方法不对            |    是    |     10月24日     |
| 10月24日 | 项目打包出错：Error：'项目文件路径\node_modules\Vuex\dist\vuex.e' does match the correspoding on disk 'vuex'（原因：将vuex写成了Vuex） |    是    |     10月25日     |
| 10月25日 | 语法错误：Syntax Error: Unexpected token (错误代码具体行数)  |    是    |     10月25日     |
| 10月25日 | 指令错误：Failed to resolve directive: xxx  无法解析xxx指令  |    是    |     10月25日     |
| 10月25日 |           接口地址写错，导致 浏览器访问失败（404）           |    是    |     10月25日     |
| 10月25日 | 控制台提示：Property or method "checkedItem" is not defined on the instance but referenced during render.（使用了未定义变量） |    是    |     10月25日     |
| 10月25日 | 控制台提示：TypeError: Cannot read properties of undefined (reading '$message') at eval |    是    | 不知道怎么解决的 |
| 10月25日 |             接口请求失败，浏览器访问失败（400）              |    是    |     10月26日     |
| 10月26日 | the server responded with a status of 500 (Internal Server Error)  Error：request failed with status 500 |    是    |     10月26日     |
|          |                                                              |          |                  |



心得：

因为想到汇总这个表格也是最近才想到的，之前做的每日学习记录也不是分单个md文档。因此，有些bug记录不到位的情况。

现在将其大概的汇总到一个表格后，我觉得更能直观地发现自己常犯的错误，以及方便后续查找错误。



