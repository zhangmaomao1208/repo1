<template>
  <div>
    <el-container>
      <el-aside width="200px">
        
        <el-menu :default-openeds="['1','2']"
        default-active="2"
        class="el-menu-vertical-demo" 
        :collapse="isCollapse"
        min-height:100px
        >
        <h3>管理系统</h3>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-caret-right"></i>用户管理</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <!--name传组件名，params传递参数，需要对象，用v-bind绑定对象-->
                <router-link to="/user/profile">个人信息</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/user/list">用户列表</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title"><i class="el-icon-caret-right"></i>财务报销</template>
            <el-menu-item-group>
              <el-menu-item index="2-1"> 
                 <router-link to="/financial/expense">报销列表</router-link>
              </el-menu-item>
              <el-menu-item index="2-2">
                <router-link to="/financial/editfinancial">编辑账单</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-caret-right"></i>
              <router-link to="/goHome">回到首页</router-link></template>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right;font-size: 12px">
         
          <el-dropdown>
            <span style="font-size:12px;text-align:left">设置</span>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
           
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
    
        </el-header>

        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
   
      name: "Main"
  }
</script>

<style lang="scss" scoped>
.el-header{
  background-color: #2acaff;
  color: #333;
  line-height: 60px;
}

.el-aside{
  color: #333;
}
</style>
