 /************
 *  es6语法  *
 *************/
// 声明变量的6种方法：
// es5：var和function
// es6：let，const，import，class

// 变量的解构赋值：
// 1.数组的解构赋值：
// let [a, b, c] = [1, 2, 3]; // a=1, b=2, c=3
// let [foo = true] = []; // foo=true
// let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
// 2.对象的解构赋值：
// 将对象的变量或方法赋值给新的变量，需要保证变量名相同
// 原理，先找到同名的属性，再赋值给对应的变量
// let { bar, foo } = { foo: 'aaa', bar: 'bbb' }; // bar='bbb', foo='aaa'
// let {foo} = {bar: 'aaa'}; // foo=undefined
// let {random, ceil, floor} = Math
// let {log} = console; // log('hello')
// let { foo: baz } = { foo: 'aaa', bar: 'bbb' }; // baz='aaa'
// let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' }; // foo='aaa', bar='bbb'
// let { x: y = 5 } = { x: 8 }; // y=8
// 3.字符串的解构赋值：
// let [a, b, c, d, e] = 'hello'; // a='h', b='e', c='l', d='l', e='o'
// let { length: len } = 'hello'; // len=5
// 4.数值和布尔值的解构赋值、5.函数参数的解构赋值
// 变量的解构赋值的用途：1.交换变量的值，2.从函数返回多个值，3.函数参数的定义，4.提取json数据，5.函数参数的默认值，6.遍历Map结构，7.输入模块的指定方法

// 字符串的扩展
// 遍历字符
// for (let t of 'hello') {
//     console.log(t)
// }
// // 'h', 'e', 'l', 'l', 'o'
// let str = 'hello'
// str.includes('he') // true
// str.startsWith('he') // true
// str.endsWith('ld') // true
// str.repeat(0) // ''
// str.repeat(1) // 'hello'
// str.repeat(2) // 'hellohello'
// str.padStart(10, '*') // ‘*****hello'
// str.padEnd(10, '*') // ’hello*****‘
// 模板字符串：`现在时间是${Date.now()}`
// 标签模板，特殊的函数调用
// String.row()

// 正则的扩展
// 1.正则构造函数RegExp
// var regex = new RegExp('xyz', 'i') 等价于 var regex = /xyz/i
// var regex = new RegExp(/xyz/i) 等价于 var regex = /xyz/i
// new RegExp(/abc/ig, 'i').flags; // 'i'
// 2.字符串的正则方法
// match()、replace()、search()、split()

// 函数的扩展
// 1.函数参数默认值，2.rest参数(形式为...变量名)，3.严格模式，4.name属性
// 5.箭头函数：
// 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象；
// 不可以当做构造函数，也就是说，不可以使用new命令，否则会抛出一个错误；
// 不可以使用arguments对象，该对象在函数体内不存在，如果要用，可以用rest参数代理；
// 不可以使用yield命令，因此箭头函数不能用作Generator函数。
// 箭头函数没有自己的this，因此不能用call()、apply()、bind()这些方法去改变this的指向
// 6.双冒号运算符：双冒号(::)左边是一个对象，右边是一个函数，该运算符会自动将左边的对象，作为上下文环境，绑定到右边的函数上面

