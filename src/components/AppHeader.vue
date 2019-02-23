<template>
	<div class="app-header">
	  <mt-header fixed title="ENJOY" class="enjoy-header">
        <div slot="left" @click="back">
          <mt-button icon="back"></mt-button>
        </div>
        <mt-button slot="right" icon="more" @click="menu"></mt-button>
      </mt-header>
      
      <!--下拉菜单-->
     <div id="topmenu">
     	<ul>
     		<li
     			v-for="nav in navs"
     			:key="nav.path"
     			@click="gotoPage(nav.path)">{{ nav.meta.navTitle }}</li>
     	</ul>
     	
     </div>
   
      <!--下拉菜单-->
      	
      </div>
</template>



<script>

	import routes from "../router/routes.js"
	export default{
		name:"AppHeader",
		data(){
			return {
				flag : true,
				navs:routes.filter(curr => curr.meta.isNav)
			}
		},
		methods:{
			menu(){				
				
				this.flag? $("#topmenu").show():$("#topmenu").hide();				
				this.flag = !this.flag;	
			},
			gotoPage(path){
				console.log(path)
				this.$router.push({path:path});
			},
			back(){
				this.$router.back();
			}
		},
	}
</script>

<style lang="scss">	
	  /*@component-namespace page {
      @component header {
      	
      @descendent main {
        margin-top: 50px;
        min-height: 120vh;
        > * {
         margin-bottom: 15px;
        }
      }
    }
 }*/
	 .app-header{
		/*height: 10vh;*/
	 	letter-spacing: 5px;
	 	font-size: 16px;
	 	z-index: 10000;
	 	overflow: hidden;
	 	.is-fixed{
	 		z-index: 999;
	 	}
	 	.enjoy-header{
	 		background-color:black ;
	 	}
	 }
	 #topmenu{
	 	position: absolute;
	 	right: 0px;
	 	top:40px;
	 	width: 30vw;
	 	height:40vw;
	 	background: black;
	 	display: flex;
	 	flex-flow: column;
	 	text-align: center;
	 	display: none;
	 	z-index: 10;
	 	font-size: 14px;
	 	letter-spacing: 2px;
		li{
			color: white;
			border-bottom: 1px dashed white;
			line-height: 9.56vw;
		
		}
		li:last-child{
			border: none;
		}	 
	 }
	 
	
	</style>