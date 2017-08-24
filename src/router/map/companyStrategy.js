import layout from '../../components/common/layout/layout'
const companyStrategy = r => require.ensure([], () => r(require('../../examples/companyStrategy/companyStrategy.vue')), 'companyStrategy')


export default {
	name:'首页',
	path:'/',
	component:layout,
	children:[
		{path:'/companyStrategy',component:companyStrategy},
		// {path:'/home',component:home}
	]
}