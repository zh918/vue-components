<template>
<div>
	<button @click="handleClick">弹出消息框</button>
 	<button @click="handleIconClick">弹出消息框-icon</button>
 	<button @click="handleImgClick">弹出消息框-img</button>

    <button @click="handleSelfOpen">手动打开</button>
    <button @click="handleSelfClose">手动关闭</button>
</div>


</template>

<script>
export default {
	data(){
		return {  
		}
	}, 
    created(){

    },
    methods:{
    	handleClick() {

            if (document.querySelector("body").insertAdjacentText) {
                alert('true');
            }
            else {
                alert('false')
            }

    		let options = {
    			msg:"弹出一条消息，消息会自动消失",
    			// duration:3000,
    			cb:()=>{
    				console.log('hello stephen')
    			}
    		}
    		this.$message(options);
    	},
    	handleIconClick() {
    		let options = {
    			type:"icon",
    			msg:"已保存车辆信息",
    			// duration:3000,
    			cb:()=>{
    				console.log('hello stephen')
    			}
    		}
    		this.$message(options);
    	},
    	handleImgClick() {
    		let options = {
    			type:"loading", 
    			// url:require("../../../assets/images/cars/loading@2x.gif"),
    			msg:"请稍等...",
    			// duration:3000,
    			cb:()=>{
    				console.log('hello stephen')
    			}
    		}
    		this.$message(options);
    	},
        handleSelfOpen() {
            let options = {
                msg:"弹出一条消息，消息会自动消失弹出一条消息，消息会自动消失弹出一条消息，消息会自动消失",
                // duration:3000,
                cb:()=>{
                    console.log('hello stephen')
                }
            }
            this.$message(options);
        },
        handleSelfClose() {
            this.$message.hide();
        }
    }
}
</script>

<style lang="less" scoped>
	button {

		font-size: 1.8rem;

	}
</style>
