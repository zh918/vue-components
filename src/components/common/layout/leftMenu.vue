<template>
    <div class="leftMenu">
      <ul>
        <li><router-link :to="{path:'/'}" replace>日志记录</router-link></li>
        <li><router-link :to="{path:'/barNav'}" replace>bar-nav</router-link></li>
        <li><router-link :to="{path:'/calendar'}" replace>calendar</router-link></li>
        <li><router-link :to="{path:'/calendarDes'}" replace>calendar说明</router-link></li>
        <li><router-link :to="{path:'/checkBox'}" replace>check-box</router-link></li>
        <li><router-link :to="{path:'/input'}" replace>input</router-link></li>
        <li><router-link :to="{path:'/list'}" replace>list</router-link></li>
        <li><router-link :to="{path:'/paymentRadio'}" replace>payment-radio</router-link></li>
        <li><router-link :to="{path:'/couponRadios_old'}" replace>优惠券</router-link></li>
        <li><router-link :to="{path:'/couponRadios'}" replace>优惠券现网</router-link></li>
        <li><router-link :to="{path:'/button'}" replace>button</router-link></li>
        <li><router-link :to="{path:'/popup'}" replace>popup</router-link></li>
        <li><router-link :to="{path:'/processBar'}" replace>processBar</router-link></li>
        <li><router-link :to="{path:'/companyStrategy'}" replace>companyStrategy</router-link></li>
        <li><router-link :to="{path:'/actionSheet'}" replace>actionSheet</router-link></li>
        <li><router-link :to="{path:'/swiper'}" replace>swiper</router-link></li>
        <li><router-link :to="{path:'/cars'}" replace>cars</router-link></li>
        <li><router-link :to="{path:'/message'}" replace>message</router-link></li>
        <li><router-link :to="{path:'/tip'}" replace>tip</router-link></li>
        <li><router-link :to="{path:'/viewImage'}" replace>viewImage</router-link></li>
      </ul>
    </div>
</template>

<style type="text/css" lang="less" scoped>
    .leftMenu {
        position: absolute;
        width: 60%;
        /*height: 60rem;*/
        top: 0;
        left: 0;
        bottom: 0;
        background-color: #fe9600;
        overflow: auto;

        font-size: 2.2rem;
        z-index: 1000;

        ul {
            margin: 0;
            padding: 0;
        }

        li {
            width: 100%;
            height: 5.5rem;
            line-height: 5.5rem;
            border: 1px solid #ccc;
        }
    }


</style>