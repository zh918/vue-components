<template>
	<div>
		<lt-popup
			v-if="popFlag1"
			:popupParam="popParm1"
			@cancelFn="handelCancel"
			@confirmFn="handelConfirm">
		</lt-popup>
		<!--<lt-popup
			v-if="popFlag2"
			:popupParam="popParm2"
			@cancelFn="handelCancel2"
			@confirmFn="handelConfirm2">
		</lt-popup>-->
		<button style="width: 100px; height: 50px; font-size: 22px;" @click="test">点我</button>
		<div class="des">
			<h3>组件说明</h3>
			<p>
				<pre>
  组件名称：ymtPopup

  样式说明：
  1.lt-popup

  事件绑定：
  @itemChoose="选项改变事件", 在回调函数中
  可获取到选择的是哪种支付方式

  属性说明：
  popupInitial(初始化数据)： {
  	* popupType :   弹窗类型     string 可选 failed/success/question/phone
  	* title :       弹窗标题      string
  	* content :     弹窗内容      string
  	* cancelText :  取消按钮文字  string
  	* confirmText : 确认按钮文字  string
  	* telNum :      电话号码     number 仅当popupType='phone'时需要传
  }
  @cancelFn="取消事件"
  @handelConfirm="确认事件"

  常见用法：
  {{rawHtml}}
			  	</pre>
			</p>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				rawHtml: `<lt-popup v-if="popupShow"
	:popupParam="popupInitial"
	@cancelFn="handelCancel"
	@confirmFn="handelConfirm">
</lt-popup>`,
				popParm1 : {
					popupType: "phone",
                    title: "动了保客服",
                    content: "131<br/>阿斯达四大多所",
                    cancelText: "取消",
                    confirmText: "呼叫",
                    telNum: "131",
                    class : "confirm"
				},
				popParm2 : {
					popupType : "success",
					title : "设置开车成功",
					content : "取消开车请提前",
					cancelText : "取消",
					confirmText : "确认",
				},
				popFlag1 : false,
				popFlag2 : false,
			}
		},
		methods: {
			test(){
				this.popFlag1 = true;
				this.getpopupParam = {

				}
			},
			handelCancel(){
				this.popFlag1 = false;
				console.log("点击取消按钮");
			},
			handelConfirm(){
				this.popFlag1 = false;
				this.popFlag2 = true;
				console.log("点击确认按钮");
			},
			handelConfirm2(){
				this.popFlag2 = false;
				console.log("点击确认按钮");
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