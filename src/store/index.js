import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
//vuex插件，实现修改购物车后保存localstorage
const saveStorage = store =>{
	store.subscribe((mutation,state)=>{
		console.log("修改成功")
		window.localStorage.setItem('cart',JSON.stringify(state.cart))
	})
}


export default new Vuex.Store({
	//strict:true,
	state:{
  		cart:JSON.parse(localStorage.getItem('cart'))||[],
  		isLogin:window.localStorage.getItem("token") != null
	},
	plugins:[saveStorage],
	getters:{
		totalPrice(state){
			return state.cart.reduce((result,curr)=>result + curr.amount * curr.price,0)
		}
	},
	mutations:{//修改state的方法
		//mutations中定义的方法，都有两个参数
		//第一个参数固定为state
		//第二个参数为方法所需要的额外的一些数据
		//向购物车数组中保存加入购物车的商品对象
			addCartItem(state, item) {
			const has = state.cart.some(curr => curr.id == item.id)
			if (has) {
				state.cart = state.cart.filter(curr => {
					
					if (curr.id == item.id)
						curr.amount += item.addnum
					return true
				})
			} else {
				item.amount = item.addnum
				state.cart.push(item)
			}
		},
	
		// 加数量
		addAmount(state, id) {
			state.cart = state.cart.filter(curr => {
				if (curr.id == id)
					curr.amount += 1;
				return true
			})
		},
	
		// 减数量
		minusAmount(state, id) {
			state.cart = state.cart.filter(curr => {
				if (curr.id == id && curr.amount > 1)
					curr.amount -= 1;
				return true
			})
		},
		// 删除
		delCartItem(state, id) {
			state.cart.filter(curr => {
				if (curr.id == id)
					state.cart.splice(state.cart.indexOf(curr),1)
					//console.log(state.cart.indexOf(curr))
				return true
			})
		},
		modifyLoginState(state,isLogin){
			state.isLogin = isLogin
		},
	}
})
