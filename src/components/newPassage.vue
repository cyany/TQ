<template>
	<div class="newPassage">
		<el-row :gutter="15" style="margin-bottom: 15px">
		    <el-col :span="4">
		        <el-input placeholder="请输入标题" v-model="passageTitle"></el-input>
		    </el-col>
		    <el-col :span="4">
		          <div class="block">
		              <el-date-picker
		                v-model="value2"
		                align="right"
		                type="date"
		                placeholder="选择日期"
		                :picker-options="pickerOptions1">
		              </el-date-picker>
		            </div>
		    </el-col>
		    <el-col :span="4" :offset="5">
		        <el-button type="primary">保存</el-button>
		    </el-col>
		</el-row>
		<el-row> <textarea style="min-height: 300px;">Next, get a free Tiny Cloud API key!</textarea></el-row>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'newPassage',
		data(){
			return {
				 pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        passageTitle:''
			}
		},
		methods:{

		}
	}
</script>
<style lang="scss" scoped="scoped"></style>