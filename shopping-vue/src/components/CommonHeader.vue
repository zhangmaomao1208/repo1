<template>
  <el-header class="header">
  <div class="l-content">
    <h3 style="color:#fff">首页</h3>
  </div>
  <div class="r-content">
  <el-dropdown trigger="click" szie="mini">
    
    <span class="el-dropdown-link">
      <img :src="userImg" width="60px" height="40px" class="user" />
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>个人信息</el-dropdown-item>
      <el-dropdown-item>退出登录</el-dropdown-item>
    </el-dropdown-menu>
    <span>{{name}}</span>
  </el-dropdown>
</div>
</el-header>
</template>
<script>
  //import userImg from '@/assets/iamges/user.png'
export default {
  //props: ['name'],
  props:{
    name:{
      type:String,
      required:true
    }
  },
  data(){
    return{
      userImg: require("../assets/iamges/user.png")
    }
  }
  // props:{
  //   msg: {
  //     type: String,
      
  //   }
  
  // }
  }


</script>
<style scoped>
.el-header{
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.l-content{
  display: flex;
  align-items: center;
}
.r-content.user{
  
    width: 20px;
    height: 20px;
    border-radius: 50%;

}



</style>