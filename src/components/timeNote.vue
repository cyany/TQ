<template>
	<div class="timeNote">
		<el-row>
		    <el-col  :xs="12" :sm="3">
				<el-date-picker v-model="time1" type="date" placeholder="选择日期时间">
				</el-date-picker>
		        <!-- content -->
		    </el-col>
		</el-row>
		<el-row>
		    <!-- <el-col :xs="24">
		       <table>
		       	<tr>
		       		<td>xx</td>
		       		<td>Events</td>
		       		<td>Notes</td>
		       	</tr>
		       	<tr>
		       		<td>01</td>
		       		<td><el-input v-model="noteIndex0_1" placeholder=""></el-input></td>
		       		<td><el-input v-model="noteIndex0_2" placeholder=""></el-input></td>
		       	</tr><tr>
		       		<td>01</td>
		       		<td><el-input v-model="noteIndex1_1" placeholder=""></el-input></td>
		       		<td><el-input v-model="noteIndex1_2" placeholder=""></el-input></td>
		       	</tr><tr>
		       		<td>01</td>
		       		<td><el-input v-model="noteIndex2_1" placeholder=""></el-input></td>
		       		<td><el-input v-model="noteIndex2_2" placeholder=""></el-input></td>
		       	</tr><tr>
		       		<td>01</td>
		       		<td><el-input v-model="noteIndex3_1" placeholder=""></el-input></td>
		       		<td><el-input v-model="noteIndex3_2" placeholder=""></el-input></td>
		       	</tr><tr>
		       		<td>01</td>
		       		<td><el-input v-model="noteIndex4_1" placeholder=""></el-input></td>
		       		<td><el-input v-model="noteIndex4_2" placeholder=""></el-input></td>
		       	</tr><tr>
		       		<td>01</td>
		       		<td><el-input v-model="noteIndex5_1" placeholder=""></el-input></td>
		       		<td><el-input v-model="noteIndex5_2" placeholder=""></el-input></td>
		       	</tr><tr>
		       		<td>01</td>
		       		<td><el-input v-model="noteIndex6_1" placeholder=""></el-input></td>
		       		<td><el-input v-model="noteIndex6_2" placeholder=""></el-input></td>
		       	</tr><tr>
		       		<td>01</td>
		       		<td><el-input v-model="noteIndex7_1" placeholder=""></el-input></td>
		       		<td><el-input v-model="noteIndex7_2" placeholder=""></el-input></td>
		       	</tr><tr>
		       		<td>01</td>
		       		<td><el-input v-model="noteIndex7_1" placeholder=""></el-input></td>
		       		<td><el-input v-model="noteIndex7_2" placeholder=""></el-input></td>
		       	</tr><tr>
		       		<td>01</td>
		       		<td><el-input v-model="noteIndex8_1" placeholder=""></el-input></td>
		       		<td><el-input v-model="noteIndex8_2" placeholder=""></el-input></td>
		       	</tr><tr>
		       		<td>01</td>
		       		<td><el-input v-model="noteIndex9_1" placeholder=""></el-input></td>
		       		<td><el-input v-model="noteIndex9_2" placeholder=""></el-input></td>
		       	</tr><tr>
		       		<td>01</td>
		       		<td><el-input v-model="noteIndex10_1" placeholder=""></el-input></td>
		       		<td><el-input v-model="noteIndex10_2" placeholder=""></el-input></td>
		       	</tr><tr>
		       		<td>01</td>
		       		<td><el-input v-model="noteIndex11_1" placeholder=""></el-input></td>
		       		<td><el-input v-model="noteIndex11_2" placeholder=""></el-input></td>
		       	</tr>
		       </table>
		    </el-col> -->
		    <el-col :xs="24">
		        <table>
		        	<tr v-for="(item,index) in inputArr" v-key="index">
		        		<td>{{String(index).length==1?"0"+index+":00":index+":00"}}</td>
		       		<td><el-input v-model="item.val" placeholder=""></el-input></td>
		       		<td><el-input v-model="item.val2" placeholder=""></el-input></td>
		        	</tr>
		        </table>
		    </el-col>
		    <el-col :xs="12" :sm="3" style="margin-top: 20px;">
		        <!-- content -->
		        <el-button @click="submitInfo" @keyup.enter="submitInfo">Submit</el-button>
		    </el-col>
		</el-row>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'timeNote',
		data(){
			return {
				inputArr:[
					{val:'',val2:''},
					{val:'',val2:''},
					{val:'',val2:''},
					{val:'',val2:''},
					{val:'',val2:''},
					{val:'',val2:''},
					{val:'',val2:''},
					{val:'',val2:''},
					{val:'',val2:''},
					{val:'',val2:''},
					{val:'',val2:''},
					{val:'',val2:''},
					{val:'',val2:''},
					{val:'',val2:''},
					{val:'',val2:''},
					{val:'',val2:''},
					{val:'',val2:''},
					{val:'',val2:''},
					{val:'',val2:''},
					{val:'',val2:''},
					{val:'',val2:''},
					{val:'',val2:''},
					{val:'',val2:''},
					{val:'',val2:''}
				],
				time1:'',
			}
		},
		mounted(){
			let today = new Date();
			this.time1=today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
		},
		methods:{
			submitInfo(){
				console.log(this.inputArr);
				for(let i of this.inputArr){
					if(i.val=="" || i.val2==""){
						this.$alert('未编辑完成', '标题名称', {
					          confirmButtonText: '确定',
					          callback: action => {
					            this.$message({
					              type: 'info',
					              message: `action: ${ action }`
					            });
					          }
					        });
						return false;
					}
				}
			}
		}
	}
</script>
<style lang="scss" scoped="scoped"></style>