# 指令

有个特点`v-xxx`，这种都是html本身没有的属性值，所以不影响我们页面原来的功能，但是配合vue框架，它根据数据的改变，拥有修改视图的能力
```html
v-if="model值"
v-if="M层的数据，来自于data对象的属性值"
```
如果model为真的话，如果model为假的话，那就消失(删除)
```html
<div id="app-3">
  <p v-if="seen">现在你看到我了</p>
</div>
```
```html
<div id="demo"></div>
<script src="./vue.js"></script>
<script>
    // v-if的用出就是接受一个布尔值，如果为真，增加，否则删除
    new Vue({
        el: '#demo',
        data: {
            bool:!0
        },
        template: `
            <div>
                <p>1.v-if</p>
                <p v-if="!0">1.增加或者删除</p>
                <p v-if="0">2.增加或者删除</p>
            </div>
        `
    })
</script>
```
v-if就是相当于jQ中的$().remove()和$().append()这几个方法
```js
$(V).remove(M)
```
除此之外还有以下几个相似的指令
```html
<div>
    <p>1.v-if</p>
    <p v-if="num>3">1.v-if</p>
    <p v-else-if="num===3">2.v-else-if</p>
    <p v-else>3.v-else</p>
</div>
```

v-show会接受一个布尔值，如果为真，出现该标签，如果为假隐藏

在效果上是一样，视觉上一样，本质不一样。v-show改变css的属性值display
```html
<div>
    <p>1.v-show</p>
    <p v-show="!0">1.显示或者隐藏</p>
</div>
```

- v-show 选项卡 加载中动画 弹窗
- v-if 一开始确定一种状态的 某功能开关

一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

v-for

v-for 指令可以绑定数组的数据来渲染一个项目列表

```html
<div>
    <p>1.v-for</p>
    <p v-for="a in arr">{{a}}</p>
</div>
```
v-for可以嵌套，还可以配合v-if和v-show实现筛选
```js
<div>
    <p>1.v-for</p>
    <p v-for="a in arr">{{a}}</p>

    <ul v-for="a2 in arr2" v-if="a2.name===name">
        {{a2.name}}
        <li v-for="s in a2.skill">{{s}}</li>
    </ul>
</div>
```
复杂的写法可以有索引和键值对
```html
<div v-for="(item, index) in items"></div>
<div v-for="(val, key) in object"></div>
<div v-for="(val, name, index) in object"></div>
```
建议增加key，来优化列表的渲染
```html
<div v-for="(item,index) in items" :key="index">
  {{ item.text }}
</div>
```
v-on:xxx 事件绑定对象$().on('click')
```html
<button v-on:click="事件函数">ok</button>
<input v-on:change="" />
<input v-on:keyup="" />
<input v-on:input="" />
<button v-on:mousedown="">ok</button>
```
要配合`methods`选项的函数实现绑定
```js
methods: {
    test: function (num) {
        console.log('触发了点击事件')
    }
}
```
```html
<div>
    <!-- 有参数的时候可以加括号 -->
    <button v-on:click="test(1)">ok</button>
    <!-- 无参数的时候 -->
    <button v-on:click="test">ok</button>
    <!-- 最简写的情况 v-on: 可以由 @替代 -->
    <button @click="test">ok</button>
</div>
```
v-model其实就是@input，如果你写@input，代码量会比较多，从V->M，只有v-on:或者v-model能是实现

```js
// 从视图层把数据带回数据层
// @input特殊的 V-M的一个方式
new Vue({
    el: '#demo',
    data: {
        bool: !0,
        value: ''
    },
    methods: {
        // 事件对象
        getInputValue: function (event) {
            this.value = event.target.value
            console.log(event.target.value)
        }
    },
    template: `
        <div>
            <input @input="getInputValue" />
            <p></p>
        </div>
    `,

})
```

v-model可以用在三个标签

这些指令让vue框架拥有双向数据绑定的能力

|M->V|V->M|
|-|-|
|v-show|v-on|
|v-if|v-model(v-on:input)|
|v-else||
|v-html||
|v-text||
|v-for||
|v-bind||

上面这些指令构造成数据的双向绑定
```html
<input v-model="value" />
<select v-model="value">
    <option v-for="a in arr">{{a}}</option>
</select>
<textarea v-model="value"></textarea>
```

Vue 还提供了`v-model`指令，它能轻松实现表单输入和应用状态之间的双向绑定

v-bind
```html
<div>
    <img v-bind:src="url" />
    <!-- 简写 -->
    <img :src="url" />
</div>
```
在绑定 class 或 style 特性时，支持其它类型的值，如数组或对象。
```html
<!-- class 绑定 -->
<!-- isRed控制red类出现或者隐藏 -->
<div :class="{ red: isRed }"></div>
<!-- 出现classA, classB -->
<div :class="[classA, classB]"></div>
<!-- classA必须出现 -->
<div :class="[classA, { classB: isB, classC: isC }]">
```
`:class`是切换类名
```html
<div>
    <select v-model="isColor">
        <option v-for="c in color" :value="c">{{c}}</option>
    </select>
    <img :name="name" v-bind:src="url" />
    <img :src="url" />
    <p :class="{blue:isColor==='blue',red:isColor==='red'}">类指令</p>
</div>
```
注意一定要驼峰写法
```html
<!-- style 绑定 -->
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>
```
```html
<input type="range" v-model="size" />
    <p :style="{
        fontSize: size+'px'
    }">内容</p>
</div>
```
上面那个在加载的时候不会出现`{{name}}`，一般建议用第一个
```html
<p v-text="name"></p>
<p>{{name}}</p>
```
js放上面确实可以解决这个问题，但不建议
```js
<script src="./vue.js"></script>    
<div id="demo">
    <div>
        <p v-text="name"></p>
        <p>{{name}}</p>
    </div>
</div>
<script>
    new Vue({
        el: '#demo',
        data: {
            name: 'hello world'
        }
    })
</script>
```
把html结构插入到视图层上面
```js
new Vue({
    el: '#demo',
    data: {
        html: `<div>123<span style="color:red">567</span></div>`
    },
    template: `
        <div>
            <p v-html="html"></p>
        </div>
    `
})
```
让`{{name}}`不编译
```html
<div>
    <p v-pre>{{name}}</p>
    <p>{{name}}</p>
</div>
```
如果你使用`{{name}}`，可以让他在一开始隐藏，等到vue编译阶段才显示回来
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        [v-cloak] {
            display: none;
        }
    </style>
</head>

<body>
    <div id="demo">
        <div v-cloak>
            <p v-text="name"></p>
            <p>{{name}}</p>
        </div>
    </div>
    <script src="./vue.js"></script>
    <script>
        new Vue({
            el: '#demo',
            data: {
                name: 'hello world'
            }
        })
    </script>
</body>

</html>
```

