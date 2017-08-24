<template>
	<div class="group-title">
		<slot></slot>
	</div>
</template>
<script>
	import Vue from 'vue'

	export default Vue.component('GroupTitle',{
		name:'GroupTitle'
	})
</script>