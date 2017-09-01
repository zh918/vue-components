export default class Message {

	/**
	 * @描述     产品线弹出提示
	 * @开发     zh
	 * @时间     2017-07-20
	 * @param  {[type]}   Vue     [description]
	 * @param  {[type]}   options {
	 *                            	type:弹出类型（"icon":带图标的消息,"message":不带图标的消息,"img":表示传入的图像显示）,
	 *                            	className:"icon的class字符串,这里如果type指定为icon时，该字段必须赋值",
	 *                            	url:"资源相对路径",
	 *                            	msg:"文字消息",
	 *                            	duration:自动关闭毫秒数,
	 *                            	cb:回调函数
	 *                            }
	 * @return {[type]}           [description]
	 */
	static install(Vue, options) { 
		Vue.prototype.$message = (options) => { 
			options = Object.assign({
							type:"message",
							className:"icon iconfont icon-zu1", 
						}, options);

			let messageRoot= document.createElement('div');
			messageRoot.className="lt-message";
			let message = document.createElement('span'); 
			if (message.insertAdjacentText) {
				message.insertAdjacentText("afterbegin",options.msg); 
			}
			else {
				message.appendChild(options.msg);
			}

			if (options.type == "message") {
				if (messageRoot.insertAdjacentElement) messageRoot.insertAdjacentElement("afterbegin",message); 				
				else messageRoot.appendChild(message);
			}
			else if (options.type == "icon") {
				let divContent = document.createElement('div');
				divContent.className = "content";

				let divIcon = document.createElement('div');
				divIcon.className = "div-icon";

				let icon = document.createElement('i');
				icon.className = options.className;

				if (divIcon.insertAdjacentElement) {
					divIcon.insertAdjacentElement("beforeend",icon); 
					divContent.insertAdjacentElement("beforeend",divIcon);
					divContent.insertAdjacentElement("beforeend",message); 	
					messageRoot.insertAdjacentElement("beforeend",divContent); 
				}
				else {
					divIcon.appendChild(icon);
					divContent.appendChild(divIcon);
					divContent.appendChild(message);
					messageRoot.appendChild(divContent);
				}
								
			}
			else if (options.type = "loading") {
				let divContent = document.createElement('div');
				divContent.className = "content";

				let divImg = document.createElement('div');
				divImg.className = "div-img"; 
   				 
   				let divSpace = document.createElement('div');
   				divSpace.className = "div-space";

   				if (divContent.insertAdjacentElement) {
   					divContent.insertAdjacentElement("beforeend",divSpace);
					divContent.insertAdjacentElement("beforeend",divImg);
					divContent.insertAdjacentElement("beforeend",message); 	
					messageRoot.insertAdjacentElement("beforeend",divContent); 
   				}
   				else {
   					divContent.appendChild(divSpace);
   					divContent.appendChild(divImg);
   					divContent.appendChild(message);
   					messageRoot.appendChild(divContent);
   				}
   				
			}
			
			if (document.querySelector(".lt-message")) document.querySelector(".lt-message").remove();

			if (document.getElementById("app").insertAdjacentElement) {
				document.getElementById("app").insertAdjacentElement("afterbegin",messageRoot); 
			}
			else {
				document.getElementById("app").appendChild(messageRoot);
			}
		 
			if (options.duration) {
				setTimeout(function() {
					if (document.querySelector(".lt-message")) document.querySelector(".lt-message").remove();
					if (options.cb != undefined) options.cb();
				},options.duration); 
			}	
		}; 

		Vue.prototype.$message.hide = () => {
			document.querySelector(".lt-message").remove();
		}



	}
}