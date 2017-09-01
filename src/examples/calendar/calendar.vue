<template>
<div> 
  <lt-calendar :initData="initData" @click="handleClickDay" @scroll="handleScroll"></lt-calendar>
 
</div> 
</template>

<script> 
export default { 
	data(){
		return {
			rawHtml:`<lt-input 
      title="用户名" 
      placeholder="请录入用户名"  
      @change="handleChange"></lt-input>`,
      initData:null
		}
	},
  mounted(){
     console.log(1,this.initData)
     let _this = this;
    setTimeout(function(){ 
      // _this.initData = {
      //        beginDate: '2017-08-03',     // 日历开始时间
      //        endDate: '2017-11-05',       // 日历结束时间
      //        lastestSetTime: '2017-08-08',// 最早起保日期
      //        checkPolicyStatus:true,     // 
      //        policyDateList:[
      //          {          //保障行程(只返回未消费/已消费日期)
      //          policyDate : "2017-08-05",          //保障日期
      //          policyStatus : "1"          //保单状态1 有保单 2无保单 3保单生成中
      //       },{         
      //         policyDate : "2017-08-06",          
      //         policyStatus : "2", 
      //         insureStatus: 1,  // 1：可取消投保 2：不可取消投保        
      //       }
      //       ,{         
      //         policyDate : "2017-08-07",          
      //         policyStatus : "2",
      //         insureStatus: 2,  // 1：可取消投保 2：不可取消投保           
      //       },{         
      //         policyDate : "2017-08-08",          
      //         policyStatus : "2"          
      //       },{         
      //         policyDate : "2017-08-09",          
      //         policyStatus : "3",
      //         insureStatus: 1,  // 1：可取消投保 2：不可取消投保     
      //       } ,{         
      //         policyDate : "2017-08-10",          
      //         policyStatus : "1"          
      //       },{         
      //         policyDate : "2017-08-11",          
      //         policyStatus : "2"          
      //       }],
      //     }



      _this.initData = {
               beginDate: '2017-07-03',     // 日历开始时间
               endDate: '2017-11-05',       // 日历结束时间
               lastestSetTime: "2017-08-16",
               calendarEndDate: "2017-11-08", 
               checkPolicyStatus:true,
               policyDateList: [
                {
                  policyDate: "2017-08-05", 
                  policyStatus: "1"
                },
                {
                  policyDate: "2017-08-06", 
                  policyStatus: "1"
                },
                {
                  policyDate: "2017-08-11", 
                  policyStatus: "1"
                },
                {
                  policyDate: "2017-08-14",
                  insureStatus: "1",
                  policyStatus: "1"
                },
                {
                  policyDate: "2017-08-18", 
                  policyStatus: "1"
                },
                {
                  policyDate: "2017-08-19", 
                  insureStatus: "1",
                  policyStatus: "2"
                }]
      }
    },1000 );
  },
    methods:{
      handleLeftClick() {
        console.log('handleLeftClick');
        this.$router.back();
      }, 

    	handleClickDay({dayItem,calendar}) {
        let temp = `// 正常      normarl 
    // 
    // 可被选     normarl->selecting
    // 被选中     selecting -> normarl
    // 
    // 可取消开车   Selected -> Canceling
    // 已取消开车   Canceling -> selected
    // 
    // 不可取消开车  UnCancel （备注：before之前状态 after之后保单生成中）`;
        console.log('选择日期',dayItem);
 
        if (dayItem.changeStatus == 0){
            calendar.selecting(dayItem);
        }
        else if (dayItem.changeStatus == 1) {
            calendar.unSelecting(dayItem);
        }
        else if (dayItem.changeStatus == 2) {
            calendar.canceling(dayItem);
        }
        else if (dayItem.changeStatus == 3) {
            calendar.unCanceling(dayItem);
        } 
        else {
          calendar.canceling(dayItem);
        } 

        console.log('选择日期',dayItem.clsName);
      },
      handleScroll(month) {
        console.log(month,'==========');
      }
    }
}
</script>

<style lang="less" scoped> 
	.top {
    position: relative;
  }  
</style>
