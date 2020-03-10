interface IGoodsData {
	supplyId: number
	storeName: string
}
// 接口返回内容
interface ICartAPI {
	'/customer/shopping-cart': IResponse<IGoodsData>
}
// 接口定义参数
interface ICartAPIParams {
	'/customer/shopping-cart': any
}
