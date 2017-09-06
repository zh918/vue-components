/*
	易秒通 组件库v1.0.0
*/

import '../style/default/index.less';
import '../style/reset.less';
import '../style/common.less';

import Vue from 'vue'

import button from './common/button/button'
import input from './common/input/input'
import barNav from './common/bar/barNav'
import list from './common/list/list'
import groupTitle from './common/list/groupTitle'
import listGroup from './common/list/listGroup'
import listItem from './common/list/listItem'
import ListSpace from './common/list/ListSpace'
import paymentRadio from './common/paymentRadio/paymentRadio'
import checkBox from './common/checkBox/checkBox'
import couponRadios from './common/couponRadios/couponRadios'
import couponOldRadios from './common/couponRadios/couponOldRadios'
import popup from './common/popup/popup'
import calendar from './common/calendar/calendar'
import companyStrategy from './common/companyStrategy/companyStrategy'
import swiper from './common/swiper/swiper'
import LtProcessBar from './common/processBar/processBar'
import actionSheet from './common/actionSheet/actionSheet'
import area from './common/actionSheet/area'
import shade from './common/shade/shade'
import cars from './common/cars/cars'
import message from './common/message/message'
import tip from './common/tip/tip'
import viewImage from './common/viewImage/viewImage'
import NoNetwork from './common/NoNetwork/noNetwork'
import uploadImg from './common/file/uploadImg'
import playGroup from './common/playGroup/playGroup'

const LtUI = {
	version:'1.0.0',
	button,
	input,
	barNav,
	list,
	listGroup,
	groupTitle,
	listItem,
	ListSpace,
	paymentRadio,
	checkBox,
	couponRadios,
	couponOldRadios,
	popup,
	calendar,
	companyStrategy,
	actionSheet,
	area,
	swiper,
	shade,
	cars,
	LtProcessBar:Vue.use(LtProcessBar),
	message:Vue.use(message),
	tip,
	viewImage,
	noNetwork:Vue.use(NoNetwork),
	uploadImg,
	playGroup
}

export default LtUI


