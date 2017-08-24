<template>
	<div class="ymt-cars" v-if="initData.isShow">
		<div class="title">切换车辆<span class="close" @click="handleClose"><i class="icon iconfont icon-chacha"></i></span></div>
		<div class="content">

			<div class="item" key="index" v-for="(item,index) in initData.data"  @click="handleChange(item)">
				<div class="left ymt-radios">  
					<label for="weixin" class=" payment-radio-item"> 
						<div class="payment-radio" >
							<i class="icon iconfont" :class="item.actived ? 'icon-check02' : 'icon-uncheak02'"></i> 
						</div>
					</label> 
				</div>
				<div class="right">
					<div class="right-two"  v-if="item.subTitle">
						<div class="right-item main">
							<div>{{item.mainTitle}}</div>
							<div class="title-img" v-if="item.isDefault"></div>
						</div>
						<div class="right-item sub">{{item.subTitle ? item.subTitle : ""}}</div>	 	
					</div>
					<div class="right-one"  v-else>
						<div class="right-item main-one">
							<div>{{item.mainTitle}}</div>
							<div><div class="title-img" v-if="item.isDefault"></div></div> 
						</div> 	
					</div>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
	
	import Vue from 'vue'

	export default Vue.component("YmtCars",{
		name:"YmtCars",
		props:['initData'], 
		methods: {
			handleChange(item) {
				console.log(item.mainTitle);

				if (this._events["change"]) {
					this.$emit("change",item);
				}
			},
			handleClose() {
				if (this._events["close"]) {
					this.$emit("close");
				}
			}
		}

	})
</script>