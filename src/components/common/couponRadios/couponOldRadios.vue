<template>
    <div class="coupon-list-bg">

        <div class="ymt-radios coupon-wrapper" v-for="(coupon, key) in handleDate">
            <label :for="key" @click.prevent="changeState(key,coupon)">
				<i class="icon iconfont" :class=" coupon.isActive ? 'icon-check02' : 'icon-uncheak02' "></i>
				<input :id="key" :value="key" type="radio" name="coupon" hidden/>
				<div class="coupon-item">
				    <div class="left">
				    	{{coupon.ticket}} <span>{{coupon.unit}}</span>
				    </div>
                    <div class="right">
                    	<p class="title">{{coupon.couponTitle}}</p>
                    	<p class="detail">{{coupon.couponInstruction}}</p>
                    	<p class="detail">有效期：{{coupon.startDate}}-{{coupon.endDate}}</p>
                    </div>
				</div>
			</label>

        </div>

    </div>
</template>
<script>
    // 模块引入
    // 对象接口
    import Vue from 'vue'
    export default Vue.component('ymt-coupon-oldradios', {
        props: ['testData'],
        data() {
            return {
                handleDate: [],
            }
        },
        created() {
            this.resetData();
        },
        methods: {
            changeState: function(key, coupon) {
                for(let i = 0; i < this.handleDate.length; i++) {
                    this.handleDate[i].isActive = false;
                }
                coupon.isActive = true;
                Vue.set(this.handleDate, key, coupon);
                this.$emit('click', this.testData[key]);
            },
            resetData: function() {
                this.handleDate = [];
                for(let i = 0; i < this.testData.length; i++) {
                    let obj = {
                        couponTitle: this.testData[i].couponTitle,
                        couponInstruction: this.testData[i].couponInstruction,
                        startDate: this.testData[i].startDate.slice(0, 10).replace(/-/g, "/"),
                        endDate: this.testData[i].endDate.slice(0, 10).replace(/-/g, "/"),
                        isActive: this.testData[i].isActive,
                    };
                    switch(this.testData[i].couponType) {
                        case '1':
                            obj.unit = '折';
                            obj.ticket = this.testData[i].couponValue * 10;
                            break;
                        case '2':
                            obj.unit = '元';
                            obj.ticket = this.testData[i].couponValue;
                            break;
                        case '3':
                            obj.unit = '';
                            obj.ticket = '免费';
                            break;
                        case '4':
                            obj.unit = '';
                            obj.ticket = '赠送';
                            break;
                    }
                    this.handleDate.push(obj);
                }
            }
        },
        watch: {
            testData: function() {
                this.resetData();
            }
        }
    })
</script>
<style lang="less" scoped>
/*优惠券列表*/
	.coupon-list-bg {
		background-color: #F0F0F0;
		.ymt-radios {
			font-size: 1.5rem;
			.icon{
				font-size: 1.8rem;
			}
			.icon-check02{
				color: #FF7800;
			}
			.icon-uncheak02 {
				color: #aeaeae;
			}
			input {
				display: none;
			}
			label {

				display: flex;
				display: -webkit-flex;
				align-items: center;
				-webkit-align-items: center;
			}
		}
		.coupon-wrapper {
			position: relative;
			padding: 24/20rem 24/20rem 0;
			.coupon-item {
				width: 100%;
				margin-left: 24/20rem;
				background-image:url('./images/coupon1_1@2x.png') ;
				background-size:100% 100%;
				position:relative;
				.left{
					position:absolute;
					width:9.8rem;
					left:0;
					top:76/20rem;
					text-align: center;
					font-size: 64/20rem;
					color: #fff;
					span{
						font-size: 1.1rem;
					}
				}
				.right{
					padding:35/20rem 0 35/20rem 11rem;
					.title{
						font-size: 28/20rem;
						color:#2d2d2d;
					}
					.detail{
						font-size: 1.1rem;
						color: #999;
						margin-top: 1rem;
					}
				}
			}
		}

		.coupon-wrapper:last-of-type {
			padding: 24/20rem;
		}
	}
</style>