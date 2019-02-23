import axios from 'axios'

//创建实例
 const ajax = axios.create({
 	baseURL:"http://rap2api.taobao.org/app/mock/127018"
 })

//请求首页的轮播图
export const getHomeSwiper = () => {
	return ajax.get("/url")
}

export const getFreeSwiper = () => {
	return ajax.get("/freeswiper")
}

//详情页请求
export const getDetail = () => {
	return ajax.get("/detail")
}