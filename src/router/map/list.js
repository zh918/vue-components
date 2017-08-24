import layout from '../../components/common/layout/layout' 
const list = r => require.ensure([], () => r(require('../../examples/list/list.vue')), 'list')


export default {
	name:'首页',
	path:'/',
	component:layout,
	children:[
		{path:'/list',component:list}, 
	]
}