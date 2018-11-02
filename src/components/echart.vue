<template>
	<div class="echart">
		<div id="main"></div>	
		<div>
			<ul>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
				<li>1</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
var echarts = require('echarts');
export default  {
	name:'echart',
	data(){
		return {
			title:"abcdefr"
		}
	},
	mounted(){
		this.init()
	},
	methods:{
		init:()=>{
			console.log(123465);
			var echarts = require('echarts');
			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('main'));
			// 绘制图表
			myChart.setOption({
			    title: {
			        text: 'ECharts 入门示例'
			    },
			    tooltip: {},
			    xAxis: {
			        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
			    },
			    yAxis: {},
			    series: [{
			        name: '销量',
			        type: 'bar',
			        data: [5, 20, 36, 10, 10, 20]
			    }]
			});
		}
	}
}
</script>
<style scoped="scoped" lang="scss">
	#main{
		width: 500px;
		height: 500px;
	}
	ul{
		li{
			float: left;
			width:20%;
		}
	}
</style>