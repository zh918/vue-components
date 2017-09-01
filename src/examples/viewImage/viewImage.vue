<template>
<div>
   <lt-button @click="handleView">查看照片</lt-button> 
   <lt-button @click="handleResetView">查看并重拍照片</lt-button> 
  
   <lt-view-image  v-if="isView" @close="handleClose">
   		<img ref="img" src="../../assets/11.png" alt="" slot="img">
   </lt-view-image>
 
 	<lt-view-image v-if="isResetView" @close="handleClose">
   		<img src="../../assets/11.png" alt="" slot="img" >
   		<lt-button slot="footer" @click="handleResetClick">重拍</lt-button> 
   </lt-view-image>

</div>


</template>

<script>   

export default { 
	data() {
		return {
			isView:false,
			isResetView:false
		}
	},
  updated(){
      console.log('handleView',this.$refs.img,this.$refs.img.naturalHeight); 
  }, 
  methods:{
  	handleView(){
      // ,this.$refs.imgView.naturalHeight,this.$refs.imgView.naturalWidth
     
      this.isView = !this.isView;


  	},
  	handleResetView() {
  		console.log('handleResetView');
  		this.isResetView = !this.isResetView;
  	},
  	handleResetClick() {
  		alert('重拍')
  	},
    handleClose() { 
      this.isView=false;
      this.isResetView = false;
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
