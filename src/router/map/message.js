import layout from '../../components/common/layout/layout' 
const message = r => require.ensure([], () => r(require('../../examples/message/message.vue')), 'message')


export default {
	name:'首页',
	path:'/',
	component:layout,
	children:[
		{path:'/message',component:message}, 
	]
}