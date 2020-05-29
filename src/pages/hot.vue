<template>
    <div>
        <song-list :singList="singList"></song-list>
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
                singList: []
            }
        },
        mounted() {
            this.$http.get("/api/top/list?idx=3").then(res => {
                console.log(res)
                this.singList = res.data.playlist.tracks
            })
        },
        methods: {
            
        }
    }
</script>

<style scoped>

</style>