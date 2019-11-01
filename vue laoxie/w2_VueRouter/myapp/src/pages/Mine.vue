<template>
    <div>
        {{username}}的主页
    </div>
</template>
<script>
export default {
    data(){
        return {
            username:''
        }
    },
    created(){
                                // 路由的带参数方法
        this.username = this.$route.query.username
    }
}
</script>