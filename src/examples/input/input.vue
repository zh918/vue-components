<template>
<div>
   <ymt-input title="用户名" placeholder="请录入用户名" 
        ref="input"
        :disabled="flag"  
        :value="v"
        :maxlength="3"
        @blur="handleBlur" 
        @focus="handleFocus" 
        @change="handleChange"></ymt-input>
   <ymt-input title="用户名" value="赵柳"  @blur="handleBlur" @focus="handleFocus" @change="handleChange" @touch="handleTouch" :disabled="true" arrow="true">
     <div slot="arrow">12</div>
   </ymt-input>


    <ymt-button @click="handleClick">测试按钮</ymt-button> 

<div class="des">
<h3>组件说明</h3>
  <p>
  <pre>
  组件名称：YmtInput

  样式说明：
  1.ymt-input 
  2.text-right 录入文本右对齐
  3.text-left 录入文本左对齐

  事件绑定：
  @blur="失去焦点事件", 接收value值为回调参数
  @focus="获取焦点事件", 接收value值为回调参数
  @change="改变value值",接收value值为回调参数

  属性说明：
  title：表示文本框前面文本
  placeholder：文本框内提示文字
  disabled：禁止录入 
  
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
      flag:false,
      v:null,
			rawHtml:`<ymt-input 
      title="用户名" 
      placeholder="请录入用户名"  
      @change="handleChange"></ymt-input>`
		}
	},
    methods:{
    	handleBlur(value) {
    		console.log('handleBlur',value);
    	},
      handleFocus(value) {
        console.log('handleFocus',value);
      },
      handleChange(value) {
        console.log('handleChange',value);
        this.v = value;
      },
      handleTouch() {
        console.log('handleTouch')
      },
      handleClick() {
        console.log(this.v)
        this.flag = !this.flag; 
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
