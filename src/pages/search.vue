<template>
    <div class="search">
        <div class="search-box">
            <input :class="[flag ? '' : 'short']" type="text" @input="input" v-model="search">
            <span v-show="!flag" @click="cancel">取消</span>
        </div>
        <div class="hot-search" v-show="flag">
            <p>热门搜索</p>
            <div class="hot-box">
            <span v-for="(item, index) in  hot" :key="index">{{item.first}}</span>

            </div>
        </div>
        <div class="search-list" v-show="!flag">
            <song-list :singList="searchResult"></song-list>
        </div>
    </div>
</template>

<script>
    import SongList from '@/components/songList'
    export default {
        components: {
            SongList
        },
        data() {
            return {
                hot: [],
                search: "",
                searchResult: [],
                flag: true
            }
        },
        methods: {
            input() {
                console.log(this.search)
                if (this.search) {
                    this.flag = false
                    this.$http.get("/api/search?keywords=" + this.search).then(res => {
                        console.log(res)
                        this.searchResult = res.data.result.songs

                    })
                }
                
            },
            cancel() {
                this.flag = true;
            }
        },
        mounted() {
            this.$http.get("/api/search/hot").then(res => {
                console.log(res)
                this.hot = res.data.result.hots
            })
        }
    }
</script>

<style scoped>
.search-box {
    width: 100%;
    height: 50px;
    background-color: #eee;
    display: flex;
    align-items: center;
    padding:6px;
}
.search-box input {
    width: 100%;
    height: 100%;
    outline: none;
    text-indent: 20px;
}
.search-box input.short {
    flex: 1;
}
.search-box span {
    width: 80px;
    text-align: center;
}
.hot-search {
    padding: 10px;
}
.hot-search p {
    margin-bottom: 6px;
}
.hot-box {
    display: flex;
    flex-wrap: wrap;
}
.hot-box span {
    height: 30px;
    line-height: 30px;
    padding: 0 15px;
    border-radius: 15px;
    border: 1px solid #666;
    margin-right: 15px;
    margin-bottom: 15px;
}
</style>