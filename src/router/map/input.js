import layout from '../../components/common/layout/layout' 
const input = r => require.ensure([], () => r(require('../../examples/input/input.vue')), 'input')


export default {
	name:'首页',
	path:'/',
	component:layout,
	children:[
		{path:'/input',component:input}, 
	]
}