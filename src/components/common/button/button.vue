<!-- 通用组件 -->
<template>  		
	<div v-if="disable"
		class="lt-btn lt-btn-default lt-btn-disabled"> 
		<slot></slot>
	</div>
	<div v-else
		@click="handleClick"  
		@touchstart="touchstart" 
		@touchend="touchend"
		class="lt-btn lt-btn-default">
		<slot></slot>
	</div>

</template>

<script type="text/javascript">
	import Vue from 'vue'

	export default Vue.component('lt-button',{
		name:'LtButton', 
		props:['disable'],
		methods:{
			handleClick(e) {  
				if (!!this._events["click"]){ 
					debugger
					this.$emit('click',this);				
				} 
			},
			touchstart(e) { 
				e.target.className += " actived";
			},
			touchend(e) {  
				e.target.className = e.target.className.replace("actived"," ");
			}
		}
	})
</script>

