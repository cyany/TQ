<template>
  <div id="app">
      <el-container>
        <el-aside width="210px" style="background-color: #545c64">
          <el-row>
              <el-col>
                <h3 style="padding:15px;"><router-link to="./">Dashboard</router-link></h3>
                <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1"><router-link to="./allPost">选项1</router-link></el-menu-item>
                    <el-menu-item index="1-2"><router-link to="./newPassage">选项2</router-link></el-menu-item> 
                    <el-menu-item index="1-3"><router-link to="./categoies">选项2</router-link></el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              
           
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-container>
          <el-header>
            <el-menu mode="horizontal" :default-active="activeIndex" @select="handSelect">
             <el-menu-item index="1">首页</el-menu-item>
             <el-menu-item index="2">第二页</el-menu-item>
             <el-menu-item index="3">第三页</el-menu-item>
             <el-submenu index="4">
               <template slot="title">第四页</template>
               <el-menu-item v-for="(item, subIndex) in menus"
               index="item.index"
               :key="item.index">
               {{item.title1}}
             </el-menu-item>
           </el-submenu>
         </el-menu>
       </el-header>
       <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <h2>@copyright 2018</h2>
      </el-footer>
    </el-container>
  </el-container>
</div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return {
        activeIndex:'1',
        menus:[
        {
          index:0,
          menus:'1345',
          title1:'4-1',
          arr:[
          {"title":'1234'}
          ]
        },
        {
          index:1,
          menus:'1345',
          title1:'4-2',
          arr:[
          {"title":'1234'}
          ]
        },
        {
          index:2,
          menus:'1345',
          title1:'4-3',
          arr:[
          {"title":'1234'}
          ]
        }
        ]
      }
    },
    methods:{
      handSelect(key,keyPath){
        console.log(key,keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body,
#app{
  height: 100%;
}
#app>.el-container{
  height: 100%;
}
.el-menu{
  text-align:left;
}
a{
  text-decoration: none;
  color:rgb(64, 158, 255);
  display: inline-block;
  width: 100%;
}
</style>
