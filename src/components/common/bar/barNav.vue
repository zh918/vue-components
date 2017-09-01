<template>
	<div class="lt-bar-nav">
		<div class="left">
			<slot name="left"></slot>
		</div>	
		<div class="main">
			<slot><span>标签</span></slot>
		</div>
		<div class="right">
			<slot name="right"></slot>
		</div>
		
	</div>
</template>

<script>
	import Vue from 'vue'

	export default Vue.component('LtBarNav',{
		name:'LtBarNav',
	})
</script>