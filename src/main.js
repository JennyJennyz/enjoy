// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Iconfont from './libs/font/iconfont.css'
import Jquery from './libs/jquery-1.11.3.js'
//import Swiper from 'swiper' 
import  VueAwesomeSwiper from 'vue-awesome-swiper'
import  'swiper/dist/css/swiper.css'
import store from './store'
//引入请求
import * as $http from './requests'
Vue.prototype.$http = $http
import * as $httpcategory from './requests/category.js'
Vue.prototype.$httpcategory = $httpcategory

import * as $instance from './requests/detail.js'

Vue.prototype.$instance=$instance


Vue.use(VueAwesomeSwiper)
//Vue.use(Swiper);

Vue.use(MintUI)
Vue.config.productionTip = false


//全局导航守卫
router.beforeEach((to,from,next) => {
	if(to.meta.isAuthCheck){//判断是否要权限才能进入的页面
		if(store.state.isLogin){//已登录
			next();
		}else{
			next({
				name:"login",
				params:{
					from:to
				}
			});
		}
	}else{
		next();
	}

});




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

