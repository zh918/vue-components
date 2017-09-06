import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import LtUI from './components'
// import LtUI from '../lt-ui/static'
import {injectGlobal} from './common/inject'
import router from './router'  

// import './style/default/index.less';
// import './style/reset.less';

import '../static/iconfont/iconfont.css'

// 注入
injectGlobal();

Vue.use(VueRouter) 

const globalVue = new Vue({ 
	router, 
	template:'<App />',
	components:{App}
});

globalVue.$mount('#app');

if (typeof window.globalVue == "undefined") window.globalVue = globalVue;