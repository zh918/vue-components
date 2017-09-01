<template>
	<div class="no-network" v-if="isShow">
		<lt-bar-nav> 
			  <div>网络异常</div> 
	   	</lt-bar-nav>
	
		<div class="content">
			<div class="content-img">
				<img src="../../../assets/images/other/network_anomaly@2x.png">
			</div>
			<div class="content-des">
				数据加载失败
			</div>
			<div class="content-button">
				<lt-button @click="handleClick">重新加载</lt-button> 
			</div>
		</div>	

	</div>
</template> 
<script type="text/javascript">
	import Vue from 'vue'
	export default Vue.component('lt-no-network',{
		name:'LtNoNetwork',
		props:['isShow'],
		// data() {
		// 	return {
		// 		isShowNetwork:this._props.isShow
		// 	}
		// },
		methods:{
			handleClick() { 
				this.$emit("click");

			}
		}
	})
</script>

 