import Home from "@/pages/Home.vue"
import Category from "@/pages/Category.vue"
import Cart from "@/pages/Cart.vue"
import Mine from "@/pages/Mine.vue"
import Tabbar from "@/components/Tabbar.vue"
import AppHeader from "@/components/AppHeader.vue"
import Detail from "@/pages/Detail.vue"
import CategoryList from "@/pages/Categorylist.vue"
import ProductList from "@/pages/ProductList.vue"
import Login from "@/pages/Login.vue"


//@=..


const routes = [
{
	path:'/',
	redirect:"/home",
	meta:{
		isNav:false
	}
},{
	//详情页
    	path:"/detail/:detailId",
    	name:"detail",
    	components:{
    		main:Detail,
    		header:AppHeader
    	},
    	meta:{
    		navTitle:"详情",
    		isNav:false
    	}
    },
{
	//主页
	path:"/home",
	name:"home",
	components:{
		header:AppHeader,
		main:Home,
		tabbar:Tabbar,		
	},
	meta:{
		navTitle:"首页",
		isNav:true,
		navIcon:"icon-zhuye"
	}
},{
	//列表页
	path:"/category",
	name:"category",
	components:{
		header:AppHeader,
		main:Category,
		tabbar:Tabbar
		
	},
	meta:{
		navTitle:"分类",
		isNav:true,
		navIcon:"icon-jifenfenlei"
	},
	//分类中的子页面
	children:[
		{
			//需要带入id	
			path:":categoryId",
			name:"categorylist",
			components:{
				default:CategoryList
			}
		}
	]
},{
	//购物车
	path:"/cart",
	name:"cart",
	components:{
		header:AppHeader,
		main:Cart,
		tabbar:Tabbar
		
	},
	meta:{
		navTitle:"购物车",
		isNav:true,
		navIcon:"icon-gouwuchekong",
		isAuthCheck:true
	}
},{
	path:"/mine",
	name:"mine",
	components:{
		main:Mine,
		tabbar:Tabbar
		
	},
	meta:{
		navTitle:"我的",
		isNav:true,
		navIcon:"icon-yonghu1",
		isAuthCheck:true
	}
},{
	path:"/product/:productId",
	name:"product",
	components:{
		header:AppHeader,
		main:ProductList,
		tabbar:Tabbar
	},
	meta:{
		isNav:false
	}
},{
	path:"/login",
	name:"login",
	components:{
		header:AppHeader,
		main:Login
	},
	meta:{
		isNav:false
	}
}
];

export default routes;

