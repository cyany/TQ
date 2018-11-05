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
		    <el-col :xs="24">
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
				time1:'',
				noteIndex0_1:'',
				noteIndex0_2:'',
				noteIndex1_1:'',
				noteIndex1_2:'',
				noteIndex2_1:'',
				noteIndex2_2:'',
				noteIndex3_1:'',
				noteIndex3_2:'',
				noteIndex4_1:'',
				noteIndex4_2:'',
				noteIndex5_1:'',
				noteIndex5_2:'',
				noteIndex6_1:'',
				noteIndex6_2:'',
				noteIndex7_1:'',
				noteIndex7_2:'',
				noteIndex8_1:'',
				noteIndex8_2:'',
				noteIndex9_1:'',
				noteIndex9_2:'',
				noteIndex10_1:'',
				noteIndex10_2:'',
				noteIndex11_1:'',
				noteIndex11_2:'',
			}
		},
		mounted(){
			let today = new Date();
			this.time1=today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
		},
		methods:{
			submitInfo(){
				if(this.noteIndex0_1==""){
					this.$alert('未编辑完成', '标题名称', {
					          confirmButtonText: '确定',
					          callback: action => {
					            this.$message({
					              type: 'info',
					              message: `action: ${ action }`
					            });
					          }
					        });
				}
			}
		}
	}
</script>
<style lang="scss" scoped="scoped"></style>