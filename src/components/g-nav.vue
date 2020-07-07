<template>
    <nav class="g-nav">
        <van-nav-bar
            :title="title"
            @click-left="onClickLeft"
        >
           <van-icon name="arrow-left" color="#293348" slot="left" />
        </van-nav-bar>
    </nav>
    
</template>

<script>
export default {
    props: {
        icon: {
            type: [String, Number]
        },
        title: {
            type: [String, Number],
            required: true
        }
    },
    data(){
        return{

        }
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
    .g-nav {
        height: 46px;
        text-align: center;
        background: #fff;
    }
    .g-nav .van-hairline--bottom::after {
        border-bottom-width: 0;
    }
    .g-nav .van-nav-bar {
        background: #fff;
    }
    .g-nav ._title  {
        display: block;
        font-size: 1.125rem;
        color: #283347;
    }
</style>