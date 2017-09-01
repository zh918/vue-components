<template>
	<div class="lt-radios">

		<label for="weixin" class="payment-radio-item">
			<div class="payment-icon">
				<img src="./images/weixin@2x.png" alt="" />
				<span>微信支付</span>
			</div>
			<div class="payment-radio">
				<i class="icon iconfont" :class="[itemChoose=='weixin' ? 'icon-check02' : 'icon-uncheak02']"></i>
				<input id="weixin" value="weixin" type="radio" v-model="itemChoose" name="ymtPaymentRadio"/>
			</div>
		</label>

		<label for="alipay" class="payment-radio-item">
			<div class="payment-icon">
				<img src="./images/zhifubao@2x.png" alt="" />
				<span>支付宝支付</span>
			</div>
			<div class="payment-radio">
				<i class="icon iconfont" :class="[itemChoose=='alipay' ? 'icon-check02' : 'icon-uncheak02']"></i>
				<input id="alipay" value="alipay" type="radio" v-model="itemChoose" name="ymtPaymentRadio"/>
			</div>
		</label>

	</div>
</template>
<script>
	// 模块引入
	// 对象接口
	import Vue from 'vue'
	export default Vue.component('lt-payment-radio',{
		props:{
			initialOption:{
				default : 'weixin',
			}
	  	},
		data(){
			return {
				itemChoose : 'weixin',
			}
		},

		created(){
			this.itemChoose = this.initialOption;
		},

		components:{
			// 引用的组件
		},
		methods:{
			// 一些数据交互的问题
		},
		computed:{
			// 需要属性计算的操作
		},
		watch:{
			itemChoose(val){
				this.$emit('itemChoose',val);
			}
		}

	})
</script>
<style lang="less" scoped>
	.payment-radio-item{
	    display: -webkit-flex;
	    -webkit-align-items: center;
	    -webkit-justify-content: space-between;
		align-items: center;
		justify-content: space-between;
		display: flex;
		padding: 24/20rem;
		border-top: 1px solid #e0e0e0;
		border-bottom: 1px solid #e0e0e0;
	}
	.payment-radio-item:first-of-type{
		border-bottom: none;
	}
	.payment-icon{
		display: flex;
		align-items: center;
		display: -webkit-flex;
        -webkit-align-items: center;
	}
	.payment-icon img{
		width: 64/20rem;
		height: 64/20rem;
		margin-right: 24/20rem;
	}

	.lt-radios{
		font-size: 1.5rem;
	}
	.lt-radios .icon{
		font-size: 1.8rem;
	}
	.lt-radios .icon-check02{
		color: #FF7800;
	}
	.lt-radios .icon-uncheak02{
		color: #aeaeae;
	}
	.lt-radios input{
		display: none;
	}
</style>