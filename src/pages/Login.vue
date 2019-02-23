<template>
	<div class="login">
		<h1><img src="../assets/login.png"/></h1>
		<form>
			<input type="tel" name="telnum" id="telnum" value="" placeholder="手机号"/>
			<p class="mestext-wrap">
				<input  class="mestext" type="text" name="mes" id="mes" value="" placeholder="短信验证码"/>
				<input  class="getmes" type="button" @click.stop="getMes" value="获取验证码"/>
			</p>
			<input class="login-btn" type="button" name="loginbtn" id="loginbtn" value="登录" 
				@click.stop="login"/>
		</form>
		<div class="tips">
			<p>未注册的用户登录后自动创建账户</p>
			<p> 登录即表示您同意<a href="#">用户协议</a></p>
		</div>
	</div>
</template>

<script>
	import {
		mapMutations
	}from 'vuex'
	
	export default {
		name:"Login",
		data(){
			return {
				username:"",
				mes:""
			}
		},
		methods:{
			...mapMutations(['modifyLoginState']),
			login(){
				this.$httpcategory.postLogin(telnum)
							.then(res => {
								this.modifyLoginState(true);
								window.localStorage.setItem("loginUsername",res.username);
								window.localStorage.setItem("token",res.token);
								this.$router.push(this.$route.params.from.path);
							})
			},
			getMes(){
//				this.$http.getMes()
//							.then(res => {
//								this.mes = res.mes
//							})
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.login{
		h1{
			margin-top: 13.06vw;
			text-align: center;
			margin-bottom: 14vw;
			img{
				height: 12.13vw;
			}
		}
		form{
			padding-left: 8vw;
			
			input{
				box-sizing: border-box;
				outline: none;
				padding-left: 2.8vw;
				height: 11.73vw;
				width: 84vw;
				border:1px solid #ccc;
				border-radius: 5px;
			}
			.mestext-wrap{
				margin-top: 6.4vw;
				width: 84vw;
				overflow: hidden;
				.mestext{
					width: 49.2vw;
					float: left;
				}
				.getmes{
					float: right;
					width: 29.6vw;
					border-radius: inherit;
					background: #fff;
					color: #bdc0c5;
				}
			}
			.login-btn{
				margin-top: 6.4vw;
				background: #1a1a1a;
				color: #fff;
				letter-spacing: 5vw;
			}
			
		}
		.tips{
			margin-top: 25.6vw;
			text-align: center;
			font-size: 2.8vw;
			color: #92969c;
			p{
				line-height: 5.6vw;
				a{
					font-size: 2.8vw;
					color: #000;
				}
			}
		}
		
	}
</style>