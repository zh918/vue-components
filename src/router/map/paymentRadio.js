import layout from '../../components/common/layout/layout' 
const paymentRadio = r => require.ensure([], () => r(require('../../examples/paymentRadio/paymentRadio.vue')), 'paymentRadio')


export default {
	name:'首页',
	path:'/',
	component:layout,
	children:[
		{path:'/paymentRadio',component:paymentRadio}, 
	]
}