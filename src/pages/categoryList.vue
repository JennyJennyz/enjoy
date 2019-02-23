<template>
	<ul class="category-list-ul">
		<li 
			class="product"
			v-for="product in productData"
			:key="product.id"
			@click="gotoView(product.id)">
			<div class="img">
				<img :src="product.img" alt=""/>
			</div>
			<span class="title">xxxx</span>
		</li>
	</ul>
</template>

<script>
	//缓存对象，用于缓存查询到的CategoryList数据
	//key：使用categoryId
	//value：使用根据categoryId查询到的CategoryList数据
	const cache = {
		
	}
	
	export default{
		name:"CategoryList",
		data(){
			return {
				productData:[]
			}
		},
		methods:{
			//查询数据
			getCategoryListData(categoryId){
				//判断是否在缓存中是否有保存待请求的categoryId
				if(Object.keys(cache).includes(categoryId)){
					this.productData = cache[categoryId]
				}else{
					//发起ajax请求
					this.$httpcategory.getProductList(categoryId)
								.then((res) => {
									this.productData = res.list;
									cache[categoryId] = res.list;
								})
				}
				
			},
			gotoView(productId){
				this.$router.push("/product/"+productId);
			}
		},
		
//		watch:{
//			$route(to,from){
//				
//			}
//		}
		// 在渲染该组件的对应路由被 confirm 前调用
	    // 不！能！获取组件实例 `this`
	    // 因为当守卫执行前，组件实例还没被创建
		beforeRouteEnter (to, from, next) {
		    
		    next(vm => {
		    	//调用方法这个路由的getCategoryListData方法
		    	vm.getCategoryListData(vm.$route.params.categoryId)
		    });
		},
		beforeRouteUpdate (to,from,next) {
			this.getCategoryListData(to.params.categoryId)
			next();
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.category-list-ul{
		overflow: hidden;
		.product{
			    width: 32.8%;
			    float: left;
			    text-align: center;
			.img{
				img{
					width: 60px;
					height: 60px;
				}
			}
			.title{
				display: block;
				color: #333;
			    height: 35px;
			    margin-top: 2px;
			}
		}
	}
</style>