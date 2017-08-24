import layout from '../../components/common/layout/layout' 
const calendar = r => require.ensure([], () => r(require('../../examples/calendar/calendar.vue')), 'calendar')
const calendarDes = r => require.ensure([], () => r(require('../../examples/calendar/calendarDes.vue')), 'calendar')


export default {
	name:'首页',
	path:'/calendar',
	component:layout,
	children:[
		{path:'/calendar',component:calendar},
		{path:'/calendarDes',component:calendarDes},  
	]
}