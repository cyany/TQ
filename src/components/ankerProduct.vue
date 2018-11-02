<template>
	<div class="ankerProduct">
		<div class="product-content">
			<div class="product-left">
				<div class="scroll-bar" ref="scrollBar">
					<ul ref="scrollBarUl" :style="{transform:'translateY('+everyDist*-arrowIndex+'px)'}">
						<li v-for="(scollItem,index) in scrollLists" :key="index" @click="chooseImg(index)" :class="{heightLight:chooseFlag==index?1:0}">
							<img :src="scollItem.imgUrl">
						</li>
					</ul>
				</div>
				<div class="largeScreen">
					<img :src="mainPic" alt="">
					<div class="arrow">
						<span @click="arrowLeft">&lt;</span>
						<span @click="arrowRight">&gt;</span>
					</div>
				</div>
			</div>
			<div class="product-right">
				<h2>{{productInfo.productTitle}}</h2>
				<p>{{productInfo.productDesc}}</p>
				<div class="stars">
					<ul>
						<li v-for="(star,index) in productInfo.productStars" :key="index"></li>
					</ul>
				</div>
				<div class="product-type">
					<label>colors</label>
					<div class="colorItem" v-for="(color,index) in productInfo.productType" :key="index">
						<input type="checkbox" name="color":value="color" v-model="colorsLists">{{color}}
					</div>
				</div>
				<div class="addToCart">
					<button>-</button>
					<input type="text" name="" v-model="productNum">
					<button>+</button>
					<button>ADD TO CART</button>
				</div>

			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'ankerProduct',
		data(){
			return {
				scrollLists:[
					{imgUrl:'https://d2211byn0pk9fi.cloudfront.net/spree/products/73135/product/A1269011_TD07_V1.jpg?1535511878'},
					{imgUrl:'https://d2211byn0pk9fi.cloudfront.net/spree/products/73698/product/A1269.jpg?1538189660'},
					{imgUrl:'https://d2211byn0pk9fi.cloudfront.net/spree/products/73134/product/A1269011_TD06_V1.jpg?1535511874'},
					{imgUrl:'https://d2211byn0pk9fi.cloudfront.net/spree/products/73134/product/A1269011_TD06_V1.jpg?1535511874'},
					{imgUrl:'https://d2211byn0pk9fi.cloudfront.net/spree/products/73136/product/A1269011_TD03_V1.jpg?1535511882'},
					{imgUrl:'https://d2211byn0pk9fi.cloudfront.net/spree/products/73134/product/A1269011_TD06_V1.jpg?1535511874'},
				],
				mainPic:'',
				chooseFlag:0,
				arrowIndex:0,
				everyDist:0,
				productInfo:{
					productTitle:'Power',
					productDesc:'Lorem ipsum dolor sit amet.',
					productStars:[1,1,1,1,1],
					productPrice:53.99,
					productType:['red','blue']
				},
				colorsLists:[],
				productNum:0
			}
		},
		mounted(){
			this.$data.mainPic = this.$data.scrollLists[0].imgUrl;

			// 左边的滚动条和主视图保持一致，所以需要控制滚动每次走的距离，才能转到最后一张才完成
			// (ul的完全高度-容器的高度)/图片的数量 = 就是每步需要走的距离
			// 图片的数量是少走一张的！！！
			this.$data.everyDist =parseFloat((this.$refs.scrollBarUl.offsetHeight-this.$refs.scrollBar.offsetHeight)/(this.$data.scrollLists.length-1));
		},
		methods:{
			arrowLeft(){
				this.$data.arrowIndex--;
				if(this.$data.arrowIndex<0){
					this.$data.arrowIndex = this.$data.scrollLists.length-1;
				}
				this.$data.mainPic = this.$data.scrollLists[this.$data.arrowIndex].imgUrl;
			},
			arrowRight(){
				this.$data.arrowIndex++;
				if(this.$data.arrowIndex>this.$data.scrollLists.length-1){
					this.$data.arrowIndex =0;
				}
				this.$data.chooseFlag = this.$data.arrowIndex;
				this.$data.mainPic = this.$data.scrollLists[this.$data.arrowIndex].imgUrl;

				
			},
			chooseImg(index){
				this.$data.chooseFlag = index;
				this.$data.mainPic = this.$data.scrollLists[index].imgUrl;
			}
		}
	}
</script>
<style lang="scss" scoped="scoped">
	@mixin flex{
		display: flex;
		justify-content:space-between;
		align-items:flex-start;
		felx-wrap:nowrap;
	}
	.product-content{
		@include flex;
		.product-left{
			flex:50%;
			@include flex;
			.scroll-bar{
				width:20%;
				max-height: 356px;
				overflow: hidden;
				border:1px solid #ccc;
				padding: 1px;
				ul{
					transition: all 1s;
					padding: 0;
					.heightLight{
						border:1px solid #72AEFF
					}
					li{
						height: auto;
						min-height: 100px;
					}
				}
			}
			.largeScreen{
				flex-basis:80%;
				position: relative;
				.arrow{
					position: absolute;
					top: 50%;
					width: 100%;
					transform:translateY(-50%);
					@include flex;
					font-size: 30px;
					padding: 15px;
					box-sizing: border-box;

				}
			}
		}
		.product-right{
			flex:50%;
			.stars{
				text-align: right;
				li{
					width: 30px;
					height: 30px;
					display: inline-block;
					border:1px solid #ccc;
				}
			}
			.product-type{
				@include flex;
				justify-content:flex-start;
			}
			.addToCart{
				width: 100%;
				@include flex;
				justify-content:center;
				background: #fff;
				input{
					flex-basis:10%;
					max-width: 35px;
					text-align: center;

					
				}
				button{
					flex-basis:10%;
				}
				button:last-child{
					background-color:#00a7e1;
					color:#fff;
					flex-basis:60%;
				}
			}
		}
	}
	
</style>