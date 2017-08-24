<template>
<div> 
	<button @click="handleClick">切换车辆</button>
	<button @click="handleClickNoNetwork">无网络</button>
 	<ymt-cars :initData="initData" 
 				 v-if="initData.isShow"
 				 @change="handleChange"
 				 @close="handleClose"></ymt-cars> 
</div>


</template>

<script>
export default {
	data(){
		return { 
			initData:{
				isShow:false,
				data:[
					{id:1,mainTitle:"粤B***88",isDefault:true},
					{id:2,mainTitle:"粤B***81",actived:true},
					{id:3,mainTitle:"粤B***82",subTitle:"jeep3",isDefault:true},
					{id:4,mainTitle:"粤B***83"},
					{id:5,mainTitle:"粤B***82",subTitle:"jeep3"},
					{id:6,mainTitle:"粤B***83"},
					{id:7,mainTitle:"粤B***82",subTitle:"jeep3"},
					{id:8,mainTitle:"粤B***83"},
					{id:9,mainTitle:"粤B***82",subTitle:"jeep3"},
					{id:10,mainTitle:"粤B***83"},
					{id:11,mainTitle:"粤B***82",subTitle:"jeep3"},
					{id:12,mainTitle:"粤B***83"},
					{id:13,mainTitle:"粤B***82",subTitle:"jeep3"},
					{id:14,mainTitle:"粤B***83"},
					{id:15,mainTitle:"粤B***82",subTitle:"jeep3"},
					{id:16,mainTitle:"粤B***83"}]
			}
		}
	}, 
    methods:{
    	handleClick() {
    		console.log("handleClick");
    		this.initData.isShow = true;

    	},
    	handleChange(item) {  
    		this.initData.data.forEach((d)=>{
    			d.actived = false;
    			if (d.id == item.id) d.actived = true;
    		});

    		console.log(item)
    	},
    	handleClose() {
    		this.initData.isShow = false;
    	},
    	handleClickNoNetwork() {
    		this.$NoNetwork({el:"no-network",cb:()=>{
    			console.log("这里是回掉处理");
    		}})
    	}
    }
}
</script>

<style lang="less" scoped>
	button {

		font-size: 1.8rem;

	}
</style>
