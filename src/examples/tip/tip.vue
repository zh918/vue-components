<template>
    <div>

        <lt-tip>
            按实际的垃圾收到了家山莨菪碱拉睡觉的的开发的师疯狂阿萨德接口联调发几个都改了
        </lt-tip>

        <!--<lt-tip :tipData="'quoteTip'"> 啊车牌号啊睡觉的垃圾
        </lt-tip>-->

        <!--<lt-tip :tipData="'succQuoteTip'">
            啊车牌号啊睡觉的垃圾
        </lt-tip>-->

        <div class="des">
            <h3>组件说明</h3>
            <p>
                <pre>
  组件名称：YmtTip

  样式说明：
  1.lt-tip
  2.quote-tip
  3.succ-quote-tip



  属性说明：
  tipData : 传字符串  提供以下两种样式,不传字符串应用默认样式

  quoteTip  正在报价  报价失败   文字居中
  succQuoteTip  报价成功


  常见用法：
  {{rawHtml}}
  </pre>

            </p>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                rawHtml: `1234`,

            }
        },

    }
</script>

<style lang="less" scoped>
    .des {
        margin: 1rem 0 0 0;
        font-size: 1.5rem;
    }
</style>