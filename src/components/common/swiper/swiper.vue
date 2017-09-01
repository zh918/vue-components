<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    export default Vue.component('lt-swiper', {
        name: 'ymtSwiper',
        props: ['dataList'],
        data() {
            return {
                _bug:this._props.dataList
            }
        },
        watch: {
            dataList(newValue,oldValue){
                if(newValue.length){
                    //如果dataList长度大于0，开始加载
                    this.initData();
                }
            }
        },

        components: {

        },

        methods: {
            initData() {
                console.log("初始化Swiper");
                let mySwiper = new Swiper('.swiper-container', {
                    autoplay: false, //可选选项，自动滑动
                    observer: true, //观察者模式
                    pagination: '.swiper-pagination'
                });
                this.$emit("Swiper", mySwiper);
            }

        },
        computed: {
            // 需要属性计算的操作
        },
    })
</script>