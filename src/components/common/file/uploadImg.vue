<template>
	<div class="lt-upload-img">
		<input type="file" ref="image_uploads" class="image-uploads-input" accept="image/*"  @change="handleFileChange">
		<div class="select-file-plus" @click.stop="handleClick">
			<slot name="icon">+</slot>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'

	export default Vue.component('lt-upload-img',{
		name:'LtUploadImg',  
		methods: {
			handleClick(e) { 
				console.log('handleClick');
				this.$refs.image_uploads.click();
			},
			handleFileChange() {
				let _this = this; 
				var preview = document.querySelector('.select-file-plus');
				var input = document.querySelector('.image-uploads-input');
				createView(); 

				return;

				function validFileType(file) {
					var fileTypes = [
						'image/jpeg',
						'image/pjpeg',
						'image/png'
					];

					for (var i = 0; i < fileTypes.length; i++) {
						if (file.type === fileTypes[i]) {
							return true;
						}
					}

					return false;
				}


				function createView() {
					while (preview.firstChild) {
						preview.removeChild(preview.firstChild);
					}

					var curFiles = input.files;
					if (curFiles.length === 0) {
						var para = document.createElement('p');
						para.textContent = '請選擇上傳圖片';
						preview.appendChild(para);
					} else { 
						for (var i = 0; i < curFiles.length; i++) { 
							var para = document.createElement('p');
							 
							if (validFileType(curFiles[i])) { 
								var image = document.createElement('img');
								image.src = window.URL.createObjectURL(curFiles[i]);
								preview.appendChild(image);
								if (_this._events["change"]) _this.$emit('change',curFiles[i]);
								 
							} else {
								para.textContent = '當前文件' + curFiles[i].name + '類型錯誤，請重新選擇.'; 
								preview.appendChild(para);
							} 
						}
					}
				}

				

			}
		}
	});
</script>