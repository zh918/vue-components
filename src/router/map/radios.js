import layout from '../../components/common/layout/layout' 
const radios = r => require.ensure([], () => r(require('../../examples/radios/radios.vue')), 'radios')


export default {
	name:'首页',
	path:'/',
	component:layout,
	children:[
		{path:'/radios',component:radios},
	]
}