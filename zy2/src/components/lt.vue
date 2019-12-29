<template>
	<div class="lt">
	
			<div v-for="(v,i) in list" :key="i" @click="fn(i)" class="lt-item">
						{{v.name}}
						<span class="item_num" v-if="v.newArr.length>0?true:false">{{v.newArr.length}}</span>
			</div>
	
	</div>
</template>

<script>
	export default{
		props:{
			list:{
				type:Array
			}
		},
		methods:{
			fn(i){
				this.$emit("leftHandel",i)//设置自定义事件传递下标
			}
		}
	}
</script>

<style>
	.lt-item{
		width: 100%;
		height: 40px;
		text-align: center;
		line-height: 40px;
		color: cornflowerblue;
		margin: 3px 0px;
		
	}
	.item_num{
		color: red;
	}
</style>
