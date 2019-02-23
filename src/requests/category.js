import axios from "axios";
import { Indicator,Toast } from 'mint-ui';

//创建一个axios实例
const ajaxCategory = axios.create({
	baseURL:'http://148.70.25.70:8080/app/mock/17'
})

//添加一个请求拦截器
// 添加请求拦截器
ajaxCategory.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    Indicator.open({
    	text: '加载中...',
  		spinnerType: 'fading-circle'
    });
    return config;

});

//只返回res_body数据
ajaxCategory.interceptors.response.use(res => {
    // 在发送请求之前做些什么
    Indicator.close();
    //判断返回的数据是否正常
    if(res.data.res_code === 1){
    	//只返回res_body
    	return res.data.res_body;
    }else{
    	 Toast({
		  message: '提示,数据操作异常',
		  position: 'bottom',
		  duration: 5000
		});
    }

});



//请求分类页面
export const getCategoryList = () => {
	return ajaxCategory.get('/api/categorylist')
}

//请求分类列表
export const getProductList = (categoryId) => {
	return ajaxCategory.get("/api/productlist?categoryId=" + categoryId)
}

//请求列表
export const getProductListData = (productId) => {
	return ajaxCategory.get("/api/productlist?productId=" + productId);
}

////发送验证码
//export const getMes = () => {
//	return ajax.get("/api/mes")
//}

//判断用户是否正确
export const postLogin = ({username,password}) => {
	return ajaxCategory.post("/api/login")
}
