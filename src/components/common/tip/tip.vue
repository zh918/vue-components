<template>
    <div>
        <div class="lt-tip" :class="{'quote-tip':tipData == 'quoteTip','succ-quote-tip':tipData == 'succQuoteTip'}">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'

    export default Vue.component("lt-tip", {
        name: "LtTip",
        props: ['tipData'],
        data() {
            return {
                _bug: this._props.tipData // 这样指定一个属性之后，会发生更新
            }
        },
        methods: {

        }
    })
</script>