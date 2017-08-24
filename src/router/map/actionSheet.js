
import layout from '../../components/common/layout/layout'
const actionSheet = r => require.ensure([], () => r(require('../../examples/actionSheet/actionSheet.vue')), 'city')


export default {
	name:'城市',
	path:'/',
	component:layout,
	children:[
		{path:'/actionSheet',component:actionSheet},
		// {path:'/home',component:home}
	]
}