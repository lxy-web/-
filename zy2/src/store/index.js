import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from "axios"
export default new Vuex.Store({
  state: {
	  list:[]
  },
  mutations: {
	   getData(state,action){
		   state[action.key]=action.value;
	   }
  },
  actions: {
	  GetData({commit}){
		  axios.get("/get_data").then((res)=>{
			  res.data.data.forEach(v=>{
				  v.newArr=[];
			  })
			  commit({
				  type:"getData",
				  key:"list",
				  value:res.data.data
			  })
		   }) 
		 }
  },
  modules: {
  }
})
