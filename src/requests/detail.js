import axios from 'axios'

const instance = axios.create({
	baseURL:'http://rap2api.taobao.org/app/mock/121891'
})

//请求详情页数据
export const getDetail=(detailId)=>{
	return instance.get('/url?detailId='+detailId)
}

