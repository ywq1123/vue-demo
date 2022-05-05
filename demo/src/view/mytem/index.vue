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
        <!-- 动画效果 -->
        <div class="tranbox" @mouseover="enter()" :class="{ actived: active }"></div>
        <solt>
            <template></template>
        </solt>
        <div @click="tonumadd()">跳转</div>
        <tabbar></tabbar>
    </div>
</template>

<script>
import headernav from '@/components/header/index.vue';
import tabbar from '@/components/tabber/index.vue';
import home from '../home/index.vue';
import solt from '@/components/solt.vue';
import { Divider } from 'vant';
import Solt from '../../components/solt.vue';
//
export default {
    components: { tabbar, headernav, home, solt, Solt },
    data() {
        return {
            message: '',
            list: [],
            active: false,
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
        enter() {
            this.active = true;
            console.log(1111);
        },
        tonumadd() {
            this.$router.push('./numadd');
        },
        //
    },
};
</script>
<style scoped>
.tranbox {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: green;
}
/* .actived {
    -webkit-animation: actived 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: actived 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
} */
.actived {
    -webkit-animation: actived 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    animation: actived 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both;
}
@-webkit-keyframes actived {
    0% {
        -webkit-transform: scale(2);
        transform: scale(2);
        -webkit-filter: blur(4px);
        filter: blur(4px);
        opacity: 0;
    }
    100% {
        /* -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-filter: blur(0px);
        filter: blur(0px);
        opacity: 1; */
    }
}
@keyframes actived {
    0% {
        -webkit-transform: scale(2);
        transform: scale(2);
        -webkit-filter: blur(4px);
        filter: blur(4px);
        opacity: 0;
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-filter: blur(0px);
        filter: blur(0px);
        opacity: 1;
    }
}

/* @-webkit-keyframes actived {
    0% {
        -webkit-transform: translateZ(-200px) rotate(45deg);
        transform: translateZ(-200px) rotate(45deg);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateZ(0) rotate(0);
        transform: translateZ(0) rotate(0);
        opacity: 1;
    }
}
@keyframes actived {
    0% {
        -webkit-transform: translateZ(-200px) rotate(45deg);
        transform: translateZ(-200px) rotate(45deg);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateZ(0) rotate(0);
        transform: translateZ(0) rotate(0);
        opacity: 1;
    }
} */
</style>
