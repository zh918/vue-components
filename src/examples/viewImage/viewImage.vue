<template>
<div>
   <ymt-button @click="handleView">查看照片</ymt-button> 
   <ymt-button @click="handleResetView">查看并重拍照片</ymt-button> 
  
   <ymt-view-image  v-if="isView" @close="handleClose">
   		<img ref="img" src="../../assets/11.png" alt="" slot="img">
   </ymt-view-image>
 
 	<ymt-view-image v-if="isResetView" @close="handleClose">
   		<img src="../../assets/11.png" alt="" slot="img" >
   		<ymt-button slot="footer" @click="handleResetClick">重拍</ymt-button> 
   </ymt-view-image>

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
