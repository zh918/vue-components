import layout from '../../components/common/layout/layout' 
const file = r => require.ensure([], () => r(require('../../examples/file/file.vue')), 'file')


export default {
	name:'资源上传',
	path:'/',
	component:layout,
	children:[
		{path:'/file',component:file}, 
	]
}