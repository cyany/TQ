<template>
	<div class="resume">
		<div class="left">
			<div class="person-avaster">
				<img :class="{rotate:isRotate,rotateNormal:!isRotate}" src="https://via.placeholder.com/300x300" @mouseover="rotate" @mouseout="rotateRever">
			</div>
			<div class="contact" v-if="showContact">
				<p>mobile:123456</p>
				<p>Email:1232465</p> 
				<p>Current City:123456</p>
			</div>
			<div class="contact" v-else>
				<input type="text" name="question" v-model="question" placeholder="1+1">
				<p v-if="showError">Error ! please input again.</p>
			</div>
			<div class="skill">
				<ul>
					<li v-for="(item,index) in skills" :key="index">{{item.val}}</li>
				</ul>
			</div>
		</div>
		<div class="right">
			<h2>Project Experiences</h2>
			<ul>
				<li v-for="(item,index) of experiences" :key="index">
					<h3>{{item.titleName}}</h3>
					<p>{{item.desciptions}}</p>
				</li>
			</ul>
			<h2>Self Introduce</h2>
			<ul>
				<li v-for="(item,index) in introduce" :key="index">{{item.val}}</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'resume',
		data(){
			return {
				isRotate:false,
				question:'',
				showContact:false,
				showError:false,
				skills:[
					{val:'vue'},
					{val:'mini program'},
					{val:'javascript'}
				],
				experiences:[
					{titleName:"pro1",desciptions:"desc1"},
					{titleName:"pro1",desciptions:"desc1"},
					{titleName:"pro1",desciptions:"desc1"},
					{titleName:"pro1",desciptions:"desc1"}
				],
				introduce:[
					{val:"123"},
					{val:"123"},
					{val:"123"},
					{val:"123"}
				]
			}
		},
		watch:{
			question:function(newValue,oldValue){
				if(newValue =="2"){
					this.showContact =true;
				}else{
					this.showError = true;
				}
				
			}
		},
		methods:{
			rotate(){
				this.isRotate = true;
			},
			rotateRever(){
				this.isRotate = false;
			}
		}
	}
</script>
<style lang="scss" scoped="scoped">
	@mixin flex($justify){
		-webkit-display:flex;
		-moz-display:flex;
		display: flex;
		flex-wrap:nowrap;
		align-items:center;
		justify-content:$justify
	}
	.resume{
		@include flex(flex-start);
		padding: 15px;
		box-sizing: border-box;
		.left{
			flex-basis:30%;
			.person-avaster{
				max-width: 300px;
				img{
					width: 100%;
					border-radius: 50%;
					&.rotate{
						transition: all 1s;
						transform:rotate(180deg);
					}
					&.rotateNormal{
						transition: all 1s;
						transform:rotate(0deg);
					}
				}
			}
			.skill{
				margin-top: 20px;
				li{
					text-align: left;
					list-style: circle;
				}
			}
		}
		.right{
			flex-basis:70%;
			padding-left: 50px;
			box-sizing: border-box;
			text-align: left;
			h2{
				font-weight: bold;
			}
			ul{
				padding-left: 40px;
				li{
					list-style: circle;
				}
			}
		}
	}
</style>