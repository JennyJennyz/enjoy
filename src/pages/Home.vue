<template>
<div class="home">
	<h2>今日推荐</h2>
	<p>全方位的生活指南，每天都有新乐趣</p>
	<div class="home-swiper">
		<mt-swipe :show-indicators="false">
		  <mt-swipe-item
		  	v-for="img in swiperImgs"
		  	:key="img.id">
		  	<dl>
		  	<dt><img :src="img.url"/></dt>
		  	<dd class="swiper-title">{{img.swipertitle}}</dd>
		  	<dd class="swiper-p">{{img.swiperp}}</dd>
		  	<dd class="swiper-detail">{{img.swiperdetail}}</dd>
		  </dl>
		  </mt-swipe-item>
		  <!--<mt-swipe-item>
		  	<dl>
		  	<dt><img src="../assets/1549852272340001.jpg"/></dt>
		  <dd class="swiper-title">吃吃吃</dd>
		  	<dd class="swiper-p">各式自助丰盛大合集，今天谁都别想瘦</dd>
		  	<dd class="swiper-detail">丰腴海鲜，日式放题，烧烤涮肉，无限吃采购爽</dd>
		  </dl>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<dl>
		  	<dt><img src="../assets/1550121013340002.jpg"/></dt>
		  <dd class="swiper-title">不打打打</dd>
		  	<dd class="swiper-p">各式自助丰盛大合集，今天谁都别想瘦</dd>
		  	<dd class="swiper-detail">丰腴海鲜，日式放题，烧烤涮肉，无限吃采购爽</dd>
		  </dl>
		  </mt-swipe-item>-->
	    </mt-swipe>
	</div>
	
	<!--free轮播-->

      <swiper :options="swiperOption" ref="mySwiper" class="free">
        <swiper-slide class="free-swiper"
        	v-for="fimg in freeswiperImgs"
		  	:key="fimg.id"><img :src="fimg.url"/>{{fimg.title}}
        </swiper-slide>
        <!--轮播按钮-->
        <!--<div class="swiper-pagination" slot="pagination"></div>-->
      </swiper>

	<!--free-->
	
	<!--列表页查看更多-->
	<div class="all-list">
		<div class="homeBeer">
			<div class="listTitle">
			<dl>
				<dt>优选美酒</dt>
				<dd>本周上架十款精品，十款新品</dd>
			</dl>
			<router-link to="/category/beer" >查看更多</router-link>
			</div>
			<ul class="beerlist">
				<li
					v-for="det in detail"
		  			:key="det.id"
		  			@click="gotoDetail(det.id)">
		  			<img :src="det.url"/></li>
			</ul>
		</div>
		<div class="homeFood">		
			<div class="listTitle">
			<dl>
				<dt>好味食品</dt>
				<dd>本周上架十款精品，十款新品</dd>
			</dl>
		<router-link to="/category/food" >查看更多</router-link>
		</div>
			<ul class="beerlist">
				<li
					v-for="det in detail"
		  			:key="det.id"
		  			@click="gotoDetail(det.id)"
		  			>
		  			<img :src="det.url"/></li>
			</ul>
		</div>
		<div class="homeGood">
			<div class="listTitle">
			<dl>
				<dt>良品好物</dt>
				<dd>本周上架十款精品，十款新品</dd>
			</dl>
			<router-link to="/category/good" >查看更多</router-link>
			</div>
			<ul class="beerlist">
				<li
					v-for="det in detail"
		  			:key="det.id"
		  			@click="gotoDetail(det.id)">
		  			<img :src="det.url"/></li>
			</ul>
		</div>
	</div>	
	<!--列表页查看更多-->
	
</div>
</template>

<script>
	export default{
		name:"Home",
		 data(){
		      return {
		      	swiperImgs:[],
		      	freeswiperImgs:[],
		      	detail:[],
		      	//以下轮播图
		        swiperOption: {
		          slidesPerView: 3,
		          spaceBetween: 30,
		          freeMode: true,
		          pagination: {
		            el: '.swiper-pagination',
		            clickable: true
		          }
		        }
		      }
   		},
   		//生命周期钩子函数
   		created(){
   			console.log(this);
   			this.$http.getHomeSwiper()
   				.then(res=>{
   					this.swiperImgs = res.data.res_body.imgs;
   				}),
   			this.$http.getFreeSwiper()
   				.then(res=>{
   					this.freeswiperImgs = res.data.res_body.img;
   				});	
   			this.$http.getDetail()
   				.then(res=>{
   					this.detail = res.data.res_body.img;
   				});		
   				
   		},
   		methods:{
   			gotoDetail(id){
   				console.log(id);
   			    this.$router.push({name:'detail',params:{id}});

   			}
   		}
	}
</script>

<style lang="scss" scoped>
@import'../libs/swiper/dist/css/swiper.min.css';
	.home{
		h2{
			margin-top:16vw;
			margin-bottom:3vw;
			font-weight: 900;
			font-size: 4.8vw;
			padding-left: 3.8vw;
			
		}
		p{
			color:#bababa ;
			font-size: 2.8vw;
			font-weight: normal;
			margin-bottom: 3vw;
			padding-left: 3.8vw;
		}
	}
	.home-swiper{
		width: 100vw;
		height: 80vw;
		border-bottom:1px solid #e9e9e9;
		img{
			width: 100vw;
			height:52.53vw ;
		}
		.swiper-title{
			margin-top: 3vw;
			color: #b93b3d;
			font-size: 3.67vw;
			padding-left: 3.8vw;
		}
		.swiper-p{
			color: black;
			font-size: 4.17vw;
			margin-top: 2.8vw;
			padding-left: 3.8vw;
		}
		.swiper-detail{
			color:#a4a4a4 ;
			font-size: 3.97vw;
			margin-top: 2.5vw;
			padding-left: 3.8vw;
		}
	}
	/*.swiper-container {
    width: 600px;
    height: 300px;
}  */

/*轮播图样式*/
	.free-swiper{
		width: 100px;
		height: 150px;
		background: gray;
		img{
			width: 100px;
			height: 150px;
		}
		
	}

	.free{
		overflow:hidden;
		height: 40vw;
		margin-top:5vw;
		margin-bottom:10vw;
		border-bottom:1px solid #e9e9e9;
		
	}
	.beerlist{
		display: flex;
		justify-content: space-between;
		align-items: center;
		align-content: center;
		overflow: hidden;
		width: 100%;
	}
	.listTitle{
		display: flex;
		justify-content: space-between;
		align-content: center;
		align-items: center;
		dl{
			
			dt{
				margin-top: 5vw;
				font-weight: 900;
				font-size: 5vw;
				margin-bottom: 4vw;
				padding-left: 4vw;
			}
			dd{
				font-size: 4vw;
				margin-bottom: 4vw;
				color:gray;
				padding-left: 4vw;
			}
		}
		a{
			text-decoration: none;
			color: #b93b3d;
			font-size: 3.67vw;
			padding-right: 4vw;
		}
	}
	.all-list{
		margin-bottom: 5vw;
	}
</style>