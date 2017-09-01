<template>
	<div class="lt-calendar">
		<div class="lt-calendar-week">
			<div class="week-item">日</div>
			<div class="week-item">一</div>
			<div class="week-item">二</div>
			<div class="week-item">三</div>
			<div class="week-item">四</div>
			<div class="week-item">五</div>
			<div class="week-item">六</div>
		</div>
		<div class="lt-calendar-content" @scroll="_handleScroll" v-if="calendarGroupData">
			<div :id="'ymt_calendar_' + item.monthValue"
				 class="lt-calendar-body"  
				 v-for="item in calendarGroupData" >
				<div class="lt-calendar-moth" :data-month="item.month">
					{{item.month}}
				</div>
				<div class="lt-calendar-day" 
					 v-for="day in _calendarDaysByMonth(item.month)"  
					 :class="_setCalendarDayClass(day.dayStatus,day.changeStatus)" 
					 @click="_handleClickDay(day)">
					<div class="lt-calendar-number">{{day.isNow ? '今天' : day.d}}</div>
					<div class="icon-selecting" v-if="day.changeStatus == 1">开</div>
					<div class="icon-drive" v-if="day.changeStatus == 2 || day.changeStatus == 4"></div>
					<div class="icon-cancel" v-if="day.changeStatus == 3">取消</div>
				</div>
			</div>
		</div> 
	</div> 
