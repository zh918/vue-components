<template>
	<div>
		<div class="test">
			羽毛球
			<ymt-checkbox :model="test" @change="valueChange1"></ymt-checkbox>
			篮球
			<ymt-checkbox :model="test" @change="valueChange2"></ymt-checkbox>
		</div>

		<div class="des">
			<h3>组件说明</h3>
			<p>
				<pre>
  组件名称：ymtCheckbox

  样式说明：
  1.ymt-checkbox

  事件绑定：
  @change="input框状态改变事件", 在回调函数中
  可获取到当前的选中状态

  属性说明：
  model：初始选项,
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
				rawHtml: `<ymt-tab>
		<tab-header>
			<header-item></header-item>
			<header-item></header-item>
		</tab-header>
		<tab-content>
			<content-item></content-item>
			<content-item></content-item>
		</tab-content>
	</ymt-tab>`,
				test: false,
			}
		},
		methods: {
			valueChange1(value) {
				console.log('val1', value);
			},
			valueChange2(val){
				console.log("val2",val);
			}
		},
		watch: {

		},
	}
</script>

<style lang="less" scoped>
	.des {
		margin: 1rem 0 0 0;
		font-size: 1.5rem;
	}

	.test {
		font-size: 3rem;
		display: flex;
		align-items: center;
		display: -webkit-flex;
		-webkit-align-items: center;
	}
</style>