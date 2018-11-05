<template>
	<div class="monthNote">
		<el-date-picker v-model="monthData" type="month" placeholder="选择日期时间">
		</el-date-picker>
		<ul class="month-wrap">
			<li v-for="(month,index) in monthList" :key="index">{{index}}</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'monthNote',
		data(){
			return {
				monthData:'',
				monthList:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
			}
		},
		methods:{

		}
	}
</script>
<style lang="scss" scoped="scoped">
	.month-wrap{
		margin-top: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap:wrap;
		li{
			flex-basis:15%;
			height: 100px;
		}
	}
</style>