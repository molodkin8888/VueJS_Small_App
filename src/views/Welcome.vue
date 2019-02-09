<template>
<div class="container h-100"> 
	<h2 class="title">Choose mini-app by VueJS: </h2>
		<el-carousel :interval="3000" type="card" height="200px">
			<el-carousel-item v-for="item in pages" :key="item">
				<router-link :to="{ path: item}"> {{ item }}</router-link>
			</el-carousel-item>
		</el-carousel>
</div>
</template> 

<script>

export default {
	data() { 
		return {
			pages: [
				"/weather",
				"/shop",
				"/random",
				"/table",
				"/diagrams"
			]
		}
	}
}
</script>

<style scoped>
	.title{
		margin-top: 20%;
		text-transform: uppercase;
	}

	.link_to{
		text-transform: uppercase;
		color: #000;
	}

	.link_to:hover{
		color: blue;
		text-decoration: none;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 200px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

</style>
