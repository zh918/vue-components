import layout from '../../components/common/layout/layout' 
const checkBox = r => require.ensure([], () => r(require('../../examples/checkBox/checkBox.vue')), 'checkBox')


export default {
	name:'首页',
	path:'/',
	component:layout,
	children:[
		{path:'/checkBox',component:checkBox},
	]
}
