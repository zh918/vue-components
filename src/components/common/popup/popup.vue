<template>

    <transition name="lt-fade">
        <div class="popup-mask" @touchmove.prevent>
            <transition name="lt-transform">
                <div class="popup-window" :class="[getpopupParam.class ? getpopupParam.class : '']">
                    <img :src="getpopupParam.iconType" alt="" />
                    <p class="popup-window-title">{{this.getpopupParam.title}}</p>
                    <p v-html="this.getpopupParam.content" class="popup-window-content" :class="{'phone-content':getpopupParam.popupType == 'phone','txt-left':getpopupParam.class == 'txtLeft'}"></p>
                    <div class="popup-window-button">
                        <div @click="cancelClick" v-if="getpopupParam.popupType !== 'success'" class="cancel">{{this.getpopupParam.cancelText}}</div>
                        <a @click="confirmClick" v-if="getpopupParam.popupType !== 'phone' " class="confirm">{{this.getpopupParam.confirmText}}</a>
                        <a v-if="getpopupParam.popupType == 'phone'" class="tel" :href="'tel:'+getpopupParam.telNum">{{this.getpopupParam.confirmText}}</a>
                    </div>
                </div>
            </transition>
        </div>
    </transition>

</template>
<script>
    /**
     *	popupParam : {
     * 		popupType : 弹窗类型		str 	可选 failed/success/question/phone
     * 		title ： 弹窗标题		string
     * 		content : 弹窗内容	string
     * 		cancelText : 取消按钮文字 	string
     * 		confirmText : 确认按钮文字 	string
     * 		telNum : 电话号码	number 仅当popupType='phone'时需要传
     *      class : 自定义样式
     * 	}
     *
     **/

    import Vue from 'vue'
    export default Vue.component('lt-popup', {
        props: {
            popupParam: {},
        },
        data() {
            return {
                getpopupParam: {},
            }
        },
        created() {
            console.log("传入的参数：", this.popupParam);
            this.handelParam();
            console.log("处理后的参数：", this.getpopupParam);
        },
        components: {
            // 引用的组件
        },
        methods: {
            // 一些数据交互的问题
            handelParam() {
                this.getpopupParam = this.popupParam;
                this.getpopupParam.cancelText = this.getpopupParam.cancelText ? this.getpopupParam.cancelText : '取消';
                this.getpopupParam.confirmText = this.getpopupParam.confirmText ? this.getpopupParam.confirmText : '确认';
                switch(this.getpopupParam.popupType) {
                    case 'failed':
                        this.getpopupParam.iconType = require('./images/pay_failed@2x.png');
                        break;
                    case 'success':
                        this.getpopupParam.iconType = require('./images/pay_success@2x.png');
                        break;
                    case 'question':
                        this.getpopupParam.iconType = require('./images/pay_give-up@2x.png');
                        break;
                    case 'phone':
                        this.getpopupParam.iconType = require('./images/phone@2x.png');
                        break;
                    default:
                        //						this.getpopupParam.iconType = require('./images/pay_success@2x.png');
                        alert("弹窗类型错误");
                        break;
                }
            },
            cancelClick() {
                this.$emit('cancelFn');
            },
            confirmClick() {
                this.$emit('confirmFn');
            },
        },
        computed: {
            // 需要属性计算的操作
        },
        watch: {
            popupParam() {
                this.handelParam();
            }
        }

    })
</script>
<style lang="less" scoped>
    .popup-mask {
        display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
        position: fixed;
        z-index: 2000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        font-size: 36/20rem;
    }

    .popup-window {
        width: 77.33%;
        text-align: center;
        color: #2D2D2D;
        border-radius: 15/20rem;
        background-color: rgba(255, 255, 255, 0.9);
        margin: 0 auto;
        position: relative;
        padding-top: 102/20rem;
        img {
            position: absolute;
            display: block;
            width: 124/20rem;
            height: 124/20rem;
            left: 50%;
            top: -62/20rem;
            transform: translateX(-50%);
            -webkit-transform: translateX(-50%);
        }
        .popup-window-title {
            line-height: 36/20rem;
            padding: 0 60/20rem;
            font-size: 36/20rem;
            margin-bottom: 50/20rem;
        }
        .popup-window-content {
            line-height: 28/20rem;
            font-size: 24/20rem;
            padding: 0 60/20rem;
            margin-bottom: 50/20rem;
            text-align: center;
        }
        .popup-window-content.txt-left {
            text-align: left;
        }
        .popup-window-content.phone-content {
            line-height: 32/20rem;
            font-size: 28/20rem;
            text-align: center;
        }
        .popup-window-button {
            display: flex;
            display: -webkit-flex;
            .cancel {
                border-right: 1px solid #E0E0E0;
            }
            .confirm {
                display: block;
                color: #FF7800;
            }
            .confirm:active {
                color: #ff8400;
            }
            >* {
                flex: 1;
                -webkit-flex: 1;
                line-height: 90/20rem;
                font-size: 28/20rem;
                border-top: 1px solid #E0E0E0;
            }
            .tel {
                display: block;
                line-height: 90/20rem;
                color: #FF7800;
                border-top: 1px solid #E0E0E0;
            }
        }
    }
    /*效果*/

    .lt-fade-enter-active,
    .lt-fade-leave-active {
        transition: all .5s
    }

    .lt-fade-enter,
    .lt-fade-leave-active {
        opacity: 0;
    }

    .lt-transform-enter-active,
    .lt-transform-leave-active {
        transition: all .5s
    }

    .lt-transform-enter,
    .lt-transform-leave-active {
        transform: scale(0, 0);
        transform-origin: 50% 50%;
    }
</style>