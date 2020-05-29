<template>
    <div class="container">
    <h1>123</h1>

        <header>
            <router-link to="/home/recommend" tag="span">推荐</router-link>
            <router-link to="/home/hot" tag="span">热歌榜</router-link>
            <router-link to="/home/search" tag="span">搜索</router-link>

        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
header {
  display: flex;
  height: 50px;
  line-height: 50px;
}
header span {
    flex: 1;
    text-align: center;
}
header span.router-link-active {
    border-bottom: 2px solid red
}
main {
  flex: 1;
}
</style>