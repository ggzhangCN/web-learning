/*************************
 *  css实现图片自适应宽高  *
//  *************************/
// 媒体查询，不同大小的屏幕请求不同尺寸的图片，节省加载时间
// 设置img的max-width为100%或者max-height为100%，避免图片放大太多印象图片清晰度
// 手动判断图片宽高比例与容器宽高比例，动态调整图片的宽高适应方式，可以是width为100%，height为auto，也可以是height为100%，width为auto


 /**********************
 *  flex常用属性和作用  *
 **********************/
// flex-direction: row/row-reverse/column/column-reverse (水平/水平倒序/垂直/垂直倒序)
// flex-wrap: wrap/nowrap/wrap-reverse (允许换行/禁止换行/倒序换行)
// flex-flow: flex-direction和flex-wrap的复合属性
// justify-content: flex-start/flex-end/center/space-between/space-around 主轴排列方式(从左往右排列/从右往左排列/居中排列/两端对齐排列/自适应散开排列)
// align-items: center/flex-start/flex-end/baseline/stretch 交叉轴排列方式(居中排列/上端对齐/下端对齐/以各项第一排文字基线对齐/占满整个容器高度)
// align-content: strech/flex-start/flex-end/center/space-between/space-around 主轴有多行排列时，交叉轴的排列方式
// order: 项目属性，数值越小，项目排列越靠前
// flex-grow: 项目放大比例
// flex-shrink: 项目缩小比例
// flex-basis: 项目占据的主轴空间，可以给主轴留出多余的空间
// flex: 是flex-grow, flex-shrink, flex-basis的简写，默认为0 1 auto
// align-self: 允许单个项目与其他项目有不一样的对齐方式，可覆盖align-items属性


/***************
 *  BFC是什么  *
 ***************/
// bfc, 块级格式上下文，浮动元素和绝对定位元素，非块级盒子的块级容器（例如：inline-block, table-cells, 和table-captions），以及overflow值不为visible的块级盒子，都会为他们的内容创建新的bfc（块级格式上下文）
// 创建bfc的条件：
// float的值不是none
// position的值不是static或者relative
// display的值是inline-block、table-cell、flex、table-caption或者inline-flex
// overflow的值不为visible
// bfc的作用：
// 相邻的两个元素处在不同的bfc中，可以避免外边距重叠的问题
// 可以包含浮动，解决浮动元素不能撑开父级元素高度的问题
// 避免文字环绕的问题
// 多列布局占据剩余宽度


/*****************
 *  关于前端鉴权  *
 *****************/
// 1.session-cookie 
// 服务器在接受客户端首次访问时在服务器创建session， 然后保存session，然后给这个session生成一个唯一的标识字符串，然后在响应头中种下这个唯一标识字符串；
// 签名，对sid进行加密处理，服务端会根据这个secret秘钥进行解密；（非必须）
// 浏览器接收到请求响应的时候会解析响应头，然后将sid保存在本地cookie中，浏览器在下次http请求的请求头中会带上该域名下的cookie信息；
// 服务器在接受客户端请求时会去解析请求头cookie中sid，然后根据这个sid去找服务器端保存的该客户端的session，然后判断该请求是否合法。
// 需要设置请求的withCredentials参数为true(axios.defaults.withCredentials = true)
// 2.token验证
// 客户端使用账号密码请求登录；
// 服务端验证登录通过后签发一个token，然后把token返回给客户端；
// 客户端存储token，以后的每次请求将token放在header里面传给服务端；
// 服务端验证客户端传来的token，验证成功则正常返回数据。
// 3.OAuth(开放授权)
// 支付宝、QQ、微信
// 第三方想用户请求授权；
// 用户授权后，授权服务器会返回凭证code；
// 第三方后台通过授权服务器给的凭证code向授权服务器请求Access Token；
// 授权服务器同意授权后，返回一个资源访问的凭证Access Token；
// 第三方应用通过凭证Access Token向资源服务器请求相关资源；
// 资源服务器验证凭证Access Token通过后，将第三方应用请求的资源返回
// 4.HTTP Basic Authentication
// 一般多用在内部安全性要求不高的系统上，现在用的比较少，仅仅是base64加密，安全性较低，不推荐


