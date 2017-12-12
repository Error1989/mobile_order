/**
 * Created by Acer on 2017-12-12.
 */
let base_url = 'http://www.sikedaodi.com/jikebang/api/web/index.php?';

let url = {
  //登录接口
  login: base_url+'r=auth/login',
  //新增订单组件内提交订单数据的接口
  submitOrder: base_url+'r=customer/submit-order',
  //新增订单组件内获取商品数据的接口
  productList: base_url+'r=product/list',
  //新增订单组件内获取辅料数据的接口
  accessoryList: base_url+'r=product/accessory-list',
  //新增订单组件内获取收货人及地址信息的接口
  adressList: base_url+'r=customer/address-list',
  //新增订单组件内获取快递公司的接口
  expressList: base_url+'r=common/express-list',
  //查询订单组件内获取订单数据的接口
  order: base_url+'r=customer/my-orders',
  //订单详情组件内获取订单详细信息的接口
  orderDetail: base_url+'r=customer/order-detail',
  //订单详情组件内获取物流信息的接口
  expressInfo: base_url+'r=common/express-info',
};
module.exports = url;
