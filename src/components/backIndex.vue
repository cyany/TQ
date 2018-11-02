<template>
  <div class="backIndex">
    <el-row>
        <el-col :span="5" :offset="1" v-for="(item,index) in brands" :key="index">
          <el-row>
              <el-col :span="6">
                  <img :src="item.imgurl">
              </el-col>
              <el-col :span="6">
                  <div class="dataNum">
                <h2>{{item.title1}}</h2>
                <p>{{item.num}}</p>
            </div>
              </el-col>
          </el-row>
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
    methods:{

    }
  }
</script>
<style lang="scss" scoped="scoped">

</style>