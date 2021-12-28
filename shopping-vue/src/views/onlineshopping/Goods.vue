<template>
  <div>
  <el-row class="goods" :gutter="20">
  <el-col :span="7" v-for="(item) in tabledata" :key="item.goodsId" :offset="1">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <div style="padding: 10px;" class="goods">
        <img :src="item.goodsImg" />   
      </div> 
      <div>        
			<span>{{item.goodsName}}</span><br> 
      </div>                   
			<div class="goodPrice">                    
			<span>{{item.goodsPrice}}</span>  
      </div>
      <div>
        <span>{{item.goodsDesc}}</span>
      </div>
      <div>
        <span>{{item.goodsNumber}}</span>
      </div>
      <div>                    
			<span>{{item.goodsType}}</span>  
      </div>    
      <div>                    
			<span>{{item.loginName}}</span>  
      </div>         
       <div>
        <el-button type="text" class="button" @click="addGoods(item)">加入购物车</el-button>                
			</div> 
    </el-card>
    </el-col>
    <template>
      <el-button size="mini"
      @click="viewdetail(name)">查看购物车
      <span>{{name}}</span>>
      </el-button>
      
    </template>
</el-row>

  </div>
</template>
<script>
import {saveOrder} from "@/api/getData.js";
import Goods from '@/views/onlineshopping/Goods'
import ShoppingCart from '@/views/onlineshopping/ShoppingCart'

  import goods1 from '@/assets/iamges/goods1.png'
  import goods2 from '@/assets/iamges/goods2.png'
  import goods3 from '@/assets/iamges/goods3.png'
  import goods4 from '@/assets/iamges/goods4.png'
  import goods5 from '@/assets/iamges/goods5.png'
  import goods6 from '@/assets/iamges/goods6.png'
  export default{
    components:{
      Goods,
      ShoppingCart
    },
    props:{
           name:{
            type:String,
            required:true
          }
        },
    data(){ 
      return{ 
        
        //goodsImg1: require('../assets/iamges/goods1.png'),
        //goodsImg2: require('../assets/iamges/goods2.png'),
        //goodsImg3: require('../assets/iamges/goods3.png'),
        //goodsImg4: require('../assets/iamges/goods4.png'),
        tabledata:[
          {
            goodsId:'1',
            goodsImg: goods1,
            goodsName: 'vivo iQOO 8 Pro 12GB+256GB 传奇版',
            goodsPrice: '¥4999',
            goodsDesc:'【特惠200，到手价4999！尊享12期免息+赠iQOO耳机+PLUS赠半年延保卡】',
            goodsNumber:'6000+',
            goodsType: '3c',
            loginName: this.name
          },
          {
            goodsId:'2',
            goodsImg: goods2,
            goodsName: '旺旺大礼包650g',
            goodsPrice: '¥43.80',
            goodsDesc:'品种齐全 大量现货 支持团购批发 量大优惠',
            goodsNumber:'7000+',
            goodsType: 'foods',
            loginName: this.name
          },{
            goodsId:'3',
            goodsImg: goods3,
            goodsName: '麻辣王子辣条',
            goodsPrice: '¥19.90',
            goodsDesc:'地道网红麻辣湖南特产小零食儿时怀旧大礼包休闲食品源自辣条发源地湖南平江',
            goodsNumber:'50000+',
            goodsType: 'foods',
            loginName: this.name
          },{
            goodsId:'4',
            goodsImg: goods4,
            goodsName: '李宁冬季魅影男子反光回弹支撑篮球专业比赛鞋ABAR127',
            goodsPrice: '¥436',
            goodsDesc:'圣诞礼遇季超值特惠，立即进店抢购',
            goodsNumber:'20000+',
            goodsType: 'shoes',
            loginName: this.name
          },{
            goodsId:'5',
            goodsImg: goods5,
            goodsName: 'GXG男装【生活系列】',
            goodsPrice: '¥399',
            goodsDesc:'21年秋季新款时尚卡通印花圆领卫衣黑色 170/M',
            goodsNumber:'5000+',
            goodsType: 'clothes',
            loginName: this.name
          },{
            goodsId:'6',
            goodsImg: goods6,
            goodsName: '青岛啤酒',
            goodsPrice: '¥98',
            goodsDesc:'全家福礼盒装 5种人气单品组合，关注店铺抽全家福礼盒',
            goodsNumber:'50000+',
            goodsType: 'beers',
            loginName: this.name
          }
        ]
      }
    },


    methods:{
      addGoods(tabledata){
       alert(tabledata.goodsName),
        saveOrder(
        
         tabledata.goodsId,
         tabledata.goodsName,
         tabledata.goodsPrice,
         tabledata.goodsDesc,
         tabledata.goodsNumber,
         tabledata.goodsType,
         tabledata.loginName
          
       ).then(res=>{
         alert(res.data);
       })

      },
      viewdetail:function(username){
        alert(username)
        this.$router.replace({name:'ShoppingCart' , params:{IRL_itemId: username}});

      },

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

/* .el-button{
  right: auto;
  left: 0%;
} */


</style>
