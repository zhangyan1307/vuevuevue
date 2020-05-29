<template>
    <div>
        <ul>
            <li v-for="(item, index) in singList" :key="index" @click="goplay(item)">
                <span>{{ index + 1 < 10 ? "0" + (index + 1) : index + 1}}</span>
                <div>{{item.name}}</div>
                <i>播放</i>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ["singList"],
        methods: {
            goplay(item) {
                this.$router.push("/play?id=" + item.id)
            }
        }
    }
</script>

<style scoped>
ul li {
    list-style: none;
    display: flex;
    height: 50px;
    line-height: 50px;
}
ul li span {
    text-align: center;
    width: 50px;
}
ul li i {
    width: 50px;
    text-align: center;

}
ul li div {
    flex: 1;
    border-bottom: 1px solid #eee

}
</style>