<template> 
	<div class="coupon">
		<div class="coupon-item" key="index" v-for="(item,index) in couponList" @click="handleClick(item)">
			<div class="item-check">
				<i class="icon iconfont" :class="1 ? 'icon-check02' : 'icon-uncheak02' "></i>
			</div>
			<div class="left">
				<div class="left-des" v-if="item.couponType"></div>
				<div class="left-num"></div>
				<div class="left-unit"></div>
			</div>
			<div class="right">
				<div class="right-title">{{item.couponTitle}}</div>
				<div class="right-subtitle">{{item.couponInstruction}}</div>
				<div class="right-des">有效期 {{item.startDate}}-{{item.endDate}}</div>
			</div>
		</div>
	</div>

</template>
<script> 
	import Vue from 'vue'
	export default Vue.component('lt-coupon', {
		props: ['couponList'],   
		methods: { 
			handleClick(item) {
				if (this._event["click"]) {
					this.$emit("abc",item)
				}
			}
		} 
	})
</script>
<style lang="less" scoped>
	.coupon {
		position: fixed;
		top: 4.4rem;
		bottom: 0;
		left: 0;
		right: 0;
		


	}
</style>