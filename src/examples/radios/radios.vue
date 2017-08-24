<template>
	<div>
		<ymt-radios></ymt-radios>
		<div class="des">
			<h3>组件说明</h3>
			<p>
				<pre>
  组件名称：ymtRadio

  样式说明：
  1.ymt-radio

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
				rawHtml: `<ymt-payment-radio @itemChoose="handelChange">
</ymt-payment-radio>`
			}
		},
		methods: {
			handelChange(value) {
				console.log('选项为：', value);
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