<template>
	<div class="signup">
		<form>
			<el-row :gutter="10" type="flex" justify="center" align="middle">
			    <el-col :span="5">
			        <el-input v-model="username" placeholder="Username" class="input-area"></el-input>
			        <el-input v-model="password" type="password" placeholder="Password" class="input-area"></el-input>
			        <el-button @click="submitInfo">Submit</el-button>
			        <!-- <button>click</button> -->
			    </el-col>
			</el-row>
		</form>
	</div>
</template>
<script type="text/javascript">
	import axios from 'axios'
	export default {
		name:'signup',
		data(){
			return {
				username:'',
				password:''
			}
		},
		methods:{
			submitInfo(){
				let that = this;
				axios.post("http://localhost:3000/signup",{
					username:that.username,
					password:that.password
				}).then(res=>{
					console.log(res);
					 that.$router.push({path:"/login?a=123"});
				}).catch(e=>{
					console.log(e)
				})
			}
		}
	}
</script>
<style lang="scss" scoped="scoped"></style>