</template>
<script type="text/javascript">
	import Vue from 'vue'
	import moment from 'moment'  

	const dayStatus = {
		Before:-1, 	// -1. 起保之前 
		After:1		// 1. 起保之后  
	};

	const changeStatus = {
		Normal:    0,	// 正常可选状态（初始）
		Selecting: 1,	// 选中状态中，用于Normal->Selecting || Selecting->Normal 变化
		Selected:  2,	// 选中状态（初始）
		Canceling: 3,	// 取消状态，用于Selected->Canceling || Canceling->Selected 变化
		UnCancel: 4		// 禁止操作状态   保单状态1 有保单 2无保单 3保单生成中
		  
	 
		// 正常 		 normarl 
		// 
		// 可被选		 normarl->selecting
		// 被选中 		 selecting -> normarl
		// 
		// 可取消开车 	 Selected -> Canceling
		// 已取消开车	 Canceling -> selected
		// 
		// 不可取消开车  UnCancel （备注：before之前状态 after之后保单生成中）		
	};

	export default Vue.component('LtCalendar',{ 
		data() {
			return {
				dateArray: [],
				topMonth: null,
				isResetScrollTop: true
			}
		},
		props:['initData'],  
		updated() { 
			if (this.calendarGroupData && this.isResetScrollTop) {
				this.isResetScrollTop = false;
				let currentDate = moment(Date.now()).format("YYYYMM");
				let pointScrollTopValue = null;
				let len = this.dateArray.length;
				let subOffsetTopFirstValue = 0;

				if (len > 0) {
					this.dateArray.forEach((m) => {
						let offsetTopValue = document.getElementById('ymt_calendar_' + m.monthValue).offsetTop; 					 
						if (subOffsetTopFirstValue == 0) subOffsetTopFirstValue = offsetTopValue;
						if (currentDate == m.monthValue) pointScrollTopValue = offsetTopValue - subOffsetTopFirstValue;
						
						m.offsetTopValue = offsetTopValue - subOffsetTopFirstValue; 
					});
				}  

				document.querySelector(".lt-calendar-content").scrollTop = pointScrollTopValue; 				
			}

		},
		methods: { 

			_setCalendarDayClass(dayStatus,changeStatus) { 
				return !this._props.initData.checkPolicyStatus && changeStatus == 4 ? 'after-status after-uncancel' :
					dayStatus == -1 && changeStatus == 0 ? 'before-status' : 
					dayStatus == -1 && changeStatus == 2 ? 'before-status before-status-drive' :
					dayStatus == -1 && changeStatus == 3 ? 'before-status before-uncancel cancel lt-day-bg-2' : // 20170815补
					dayStatus == -1 && changeStatus == 4 ? 'before-status before-status-drive before-uncancel ' : // 20170824补before-status-drive
					dayStatus == 1  && changeStatus == 0 ? 'after-status' :
					dayStatus == 1  && changeStatus == 1 ? 'after-status actived' :
					dayStatus == 1  && changeStatus == 2 ? 'after-status after-status-drive' :
					dayStatus == 1  && changeStatus == 3 ? 'after-status cancel' :
					dayStatus == 1  && changeStatus == 4 ? 'after-status after-uncancel' : 'after-status';
			},

			_calendarDaysByMonth(month) {
				let tempMonth = this.calendarGroupData.filter(m=>m.month == month);
				if (tempMonth.length === 0) return [];

				let spaceDays = _spaceDayArray(tempMonth[0].firstWeek);
  				  
				return [...spaceDays ,...tempMonth[0].days];

				function _spaceDayArray(week) {
					let spaceDays = [];
					switch(week) 
					{
						case "Saturday": spaceDays.push('');     
						case "Friday": spaceDays.push('');     
						case "Thursday": spaceDays.push('');     
						case "Wednesday": spaceDays.push('');     
						case "Tuesday": spaceDays.push('');     
						case "Monday": spaceDays.push('');   
					}
					return spaceDays;
				}

			}, 
			_handleClickDay(dayItem) {
				this.$emit("click",{dayItem,calendar:this});		 
			},
			_handleScroll(e) {    
				let systemSrcollTopValue = e.srcElement.scrollTop;
				let monthOffsetTopArray = [];
				let tempTopMonth = null;

				this.dateArray.forEach((m) => { 
					monthOffsetTopArray.push({month:m.monthValue,offsetTopValue:m.offsetTopValue});
				}); 

				let len = monthOffsetTopArray.length;
				for (let i = len - 1; i >= 0; i--) {
					if (systemSrcollTopValue > monthOffsetTopArray[i].offsetTopValue) {
						tempTopMonth = monthOffsetTopArray[i].month;
						break; 
					}
				} 

				if (!!this._events["scroll"] && this.topMonth != tempTopMonth && tempTopMonth) {
					this.topMonth = tempTopMonth;
					this.$emit('scroll',tempTopMonth);
				}

			},


			selecting(dayItem) { 
				// 选中
				dayItem.changeStatus = changeStatus.Selecting;
			},
			unSelecting(dayItem) {
				dayItem.changeStatus = changeStatus.Normal;
			},
			canceling(dayItem) {
				// 取消已开车的日期
				dayItem.changeStatus = changeStatus.Canceling;
			},
			unCanceling(dayItem) {
				dayItem.changeStatus = changeStatus.Selected;
			}
			 
		},
		computed: {
			calendarGroupData() {	
			 	let _this = this;
				let currentDateMoment = moment(Date.now());	
				let currentDateMomentFormat = moment(Date.now()).format("YYYY-MM-DD");	
				 
				if (!this._props.initData) {
					console.warn('初始化数据不能为空');
					return null;
				} 
				 
				let currentDate = currentDateMoment.format("YYYY-MM-DD");
				
				let beginDate = this._props.initData.beginDate ? moment(this._props.initData.beginDate) : moment(currentDateMoment.format("YYYY-01-01"));
				let endDate = this._props.initData.endDate ? moment(this._props.initData.endDate) : moment(beginDate).add(1,'years');

				// let dateArray = this.dateArray;
				this.dateArray = [];

				for (let i = beginDate; i <= endDate; i = i.add({days:1}))
				{ 
					let m = i.format("YYYY年MM月");
					let mv = i.format("YYYYMM");
					let day = i.format("DD");
					let fullDate = i.format("YYYY-MM-DD");
					let currentDayStatus = _getDayStatus(i);
					let currentChangeStatus = _getChangeStatus(i);
					let hasDay = this.dateArray.some(d=>d.month == m);
					 
					if (!hasDay) {
						let firstWeek = i.format("dddd");
						this.dateArray.push({
											month:m,
											monthValue:mv,
											days:[{
													d:day,
													fullDate:fullDate,
													dayStatus:currentDayStatus,
													changeStatus:currentChangeStatus,
													isNow:_isNow(i),
													clsName:_this._setCalendarDayClass(currentDayStatus,currentChangeStatus)
												}],
											firstWeek:firstWeek
										});
					}
					else {
						let temp = this.dateArray.find(d=>d.month == m);
						temp.days.push({
										d:day,
										fullDate:fullDate,
										dayStatus:currentDayStatus,
										changeStatus:currentChangeStatus,
										isNow:_isNow(i),
										clsName:_this._setCalendarDayClass(currentDayStatus,currentChangeStatus)
									});
					} 
				}

				console.log('初始化数据===========',this.dateArray);
				return this.dateArray;

				function _isNow(day) {
					let temp = day.format("YYYY-MM-DD");
					if (currentDateMomentFormat == temp) return true;
					return false;
				}

				function _getDayStatus(day) {	
					let temp = day.format("YYYY-MM-DD");
					let flagDate = _this._props.initData.lastestSetTime ? moment(_this._props.initData.lastestSetTime).format("YYYY-MM-DD") : null;
  
					if (_this._props.initData.lastestSetTime == null || _this._props.initData.lastestSetTime == '') return dayStatus.After;	

					if (temp < flagDate) return dayStatus.Before;
					else if (flagDate == null) return dayStatus.After; 
					else return dayStatus.After;  
				}

				function _getChangeStatus(day) {
					let dayFormat = day.format("YYYY-MM-DD");
					if (_this._props.initData.policyDateList == null || _this._props.initData.policyDateList == undefined) return changeStatus.Normal;
					 
					let tempPolicyDate = _this._props.initData.policyDateList.find(d=>moment(d.policyDate).format("YYYY-MM-DD") == dayFormat);

					if (tempPolicyDate == null) return changeStatus.Normal;
 					 
					if (!_this._props.initData.checkPolicyStatus) return changeStatus.UnCancel;
					
					if (tempPolicyDate.insureStatus && tempPolicyDate.insureStatus == 2) return changeStatus.UnCancel;
					else if (tempPolicyDate.insureStatus && tempPolicyDate.insureStatus == 1) return changeStatus.Selected;

					switch(tempPolicyDate.policyStatus) {
						// 保单状态1 有保单 2无保单 3保单生成中
			 			case "1": return changeStatus.UnCancel;
			 			case "2": return changeStatus.Selected;
			 			case "3": return changeStatus.UnCancel;
			 			default:  return changeStatus.Normal;
			 		} 
				} 
			}, 

		},
		watch:[this.dateArray] 
	})
</script>