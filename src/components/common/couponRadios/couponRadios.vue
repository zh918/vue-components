<template>
	<div class="coupon-list-bg">

		<div class="lt-radios coupon-wrapper" v-for="(coupon, key) in testData">
			<label :for="key" @click="changeState(key,coupon)">
				<i class="icon iconfont" :class=" coupon.isActive ? 'icon-check02' : 'icon-uncheak02' "></i>
				<input :id="key" :value="key" type="radio" name="coupon" hidden/>
				<div class="coupon-item">
					<h3 class="coupon-title">{{coupon.couponTitle}}</h3>
					<p class="valid-date">有效期：{{coupon.startDate}} — {{coupon.endDate}}</p>
					<p class="restrain">
						<span>
							适用于{{coupon.goodsName}}使用
							<i class="icon icon-arrow iconfont" :class=" coupon.detailsShow ? 'icon-icon_coupon_arrow_op1' : 'icon-icon_coupon_arrow_cl1' "></i>
						</span>
						<span class="bills"><i :class=" coupon.couponValue>=100 ? 'small-font' : '' ">{{coupon.couponValue}}</i>{{coupon.suffix}}</span>
					</p>
					<p class="hidden-content" v-show="coupon.detailsShow">{{coupon.couponInstruction}}</p>
				</div>
			</label>
			<div class="click-area" @click="showDetails(key)"></div>
		</div>

	</div>
</template>
<script>
	// 模块引入
	// 对象接口
	import Vue from 'vue'
	export default Vue.component('lt-coupon-radios', {
		props: ['testData'],
		data() {
			return {
				testradio: true,
				couponList: [],
				itemChoose: '',
				_bug:this._props.testData
			}
		},

		created() {
			this.setCouponData(this.testData);
		},
		methods: {
			changeState(index,item) {
				console.log('selectIndex==' + index);
				//改变自定义单选框的样式
				for(var j = 0; j < this.couponList.length; j++) {
					if(index == j) {
						this.couponList[j].isActive = true;
//						//将couponInfo存储起来
//						window.sessionStorage.couponInfo = JSON.stringify(vm.couponList[j]);
//						console.log("存储选择的优惠券");
//						console.log(JSON.stringify(vm.couponList[j], null, 2))
//						if($ionicHistory.backView().title == '确认订单') {
//							$location.path('/order/confirmOrder');
//						} else if($ionicHistory.backView().title == '支付详情') {
//							sendData.cardCode = vm.couponList[j].cardCode;
//							$location.path('/recharge/rechargeDetails').search(sendData);
//						}

					} else {
						this.couponList[j].isActive = false;
					}
				}

				if (!!this._events["click"]){
					console.log(item);
					// todo
					this.$emit('click',item);
				}
			},
			setCouponData(data) {

				for(var i = 0; i < data.length; i++) {
					var coupon = {};
					coupon.cardCode = data[i].cardCode;
					if(coupon.cardCode == 22) {
						coupon.isActive = true;
					} else {
						coupon.isActive = false;
					}
					coupon.detailsShow = false;
					coupon.goodsName = data[i].goodsName;
					coupon.couponType = data[i].couponType; //优惠券类型
					coupon.couponTitle = data[i].couponTitle; //优惠券标题
					coupon.couponInstruction = data[i].couponInstruction; //优惠券使用须知
					coupon.startDate = data[i].startDate.replace(/-/g, "/"); //有效期开始日期
					coupon.endDate = data[i].endDate.replace(/-/g, "/"); //有效期结束日期
					coupon.couponValue = data[i].couponValue;
					switch(parseInt(data[i].couponType)) {
						case 1:
							coupon.suffix = "折";
							break;
						case 2:
							coupon.suffix = "元";
							break;
						case 3:
							coupon.couponValue = "赠送"
							coupon.suffix = "";
							break;
						case 4:
							coupon.couponValue = "赠送"
							coupon.suffix = "";
							break;
						default:
							break;
					}

					this.couponList.push(coupon);
				}
				console.log('处理后的优惠券列表');
				console.log(this.couponList);
			},
			showDetails(index) {
				console.log(index);
				this.couponList[index].detailsShow = !this.couponList[index].detailsShow;
			},
		},
		computed: {
			// 需要属性计算的操作
		},
		watch: {
			itemChoose(value) {
				for(var i = 0; i < this.testData.length; i++) {
					if(this.testData[i].value == value) {
						this.testData[i].ifChoose = true;
					} else {
						this.testData[i].ifChoose = false;
					}
				}
			}
		}

	})
</script>
<style lang="less" scoped>
	/*优惠券列表*/

	.coupon-list-bg {
		background-color: #F0F0F0;
	}

	.selectCoupon-content {
		background: #f0f0f0;
		padding-bottom: 24/20rem;
	}

	.lt-radios {
		font-size: 1.5rem;
	}

	.lt-radios .icon {
		font-size: 1.8rem;
	}

	.lt-radios .icon-check02 {
		color: #FF7800;
	}

	.lt-radios .icon-uncheak02 {
		color: #aeaeae;
	}

	.lt-radios input {
		display: none;
	}

	.coupon-wrapper {
		position: relative;
		padding: 24/20rem 24/20rem 0;
	}

	.coupon-wrapper:last-of-type {
		padding: 24/20rem;
	}

	.click-area {
		/*background-color : rgba(0,0,0,0.1);*/
		position: absolute;
		left: 85/20rem;
		top: 150/20rem;
		z-index: 2;
		width: 35%;
		height: 75/20rem;
	}

	.lt-radios label {
		display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
	}

	.coupon-item {
		width: 100%;
		border-radius: 10/20rem;
		padding-bottom: 15/20rem;
		margin-left: 24/20rem;
		background-color: #fff;
		.coupon-title {
			margin: 0;
			text-indent: 24/20rem;
			font-size: 30/20rem;
			font-weight: 600;
			color: #FFFFFF;
			height: 63/20rem;
			line-height: 63/20rem;
			background: url(./images/Coupon_BG_normal@2x.png) no-repeat left;
			background-size: 100% 100%;
		}
		.valid-date,
		.restrain,
		.hidden-content {
			padding-left: 24/20rem;
			color: #2D2D2D;
		}
		.valid-date {
			margin: 32/20rem 0 20/20rem;
			font-size: 24/20rem;
		}
		.restrain {
			margin-bottom: 23/20rem;
			position: relative;
			font-size: 24/20rem;
		}
		.icon {
			font-size: 24/20rem;
		}
		.hidden-content {
			margin-bottom: 23/20rem;
			font-size: 22/20rem;
			color: #626262;
		}
		.bills {
			color: #ffc428;
			position: absolute;
			right: 24/20rem;
			bottom: 0;
			font-size: 28/20rem;
			i {
				font-style: italic;
				font-weight: bold;
				margin-right: 10/20rem;
				font-size: 68/20rem;
			}
			.small-font {
				font-size: 60/20rem;
			}
		}
	}

	@media screen and (max-width: 320px) {
		/*.coupon-wrapper {
			padding: 24/20rem 12/20rem 0;
		}
		.coupon-item {
			margin-left: 12/20rem;
			.coupon-title,
			.valid-date,
			.restrain,
			.hidden-content {
				padding-left: 12/20rem;
			}
			.bills {
				right: 12/20rem;
				i {
					font-size: 26/20rem;
				}
				.small-font {
					font-size: 20/20rem;
				}
			}
		}*/
	}
</style>