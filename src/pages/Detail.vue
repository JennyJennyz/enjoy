<template>
	<div>
		<div class="photo">
			<mt-swipe :auto="4000">
			  <mt-swipe-item
			  	v-for="img in swiperImgs"
			  	:key="img.id">
			  	<img :src="img.url"/>
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<main>
			<div class="shop">
				<p>{{information.title}}{{information.number}}<i class="iconfont icon-xinaixin" @click="good"></i></p>
				<p>{{information.tasty}}</p>
				<p>{{information.price}}元</p>
			</div>
			<div class="information">
				<h2>商户信息</h2>
				<p>{{information.title}}</p>
				<p><i class="iconfont icon-location"></i> {{information.location}}</p>
				<p><i class="iconfont icon-dianhua1"></i> {{information.phonenumber}}</p>
			</div>
		</main>
		<footer>
			<div class="footer-top">
				<div id="choice">
					已选择：{{information.number}}
				</div>
				<div id="change">
					<div class="page-popup-wrapper">
				      <mt-button @click.native="popupVisible4 = true" size="small" @click="save">切换商品 <i class="iconfont icon-arrLeft-fill1" ></i></mt-button>
				   </div> 
				</div>
			</div>
			<div class="footer-bottom">
				<div id="seecar">
					<i class="iconfont icon-gouwuchekong" @click="goTocar"></i>
				</div>
				
				<div class="page-toast">
				    <div class="page-toast-wrapper">
						<mt-button class="add"  @click.native="openToastWithIcon" @click="addCartItem(information)">
							加入购物车
						</mt-button>
					</div>
				  </div>
				
			</div>
			<mt-popup v-model="popupVisible4" position="bottom" class="mint-popup-4">
		      <div class="poptop"><p>已选择：{{information.number}}（{{amount}} 份）</p> <p id="close" @click="close">关闭<i class="iconfont icon-arrLeft-fill"></i></p></div>
		      <div class="popmiddle">
		      	<div class="price">
		      		<p>{{information.number}}</p>
		      		<p>{{information.price}}元</p>
		      	</div>
		      </div>
		      <div class="popbottom">
		      	<p>选择数量</p>
		      	<div class="shop-number">
		      		<mt-button :disabled="amount <= 1" @click="minusAmount">-</mt-button>   
		      		{{amount}} 
		      		<mt-button @click="addAmount">+</mt-button>
		      	</div>
		      </div>
		      <mt-button type="danger" class="makesure" @click="makesure">确定</mt-button>
		    </mt-popup>
		</footer>
	</div>
</template>

<script>
	import{
		mapMutations
	}from 'vuex'
	import { Toast } from 'mint-ui';
	var colorflag=false
	var amount=1
	var lastnum
	export default{
		name:"Detail",
		data(){
			return{	
				amount,
				information:[],
				swiperImgs:[],
				popupVisible4: false,
        		buttonBottom: 0
			}
		},
		created(){
			this.$instance.getDetail(this.$route.params.detailId)
					  .then(res=>{
					  	console.log(res)
					  	this.swiperImgs=res.data.foodimg
					  	this.information=res.data
					  	this.information.id=this.$route.params.detailId
					  })
		},
		methods:{
			...mapMutations(['addCartItem']),
			close(){
				this.amount = lastnum
				$(".v-modal").click()
			},
			openToastWithIcon(){
		        Toast({
		          message: '操作成功',
		          iconClass: 'mintui mintui-success'
		        })
		    },
			goTocar(){
				this.$router.push({name:"cart"})
			},
			save(){
				lastnum = this.amount
				return lastnum
			},
			addAmount(){
				this.amount += 1				
			},
			minusAmount(){
				if(this.amount>1){
					this.amount -= 1
				}
			},
			makesure(){
				$(".v-modal").click()
				this.information.addnum = this.amount
				console.log(this.information.id)
			},
			good(){
				if(!colorflag){
					$(".icon-xinaixin").addClass("icon-aixin1").removeClass("icon-xinaixin")
					$(".icon-aixin1").css({"color":"red"})
					colorflag=true
				}else{
					$(".icon-aixin1").addClass("icon-xinaixin").removeClass("icon-aixin")
					$(".icon-xinaixin").css({"color":"black"})
					colorflag=false
				}
			}
		}
			
			
	}
</script>

