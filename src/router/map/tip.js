
import layout from '../../components/common/layout/layout'
const tip = r => require.ensure([], () => r(require('../../examples/tip/tip.vue')), 'tip')


export default {
	name:'顶部提示',
	path:'/',
	component:layout,
	children:[
		{path:'/tip',component:tip},
		// {path:'/home',component:home}
	]
}