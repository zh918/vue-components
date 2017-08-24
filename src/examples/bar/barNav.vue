<template>
<div>
   <ymt-bar-nav>
      <div slot='left'  @click="handleLeftClick">回退</div>
		  <div>自定义保障套餐</div>
		  <div slot="right" @click="handleRightClick">完成</div>
   </ymt-bar-nav>

<div class="des">
<h3>组件说明</h3>
  <p>
  <pre>
  组件名称：YmtBarNav

  样式说明：
  1.ymt-bar-nav

  事件绑定：
	@clickLeft 左侧按钮点击事件
	@clickRight 右侧按钮点击事件

  属性说明：
  slot='left'  所在的标签内容会出现在左侧
  slot="right" 所在标签内容会出现在右侧
  没有slot标签的元素会出现在组件中央标题位置


  常见用法：
  {{rawHtml}}
  </pre> 
  
  </p>
</div>

</div> 
</template>

<script> 
export default { 
	data(){
		return {
			rawHtml:`1234`
		}
	},
    methods:{ 
        handleLeftClick() {
          console.log('handleClickLeft');
        },
        handleRightClick() {
          console.log('handleRightClick');
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
