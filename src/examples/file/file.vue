<template>
	<div class="examples-upload-img">
		<ymt-upload-img @change="handleChangeImg">
			<div slot="icon">點擊上傳圖片</div>
		</ymt-upload-img>
	</div>
</template>

<script>
	
	export default { 
		methods: {
			handleChangeImg(file) {
				console.log('選了了圖片,注意這裏根據file來進行post上傳文件，何時上傳自己決定',file);
				/*
					let form = new FormData();
					form.append("fileName", file.name); // 可以增加表单数据
		            form.append("fileSize", file.size); // 可以增加表单数据
		            form.append("file", file);

		            $http.post(`${basePath}/api/file/upload`,form).then(data=>{ 
		            	let groupName = data.data.goupName;
		                let remoteFileName = data.data.remoteFileName;
		            	_this.imgInfo={
		            		groupName:groupName,
		            		remoteFileName:remoteFileName,
		            		maxWidth:img.width,
		            		maxHeight:img.height,
		            		maxSize:file.size / 1000,
		            	}
		            	_this.changeImg=true;
		                _this.imgshowUrl = imagePath + "/" + groupName + "/" + remoteFileName;
						
					});

				 */



			}
		}
	}
</script>

<style lang="less" scoped>
	.examples-upload-img {
		width: 100%;
		height: 500px;
		border: 1px solid blue;
	}
</style>