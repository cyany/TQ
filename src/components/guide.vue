<template>
	<div class="guide">
		<div id="left">111111</div>
		<div id="right">222222</div>
		<div id="bottom">33333</div>
		<div id="top">444444</div>
		<button @click="a">click</button>
	</div>
</template>
<script type="text/javascript">
	import Driver from 'driver.js';
	export default {
		name:'guide',
		data(){
			return {

			}
		},
		created:function(){
			
		},
		methods:{
			a:function(){
			const driver = new Driver();
			driver.highlight({
			  element: '#left',
			  popover: {
			    title: 'Title for the Popover',
			    description: 'Description for it',
			  }
			});
			}
		}
	}
</script>
<style lang="scss" scoped="scoped">
</style>