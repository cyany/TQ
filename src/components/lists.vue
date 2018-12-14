<template>
	<div class="lists">
		<div class="products-content">
			<div class="left-part">
				<div class="categoies">
					<h2>Categoies lists</h2>
					<ul>
						<li v-for="(cate,index) in leftPart[0]" :key="index" :data-cateName="cate" @click="chooseCate(cate)">
							{{cate}}
						</li>
					</ul>
				</div>
				<div class="sieve">
					<h2>price range</h2>
					<input type="range" name="getPrice" step="1000" min="800" max="10000" v-model="rangeVal" @change="chooseRange(rangeVal)">
					<p>{{rangeVal}}</p>
					<h2>color choose</h2>
					<ul>
						<li v-for="(colorItem,index) in leftPart[1]" :key="index"><span class="colorBlock" :style="{'backgroundColor':colorItem}" @click="chooseColor(colorItem)"></span>{{colorItem}}</li>
					</ul>
				</div>
				<div class="resetBox">
					<a href="javascript:;" @click="resetAll()">重置</a>
				</div>
			</div>
			<div class="productList">
				<ul>
					<li v-for="(item,index) in products.slice(0,8)" :key="index" data-id="index">
						<router-link to="/ankerProduct"><img :src="item.img" :alt="item.t"></router-link>
						<h2>{{item.name}}</h2>
						<p>{{"$:"+item.price}}</p>
						<p>{{item.color}}</p>
						<span>add to Cart</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="pageNum" v-if="pageinationFlag">
			<ul>
				<li>&lt;&lt;</li>
				<li :class="{active:index==activeFlag?true:false}" v-for="(pageNum,index) in usePagePro.slice(0,Math.ceil(usePagePro.length/8))" :key="index" @click="choosePage(index)">
					{{index+1}}
				</li>
				<li>&gt;&gt;</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	import axios from 'axios';
	export default {
		name:'lists',
		data(){
			return {
				products:[],
				leftPart:[],
				rangeVal:0,
				usePagePro:[],
				pageinationFlag:true,
				activeFlag:0
			}
		},
		mounted(){
			var that = this;
			// gain all products
			axios.get("http://localhost:3000/pdLists").then(res=>{
				console.log(res.data);
				that.products = res.data;
				that.usePagePro = res.data;
			});
			// gain leftPart
			axios.get('http://localhost:3000/pdLists/leftPart').then(re=>{
				console.log(re);
				let tempRes = re.data.res;
				let finalResCate = [tempRes[0].cate];
				let finalResColor = [tempRes[0].color];
				
				let loopFlag = true,loopFlag2= true;
				for(let i of tempRes){
					for(let c of finalResCate){
						if(i.cate == c){
							loopFlag = false;
							break;
						}else{
							loopFlag = true;
						}	
					}
					if(loopFlag){
						finalResCate.push(i.cate);
					}

					for(let co of finalResColor){
						if(i.color == co){
							loopFlag2 = false;
							break;
						}else{
							loopFlag2 = true;
						}	
					}
					if(loopFlag2){
						finalResColor.push(i.color);
					}
					
				}
				that.leftPart.push(finalResCate,finalResColor);
			});
		},
		methods:{
			chooseCate(cateName){
				console.log(cateName);
				var that = this;
				axios.get('http://localhost:3000/pdLists/cate/'+cateName).then(res=>{
					console.log(res,123);
					that.products = res.data.data;
					that.usePagePro = res.data.data;
					that.pageinationFlag = false;
				})
			},
			chooseColor(colorName){
				var that = this;
				axios.get('http://localhost:3000/pdLists/color/'+colorName).then(res=>{
					that.products = res.data.data;
					that.pageinationFlag = false;
				})
			},
			chooseRange(rangeVal){
				var that = this;
				console.log(123)
				axios.get('http://localhost:3000/pdLists/price',{
					params:{
						min:800,
						max:rangeVal
					}
				}).then(res=>{
					that.products = res.data;
					that.pageinationFlag = false;
				})
			},
			choosePage(pageVal){
				var that = this;
				axios.get("http://localhost:3000/pageNum?currentPage="+pageVal).then(res=>{
					that.products = res.data;
					this.activeFlag = pageVal;
				})
			},
			resetAll(){
				var that = this;
				// gain all products
				axios.get("http://localhost:3000/pdLists").then(res=>{
					console.log(res.data);
					that.products = res.data;
					that.usePagePro = res.data;
					that.pageinationFlag = true;
				});
			}
			
		}
	}
</script>
<style lang="scss" scoped="scoped">
	@mixin flex($justify,$wrap){
		padding-left: 0;
		list-style: none;
		display: flex;
		justify-content: $justify;
		align-items:center;
		flex-wrap:$wrap;
	}
	.products-content{
		@include flex(space-between,nowrap);
		.left-part{
			flex-basis:15%;
			align-self: flex-start;
			.categoies{
				ul{
					li{
						margin-bottom: 15px;
						
					}
				}
			}
			.sieve{
				ul{
					@include flex(space-between,wrap);
					li{
						flex-basis:30%;
						margin-bottom: 15px;
						span.colorBlock{
							display: inline-block;
							width: 30px;
							height: 30px;
						}
					}
				}
			}
			
		}
		.productList{
			flex-basis:80%;
			ul{
				@include flex(flex-start,wrap);
				li{
					flex-basis:30%;
					margin-bottom: 30px;
					span{
						display: block;
						width: 60%;
						padding:5px;
						background: #D62056;
						color:#fff;
						margin:0 auto;
					}
				}
			}
		}
	}
	
	.pageNum{
		ul{
			@include flex(center,nowrap);
			li{
				padding: 5px;
				width: 30px;
				margin:0 10px;
				&.active{
					background: #000;
					color: #fff;
				}
				&.highLigh{
					background: #000;
					color: #fff;
				}
			}
		}
	}
</style>