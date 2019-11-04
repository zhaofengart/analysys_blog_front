import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home/Home'
import NewLoginhome from '@/Login/NewLoginhome'
import OldLoginhome from '@/Login/OldLoginhome'
import Articlehome from '@/Article/Article'
import '@/assets/styles/icon-font/iconfont.css'
import axios from 'axios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
    	path:'/newlogin',
    	name:'NewLoginhome',
    	component:NewLoginhome
    },{
    	path:'/oldlogin',
    	name:'OldLoginhome',
    	component:OldLoginhome
    },{
    	path:'/article',
    	name:'Articlehome',
    	component:Articlehome
    }
  ]
})
