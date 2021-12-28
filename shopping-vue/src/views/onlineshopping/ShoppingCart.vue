<template>
<div>
  <el-row class="goods" :gutter="20">
  <el-col :span="7" v-for="(item) in tabledata" :key="item.goodsId" :offset="1">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <div>        
			<span>{{item.goodsName}}</span><br> 
      </div>                   
			<div>                    
			<span>{{item.goodsPrice}}</span>  
      </div>        
    </el-card>
    </el-col>
</el-row>
    <div>
      <span>{{tabledata.couponDesc}}</span>
      <span>{{tabledata.couponId}}</span>
    </div>
</div>
</template> 
<!-- <template>
  <div>
    <h1>123</h1>
    <span>{{tabledata}}</span>
  </div>
</template> -->
<script>
import {getShoppingCart} from "@/api/getData.js";

export default{
  // components: {
  //   CommonHeader,
  //   CommonAside,
  // },
  
  data(){ 
    return{ 
      tabledata:[
      ] ,
    } 
  },
  mounted: function(){
    this.getparam(),
    this.getShopping(this.vid)
  },
  methods: {
    async getShopping(username){
      try {
        // alert(name)
        const result = await getShoppingCart(username);
        this.tabledata = result.data
        console.log(result.data)
        console.log(this.tabledata)
      } catch (error) {
        console.log(error)

      }
    },

    getparam(){
        this.vid=this.$route.params.IRL_itemId
       
      }
  }
}
</script>
<style scoped>
.el-card{
  font-size: 12px;
  text-indent: 2em;
  width: 300px;
  height: 360px;
  line-height: 20px;
  margin-bottom: 20px;
  border: 0;
}
img{
  width: 200px;
  height: 180px;
}
.goodPrice{
  color: red;
  font-size: 15px;
}
</style> 

