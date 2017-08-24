<template>
<div class="content-wrap">

    <ymt-button @click="startProcessBar" class="ymt-btn-big">启动进度条</ymt-button>
    <ymt-button @click="finishProcessBar" class="ymt-btn-big">结束进度条</ymt-button>

    <div class="des">
        <h3>组件说明</h3>
        <p>
<pre>
组件名称：ymtProcessBar

样式说明：ymt-processbar


常见用法：
{{rawHtml}}

</pre>
        </p>
   </div>
</div>

</template>
<script>

    // import ymtProcessBar from '@/components/common/processBar/processBar'

	export default {
		data() {
			return {
				rawHtml:`1.引入进度条组件:import {ymtProcessBar} from '@/common/processBar'\n2.启动进度条:ymtProcessBar.start()\n3.结束进度条:ymtProcessBar.finish()`,
			}
		}, 
		methods: {
			startProcessBar() {
				// globalVue.$start();
				this.$start();
			},
			finishProcessBar() { 
                this.$finish();
			}
		}
	}
</script>

<style lang="less" scoped>
	.des {
		margin: 1rem 0 0 0;
		font-size: 1.5rem;
	}
	.content-wrap {
	    padding: 2rem 0 0 0;
	}
	button:last-of-type {
	    margin: 2rem 0 0 0;
	}
</style>