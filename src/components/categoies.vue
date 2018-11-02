<template>
	<div class="categoies">
		<el-row :gutter="10">
		    <el-col :span="12" :sm="6" :xs="12" v-for="(cate,index) in categoies" :key="index" style="margin-bottom: 15px;">
		    	<img :src="cate.imgurl" width="100%">
		        <el-card :body-style="{ padding: '5px' }">
		            <div slot="header">
		                <span>{{cate.catename}}</span>
		            </div>
		            <el-row type="flex" justify="space-between" align="middle">
		            	<el-col :span="12">
		            		<span>{{cate.createTime}}</span>
		            	</el-col>
		            	<el-col :span="12">
		            		<el-button>Edit</el-button>
		            	</el-col>
		            </el-row>
		        </el-card>
		    </el-col>
		</el-row>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'categoies',
		data(){
			return {
				categoies:[
					{cateName:'title1',imgurl:'https://via.placeholder.com/350x150',createTime:'2018-12-20'},
					{cateName:'title2',imgurl:'https://via.placeholder.com/350x150',createTime:'2018-12-20'},
					{cateName:'title3',imgurl:'https://via.placeholder.com/350x150',createTime:'2018-12-20'}
				]
			}
		},
		method:{

		}
	}
</script>
<style lang="scss" scoped="scoped"></style>