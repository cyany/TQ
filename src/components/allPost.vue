<template>
	<div class="allPost">
		<div class="postController">
			<el-row :gutter="10">
			    <el-col :span="120">
			        <el-select v-model="BlukVal" placeholder="Bulk Actions">
        			    <el-option v-for="item in blukActions"
        			        :key="item.value"
        			        :label="item.label"
        			        :value="item.value">
        			    </el-option>
        			</el-select>
			    </el-col>
			    <el-col :span="120">
			        <el-button rounded>Apply</el-button>
			    </el-col>
			    <el-col :span="120">
			        <el-select v-model="AllDatesVal" placeholder="AllDates">
			            <el-option v-for="item in allDates"
			                :key="item.value"
			                :label="item.label"
			                :value="item.value">
			            </el-option>
			        </el-select>
			    </el-col>
			    <el-col :span="120">
			    	<el-select v-model="AllCategoriesVal" placeholder="AllCategories">
			    	    <el-option v-for="item in AllCategories"
			    	        :key="item.value"
			    	        :label="item.label"
			    	        :value="item.value">
			    	    </el-option>
			    	</el-select>
			    </el-col>
			</el-row>	
		</div>
		<div class="postList">
			<el-table :data="postLists" ref="multipleTabel">
				<el-table-column
			      type="selection"
			      width="55">
			    </el-table-column>
			    <el-table-column v-for="col in postListsColumn"
			        :prop="col.id"
			        :key="col.id"
			        :label="col.label"
			        :width="col.width">
			    </el-table-column>
			</el-table>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'allPost',
		data(){
			return {
				BlukVal:'',
				AllDatesVal:'',
				AllCategoriesVal:'',
				blukActions:[
					{label:'find',value:'findMeans'},
					{label:'delete',value:'deleteMeans'},
					{label:'cancel',value:'cancelMeans'},
				],
				allDates:[
					{label:'Today',value:'TodayMeans'},
					{label:'Yesterday',value:'YesterdayMeans'},
					{label:'Tomorrow',value:'TomorrowMeans'},
				],
				AllCategories:[
					{label:'Travel',value:'TravelMeans'},
					{label:'Dairy',value:'DairyMeans'},
					{label:'Exercise',value:'ExerciseMeans'},
				],
				postLists:[
					{date:'2016-12-5',name:'Sheldon Coper',address:'The unite State',categories:"travel",important:'☆'},			
					{date:'2016-12-5',name:'Sheldon Coper',address:'The unite State',categories:"travel",important:'☆'},			
					{date:'2016-12-5',name:'Sheldon Coper',address:'The unite State',categories:"travel",important:'☆'},			
					{date:'2016-12-5',name:'Sheldon Coper',address:'The unite State',categories:"travel",important:'☆'},			
					{date:'2016-12-5',name:'Sheldon Coper',address:'The unite State',categories:"travel",important:'☆'},			
					{date:'2016-12-5',name:'Sheldon Coper',address:'The unite State',categories:"travel",important:'☆'},			
					{date:'2016-12-5',name:'Sheldon Coper',address:'The unite State',categories:"travel",important:'☆'},			
					{date:'2016-12-5',name:'Sheldon Coper',address:'The unite State',categories:"travel",important:'☆'},			
					{date:'2016-12-5',name:'Sheldon Coper',address:'The unite State',categories:"travel",important:'☆'},			
					{date:'2016-12-5',name:'Sheldon Coper',address:'The unite State',categories:"travel",important:'☆'},			
					{date:'2016-12-5',name:'Sheldon Coper',address:'The unite State',categories:"travel",important:'☆'},			
					{date:'2016-12-5',name:'Sheldon Coper',address:'The unite State',categories:"travel",important:'☆'}		
				],
				postListsColumn:[
					{width:'150',id:'date',label:'日期'},
					{width:'150',id:'name',label:'姓名'},
					{width:'150',id:'address',label:'地址'},
					{width:'150',id:'categories',label:'分类'},
					{width:'150',id:'important',label:'重要性'}
				],
				multipleSelection:[]
			}
		},
		methods:{

		}
	}
</script>
<style lang="scss" scoped="scoped"></style>