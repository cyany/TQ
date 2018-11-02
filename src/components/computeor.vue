<template>
	<div class="computeor">
		<h2 class="titleName">This is a store name</h2>
		<table>
			<tr>
				<td><input type="checkbox" name="productAll" id="productAll" v-model="productAllChecked" @change="chooseAll"><label for="productAll"></label>全选</td>
				<td>Product Image</td>
				<td>name</td>
				<td>Single Price</td>
				<td>Product Amount</td>
				<td>SingleProductAllPrice</td>
				<td>Delete Product</td>
			</tr>
			<tr v-for="(singleProduct,index) in allProductlists" :key="index">
				<td @change="chooseSingle"><input type="checkbox" name="productAll" v-model="productAllCheckedItem" :value="singleProduct.productId"></td>
				<td><img :src="singleProduct.productImg"></td>
				<td>{{singleProduct.productName}}</td>
				<td>{{singleProduct.productPrice}}</td>
				<td><div class="productAmountCompute">
					<button v-on:click="editProductAmount('desc',index)">-</button>
					<span>{{singleProduct.currentAmount}}</span>
					<button v-on:click="editProductAmount('add',index)">+</button>
				</div></td>
				<td>{{singleProduct.productPrice*singleProduct.currentAmount}}</td>
				<td><button @click="deleteProduct(index)">delete</button></td>
			</tr>
		</table>
		<div class="submitAll">
			<span>All Products Price:{{AllProductPrices}}</span>
			<div class="submitBtn">
				<router-link to="/checkout"><button>Submit</button></router-link>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'computeor',
		data(){
			return {
				allProductlists:[
					{productId:120001,productImg:'https://via.placeholder.com/150',productName:'JS Privilege Guide',productPrice:100,currentAmount:1},
					{productId:120002,productImg:'https://via.placeholder.com/150',productName:'JS Senior Design',productPrice:100,currentAmount:1},
					{productId:120003,productImg:'https://via.placeholder.com/150',productName:'Vue and Angular',productPrice:100,currentAmount:1},
				],
				productAllChecked:false,
				productAllCheckedItem:[]
			}
		},
		computed:{
			AllProductPrices(){
				var sum =0;
				this.$data.productAllCheckedItem.forEach(item=>{
					for(let i of this.$data.allProductlists){
						if(i.productId ==item){
							sum += i.productPrice*i.currentAmount;
						}
					}
				});
				
				return sum;
			}
		},
		methods:{
			editProductAmount:function(type,index){
				console.log(123465);
				console.log(this,this.$data)
				if(type=='desc'){
					if(this.$data.allProductlists[index].currentAmount==1){
						return;
					}else{
						this.$data.allProductlists[index].currentAmount--;
					}
				}else if(type=="add"){
					console.log(index)
					this.$data.allProductlists[index].currentAmount++;
				}
			},
			deleteProduct:function(index){
				this.$data.allProductlists.splice(index,1);
				this.$data.productAllCheckedItem.splice(index,1);
			},
			chooseAll:function(){
				console.log(this.$data.productAllChecked);
				console.log(this.$data.productAllCheckedItem);
				if(this.$data.productAllChecked){
					for(let i=0;i<this.$data.allProductlists.length;i++){
						var circleLoop =true;
						for(let j=0;j<this.$data.productAllCheckedItem.length;j++){
							if(this.$data.productAllCheckedItem[j] ==this.$data.allProductlists[i].productId){
								circleLoop = false;	
								break;
							}

						}

						if(circleLoop){
							this.$data.productAllCheckedItem.push(this.$data.allProductlists[i].productId);
						}
					}
				}else{
					this.$data.productAllCheckedItem.splice(0,this.$data.allProductlists.length);
				}
				
				
			},
			chooseSingle:function(){
				if(this.$data.productAllCheckedItem.length==this.$data.allProductlists.length){
					this.$data.productAllChecked=true;
				}else{
					this.$data.productAllChecked=false;
				}
			}
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.titleName{
		text-align: left;
		margin-bottom: 10px;
	}
	table{
		width: 100%;
	}
	.submitAll{
		text-align: right;
	}
</style>