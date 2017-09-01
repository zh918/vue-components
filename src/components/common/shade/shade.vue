<template>
	<div class="shade" ref="shade">
		<div class="shade-content">
			<slot></slot>
		</div>
		<div class="shade-bg" @click="handleTouch"></div>
	</div>
</template>
<script>
	import Vue from 'vue'
	export default Vue.component("LtShade",{
		name:"LtShade",
		methods: {
			handleTouch() {
				debugger
				if (this.$refs.shade.className.indexOf("hide") == -1) this.$refs.shade.className += " hide"
				else this.$refs.shade.className = "shade"

				if (this._events["closeShade"]) {
					this.$emit("closeShade");
				}
			}
		}
	})
</script>