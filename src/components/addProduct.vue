<template>
	<div class="addProduct">
		<el-row>
		    <el-col :sm="12" :offset="6">
		        <!-- content -->
		        <form action="http://localhost:3000/upload" method="POST" enctype="multipart/form-data">
		        	<input type="hidden" name="pdselected" value="0">
		        	<input type="text" name="pdname" placeholder="name"><br>
		        	<input type="text" name="pddesc" placeholder="desc"><br>
		        	<input type="number" name="pdprice" placeholder="price"><br>
		        	<input type="text" name="pdcolor" placeholder="color"><br>
		        	<input type="text" name="pdcate" placeholder="cate"><br>
		        	<input type="file" name="avatar" multiple="multiple">
		        	<input type="submit" value="click">
		        </form>
		    </el-col>
		   
		</el-row>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'addProduct',
		data(){
			return {

			}
		},
		methods:{

		}
	}
</script>
<style lang="scss" scoped="scoped">
	input{
		-webkit-appearance: none;
		    background-color: #fff;
		    background-image: none;
		    border-radius: 4px;
		    border: 1px solid #dcdfe6;
		    -webkit-box-sizing: border-box;
		    box-sizing: border-box;
		    color: #606266;
		    display: inline-block;
		    font-size: inherit;
		    height: 40px;
		    line-height: 40px;
		    outline: 0;
		    padding: 0 15px;
		    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
		    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
		    width: 100%;
		margin-bottom: 35px;
	}
</style>