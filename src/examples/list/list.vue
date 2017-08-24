<template>
<div class="examples-list">
   <ymt-list>
     <list-group>
       <group-title>车主信息</group-title>
       <list-item>
         <ymt-input class="text-right" title="行驶城市" value="深圳"  @blur="handleBlur" @focus="handleFocus" @change="handleChange" disabled ></ymt-input>
       </list-item>
       <list-item>
        <ymt-input title="车主" placeholder="录入车主姓名"  @blur="handleBlur" @focus="handleFocus" @change="handleChange"></ymt-input>
       </list-item>
       <list-item>
        <ymt-input class="text-right" title="身份证号" value="456789789789789789" disabled ></ymt-input>
       </list-item>
     </list-group>  
     <list-space></list-space>
     <list-group>
       <group-title class="center">车主信息</group-title>
       <list-item>
         <ymt-input class="text-right" title="行驶城市" value="深圳"  @blur="handleBlur" @focus="handleFocus" @change="handleChange" disabled ></ymt-input>
       </list-item>
       <list-item>
        <ymt-input class="text-right" title="车主" placeholder="录入车主姓名"  @blur="handleBlur" @focus="handleFocus" @change="handleChange"></ymt-input>
       </list-item>
       <list-item>
        <ymt-input class="text-right" title="身份证号" value="456789789789789789" disabled ></ymt-input>
       </list-item>
     </list-group> 
     <list-group>
       <group-title class="right">车主信息</group-title>
       <list-item>
         <ymt-input class="text-right" title="行驶城市" value="深圳"  @blur="handleBlur" @focus="handleFocus" @change="handleChange" disabled ></ymt-input>
       </list-item>
       <list-item>
        <ymt-input class="text-right" title="车主" placeholder="录入车主姓名"  @blur="handleBlur" @focus="handleFocus" @change="handleChange"></ymt-input>
       </list-item>
       <list-item>
        <ymt-input class="text-right" title="身份证号" value="456789789789789789" disabled ></ymt-input>
       </list-item>
     </list-group>     
   </ymt-list>
 

  <div class="des">
  <h3>组件说明</h3>
    <p>
    <pre>
    组件名称：YmtList、ListGroup、GroupTitle、
              ListItem、ListSpace

    样式说明： 
    1.text-right 录入文本右对齐
    2.text-left 录入文本左对齐

    事件绑定： 

    属性说明：
    title：表示文本框前面文本
    placeholder：文本框内提示文字
    disabled：禁止录入 
    具体list-item中的组件根据该组件自身属性来设置

    
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
			rawHtml:`<ymt-list>
     <list-group>
       <group-title></group-title>
       <list-item></list-item>
       <list-item></list-item>       
     </list-group>
     <list-space></list-space>
   </ymt-list>`
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
      }
    }
}
</script>

<style lang="less" scoped> 
  .examples-list {
    height: 60rem;
    overflow: scroll; 
  }

	.des {

		margin: 1rem 0 0 0;

		font-size: 1.5rem;

	}
</style>
