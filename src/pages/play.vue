<template>
    <div>
        <audio :src="url" controls></audio>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: "",
                url: ""
            }
        },
        mounted() {
            this.id = this.$route.query.id
            this.$http.get("/api/song/url?id=" + this.id).then(res => {
                console.log(res)
                this.url = res.data.data[0].url
                console.log(this.url)
            })
        }
    }
</script>

<style  scoped>

</style>