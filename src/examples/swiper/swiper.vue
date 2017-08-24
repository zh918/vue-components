<template>
    <div class="swiper-full-content">
        <ymt-swiper @Swiper="getSwiper" :dataList="protectList">
            <div class="swiper-slide" v-for="(value,key) in protectList">
                <div class="slide-box" v-if="value.type==1">固定套餐</div>
                <div class="slide-box" v-if="value.type==2">自定义套餐</div>
            </div>
        </ymt-swiper>
        <ymt-button @click="getIndex">获取第几个</ymt-button>
        <div class="des">
            <h3>组件说明</h3>
            <p>
                <pre>
  组件名称：ymt-swiper

  样式说明：
  1.swiper内部样式

 常见用法:
 {{rawHtml}}

 属性说明：
 dataList：swiper接收的数据


			  	</pre>
            </p>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                rawHtml: `<ymt-swiper>
            <div class="swiper-slide" v-for="(value,key) in protectList">
                <div class="slide-box">固定套餐</div>
            </div>
        </ymt-swiper>`,
                protectList:[],
                swiper:"",
            }
        },
        created() {
            this.initData();
        },
        methods: {
            initData(){
                let _this = this;
                setTimeout(()=>{
                    _this.protectList = [{name:"固定套餐1",type:"1"},{name:"固定套餐1",type:"1"},{name:"自定义套餐",type:"2"}];

                },2000);
            },
            getSwiper(data){
                console.log(data);
                this.swiper = data;
            },
            handelChange(value) {
                console.log('选项为：', value);
            },
            getIndex(){
                if(this.swiper){
                    alert(this.swiper.activeIndex);
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .des {
        margin: 1rem 0 0 0;
        font-size: 1.5rem;
    }
</style>