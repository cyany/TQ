import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
	state:{
		count:0
	},
	getters:{
		sale:state=>{
			return state.count+2;
		}
	},
	mutations:{
		reducePrice:(state,payload)=>{
			state.count-=payload;
		}
	},
	actions:{
		reducePrice:(context,payload)=>{
			setTimeout(function(){
				context.commit("reducePrice",payload);
			},1000)
		}
	}
})