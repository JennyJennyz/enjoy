<template>
	<div class="mine">
		<!--mine头像-->
		<div class="minePic">
		<dl>
			<dt><img src="../assets/a1.png"/></dt>
			<dd>sdasdasd</dd>
		</dl>
		</div>
		<!--会员权益-->
		<div class="custom">
			<dl>
				<dt>会员权益</dt>
				<dd>开通会员每月平均可以多帮你赚2046元</dd>
			</dl>
			
			
			<ul class="custom-part">
				<li><img src="../assets/z1.jpg"/></li>
				<li><img src="../assets/z2.jpg"/></li>
				<li><img src="../assets/z3.jpg"/></li>
				<li><img src="../assets/z4.jpg"/></li>
			</ul>
		</div>
		
		<div class="otherpart">我的订单</div>
		
		<div class="otherpart">我的优惠卷</div>
		
		<div class="otherpart">地址管理</div>
		
	</div>

</template>

<script>
	export default{
		name:"Mine"
	}
</script>

<style lang="scss" scoped>
	.mine{
		background-color: #f6f6f6;
		min-height: 600px;
	}
	.minePic{
		background: black;
		height: 50vw;
		dl{
			img{
			position: relative;
			left: 40vw;
			top: 10vw;
			width: 20vw;
			height: 20vw;
			}
			dd{
			margin-top: 13vw;
			color: white;
			text-align: center;
			}	
		}
		
	}
	.custom-part{
		display: flex;
		justify-content: space-around;
		align-content: center;
		align-items: center;
		height: 25vw;
		margin-top: 6vw;
		li{
		width: 15vw;
		height: 15vw;
		border-radius: 50%;
		background-color: #fff4e4;
		img{
			padding-left: 5vw;
			padding-top: 5vw;
			}
		}
	}
	.custom{
		background: white;
		height: 50vw;
		margin-top: 3vw;
		
		dl{
			dt{
				margin-bottom: 3vw;
				padding-top: 3vw;
				padding-left: 3vw;
			}
			dd{
				font-size: 12px;
				padding-left: 3vw;
				color: gray;
				}
		}
	}
	.otherpart{
		height: 13vw;
		background: white;
		margin-bottom: 3vw;
		margin-top: 3vw;
		line-height: 13vw;
		padding-left: 3vw;
		font-size: 4vw;
	}
</style>