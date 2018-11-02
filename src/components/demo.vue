<template>
	<div class="demo">
		<button @click="sonadd">click</button>
		<p>{{nodemon}}</p>
		<p>{{this.fontSize}}</p>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'demo',
		props:["fontSize"],
		data(){
			return {
				nodemon:'nodemon is a node server starter'
			}
		},
		methods:{
			sonadd:function(){
				console.log(123);
				this.$emit("myevent");
			}
		}
	}
</script>
<style lang="scss" scoped="scoped"></style>