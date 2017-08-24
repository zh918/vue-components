<template>
	<div class="list-item">
		<slot></slot>
	</div>
</template>
<script>
	import Vue from 'vue'

	export default Vue.component('ListItem',{
		name:'ListItem'
	})
</script>