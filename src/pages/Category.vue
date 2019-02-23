<template>
	<div class="category">
		<div class="sidebar">
			<router-link 
				v-for="item in categoryList"
				:key="item.id"
				:to="`/category/${item.id}`" 
				tag="div">{{ item.name }}</router-link>
		</div>
		<div class="category-list">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Category",
		data(){
			return {
				categoryList:[]
			}
		},
		methods:{
			
		},
		created(){
			this.$httpcategory.getCategoryList()
						.then((res) => {
							this.categoryList = res.list;
							const {categoryId = this.categoryList[0].id} = this.$route.params
							this.$nextTick(() => {
								this.$router.push(`/category/${categoryId}`)
							})
						})
		}
		
	}
</script>

<style lang="scss">
	.category{
		margin-top: 12vw;
		display: flex;
		font-size: 4vw;
		.sidebar{
			width: 120px;
			background: #f8f8f8;
			/*height: 90vh;*/
			div{
				height: 50px;
				line-height: 50px;
				padding: 5px 10px;
				&.router-link-exact-active.router-link-active{
					background: #fff;
					color:#000;
					border-left: 2px solid #666;
				}
			}
		}
		
		.category-list{
			flex: 1;
		}
		
	}
</style>