<template>
	<div class="ymt-list"> 
		<slot></slot>
	</div>
</template>
<script>
	import Vue from 'vue'

	export default Vue.component('YmtList',{
		name:'YmtList'
	})
</script>