import layout from '../../components/common/layout/layout' 
const barNav = r => require.ensure([], () => r(require('../../examples/bar/barNav.vue')), 'barNav')


export default {
	name:'首页',
	path:'/',
	component:layout,
	children:[
		{path:'/barNav',component:barNav},
		// {path:'/home',component:home}
	]
}