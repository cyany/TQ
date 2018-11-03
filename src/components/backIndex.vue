<template>
  <div class="backIndex">
    <el-row>
        <el-col :xs="24" :sm="12" :lg="6" v-for="(item,index) in brands" :key="index">
          <el-row>
              <el-col :span="12">
                  <img :src="item.imgurl">
              </el-col>
              <el-col :span="12">
                  <div class="dataNum">
                <h2>{{item.title1}}</h2>
                <p>{{item.num}}</p>
            </div>
              </el-col>
          </el-row>
        </el-col> 
      </el-row>
      <el-row>
          <el-col :span="24">
              <div id="main" style="width:100%;height:300px;"></div>
          </el-col>
      </el-row>
      <el-row>
         <el-col :xs="24" :sm="8">
             <div id="type1" style="width:100%;height:350px;"></div>
         </el-col>
         <el-col :xs="24" :sm="8">
             <div id="type2" style="width:100%;height:350px;"></div>
         </el-col>
         <el-col :xs="24" :sm="8">
             <div id="type3" style="width:100%;height:350px;"></div>
         </el-col>
      </el-row>
  </div>
</template>
<script type="text/javascript">
  export default {
    name:'backIndex',
    data(){
      return {
        brands:[
          {imgurl:'https://via.placeholder.com/30',title1:"New visits",num:1020},
          {imgurl:'https://via.placeholder.com/30',title1:"New visits",num:1020},
          {imgurl:'https://via.placeholder.com/30',title1:"New visits",num:1020},
          {imgurl:'https://via.placeholder.com/30',title1:"New visits",num:1020}
        ]
      }
    },
      mounted:function(){
         this.init();
         // console.log(123)
      },
    methods:{
      init:()=>{
          var echarts = require('echarts');

          // 基于准备好的dom，初始化echarts实例
          var myChart = echarts.init(document.getElementById('main'));
          console.log(this)
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

          var type1 = echarts.init(document.getElementById("type1"));
          var type2 = echarts.init(document.getElementById("type2"));
          var type3 = echarts.init(document.getElementById("type3"));
          type1.setOption({
    title: {
        text: '基础雷达图'
    },
    tooltip: {},
    legend: {
        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '销售（sales）', max: 6500},
           { name: '管理（Administration）', max: 16000},
           { name: '信息技术（Information Techology）', max: 30000},
           { name: '客服（Customer Support）', max: 38000},
           { name: '研发（Development）', max: 52000},
           { name: '市场（Marketing）', max: 25000}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '预算分配（Allocated Budget）'
            },
             {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : '实际开销（Actual Spending）'
            }
        ]
    }]
});

          // -------/
          type2.setOption({
    title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:274, name:'联盟广告'},
                {value:235, name:'视频广告'},
                {value:400, name:'搜索引擎'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
})

          // -------------
          type3.setOption({
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
})

      }
    }
  }
</script>
<style lang="scss" scoped="scoped">

</style>