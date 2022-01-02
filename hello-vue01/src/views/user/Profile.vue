<template>

  <el-row class="userprofile" :gutter="20">
    <el-col :span="8" style="margin-top:20px"></el-col>
    <el-card shadow="hover">
      <div class="user">
        <img :src="userImg">
      </div>
      <div class="userInfo">
        <p class="name">admin</p>
        <p class="access">管理员</p>
      </div>
      <div class="login-info">
        <p>上次登陆时间:<span>2021-12-07</span></p>
        <p>上次登录地点:<span>哈尔滨</span></p>
      </div>
    </el-card>
    <el-col :span="16">
    </el-col>

  </el-row>

  
</template>
<script>
  export default{

    data(){
      return{
        userImg: require("../../assets/images/user.png"),
      }
    },
    name :"UserProfile"
  }
</script>
<style lang="scss" scoped>
.userprofile{
  align-items: left;
  .user{
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-radius: 20px;
    img{
      width: 80px;
      height: 45px;
      border-radius: 50px;
      margin-right: 40px;
    }
    &info{
      .name{
        font-size: 32px;
        margin-bottom: 10px;
      }
      .access{
        color: #999999;
      }
    }

  }
  .login-info{
    p{
      line-height: 28px;
      font-size: 14px;
      color: #999999;
      span{
        color: #666666;
        margin-left: 60px;
      }
    }
  }
}
 
  
</style>