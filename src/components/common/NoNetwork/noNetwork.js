import LtNoNetwork from './noNetworkComponent'

export default class NoNetwork {
	static install(Vue, options) { 
		Vue.prototype.$NoNetwork = (options) => { 
			let nt = document.createElement('div'); 
			nt.id = options.el || 'no-network'; 
			nt.className ='no-network-page';   
			document.body.appendChild(nt); 

			new Vue({ 
			  data() {
			  	return {
			  		currentShowVal:true
			  	}
			  },
			  render (createElement) {
			  	let _this = this;
			    return createElement(
			      LtNoNetwork,    
			      {
			      	props:{
			      		isShow:_this.currentShowVal
			      	},
			      	on: {
				      click: function () {  
				      	_this.currentShowVal = false; 
				      	if (options.cb) {
				      		options.cb(); 
				      		// if (document.querySelector(".no-network")) document.querySelector(".no-network").remove();
				      	}
				      }
				    }
			      }  
			    ) 
			  } 
			}).$mount("#" + options.el);
			

		};
	} 
}