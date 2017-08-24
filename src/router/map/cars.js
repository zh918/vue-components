import layout from '../../components/common/layout/layout' 
const cars = r => require.ensure([], () => r(require('../../examples/cars/cars.vue')), 'cars')


export default {
	name:'切换车辆',
	path:'/',
	component:layout,
	children:[
		{path:'/cars',component:cars}, 
	]
}