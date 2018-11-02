import Vue from 'vue'
import Router from 'vue-router'
import backIndex from '@/components/backIndex'
import videoControl from '@/components/videoControl'
import echart from '@/components/echart'
import documentFile from '@/components/documentFile'
import newPassage from '@/components/newPassage'
import demo from '@/components/demo'
import resume from '@/components/resume'
import computeor from '@/components/computeor'
import add from '@/components/add'
import login from '@/components/login'
import signup from '@/components/signup'
import allPost from '@/components/allPost'
import categoies from '@/components/categoies'
import media from '@/components/media'
import ankerIndex from '@/components/ankerIndex'
import ankerProduct from '@/components/ankerProduct'
import dashboard from '@/components/dashboard'


Vue.use(Router)

export default new Router({
  mode:'history',	
  routes: [
    {
      path: '/',
      name: 'backIndex',
      component: backIndex
    },
    {
   	  path:'/videoControl',
   	  name:'videoControl',
   	  component:videoControl
    },
    {
      path:'/echart',
      name:'echart',
      component:echart
    },
    {
      path:'/documentFile',
      name:'documentFile',
      component:documentFile
    },
    {
      path:'/newPassage',
      name:'newPassage',
      component:newPassage
    },
    {
      path:'/demo',
      name:'demo',
      component:demo
    },
    {
      path:'/resume',
      name:'resume',
      component:resume
    },
    {
      path:'/computeor',
      name:'computeor',
      component:computeor
    },
    {
      path:'/add',
      name:'add',
      component:add
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/allPost',
      name:'allPost',
      component:allPost
    },
    {
      path:'/categoies',
      name:'categoies',
      component:categoies
    },
    {
      path:'/media',
      name:'media',
      component:media
    },
    {
      path:'/ankerIndex',
      name:'ankerIndex',
      component:ankerIndex
    },
    {
      path:'/ankerProduct',
      name:'ankerProduct',
      component:ankerProduct
    },
    {
      path:'/signup',
      name:'signup',
      component:signup
    },
    {
      path:'/dashboard',
      name:'dashboard',
      component:dashboard
    }

  ]
})
