<template>
	<div class="product-list">
		<div class="screen-product">
			<div class="product-both">
				全部
			</div>
			<span class="fengexian">|</span>
			<div class="screen-btn" @click="showOrder">
				智能排序<span></span>
			</div>
			<div class="screen-order">
				<div>智能排序</div>
				<div>离我最近</div>
				<div>价格最低</div>
				<div>价格最高</div>
			</div>
		</div>
		<div class="product-item">
			<ul class="product-wrap">
			  <li 
			  	class="products" 
			  	v-for="item in productList"
			  	@click="gotoDetail(item.id)">
			  	<div class="product-img-wrap">
			  		<img :src="item.img"/>
			  	</div>
			  	<div class="prolist-inner">
			  		<div class="product-title">{{ item.img }}</div>
			  		<div class="product-price">￥{{ item.price }}</div>
			  	</div>
			  	
			  </li>
			</ul>
		</div>
	</div>
</template>

<script>
	const cache = {
		
	}
	export default{
		name:"ProductList",
		data(){
			return {
				productList:[],
				flag:true
			}
		},
		methods:{
			getCategoryListData(productId){
				//数据缓存
				if(Object.keys(cache).includes(productId)){
					this.productList = cache[productId]
				}else{
					this.$httpcategory.getProductList(productId)
							.then((res) => {
								this.productList = res.list;
								cache[productId] = res.list;
							})
				}
			},
			showOrder(){
				this.flag ? $(".screen-order").stop().show() : $(".screen-order").stop().hide();
				this.flag = !this.flag;
			},
			gotoDetail(id){
				this.$router.push("/detail/"+id);
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
		    	console.log(vm.$route);
		    	//调用方法这个路由的getCategoryListData方法
		    	vm.getCategoryListData(vm.$route.params.productId)
		    });
		},
		beforeRouteUpdate (to,from,next) {
			this.getCategoryListData(to.params.productId);
			next();
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.product-list{
		.screen-product{
			height: 10vw;
			border-bottom: 1px solid #ccc;
			position:relative;
			.product-both,.screen-btn{
				float: left;
				box-sizing: border-box;
				width: 49.5vw;
				line-height: 10vw;
				text-align: center;
			} 
			.screen-btn{
				span{
					width: 0;
				    height: 0;
				    font-size: 0;
				    vertical-align: 2px;
				    display: inline-block;
				    margin-left: 10px;
				    border-left: 1vw solid transparent;
				    border-right: 1vw solid transparent;
				    border-top: 1.6vw solid #000;
				    border-bottom: none;
				}
			}
			.fengexian{
				float: left;
				width: 1vw;
				line-height: 10vw;
				color: #CDCDCD;
			}
			.screen-order{
				display: none;
				position: absolute;
				bottom: -40vw;
				width: 100%;
				z-index: 666;
				div{
					background: #fff;
					border-bottom: 1px solid #ccc;
					height: 10vw;
					text-align: center;
					line-height: 10vw;
				}
				div:first-child{
					border-top: 1px solid #ccc;
				}
			}
		}
		.product-wrap{
		    
    		.products{
    			padding: 4vw;
    			border-bottom: 1px solid #e6e6e6;
    			height: 31vw;
    			overflow: hidden;
    			position: relative;
    			.prolist-inner{
    				position: relative;
    				float: left;
    				height: 31vw;
    				padding-left:2vw;
    				.product-title{
    					font-size: 4vw;
    					overflow: hidden;
					    text-overflow: ellipsis;
					    display: -webkit-box;
					    -webkit-line-clamp: 2;
					    -webkit-box-orient: vertical;
					    height: 12.7vw;
					    width: 40vw;
				        word-break: break-all;
					    margin-top: 1vw;
					    color: #333;
					    line-height: 1.5;
					    margin-bottom: 6vw;
    				}
    				.product-price{
    					color: red;
    					font-weight: 400;
    					font-size: 4vw;
    				}
    			}
    			.product-img-wrap{
    				float: left;
    				height: 31vw;
    				width: 50vw;
    				img{
    					width: 50vw;
    					height:31vw;
    				}
    			}
    		}
		}
	}
</style>