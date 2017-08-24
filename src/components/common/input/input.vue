<template>
	<div class="ymt-input" >
		<span>{{title}}</span> 
		<input v-if="!arrow"
			type="text" 
			ref="input" 
			:placeholder="placeholder" 
			:value="value"   
			:disabled="disabled"
			:minlength="minlength"
			:maxlength="maxlength"			
			@blur="handleBlur"
			@focus="handleFocus" 
			@change="handleChange">
		<div v-else class="ymt-input-arrow" @click="handleTouch">
			<span>{{value}}</span>
			<div class="input-arrow"><slot name="arrow"></slot></div>
		</div> 
	</div>
</template>

<script type="text/javascript">
	import Vue from 'vue'
	export default Vue.component('ymt-input',{
		name:'YmtInput',
		props:['title','placeholder','value','arrow','disabled','maxlength','minlength'],	 
		methods:{
			handleBlur() {
				if (!!this._events['blur']){
					console.log('ymt-input blur');

					this.$emit('blur',this.$refs.input.value);
				}
			},
			handleFocus() {
				if (!!this._events['focus']){
					console.log('ymt-input focus');

					this.$emit('focus',this.$refs.input.value);
				}
			},
			handleChange() {
				if (!!this._events['change']){
					console.log('ymt-input change');

					this.$emit('change',this.$refs.input.value);
				}
			},
			handleTouch() { 
				console.log('handleTouch');
				if (this._props.arrow && !!this._events['click']){
					this.$emit('click');
				}
			}
		}
	})
</script>
