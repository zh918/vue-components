import layout from '../../components/common/layout/layout' 
const couponRadios = r => require.ensure([], () => r(require('../../examples/couponRadios/couponRadios.vue')), 'couponRadios')
const couponRadios_old = r => require.ensure([], () => r(require('../../examples/couponRadios/couponRadios_old.vue')), 'couponRadios')


export default {
	name:'首页',
	path:'/',
	component:layout,
	children:[
		{path:'/couponRadios',component:couponRadios},
		{path:'/couponRadios_old',component:couponRadios_old},
	]
}