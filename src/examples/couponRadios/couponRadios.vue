<template>
	<div>
		<lt-coupon-radios :testData="testData" @click="handleClick"></lt-coupon-radios>

		<div class="des">
			<h3 @click="showPop">组件说明</h3>
			<p>
				<pre>
  组件名称：ymtRadio

  样式说明：
  1.lt-radio

  事件绑定：
  @itemChoose="选项改变事件", 在回调函数中
  可获取到选择的是哪种支付方式

  属性说明：
  initialOption：初始选项,
  如果不写该属性默认微信为支付方式

  常见用法：
  {{rawHtml}}
			  	</pre>
			</p>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				rawHtml: `<lt-payment-radio @itemChoose="handelChange"></lt-payment-radio>`,
				popupshow: false,
				popupData: {},
				tranTest: true,
				testData: [{
					couponID: 123,
					couponType: 2, //优惠券类型 1.折扣券 2.代金券 3.免费券 4 赠送券
					couponValue: 500, //couponType=1时为 0-1的两位小数值，例如0.9,0.85 couponType=2						时为具体优惠金额couponType=3 时为免费天数 couponType=4 赠送天数
					couponTitle: "优惠券标题111", //优惠券标题
					couponInstruction: "适用于所有商品111", //优惠券约束条件
					goodsID: 555, //适用商品ID
					cardCode: 11,
					goodsName: "商品3", //适用商品名称
					startDate: "2017-06-22", //有效期开始日期
					endDate: "2018-05-21" //有效期结束日期
				}, {
					couponID: 123,
					couponType: 1, //优惠券类型 1.折扣券 2.代金券 3.免费券 4 赠送券
					couponValue: 8.5, //couponType=1时为 0-1的两位小数值，例如0.9,0.85 couponType=2						时为具体优惠金额couponType=3 时为免费天数 couponType=4 赠送天数
					couponTitle: "优惠券标题222", //优惠券标题
					couponInstruction: "适用于所有商品222", //优惠券约束条件
					goodsID: 95228, //适用商品ID
					cardCode: 22,
					goodsName: "商品1", //适用商品名称
					startDate: "2017-06-22", //有效期开始日期
					endDate: "2018-05-21" //有效期结束日期
				}, {
					couponID: 23,
					couponType: 3, //优惠券类型 1.折扣券 2.代金券 3.免费券 4 赠送券
					couponValue: 5, //couponType=1时为 0-1的两位小数值，例如0.9,0.85 couponType=2						时为具体优惠金额couponType=3 时为免费天数 couponType=4 赠送天数
					couponTitle: "赠送券哈喽酷狗i和", //优惠券标题
					couponInstruction: "适用于所有商品333", //优惠券约束条件
					goodsID: 9527, //适用商品ID
					cardCode: 33,
					goodsName: "商品3", //适用商品名称
					startDate: "2017-06-22", //有效期开始日期
					endDate: "2018-05-21" //有效期结束日期
				}, ],
			}
		},
		methods: {
			handelChange(value) {
				console.log('选项为：', value);
			},
			showPop() {
				this.popupshow = true;
				this.popupData = {
					title: '弹窗标题',
					content: '弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容',
					cancelText: '取消文字',
					confirmText: '确认文字',
					popupType: 'question',
					telNum: 13036775972,
				}
			},
			handelCancel() {
				console.log("取消事件");
				this.popupshow = false;
			},
			handelConfirm() {
				console.log("确认事件");
				this.popupData = {
					title: '弹窗标题111',
					content: '哈哈进来加哦评价',
					cancelText: '取消',
					confirmText: '确认',
					popupType: 'success',
					//					telNum : 13036775972,
				}
				var _this = this;
				this.handelConfirm = function() {
					_this.popupshow = false;
				}
			},
			transitionActive() {
				this.tranTest = !this.tranTest;
				console.log(this.tranTest)
			},
			handleClick(item) {
				console.log('========',item)
			}
		}
	}
</script>

<style lang="less" scoped>
	.des {
		margin: 1rem 0 0 0;
		font-size: 1.5rem;
	}
	
	pre {
		/*width: 100%;*/
		overflow: auto;
	}
	
	.transition-test {
		text-align: center;
		font-size: 36/20rem;
		button {
			font-size: 36/20rem;
		}
		
		.mytran-enter-active, .mytran-leave-active {
			transition: all 0.5s
		  /*background-color: red;*/
		}
		.mytran-enter, .mytran-leave-active {
			transform: scale(0,0);
			transform-origin: 50% 50%;
		}
	}
</style>