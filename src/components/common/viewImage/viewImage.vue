<template>
	<ymt-shade>
		<div class="view-image" @click="handleClick">
			<div class="image" ref="containerImg">
				<slot name="img"></slot>
			</div>
			<div class="footer">
				<slot name="footer"></slot>
			</div>
		</div>
	</ymt-shade> 
</template>

<script type="text/javascript">
	import Vue from 'vue'
	import Hammer from '../../../../ref/hammer/hammer'

	export default Vue.component('ymt-view-image',{
		name:'YmtViewImage',  
		data(){
			return {
				hammerManager:null
			}
		},
		mounted() { 
			let _this = this; 
			var myElement = document.querySelector('.view-image > .image > img');

			var mc = new Hammer.Manager(myElement);			
 
			var pinch = new Hammer.Pinch();
			var rotate = new Hammer.Rotate();
			var pan = new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 });
			var singleTap = new Hammer.Tap({ event: 'singletap' })

			// we want to detect both the same time
			pinch.recognizeWith(rotate);

			// add to the Manager
			mc.add([pinch, rotate, pan, singleTap]); 
 
			let center = {x:0,y:0};
			let scale = {x:1,y:1}; 

			// 移动
			mc.on("panmove",function(ev){
				if (scale.x == 1 && scale.y == 1) return; // 为缩放时不可移动

				let translateX = center.x + ev.deltaX;
			    let translateY = center.y + ev.deltaY;  

			    var _style = [
					'translate3d(' + translateX + 'px,' + translateY + 'px,0)',
					'scale(' + scale.x + ',' + scale.y + ')'
				]
				_style = _style.join(' ');
				myElement.style.transform = _style;  
			})

			// 缩放
			mc.on("pinchmove",function(ev) {
				if (ev.scale < 0.6) return;

				let scaleX = ev.scale;
			    let scaleY = ev.scale;
			    var style = [
					'translate3d(' + center.x + 'px,' + center.y + 'px,0)',
					'scale(' + scaleX + ',' + scaleY + ')'
				]
				style = style.join(' ');
				myElement.style.transform = style;   
			});

			// 移动结束
			mc.on("panend",function(ev) {	 
				center.x += ev.deltaX;
				center.y += ev.deltaY;
			});
  
			// 缩放结束
			mc.on("pinchend",function(ev) {	
				if (ev.scale < 0.6) {
					scale.x = 0.6;
					scale.y = 0.6;
					return;
				};

				scale.x = ev.scale;
				scale.y = ev.scale;  
			}); 

			// mc.on("singletap", function(ev) {
			// 	// 单击时关闭图片查看
			// 	console.log('singletap'); 				
			// });   

		},
		methods:{
			handleClick() {   
				this.$emit("close"); 
			}
		}
	})
</script>