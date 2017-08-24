import layout from '../../components/common/layout/layout'
const swiper = r => require.ensure([], () => r(require('../../examples/swiper/swiper.vue')), 'swiper')


export default {
	name:'首页',
	path:'/',
	component:layout,
	children:[
		{path:'/swiper',component:swiper},
		// {path:'/home',component:home}
	]
}