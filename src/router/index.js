import Vue from 'vue'
import Router from 'vue-router'

import home from './map/home'
import button from './map/button'
import input from './map/input'
import barNav from './map/barNav'
import list from './map/list'
import paymentRadio from './map/paymentRadio'
import checkBox from './map/checkBox'
import couponRadios from './map/couponRadios'
import calendar from './map/calendar'
import popup from './map/popup'
import processBar from './map/processBar'
import companyStrategy from './map/companyStrategy'
import actionSheet from './map/actionSheet'
import swiper from './map/swiper'
import cars from './map/cars'
import message from './map/message'
import tip from './map/tip'
import viewImage from './map/viewImage'
import file from './map/file'

export default new Router({
	mode:'history',
	routes:[
		home,
		button,
		input,
		barNav,
		list,
		checkBox,
		paymentRadio,
		couponRadios,
		calendar,
		popup,
		processBar,
		companyStrategy,
		actionSheet,
		swiper,
		cars,
		message,
		tip,
		viewImage,
		file
	]
})


