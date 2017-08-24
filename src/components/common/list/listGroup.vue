<template>
	<div class="list-group">
		<slot></slot>
	</div>
</template>
<script>
	import Vue from 'vue'

	export default Vue.component('ListGroup',{
		name:'ListGroup'
	})
</script>