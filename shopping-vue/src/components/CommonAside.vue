<template>
  <el-aside  class="aside" width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1','2']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>网上购物导航</template>
        <el-menu-item-group>
          <template slot="title">购物界面</template>
          <el-menu-item index="1-1">
            <router-link to="{path:'/Goods'}">商品列表</router-link>
          </el-menu-item>
         
          <el-menu-item index="1-2">
          <router-link to="{path:'/ShoppingCart'}">购物车</router-link>
        </el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>首页</template>
        <el-menu-item-group>
          
          <el-menu-item index="2-1">
            <router-link to="/main">回到首页</router-link>
          </el-menu-item>
        </el-menu-item-group>
        </el-submenu>
        
      </el-submenu>

    </el-menu>
  </el-aside>
</template>
<style scoped>
.el-aside {
  background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 100%;
}
</style>