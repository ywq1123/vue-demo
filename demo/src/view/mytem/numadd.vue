<template>
    <div>
        <div v-for="(item, i) in list" :key="i">
            {{ item.name }}{{ item.num }} 份 {{ item.price }}
            <button @click="add(item, i)">add</button>
            <button @click="desc(item, i)">desc</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                { name: '宫保鸡丁', price: 100, num: 1 },
                { name: '红烧肘子', price: 88, num: 1 },
            ],
        };
    },
    methods: {
        add({ num, price }, i) {
            let oncePrice = price / num;
            let curNum = (num += 1);
            console.log(curNum, oncePrice);
            this.list[i].price = oncePrice * curNum;
            this.list[i].num = curNum;
        },
        desc({ num, price }, i) {
            let oncePrice = price / num;
            let curNum = (num -= 1);
            this.list[i].price = oncePrice * curNum;
            this.list[i].num = curNum;
        },
    },
};
</script>

<style>
</style>