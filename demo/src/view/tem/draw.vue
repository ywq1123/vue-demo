<template>
  <div>
    <h2>es6的转换</h2>
    <h4>
      当你写了es6的语法，下载babel转换器可以把es6转换成es5在一下老的浏览器中配置
    </h4>
    <h2>let 和 const</h2>
    <h4>
      let和const都是块级作用域，没有变量提升，只在自己的函数中有效，没有块级作用域可能会造成内层变量覆盖
      外层变量。用来计数的变量循环完泄露成全局变量。const是一旦声明就不能重新赋值，他是一个只读的常量
    </h4>
    <h2>
      数组的结构赋值
      <h4>
        例如以前是let a = 1 let b = 2 let c = 3 结构赋值就可以 let [a,b,c] =
        [1,2,3]
      </h4>
      <canvas> </canvas>
    </h2>
  </div>
</template>
<script>
export default {};
</script>
