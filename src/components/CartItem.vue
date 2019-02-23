<template>
	<div class="cart-item">
		<div class="item-img">
			<img :src="carimg"/>
		</div>
		<p class="item-title">{{title}}</p>
		<p class="item-number">规格：{{number}}</p>
		<p class="item-price">单价：{{price}}元</p>
		<div class="item-amount">
			<mt-button  :disabled="amount<=1" @click="minusAmount(id)">-</mt-button>
				{{amount}}
			<mt-button  @click="addAmount(id)">+</mt-button>
			<mt-button type="danger" @click="delCartItem(id)">X</mt-button>
		</div>
		
	</div>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default{
		name:'CartItem',
		props:['carimg','title','price','amount','id','number'],
		methods:{
			...mapMutations(['addAmount','minusAmount','delCartItem'])
		}
	}
</script>

<style scoped lang="scss">
	.cart-item{
		p:nth-child(3){
			font-size: 12px;
			color: #ccc;
		}
		p:nth-child(4){
			font-size: 12px;
			color: red;
		}
		overflow: hidden;
		height: 100px;
		border: 1px solid #ccc;
		margin: 20px;
		line-height:18px;
		div{
			float: left;
		}
		.item-img{
			margin-right: 40px;
			float: left;
			height: 100px;
			width: 100px;
			img{
				width: 100%;
				
			}
		}
		button{
			margin: 5px;
			height: 30px;
			font-size: 14px;
		}
	}
	
</style>