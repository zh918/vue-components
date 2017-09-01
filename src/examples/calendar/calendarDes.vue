<template>
	<div class="des">
   		<h3>组件说明</h3>
   		<p>
<pre>
组件名称：YmtCalendar

样式说明：
暂无

事件绑定：
@click="handleClickDay" // 点击某日期，注入{dayItem,calendar}参数进行相关处理
	calendar表示日历对象，该对象公开4个方法如下：
	calendar.selecting(dayItem); // 选择某个新日期进行开车
	calendar.unSelecting(dayItem);// 撤销某个新开车日期
	calendar.canceling(dayItem); // 取消某个开车日期
	calendar.unCanceling(dayItem);// 撤销取消某个开车日期

@scroll="handleScroll"	// 滚动日历触发，返回最新顶部月份 注入month参数


属性说明：
:initData="initData"
initData=>{
	beginDate:'',// 日历开始时间
	endDate:'',// 日历结束时间
	lastestSetTime:'',// 最早起保日期
	policyDateList:[
		{
			policyDate:'', // 开车日期
			policyStatus:''// 开车保单状态
		}]
	} 

例如：		
{
    beginDate: '2017-05-01',// 日历开始时间
    endDate: '2017-12-01',// 日历结束时间
    lastestSetTime: '2017-08-01',// 最早起保日期
    policyDateList: [
      {policyDate:'2017-05-03',policyStatus:'2'},
      {policyDate:'2017-06-01',policyStatus:'1'},
      {policyDate:'2017-08-01',policyStatus:'1'},
      {policyDate:'2017-08-02',policyStatus:'1'}
    ]
}



常见用法：
{{rawHtml}}

</pre>  
   		</p> 
   </div>
</template>
<script>
	export default {
		data(){
			return {
				rawHtml:`<lt-calendar :initData="initData" @click="handleClickDay" @scroll="handleScroll"></lt-calendar>`
			}
		}
	}
</script>
<style lang="less" scoped>
	.des {
		font-size: 1.8rem;
	}
</style>