<template>
	<div>
		<lt-coupon-oldradios :testData="testData" @click="handleClick"></lt-coupon-oldradios>

		<div class="des">
			<h3>组件说明</h3>
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
					couponType: '1', //优惠券类型 1.折扣券 2.代金券 3.免费券 4 赠送券
					couponValue: 0.7, //couponType=1时为 0-1的两位小数值，例如0.9,0.85 couponType=2						时为具体优惠金额couponType=3 时为免费天数 couponType=4 赠送天数
					couponTitle: "车险7折优惠", //优惠券标题
					couponInstruction: "适用于车险白条产品使用", //优惠券约束条件
					goodsID: 555, //适用商品ID
					cardCode: 11,
					couponConstraint: "商品3", //适用商品名称
					startDate: "2017-06-22", //有效期开始日期
					endDate: "2018-05-21" //有效期结束日期
				}, {
					couponID: 123,
					couponType: '2', //优惠券类型 1.折扣券 2.代金券 3.免费券 4 赠送券
					couponValue: 500, //couponType=1时为 0-1的两位小数值，例如0.9,0.85 couponType=2						时为具体优惠金额couponType=3 时为免费天数 couponType=4 赠送天数
					couponTitle: "车险500元代金券", //优惠券标题
					couponInstruction: "适用于天天保产品使用", //优惠券约束条件
					goodsID: 95228, //适用商品ID
					cardCode: 22,
					couponConstraint: "商品1", //适用商品名称
					startDate: "2017-06-22", //有效期开始日期
					endDate: "2018-05-21" //有效期结束日期
				}, {
					couponID: 23,
					couponType: '3', //优惠券类型 1.折扣券 2.代金券 3.免费券 4 赠送券
					couponValue: 5, //couponType=1时为 0-1的两位小数值，例如0.9,0.85 couponType=2						时为具体优惠金额couponType=3 时为免费天数 couponType=4 赠送天数
					couponTitle: "车险免费5天优惠券", //优惠券标题
					couponInstruction: "适用于天天保产品使用", //优惠券约束条件
					couponConstraint: "商品3", //适用商品名称
					startDate: "2017-06-22", //有效期开始日期
					endDate: "2018-05-21" //有效期结束日期
				}, {
					"couponConstraint": "商业险（一年）",  //适用商品名称                
                    "couponID": 10,    //优惠券ID
                    "couponValue": 0.9,         //couponType=1时为 0-1的两位小数值，例如0.9,0.85 couponType=2						时为具体优惠金额couponType=3 时为免费天数 couponType=4 赠送天数
                    "couponInstruction": "适用于商业险（一年）", //优惠券约束条件
                    "couponType": "1",         //优惠券类型 1.折扣券 2.代金券 3.免费券 4 赠送券
                    "startDate": "2017-08-10 00:00:00", //有效期开始日期
                    "endDate": "2018-08-10 00:00:00",  //有效期结束日期
                    "couponTitle": "9折优惠券"         //优惠券标题
				}],
			}
		},
		created() {
		}, 
	 	methods:{
	 		handleClick(item){
	 			console.log(item)
	 		},
	 		
	 	}
	 }
</script> 