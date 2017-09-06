import layout from '../../components/common/layout/layout' 
const playGroup = r => require.ensure([], () => r(require('../../examples/playGroup/playGroup.vue')), 'playGroup')


export default {
	name:'首页',
	path:'/',
	component:layout,
	children:[
		{path:'/playGroup',component:playGroup},
		// {path:'/home',component:home}
	]
}