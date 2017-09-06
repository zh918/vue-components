<template>
	<div>
		<lt-button @click="handleClick" >测试按钮</lt-button> 

		<lt-play-group v-if="isShow" @change="handleChange" :initData="initData"></lt-play-group> 
	</div>
</template>
<script>
	export default {
		data() {
			return {
				isShow:false,
				initData:[
					{
						title:'组选',
						data:[
							{
								key:1,
								title:'冠军'
							},
							{
								key:2,
								title:'冠亚'
							},
							{
								key:3,
								title:'前三'
							},
							{
								key:4,
								title:'前四'
							},
							{
								key:5,
								title:'前五'
							},
							{
								key:6,
								title:'前六'
							},
							{
								key:7,
								title:'前七'
							},
							{
								key:8,
								title:'前八'
							},
							{
								key:9,
								title:'前九'
							},
							{
								key:10,
								title:'前十'
							}
						]
					},
					{
						title:'两面',
						data:[
							{
								key:1,
								title:'定位'
							},
							{
								key:2,
								title:'和值'
							},
							{
								key:3,
								title:'大小'
							}
						]
					}
				]
			}
		},
		methods:{
			handleClick() {
				this.isShow = true;
			},
			handleChange(item) {
				console.log(item.title);
				this.isShow = false;
			}
		}
	}
</script>