<template>
	<div class="ankerIndex">
		<div class="carousel-wrapper">
			<ul :style="{transform:'translateX(-'+valueX+'%)'}">
				<li v-for="(carouselItem,index) in carouselLists" :key="index">
					<!-- <router-link :to="'/'+carouselItem.adderess">
					</router-link> -->
						<img :src="carouselItem.imgUrl">
						<h2>{{carouselItem.title1}}</h2>
				</li>
			</ul>
			<div class="arrow">
				<span @click="arrowLeft">&lt;</span>
				<span @click="arrowRight">&gt;</span>
			</div>
		</div>
		<div class="calltoaction">
			<ul>
				<li v-for="(callItem,index) in calltoLists" :key="index" :style="{backgroundImage:'url('+callItem.imgUrl+')'}">
					<p>{{callItem.title1}}</p>
				</li>
			</ul>
		</div>
		<div class="whatIsNew">
			<p>What ' s New !</p>
		</div>
		<div class="waterFall">
			<ul ref="waterWrapper">
				<li v-for="(waterItem,index) in waterFallLists" :key="index" ref="waterItem">
					<img :src="waterItem.imgUrl" alt="">
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'ankerIndex',
		data(){
			return {
				carouselLists:[
					{adderess:"abcd",imgUrl:"//d2211byn0pk9fi.cloudfront.net/spree/activities/68450/image/large/PD_banner-1920-860%E2%80%94%E2%80%94V31.jpg?1532479164",title1:'abc'},
					{adderess:"abcd",imgUrl:"https://d2211byn0pk9fi.cloudfront.net/spree/activities/74143/image/large/capsule_final.jpg?1540547071",title1:'abc'},
					{adderess:"abcd",imgUrl:"https://d2211byn0pk9fi.cloudfront.net/spree/activities/69056/image/large/Nintendo-campaig---Anker-WEBbanner-deals-1920-860-8.jpg?1528773527",title1:'abc'},
					{adderess:"abcd",imgUrl:"https://d2211byn0pk9fi.cloudfront.net/spree/activities/69390/image/large/UAI-WEB-banner6_V2.jpg?1532502111",title1:'abc'}
				],
				flagIndex:0,
				valueX:0,
				calltoLists:[
					{imgUrl:'https://d2211byn0pk9fi.cloudfront.net/spree/activities/62410/image/large/Anker3.0Web-Home_03-PU.jpg?1505706666',title1:'calltoaction'},
					{imgUrl:'https://d2211byn0pk9fi.cloudfront.net/spree/activities/66843/image/large/%E7%B2%98%E8%B4%B4%E5%9B%BE%E7%89%87.jpg?1521513852',title1:'calltoaction2'},
					{imgUrl:'https://d2211byn0pk9fi.cloudfront.net/spree/activities/67999/image/large/Anker3.0Web-Home_05.jpg?1523256752',title1:'calltoaction3'},
				],
				waterFallLists:[
					{imgUrl:'https://d2211byn0pk9fi.cloudfront.net/spree/activities/63962/image/large/PD-%E5%B0%8F-banner.jpg?1510738345'},
					{imgUrl:'https://d2211byn0pk9fi.cloudfront.net/spree/activities/66706/image/large/home_bottom_banner_576x576_V4.jpg?1532479213'},
					{imgUrl:'https://d2211byn0pk9fi.cloudfront.net/spree/activities/38470/image/large/Anker-PowerHouse-0930.jpg?1506762039'},
					{imgUrl:'https://d2211byn0pk9fi.cloudfront.net/spree/activities/62676/image/large/Anker-%E5%AE%98%E7%BD%91banner%281%29.jpg?1522156919'}
				]
			}
		},
		mounted(){
			console.log(this.$refs.waterWrapper,this.$refs.waterItem);
			let waterWrapper = {};
			waterWrapper.width= this.$refs.waterWrapper.offsetWidth;
			waterWrapper.height= this.$refs.waterWrapper.offsetHeight;
			let columnsHeight0=[],sum0=0;
			let columnsHeight1=[],sum1=0;
			this.$refs.waterItem.forEach((item,index)=>{
				if(index%2){
					item.style.left='50%';
					item.style.top=sum1+"px";
					columnsHeight1.push(item.offsetHeight);
					sum1+=item.offsetHeight;
				}else{
					item.style.left=0;
					item.style.top=sum0+"px";
					columnsHeight0.push(item.offsetHeight);
					sum0+=item.offsetHeight;
				}
			})
		},
		methods:{
			arrowLeft(){
				this.$data.valueX=1;
				this.$data.flagIndex--;
				if(this.$data.flagIndex<0){
					this.$data.flagIndex = this.$data.carouselLists.length-1;
				}
				this.$data.valueX*=this.$data.flagIndex*25
			},
			arrowRight(){
				console.log(32135,this.$data.flagIndex);
				this.$data.valueX=1;
				this.$data.flagIndex++;
				if(this.$data.flagIndex>this.$data.carouselLists.length-1){
					this.$data.valueX=0;
					this.$data.flagIndex=0;
				}
				this.$data.valueX*=this.$data.flagIndex*25
			}
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.carousel-wrapper{
		width:100%;
		overflow: hidden;
		position: relative;
		ul{
			padding-left: 0;
			list-style: none;
			width: 400%;
			overflow: hidden;
			transition: all 1s;
			li{
				width: 25%;
				float: left;
				position: relative;
				h2{
					font-size: 22px;
					position: absolute;
					bottom: 30px;
					width: 100%;
					text-align: center;
					color:#fff;
					font-weight: bold;
				}
				
			}
		}
		.arrow{
			position: absolute;
			top: 50%;
			width: 100%;
			transform:translateY(-50%);
			display: flex;
			justify-content:space-between;
			padding: 30px;
			font-size: 35px;
			color: #fff;
		}
	}
	.calltoaction{
		width: 100%;
		ul{
			padding: 0;
			display: flex;
			justify-content:space-between;
			align-items:center;
			li{
				margin:15px 0;
				flex-basis:32%;
				height: 162px;
				line-height: 162px;
				text-align: left;
				padding: 15px;
				box-sizing: border-box;
				background-position: center;
				background-size: cover;
			}
		}
	}
	.whatIsNew{
		margin: 15px 0;
		width: 100%;
		position: relative;
		p{
			width: 35%;
			background: #fff;
			margin:0 auto;
			position: relative;
			z-index: 2;
		}
		&:before{
			content: '';
			position: absolute;
			top: 50%;
			transform:translate3d(-50%,-50%,0);
			width: 80%;
			height: 1px;
			border-bottom: 1px solid #ccc;
		}
	}
	.waterFall{
		margin:0 auto;
		max-width: 960px;
		ul{
			// &::after{
			// 	content: '';
			// 	height:0px;
			// 	visibility: hidden;
			// 	display: block;
			// 	clear: both;
			// }
			padding: 0;
			list-style: none;
			position: relative;
			li{
				// float: left;
				width: 50%;
				max-width: 500px;
				position: absolute;
				left:0;
				top:0;
				width:50%;
				height: auto;
			}
		}
	}
</style>