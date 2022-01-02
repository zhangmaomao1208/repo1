import Vue from 'vue';
import Router from 'vue-router';
import Main from '../views/Main';
import Login from '../views/Login';
import UserList from '../views/user/List';
import UserProfile from '../views/user/Profile';
import NotFound from '../views/NotFound';
import UserExpense from '../views/financial/Expense';
import UserEditFinancial from '../views/financial/EditFinancial';
Vue.use(Router);
export default new Router({
  mode:'history',
  routes:[
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/main',
      component:Main,
      props:true,
      children:[
        //path来接收绑定的对象
        {path:'/user/profile',
        name:'UserProfile',
        component:UserProfile,
        props:true},
        {path:'/user/list',component:UserList},
        {path:'/financial/expense',component:UserExpense},
        {path:'/financial/editfinancial',component:UserEditFinancial}
      ]
    },{
      path: '/login',
      component:Login
    },{
      path:'/goHome',
      redirect:'/main'
    },{
      path:'*',
      component:NotFound
    }
  ]
});
