import layout from '../../components/common/layout/layout'
const processBar = r => require.ensure([], () => r(require('../../examples/processBar/processBar.vue')), 'processBar')


export default {
	name:'首页',
	path:'/',
	component:layout,
	children:[
		{path:'/processBar',component:processBar},
		// {path:'/home',component:home}
	]
}