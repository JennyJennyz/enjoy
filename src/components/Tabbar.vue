<template>
	<div class="tabbar">
		<!--<router-link :to="{name:'home'}">首页</router-link>
		<router-link :to="{name:'category'}">分类</router-link>
		<router-link :to="{name:'cart'}">购物车</router-link>
		<router-link :to="{name:'mine'}">我的</router-link>-->
		
		
		 <mt-tabbar fixed v-model="selected">
		 	<mt-tab-item 
		 		v-for="nav in navs"
		 		:key="nav.path"
		 		:id="nav.name">
		 		
	 			<i :class="`iconfont ${nav.meta.navIcon}`"></i>
	 			<!--<img slot="icon" src="../assets/100x100.png">-->	

			  </mt-tab-item>	 
			  </mt-tabbar>
	</div>
</template>

<script>
	const mapPath = {
		"categorylist":"category"
	}
	import routes from "../router/routes.js"
	export default{
		name:"Tabbar",
		data(){
			return{
				//动态赋值
				selected: mapPath[this.$route.name] || this.$route.name,
				navs:routes.filter(curr => curr.meta.isNav)
			}
		},
		watch:{
			//监视selected的变化然后跳转页面
			selected(newValue,oldValue){//新值 旧值
				console.log(newValue,oldValue);
				this.$router.push({name:newValue});
				//编程式导航
				
			}
		}
	}
</script>

<style>
	.tabbar{
		height: 40px;
	}
	 .iconfont{
	 	width: 10px;
	 	height: 10px;
	 	font-size: 25px;
	 	line-height: 40px;
	 }
	
</style>