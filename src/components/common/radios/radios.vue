<template>
	<div>
		<div v-for="(item,index) in testData" class="lt-radios coupon-wrapper" @click="radioClick">
			<label :for="item.value">
				<i class="icon iconfont" :class="[item.ifChoose ? 'icon-check02' : 'icon-uncheak02']"></i>
				<input :id="item.value" :value="item.value" type="radio" v-model="itemChoose" name="ymtradio"/>
				<div class="coupon-item">
					<div class="coupon-item-left">7.0<span>折</span></div>
					<div class="coupon-item-right">
						<h3>车险7折优惠啊啊啊</h3>
						<p>有效期 2015/01/01 - 2016/01/01</p>
						<p>适用于车险白条产品噢噢噢噢</p>
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
	export default Vue.component('lt-radios',{
		props:{
			// 父级传入属性
	  	},
		data(){
			return {
				testradio : true,
				testData : [{
					name : 'aaa',
					value　:　'1',
					ifChoose : true
				},{
					name : 'bbb',
					value　:　'2',
					ifChoose : false
				},{
					name : 'ccc',
					value　:　'3',
					ifChoose : false
				}],
				itemChoose : '',
			}
		},

		created(){

		},

		components:{
			// 引用的组件

		},

		methods:{
			radioClick(){
//				console.dir(this.testData);
			}
			// 一些数据交互的问题
		},
		computed:{
			// 需要属性计算的操作
		},
		watch:{
			itemChoose(value){
				for(var i =0;i<this.testData.length;i++){
					if(this.testData[i].value == value){
						this.testData[i].ifChoose = true;
					}else{
						this.testData[i].ifChoose = false;
					}
				}
			}
		}


	})

</script>
<style lang="less" scoped>
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

	.coupon-wrapper{
		padding: 24/20rem 24/20rem 0;
	}
	.lt-radios label{
		display: flex;
		align-items: center;
		display: -webkit-flex;
        -webkit-align-items: center;
	}
	.coupon-item{
		display: flex;
		display: -webkit-flex;
		width: 100%;
		border-radius: 5px;
		background: url(./images/coupon1_1@2x.png) no-repeat left;
		background-size: contain;
		margin-left: 24/20rem;
		background-color: #fff;
		.coupon-item-left{
			width: 25%;
			padding: 66/20rem 0 33/20rem;
			text-align: center;
			font-size: 56/20rem;
			color: #FFFFFF;
			span{
				font-size: 22/20rem;
				margin-left: 0.2rem;
			}
		}
		.coupon-item-right{
			margin-left: 30/20rem;
			h3{
				margin-top: 25/20rem;
				padding-bottom: 5/20rem;
				font-size: 28/20rem;
				font-weight: normal;
				color: #2d2d2d;
			}
			p{
				margin: 20/20rem 0;
				font-size: 22/20rem;
				color: #999;
			}
		}
	}

</style>