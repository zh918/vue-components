<template>
<div>
   <lt-button @click="handleClick" @dbclick="handleDoubleClick" :disable="flag">测试按钮</lt-button> 
  <input type="file" id="input"> 上传
  <!-- <view-image></view-image> -->

   <div class="des">
   		<h3>组件说明</h3>
   		<p>
<pre>
组件名称：YmtButton

样式说明：
1.lt-btn
2.lt-btn-default

事件绑定：
@click="自定义事件"

属性说明：
暂无

常见用法：
{{rawHtml}}

</pre>  
   		</p> 
   </div>
</div>


</template>

<script>  
import ViewImage from './children/viewImage.vue'

export default { 
	data(){
		return {
			rawHtml:`      <lt-button @click="handleClick">
        测试按钮
      </lt-button>`,
      id:11,
      flag:false
		}
	},
  components:{ViewImage},
    methods:{
    	handleClick(){
    		console.log('handleClick-use'); 
    	},
      handleDoubleClick() {
        console.log('handleDoubleClick')
      }
    }
}
</script>

<style lang="less" scoped> 
	.des {

		margin: 1rem 0 0 0;

		font-size: 1.5rem;

	}
</style>
