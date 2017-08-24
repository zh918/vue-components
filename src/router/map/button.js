// 首页
import layout from '../../components/common/layout/layout' 
const button = r => require.ensure([], () => r(require('../../examples/button/button.vue')), 'button')


export default {
	name:'首页',
	path:'/',
	component:layout,
	children:[
		{path:'/button',component:button},
		// {path:'/home',component:home}
	]
}