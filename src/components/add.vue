<template>
	<div class="add">
		<button @click="fireParent">+</button>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'add',
		data(){
			return {

			}
		},
		methods:{
			fireParent(){
				this.$emit("myevent")
			}
		}
	}
</script>
<style lang="scss" scoped="scoped"></style>