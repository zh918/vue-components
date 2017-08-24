<template>
    <div class="checkbox-wrapper">
        <label :for="randomID">
			<div for="ee" class="ymt-checkbox" :class="[ifChecked ? 'checked' : 'un-checked']">
				<i class="iconfont icon-photo_complete"></i>
			</div>
			<input :id="randomID" type="checkbox" v-model="ifChecked" name="" value="" />
		</label>
    </div>
</template>
<script>
    // 模块引入
    // 对象接口
    import Vue from 'vue'
    export default Vue.component('ymt-checkbox', {
        props: {
            model: {
                default: true,
            }
        },
        data() {
            return {
                randomID: '',
                ifChecked: '',
            }
        },

        created() {
            this.randomID = this.getRandomCode();
            this.ifChecked = this.model;
        },

        components: {
            // 引用的组件
        },
        methods: {
            getRandomCode() {
                var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
                var res = "";
                for(var i = 0; i < 5; i++) {
                    var id = Math.ceil(Math.random() * 35);
                    res += chars[id];
                }
                return res;
            }
        },
        computed: { // 需要属性计算的操作

        },
        watch: {
            ifChecked(val) {
                this.$emit('change', val);
            }
        }

    })
</script>