// 数组的扩展
// 1.扩展运算符(...[])，将一个数组转为用逗号分隔的参数序列
// 替代函数的apply方法
// 复制数组：
// let arr1 = [1, 2]
// let arr2 = arr1.concat()
// let arr3 = [...arr1]
// let [...arr4] = arr1
// 合并数组：
// let a1 = [1, 1, 2]
// let a2 = [2, 2, 3]
// let a3 = [3, 3, 4]
// let all1 = a1.concat(a2, a3)
// let all2 = [...a1, ...a2, ...a3]
// 与解构赋值结合：
// let [a, ...rest] = list
// let [first, ...rest] = [1, 2, 3, 4, 5]
// 字符串转数组：
// [...'hello']
// 任何定义了遍历器(Iterator)接口的对象，都可以用扩展运算符转为真正的数组
// Map和Set解构，Generator函数
// Array.from()
// 用于将两类对象转为真正的数组：类似数组的对象(array-like object)和可遍历(iterable)的对象(包括es6新增的数据结构Set和Map)
// Array.of()
// 用于将一组值，转换为数组：Array.of(3, 2, 3) // [3, 2, 3]
// copyWithin()
// [0, 1, 2, 3, 4].copyWithin(target, start, end) 将下标start至end前面的元素复制到target位置
// 数组实例的find()和findIndex()
// [1, 2, 3, 4, 5, 6].find(n => n > 4); // 5
// [1, 2, 3, 4, 5, 6].find(function(val, idx, arr) {return val > 3})
// 数组实例的fill()
// ['a', 'b', 'c'].fill(7, 1, 2); 将下标1至2之前的元素填充为7
// 数组实例的entries(), keys(), values()
// for (let idx of [1, 2, 3, 4].keys()) {
//     console.log(idx) // 0,1,2,3
// }
// for (let val of [1, 2, 3, 4].values()) {
//     console.log(val) // 1,2,3,4
// }
// for (let [idx, val] of [1, 2, 3, 4].entries) {
//     console.log(idx, val) // 0 1,1 2, 2 3, 3 4
// }
// 数组实例的includes()
// [1, 2, 3, 4, 5].includes(3, 2); 从下标为2的位置开始检索元素3
// 数组实例的flat(), flatMap()
// [1, 2, [3, 4]].flat(); // [1, 2, 3, 4]
// [1, 2, [3, [4, 5]]].flat(); // [1, 2, 3, [4,5]]
// [1, 2, [3, [4, 5]]].flat(2); // [1, 2, 3, 4, 5]
// [1, 2, [3, [4, 5]]].flat(Infinity); // [1, 2, 3, 4, 5]
// [1, 2, , 3, 4].flat(); // [1, 2, 3, 4]
// [1, 2, 3, 4].flatMap(i => [i, i*2]); // [1, 2, 2, 4, 3, 6, 4, 8]
// [1, 2, 3].flatMap(i => [[i*2]]); // [[2], [4], [6]]
// arr.flatMap(function(i, idx, arr) {}, this)
// 数组的空位
// Array(3); // [, , ,]
// forEach(), filter(), reduce(), every()和some()都会跳过空位
// map()会跳过空位，但会保留这个值
// join()和toString()会将空位视为undefined，而undifined和null会被处理成空字符串
// Array.from(['a',,'b']); // ['a', undefined, 'b']
// [...['a',,'b']]; // ['a', undefined, 'b']

// 对象的扩展
// 1.属性的简介表示法
// es6允许在对象之中，直接写变量，这时，属性名为变量名，属性值为变量的值
// 2.属性名表达式
// let obj = {
//     ['a' + 'b']: 123,
//     'hello world': '嘿嘿',
//     ['what' + 'is' + 'this']() {
//         return 'nothing'
//     }
// }
// 3.方法的name属性
// 4.属性的可枚举性和遍历
// 5.super关键字，super关键字指向当前对象的原型对象
// 6.对象的扩展运算符
// let {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4}; // x=1, y=2, z={a: 3, b: 4}

