
import layout from '../../components/common/layout/layout'
const viewImage = r => require.ensure([], () => r(require('../../examples/viewImage/viewImage.vue')), 'viewImage')


export default {
	name:'上传照片',
	path:'/',
	component:layout,
	children:[
		{path:'/viewImage',component:viewImage},
		// {path:'/home',component:home}
	]
}