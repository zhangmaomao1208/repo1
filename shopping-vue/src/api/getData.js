import axios from '../request'


export const saveOrder = (goodsId,goodsName,goodsPrice,goodsDesc,goodsNumber,goodsType,loginName) => axios.post("/shoppingCart?taskId=addShoppingCart",{
  "goodsId":goodsId,
  "goodsName":goodsName,
  "goodsPrice":goodsPrice,
  "goodsDesc":goodsDesc,
  "goodsNumber":goodsNumber,
  "goodsType":goodsType,
  "loginName":loginName

  
})
export const getShoppingCart = (loginName)=> axios.post("shoppingCart?taskId=renderShoppingCart",{
    "loginName":loginName
  
})