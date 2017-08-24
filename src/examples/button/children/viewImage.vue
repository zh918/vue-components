<template>
	<div class="view-image">
		<div id="viewImg"><img  src="../images/11.png" style="width: 800px"></div> 
		<p id="des"></p>
	</div>
</template>
<script> 

	export default {
		name:"ViewImage",
		// mounted() { 
		// 	let _this = this;

		// 	var desElement = document.getElementById('des');
		// 	var myElement = document.getElementById('viewImg');

		// 	var mc = new Hammer.Manager(myElement);
 
		// 	var pinch = new Hammer.Pinch();
		// 	var rotate = new Hammer.Rotate();
		// 	var pan = new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 });

		// 	// we want to detect both the same time
		// 	pinch.recognizeWith(rotate);

		// 	// add to the Manager
		// 	mc.add([pinch, rotate, pan]); 
 
		// 	let center = {x:0,y:0};
		// 	let scale = {x:1,y:1}; 

		// 	// 移动
		// 	mc.on("pan panmove",function(ev){
		// 		let translateX = center.x + ev.deltaX;
		// 	    let translateY = center.y + ev.deltaY; 
		// 	    var _style = [
		// 			'translate3d(' + translateX + 'px,' + translateY + 'px,0)',
		// 			'scale(' + scale.x + ',' + scale.y + ')'
		// 		]
		// 		_style = _style.join(' ');
		// 		myElement.style.transform = _style;  
		// 	})

		// 	// 缩放
		// 	mc.on("pinchmove",function(ev) { 
		// 		let scaleX = ev.scale;
		// 	    let scaleY = ev.scale;
		// 	    var style = [
		// 			'translate3d(' + center.x + 'px,' + center.y + 'px,0)',
		// 			'scale(' + scaleX + ',' + scaleY + ')'
		// 		]
		// 		style = style.join(' ');
		// 		myElement.style.transform = style; 
 				

		// 		// scale.x = ev.scale;
		// 		// scale.y = ev.scale;
 
		// 	});

		// 	// 移动结束
		// 	mc.on("panend",function(ev) {	
		// 		center.x += ev.deltaX;
		// 		center.y += ev.deltaY;
		// 	});
  
		// 	// 缩放结束
		// 	mc.on("pinchend",function(ev) {							
		// 		scale.x = ev.scale;
		// 		scale.y = ev.scale;  
		// 	}); 

		// 	function print(...parms) {
		// 		let args = [...parms];
		// 		 let argsLen = args.length;
		// 		 let msgData = [];

		// 		 for(let i = 0; i < argsLen; i++){
		// 		 	if (typeof args[i] == 'object'){
		// 		 		let argStr = JSON.stringify(args[i],null,2);
		// 		 		msgData.push(argStr);
		// 		 	}
		// 		 	else{
		// 		 		msgData.push(args[i]);
		// 		 	}
		// 		 }

		// 		 return msgData.join('\n');
		// 	} 

		// }

	}
</script>
 
<style lang="less" scoped>
	.view-image {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		margin: auto;

		background-color: red;
		background: silver;
		z-index: 5000;  

		#des{
			position: fixed;
			bottom: 300px;
			width: 100%;
			height: 60px;
			border: 1px solid red;
		}

	}
</style> 