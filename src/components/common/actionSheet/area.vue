<template>
	<ymt-shade v-if="initData.isShow"  @closeShade="handleClose">
		<div class="area">	  
			<div class="item" :class="item.isDefault?'actived':''"
				 ref="item"
				 v-for="(item,index) in initData.data" 
				 key="index" 
				 @click="handleChangeItem(item)">{{item.key}}</div>
		</div>
	</ymt-shade>
</template>
<script>
	import Vue from 'vue'

	export default Vue.component("YmtCityArea",{
		name:"YmtCityArea",	
		props:['initData'],	
		data() {
			return { 
				_bug:this._props.initData, // 这样指定一个属性之后，会发生更新   
			}
		}, 
		methods: {
			handleChangeItem(item) { 
			 	this.$refs.item.forEach((el) => {
			 		el.className = "item"; 
			 		if (el.innerText == item.key) el.className += " actived";
			 	});
 
				if (this._events["change"]) {
					this.$emit("change",item);
				}
			},
			handleClose() {
				if (this._events["closeShade"]) {
					this.$emit("closeShade");
				}
			} 
		}
	})
</script>