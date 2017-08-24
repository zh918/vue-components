import layout from '../../components/common/layout/layout' 
const popup = r => require.ensure([], () => r(require('../../examples/popup/popup.vue')), 'popup')

export default {
	name:'首页',
	path:'/',
	component:layout,
	children:[
		{path:'/popup',component:popup},
	]
}