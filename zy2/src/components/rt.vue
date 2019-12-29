<template>
	  <div class="rt">
	    <div v-if="list">
			<div class="rt-item" v-for="(v,i) in list.cities" :key="i" @click="fnn(v,i)" :class="v.is_class">
					 {{v.name}}
			</div>
		</div>
	  </div>
</template>

<script>
	export default{
		props:{
			list:{
				type:Object
			}
		},
		methods:{
			fnn(v,i){
				this.$emit("rightHandel",v,i)//设置自定义事件
			}
		}
	}
</script>

<style lang="scss" scoped>
	.rt-item{
		width: 100px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		margin: 10px;
		border-radius:6px;
		border: 1px solid #ccc;
		float: left;
	}
</style>
