<template>
  <div id="app">
			<Lt :list="list" @leftHandel="lefts" ></Lt>
			<Rt :list="list[newIndex]"  @rightHandel="rights"></Rt>
			<div class="footer"> 
				
				<el-button :plain="true" @click="Submission"  class="my-btn">提交</el-button>
			</div>
  </div>
</template>
<script>
	import Lt from "./components/lt.vue"
	import Rt from "./components/rt.vue"
	import axios from "axios"
	export default{
		components:{
			Lt,
			Rt
		},
		data(){
			return {
				newIndex:0,
			}
		},
		computed:{
			list(){
				return this.$store.state.list
			}
		},
		methods:{
			Submission(){//点击提交的按钮
				let that="";//空字符用于拼接
				  this.list.map(v=>{//便利所有数据
					  if(v.newArr.length!=0){
						v.newArr.map(vs=>{
						 that+=vs.name+" ";//拼接点击的数据
						})
					  }
				  })
				   this.$message(`${that}`);//点击时弹出
			},
			lefts(index){//更换左边框的内容依赖的下标
				this.newIndex=index;
			},
			rights(v,i){//左边框点击时传递的点击每一项
			   if(!this.list[this.newIndex].newArr.includes(v)){//检测左边的每一项的数组里面是否有我点击的每一项，如果没有
				   this.list[this.newIndex].newArr.push(v);//push到里面
				   this.$set(v,"is_class","active")//设置响应式数据
			   }else{
					let index=this.list[this.newIndex].newArr.findIndex(vs=>{//检查数组里的这个一项的下标
						   return vs.code==v.code
					   })
					  this.$set(this.list[this.newIndex].newArr[index],"is_class"," ")   //清除自定义类名
				  this.list[this.newIndex].newArr.splice(index,1);//从数组里面删除这个一项数据
			   }
			}
		},
		created() {
			this.$store.dispatch("GetData") 
		}
	}
</script>
<style lang="scss" >
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
#app,body,html{
	height: 100%;
	width: 100%;
	
}
#app{
	display: flex;
	position: relative;
	.lt{
		width: 30%;
		height: 100%;
		background: #cccccc;
		overflow: auto;
		
	}
	.rt{
		flex: 1;
		
	
	}
	.footer{
		width: 100%;
		height: 40px;
		position: fixed;
		bottom: 0px;
		left: 0px;
		.my-btn{
			position: absolute;
			bottom: 0px;
			left:50%;
			transform: translate(-50%,0%);
			width: 100px;
			height: 40px;
			text-align: center;
			line-height: 30px;
			color: beige;
            background: red;
			border: 0px;
			border-radius: 5px;
			outline: none;
			font-size: 18px;
			
		}
	}
}
.active{
		background: skyblue;
		color: pink;
	}

</style>
