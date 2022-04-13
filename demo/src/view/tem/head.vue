<template>
    <div>
        <h1>侧边导航栏模板</h1>
        <div>{{ daydata }}</div>
        <van-sidebar v-model="activeKey" @change="onChange">
            <div class="tit">
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
                <van-sidebar-item title="标签名称" />
            </div>

            <div class="content">
                <p v-if="index == 0">内容</p>
                <div v-if="index == 1">1内容</div>
                <div v-if="index == 2">2内容</div>
            </div>
        </van-sidebar>
        <!-- 视频播放 -->
        <video autoplay controls width="100%" height="500" id="myVideo"></video>
        <!-- 点击跳转相应的位置 -->
        <div style="width: 10%; display: inline-block; position: fixed; top: 300px; left: 0">
            <ul>
                <li style="height: 30px" v-for="(item, index) in 9" :key="index" @click="toindex(index)">{{ item }}</li>
            </ul>
        </div>
        <div style="display: inline-block; width: 80%; vertical-align: top; margin-left: 10%">
            <div style="height: 200px; background: red; margin-bottom: 20px" v-for="(item, index) in 9" :key="index">{{ item }}</div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import dayjs from 'dayjs';
import flvjs from 'flv.js';
import { Sidebar, SidebarItem } from 'vant';
import { Notify } from 'vant';
Vue.use(Sidebar);
Vue.use(SidebarItem);
export default {
    data() {
        return {
            activeKey: 0,
            newstring: '',
            newstr: '',
            index: '',
            scroll: '',
            chageheight: '',
            daydata: '',
        };
    },
    mounted() {
        setInterval(() => {
            this.daydata = dayjs().format('YYYY-MM-DD HH:mm:ss');
        }, 1000);

        // 获取滚动条的高度
        // window.addEventListener('scroll', this.scrollTop);
        // 页面渲染完成后执行
        if (flvjs.isSupported()) {
            var myVideo = document.getElementById('myVideo');
            var flvPlayer = flvjs.createPlayer({
                type: 'flv',
                url: 'http://localhost:8080/test.flv', // 视频 url 地址
            });
            flvPlayer.attachMediaElement(myVideo);
            flvPlayer.load();
            flvPlayer.play();
        }
    },
    methods: {
        onChange(index) {
            Notify({ type: 'primary', message: index });
            this.index = index;
        },
        toindex(indx) {
            console.log(indx);
            this.chageheight = indx * 200 + indx * 20;
            window.scrollTo(0, this.chageheight);
        },
    },
};
</script>
<style lang="less" scoped>
.van-sidebar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .tit {
        width: 20%;
    }
    .content {
        width: 80%;
    }
}
</style>
