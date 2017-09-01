<template>
	<div class="container">
		<div class="header">
			<lt-bar-nav>
		      <div slot='left'  @click="handleLeftClick">菜单</div>
				  <div>vue组件库v1.0</div> 
		   </lt-bar-nav>
		</div>
		<div class="content">
			<div class="left"> 
				<left-menu v-if="isShowMenu"></left-menu>
			</div>
			<div class="main" @click="handleMainClick">
				<router-view></router-view>
			</div>
		</div>
		<div class="footer">
			<footer-menu></footer-menu>
		</div>
	</div>	 
</template>

<script type="text/javascript">
	import leftMenu from './leftMenu'
	import footerMenu from './footer'

	export default {  
		data(){
			return {
				isShowMenu:false
			}
		},
		created(){
			console.log('layout')
		},
		components:{
			leftMenu,
			footerMenu
		},
		methods: {
			handleLeftClick() { 
				this.isShowMenu = !this.isShowMenu;
			},
			handleMainClick() {
				if (this.isShowMenu) this.isShowMenu = !this.isShowMenu;
			}
		},
		watch:{
			isShowMenu:function () {
				
			}
		}	
	}

</script>

<style type="text/css" lang="less" scoped>
	.container {
		position: relative;
		width: 100%;
		height: 100%;

		.header {
			position:fixed; 
			width: 100%;
			height: 4rem;
			line-height: 4rem;
			/*border: 1px solid red;*/

			font-size: 2rem;
			text-align: center;
			background-color: #ccc;
		}

		.content {
			position: fixed;  
			top: 4.5rem;
			bottom: 2.5rem;
			width: 100%; 
			overflow-y: scroll;
			/*.left {
				position: absolute;
				top:0;
				bottom: 0;
				float: left;
				width: 15%; 
			}*/

			.main {
				position: absolute;
				top: 0;
				bottom: 0;
				/*left: 15%;
				padding: 20px;
				width: 85%;  */ 
				/*padding: 1rem;*/
				width: 100%; 
			/*border: 1px solid red; */
			}
		}

		.footer {
			position: fixed;
			bottom: 0; 
			height: 2.5rem;
			width: 100%; 
			/*border: 1px solid red;*/
		}

	}
</style>