/***********************
 *  vue的虚拟DOM是什么  *
 **********************/
// 真实DOM的渲染流程：
// DOM Tree：浏览器将HTML解析成树形的数据结构；
// CSS Rule Tree：浏览器将CSS解析成树形的数据结构；
// Render Tree：DOM和CSSOM合并后生成Render Tree；
// layout：有了Render Tree，浏览器已经能知道网页中有哪些节点、各个节点的CSS定义以及他们的从属关系，从而去计算出每个节点在屏幕中的位置；
// painting：按照算出来的规则，通过显卡，把内容画到屏幕上；
// reflow：当浏览器发现某个部分发生了点变化影响了布局，需要倒回去重新渲染，内行称这个回退的过程叫reflow。
// repaint：改变某个元素的背景色、文字颜色、边框颜色等等不影响它周围或内部布局的属性时，屏幕的一部分要重画，但是元素的几何尺寸没有变。
// 注意：display: none; 的节点不会被加入Render Tree，而visibility: hidden; 则会。所以某个节点最开始是不显示的，设为display: none; 是更优的。
//      display: none; 会触发reflow，而visibility: hidden; 只会触发repaint，因为没有发生位置变化。
//      有些情况下，比如修改了元素的样式，浏览器并不会立刻reflow或repaint一次，而是会把这样的操作积攒一批，然后做一次reflow，这又叫异步reflow或增量异步reflow。但是在有些情况下，比如resize窗口，改变了页面默认的字体等。对于这些操作，浏览器会马上进行reflow。
// vue虚拟DOM：
// Vitual DOM是一种虚拟dom技术，本质上是基于JavaScript实现的，相对于dom对象，JavaScript对象更简单，处理速度更快，dom树的结构，属性信息都可以很容易的用JavaScript对象来表示；
// Vitual DOM并没有完全实现DOM，Vitual DOM最主要的还是保留了Element之间的层次关系和一些基本属性，你给我一个数据，我根据这个数据生成一个全新的Vitual DOM，然后跟我上一次生成的Vitual DOM去diff，得到一个Patch，然后把这个Patch打到浏览器的DOM上去；
// 我们可以通过JavaScript对象表示的树结构来构建一颗真正的dom树，当数据状态发生变化时，可以直接修改这个JavaScript对象，接着对比修改后的JavaScript对象，记录下需要对页面做的dom操作，然后将其应用到真正的dom树，实现试图的更新，这个过程就是Vitual DOM的核心思想。

    
/******************
 *  vue的双向绑定  *
 ******************/


 /*********************
 *  函数防抖和函数节流  *
 **********************/
// 函数防抖：js方法被触发后，会延迟一段间隔时间后被执行，若在延迟时间结束之前再次触发js方法，则延迟时间重新开始计算
function antiShake(fn, delay) {
    let timer = null
    return function() {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, delay)
    }
}
window.onscroll = function() {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    console.log('滚动位置：' + scrollTop)
}
// 效果：滚动停止1s后打印滚动位置

// 函数节流：js方法被触发后，需要等待一段间隔时间后才能再次被触发，间隔时间内触发是无效的，即减少会连续被触发的事件的触发频率
function throttle(fn, delay) {
    let timePoint = 0
    return function() {
        let timeNow = Date.now()
        if (timeNow - timePoint > delay) {
            fn()
            timePoint = timeNow
        }
    }
}
window.onscroll = throttle(function() {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    console.log('滚动位置：' + scrollTop)
}, 1000)
// 效果：滚送过程中每过1s，打印一次滚动位置


 /*********
 *  ajax  *
 **********/
function req(method, url) {
    let request
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest()
    } else {
        request = new ActiveXObject('Microsoft.XMLHTTP')
    }
    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            return request.responseText
        }
    }
    request.open(method, url, true)
    request.send()
}