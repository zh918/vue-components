<template>
	<div class="play-group">
		<div class="play-item" v-for="(item,index) in initData">
			<div class="title">{{item.title}}</div>
			<div class="item" v-for="(i,k) in item.data" @click="handleChange(i)">{{i.title}}</div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	export default Vue.component('lt-play-group',{
		name:'LtPlayGroup',
		props:['initData'],
		methods:{
			handleChange(item) { 
				if (this._events["change"]) this.$emit('change',item);
			}
		}
	});
</script>

