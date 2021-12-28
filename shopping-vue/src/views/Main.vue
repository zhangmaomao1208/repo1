<template>

<div>
<el-container>
  <el-header>
    
    <common-header :name="name"></common-header>
    
  </el-header>
<el-container>
<el-aside width="250px">
  <common-aside></common-aside>
</el-aside>
  <el-main>
    <goods :name="name"></goods> 
    <!-- <router-view><shoppingcart></shoppingcart></router-view> -->
  </el-main>
 
 <!-- <shopping-cart :name="name"></shopping-cart> -->
  
 
</el-container> 
</el-container>
</div> 
</template>
<script>
// import Goods from '@/views/onlineshopping/Goods'
// import ShoppingCart from '@/views/onlineshopping/ShoppingCart'
import CommonHeader from '../components/CommonHeader.vue'
import CommonAside from '@/components/CommonAside.vue'

export default {
  // props: ['name'],
  props:{
    name:{
      type:String,
      required:true
    }
  },
 
  name: "Main",
  components: {
    CommonHeader,
    CommonAside,
    // Goods,
    // ShoppingCart
   
  },
  // data(){
  //   return{
  //     msg: this.name
  //   }
  // }
  // mounted:function(){
  //   this.onsubmit(),
  //   alert(this.name)
  // },
  // methods:{
  //   onsubmit(){
  //     this.$router.push("/CommonHeader/"+this.name);
  //   }
    
  // }
}
</script>
<style scoped>
.el-header{
  background-color: #2acaff;
  color: #333;
 
 
}
.el-main{
  padding-top: 0;
}
</style>
