<template>
	<div class="loginwrapper">
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
		name:'login',
		data(){
			return {
				username:'',
				password:''
			}
		},
		methods:{
			submitInfo(){
				console.log(this.username+''+this.password);
				axios.post("http://localhost:3000/login",{username:this.username,password:this.password}).then(res=>{
					console.log(res);
				}).catch(e=>{
					console.log(e);
				})
			}
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.input-area{
		margin-bottom: 15px;
	}
	.main{
		position: relative;
	}
	.loginwrapper{
		    position: absolute;
		    top: 50%;
		    left: 50%;
		    transform: translate3d(-50%,-50%,0);
		    width: 100%;
		    overflow: hidden;
		}
</style>