<template>
	<div class="cart">
		<CartItem
			v-for="item in cart"
			:key="item.id"
			v-bind="item"
			></CartItem>
			<div class="info" >
				<mt-button type="danger">结算</mt-button>
				<p>合计：{{totalPrice}}元</p>
			</div>
	</div>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions,
		mapGetters
	} from "vuex"
	import CartItem from '../components/CartItem.vue'
	export default{
		name:"Cart",
		components:{
			CartItem
		},
		computed:{
			...mapState(['cart']),
			...mapGetters(['totalPrice'])
		}
	}
</script>

<style lang="scss" scoped>
	.cart{
		padding-top: 40px;
		padding-bottom: 120px;
	}
	.info{
		width: 100%;
		height: 60px;
		background: #fff;
		border-top: 1px solid #ccc;
		position: fixed;
		bottom: 55px;
		p{
			color: #ef4f4f;
			line-height: 60px;
			float: right;
			margin-right: 20px;
		}
		button{
			margin-top: 10px;
			margin-right: 20px;
			float: right;
		}
	}
</style>