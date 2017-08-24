// 封装ajax请求
import axios from 'axios' 

const post = (url,parms,headers={})=>{
	let ran = Math.floor(Math.random() * 100); 
	
	let option = Object.assign({},headers);
	if (!!Cookie.get('access_token')) Object.assign(option,{Authorization : Cookie.get('access_token')}); 

	return axios({
		method:'post',
		url:url,
		data:parms,
		headers:option
	}).then(res=>res.data);
}

const get = (url) => {
	return axios.get(url);
}

export const injectHttp = () => {
	if (typeof window.$http == 'undefined'){
		window.$http = {};
		window.$http.post = post;
		window.$http.get = get;
	}
}
 