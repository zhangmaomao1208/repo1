import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Main from '../views/Main'
import Goods from '@/views/onlineshopping/Goods'
import CommonHeader from '@/components/CommonHeader'
import CommonAside from '@/components/CommonAside'
import ShoppingCart from '@/views/onlineshopping/ShoppingCart'

Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component:Login
    },
    {
      path: '/main/:name',
      name: 'Main',
      component: Main,
      props: true,
      children:[
     {
        path: '',
        name: 'ShoppingCart',
        component: ShoppingCart
      },
      {
        path:'',
        name:'Goods',
        component: Goods
      },
    //     //path来接收绑定的对象
    //     {
    //       path: '/',
    //       name: 'goods',
    //       component: () => import('@/views/Goods')
    //     },
      
    //   {
    //     path: '../components/GoodsType',
    //     name: 'GoodsType',
    //     component: GoodsType
    //   },
    //   {
    //     path: '../components/GoodsIntroduce',
    //     name: 'GoodsIntroduce',
    //     component: GoodsIntroduce
    //   },
    //   {
    //     path: '../components/CommonHeader',
    //     name: 'CommonHeader',
    //     component: CommonHeader,
    //     props: true

    //   }
     
    ]
  },
    {
      path:'/goHome',
      redirect:'/main'
    }
    // {
    //   path: '/goods',
    //   name: 'Goods',
    //   component: Goods

    // }
  ]
});