<style scoped >
	*{margin: 0;padding: 0;box-sizing: border-box;}
	ul li{list-style: none;}
	a{text-decoration: none;}
	
	html,body{
		height: 100%;
		width: 100%;
	}
	.photo{
			margin-top: 40px;
			height: 66.67vw;
			background: #CCCCCC;
	}
	.photo .mint-swipe img{
		width: 100vw;
		height: 66.67vw;
	}
	.shop{
		height: 44vw;
		overflow: hidden;
		border-bottom:1vw solid #eee;
	}
	.shop i{
		margin-left: 5vw;
	}
	.shop p:nth-child(1){
		margin-top: 3.2vw;
		font-size: 6vw;
		margin-left: 5.33vw;
		line-height: 10vw;
	}
	.shop p:nth-child(2){
		font-size: 5vw;
		color: #c1c3c7;
		margin-left: 5.33vw;
		line-height: 10vw;
	}
	.shop p:nth-child(3){
		font-size: 5vw;
		color: #fc3838;
		margin-left: 5.33vw;
		line-height: 10vw;
	}
	.information{
		height: 90.4vw;
		overflow: hidden;
	}
	.information h2{
		font-size: 6vw;
		text-align: center;
		margin-top: 3.2vw;
	}
	.information p{
		margin-left: 5.33vw;
		margin-right: 5.33vw;
		line-height: 12vw;
		border-bottom: 1px solid #eee;
	}
	.information p:nth-child(2){
		margin-top: 12vw;
		font-size: 6vw;
	}
	.information p:nth-child(3){
		font-size: 4vw;
	}
	.information p:nth-child(4){
		font-size: 4vw;
	}
	footer{
		height: 30.4vw;
		width: 100vw;
		background: yellow;
		position: fixed;
		bottom:0;
	}
	.footer-top{
		height:13.6vw;
		background:#fff;
		font-size: 3.2vw;
		border-top:1px solid #ccc;
		overflow: hidden;
	}
	.footer-top #choice{
		height: 13.6vw;
		line-height: 13.6vw;
		margin-left: 5.33vw;
		float: left;
	}
	.footer-top #change{
		border: none;
		width: 24w;
		height: 13.6vw;
		
		margin-right: 3vw;
		float: right;
	}
	.footer-top #change button{
		background: #fff;
		width: 24vw;
		margin-top: 3vw;
		
	}
	.footer-top #change button i{
		font-size: 18px;
	}
	.footer-bottom{
		height: 16.8vw;
		background: #fff;
		font-size: 4.8vw;
		line-height: 16.8vw;
		text-align: center;
		border-top:1px solid #ccc;
	}
	.footer-bottom #seecar{
		width: 20vw;
		height: 16.8vw;
		float: left;
	}
	.footer-bottom #seecar i{
		font-size: 8vw;
	}
	.footer-bottom .add{
		width: 80vw;
		height: 16.8vw;
		float: left;
		background: #ffb22a;
		color: #fff;
		border:none;
	  	border-radius: 0;
	}
	
	@component-namespace page {
    @component popup {
      @descendent wrapper {
        padding: 0 20px;
        position: absolute 50% * * *;
        width: 100%;
        transform: translateY(-50%);
        button:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
  }
	  .mint-popup-4{
	  	width: 100vw;
	  	height: 74.67vw;
	  }
	  .poptop{
	  	padding:0 5.33vw;
	  	border-top: 1px solid #CCCCCC;
	  	height: 10.67vw;
	  }
	  .poptop p:nth-child(1){
	  	line-height: 10.67vw;
	  	float: left;
	  }
	  .poptop p:nth-child(2){
	  	line-height: 10.67vw;
	  	float: right;
	  }
	  .popmiddle{
	  	padding:0 5.33vw;
	  	border-top: 1px solid #CCCCCC;
	  	height: 24vw;
	  	width: 100vw;
	  	overflow: hidden;
	  }
	  .popmiddle input{
	  	float: left;
	  	margin-top: 11vw;
	  }
	  .popmiddle .price{
	  	height: 12vw;
	  	margin-top: 6vw;
	  }
	  .popmiddle p{
	  	line-height:6vw;
	  }
	  .popbottom{
	  	padding:0 5.33vw;
	  	border-top: 1px solid #CCCCCC;
	  	height: 24vw;
	  }
	  .popbottom p{
	  	float: left;
	  	line-height: 24vw;
	  }
	  .popbottom .shop-number{
	  	float: right;
	  	margin-top: 9vw;
	  }
	  .popbottom .shop-number button{
	  	width: 6vw;
	  	height: 6vw;
	  	background: #fff;
	  	border:1px solid #ccc;
	  }
	  .makesure{
	  	width: 100vw;
	  	height: 16vw;
	  	border:none;
	  	border-radius: 0;
	  }
	  
	  @component-namespace page {
    @component toast {
      @descendent wrapper {
        padding: 0 20px;
        position: absolute 50% * * *;
        width: 100%;
        transform: translateY(-50%);
        button:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
  }
</style>