// 对象的新增方法
// 1.Object.is()，用来比较两个值是否严格相等，与严格比较运算符(===)的行为基本一致，不同之处是：+0不等于-0，NaN等于自身
// Object.is('foo', 'foo'); // true
// Object.is({}, {}); // false
// Object.is(+0, -0); // false
// Object.is(NaN, NaN); // true
// 2.Object.assign()，用于对象的合并，将原对象(source)的所有可枚举属性，复制到目标对象(target)
// const target = {a: 1}
// const source1 = {b: 2}
// const source2 = {c: 3}
// Object.assign(target, source1, source2)
// target // {a: 1, b: 2, c: 3}
// Object.assign方法实行的是浅拷贝，如果源对象的某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用
// const obj1 = {a: {b: 1}}
// const obj2 = Object.assign({}, obj1)
// obj1.a.b = 2
// obj2.a.b // 2
// Object.assign遇到同名属性，处理方法是替换，而不是添加
// const target = {a: {b: 1, c: 2}}
// const source = {a: {d: 'hello'}}
// Object.assign(target, source); // {a: {d: 'hello'}}
// Object.assign对数组的处理
// Object.assign([1, 2, 3], [4, 5]); // [4, 5, 3]
// Object.assign的常见用途：
// (1)为对象添加属性
// (2)为对象添加方法
// (3)克隆对象
// (4)合并多个对象
// (5)为属性指定默认值
// 3.Object.getOwnPropertyDescriptors()，返回某个对象属性的描述对象(descriptor)
// 4.__proto__属性，读取或设置当前对象的prototype对象；Object.setPrototypeOf()；Object.getPrototypeOf()
// 5.Object.keys(), Object.values(), Object.entries()
// let {keys, values, entries} = Object
// let obj = {a: 1, b: 2, c: 3}
// for (let key of keys(obj)) {
//     console.log(key) // 'a', 'b', 'c'
// }
// for (let value of values(obj)) {
//     console.log(value) // 1, 2, 3
// }
// for (let [key, value] of entries(obj)) {
//     console.log([key, value]) // ['a', 1], ['b', 2], ['c', 3]
// }
// 6.Object.fromEntries()，是Object.entries()的逆操作，用于将一个键值对数组转为对象
// Object.fromEntries(['a', 1], ['b', 2], ['c', 3]) // {a: 1, b: 2, c: 3}
 
// Symbol
// js第七种数据类型：Number, String, Boolean, Object, null, undefined, Symbol
// 对象的属性名一种是原来就有的字符串，一种是Symbol类型，Symbol类型的属性名独一无二，不会与字符串冲突
// let s = Symbol; 
// typeof s // 'symbol'
// Symbol是一个原始类型的值，类似于字符串
// let s1 = Symbol('foo')
// let s2 = Symbol('bar')
// s1 // Symbol(foo)
// s2 // Symbol(bar)
// s1.toString() // "Symbol(foo)"
// s2.toString() // "Symbol(bar)"
// 如果Symbol的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个Symbol值
// Symbol函数的参数只表示对当前的Symbol值的描述，因此相同参数Symbol函数的返回值是不相等的
// Symbol可以显示转为字符串，也可以转为布尔值，但是不能转为数值

// Set和Map数据结构
// 1.Set数据结构类似于数组，但成员的值都是唯一的，没有重复的值
// const s = new Set()
// [1, 1, 2, 3, 4, 3, 5, 5].forEach(i => s.add(i));
// s // [1, 2, 3, 4, 5]
// Set结构不会添加重复的值
// 数组去重
// let arr = [1, 1, 2, 2, 3, 4, 4, 4, 3, 5]
// [...new Set(arr)]; // [1, 2, 3, 4, 5]
// 字符串去重
// [...new Set('afadasdfasdf')].join(''); // afds
// Set加入值不会发生类型转换
// Set实例的方法：
// add(val)：添加某个值，返回Set结构本身
// delete(val)：删除某个值，返回一个布尔值，表示删除是否成功
// has(val)：返回一个布尔值，表示该值是否为Set的成员
// clear()：清除所有成员，没有返回值
// Set结构的实例有4中遍历方法：
// keys(), values(), entries(), forEach()
// 2.WeakSet与Set类似，但是成员只能是对象
// 3.Map
// Map数据结构可以使用各种类型的值当做键，使用set和get，delete方法存储读取和删除键
// Map数据结构也提供keys(), values(), entries(), forEach()
// 4.WeakMap与Map类似，但是WeakMap只接受对象作为键名

// Promise 

Iterator(遍历器)和for...of循环
for...of循环可以使用的范围包括数组、Set和Map结构、某些类似数组的对象等
let arr = ['a', 'b', 'c', 'd']
for (let idx in arr) {
    console.log(idx) // 0,1,2,3
}
for (let [i, idx] of arr) {
    console.log(i + ':' + idx) // 'a', 'b', 'c', 'd'
}