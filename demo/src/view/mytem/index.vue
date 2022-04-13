<template>
    <div>
        <headernav title="我的喵喵"></headernav>
        <h1>一个todo的例子</h1>
        <!-- 
      1.双向绑定，让input中输入的内容能获取到
      2.点击添加放到页面中，可以多次放入建立一个循环列表
      3.删除的时候已知下标删除相对应的下标在数组中array.splice(index,1)
     -->
        <div>
            <input type="text" v-model="message" />
            <button @click="addmess">add</button>
        </div>
        <ul v-for="(item, index) in list" :key="index">
            <li>
                {{ item }}
                <button @click="del(index)">del</button>
            </li>
        </ul>
        <input type="checkbox" id="checkbox" />
        <label for="checkbox">pick</label>
        <tabbar></tabbar>
    </div>
</template>

<script>
import headernav from '@/components/header/index.vue';
import tabbar from '@/components/tabber/index.vue';
import { Divider } from 'vant';
export default {
    components: { tabbar, headernav },
    data() {
        return {
            message: '',
            list: [],
        };
    },
    mounted() {
        this.fn();
        let birth = '2022/11/22';
        const person = {
            name: '小红',
            birth, //等同于birth:birth
        };
    },
    methods: {
        fn() {},
        addmess() {
            this.list.push(this.message);
            this.message = '';
        },
        del(index) {
            this.list.splice(index, 1);
        },
    },
};
</script>
<style scoped></style>
