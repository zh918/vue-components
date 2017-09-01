<template>
	<lt-shade v-if="initData.isShow" @closeShade="handleClose">
		<div class="city" v-if="initData.isShow">
			<div class="title">
				{{initData.title}}
				<span class="close" @click="handleClose"><i class="icon iconfont icon-chacha"></i></span>
			</div>
			<div class="item" ref="item"
				v-for="(item,index) in initData.data"
				key="index"
				:class="{'actived':item.isDefault}"
				@click="handleChangeItem(item)">{{item.key}}</div>
		</div>
	</lt-shade>
</template>
<script>
	import Vue from 'vue'

	export default Vue.component("LtActionSheet",{
		name:"LtActionSheet",
		props:['initData'],
		data() {
			return {
				_bug:this._props.initData // 这样指定一个属性之后，会发生更新
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