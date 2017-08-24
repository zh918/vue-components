<template>
<div>

	<button @click="handleShowCity">城市</button>
	<button @click="handleShowCityArea">区号</button>
	<ymt-action-sheet :initData="_initData" @close="handleClose" @change="handleChange" @closeShade="handleCityCloseShade"></ymt-action-sheet>
 	<ymt-city-area :initData="initCityAreaData" @close="handleClose" @change="handleChange" @closeShade="handleCityAreaCloseShade"></ymt-city-area>
</div>


</template>

<script>
export default {
	data(){
		return {
		    _initData:[],
		    initCityAreaData:{
		    	isShow:false,
		    	data:[
		    		{key:"粤1",value:100},
					{key:"粤2",value:100},
					{key:"粤3",value:100},
					{key:"粤4",value:100},
					{key:"粤5",value:100},
					{key:"粤6",value:100},
					{key:"粤7",value:100},
					{key:"粤8",value:100},

					{key:"鄂1",value:100},
					{key:"鄂2",value:100},
					{key:"鄂3",value:100},
					{key:"鄂4",value:100},
					{key:"鄂5",value:100},
					{key:"鄂6",value:100},
					{key:"鄂7",value:100},
					{key:"鄂8",value:100},

					{key:"京1",value:100},
					{key:"京2",value:100},
					{key:"京3",value:100},
					{key:"京4",value:100},
					{key:"京5",value:100},
					{key:"京6",value:100},
					{key:"京7",value:100},
					{key:"京8",value:100},

					{key:"辽1",value:100},
					{key:"辽2",value:100},
					{key:"辽3",value:100},
					{key:"辽4",value:100},
					{key:"辽5",value:100},
		    	]
		    }
		}
	},
	created() {


		this._initData = {
				isShow:false,
				title:"",
				data:[]
			};


	},
    methods:{
    	handleShowCity() {
    		this._initData.isShow = true;
    		this._initData.title = "选择城市";
    		this._initData.data = [{
				    	key:"深圳",
				    	value:"100",
				    	isDefault:1
				    },
				    {
				    	key:"武汉",
				    	value:"200",
				    	isDefault:0
				    },
				    {
				    	key:"长沙",
				    	value:"300"
				    }];
    	},

    	handleClick() {
    		console.log('handleClick-use');
    	},
    	handleClose() {
    		console.log('handleClose');
    	},
    	handleChange(item) {
    		console.log('change',item);
    	},
    	handleShowCityArea() {
    		this.initCityAreaData.isShow = true;
    	},
    	handleCityAreaCloseShade() {

    		this.initCityAreaData.isShow = false;
    	},
    	handleCityCloseShade() {

    		this._initData.isShow = false;
    	}
    }
}
</script>

<style lang="less" scoped>
	button {

		font-size: 1.8rem;

	}
</style>
