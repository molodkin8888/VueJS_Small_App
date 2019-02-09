<template>
    <div>
       <table-components></table-components>
    </div>
</template>

<script>
import TableCart from '../components/TableCart.vue'
import common from '../common/common.js'
export default {
	components: {
		'table-components':TableCart
	}  
};
</script>

<style scroped>
	.header_shop{
		height: 100px;
		background: #7ddada;
		position: relative;
	}

	.products_container{
		margin-bottom: 100px;
	}

	.cart_header_info{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	.cart_info_header_btn, #add_to_cart{
		border: none;
		margin-left: 15px;
		padding: 5px;
		border-radius: 8px;
		background-color:#f9f223;
		cursor: pointer;
	}

	.cart_info_header_btn:hover{
		color: #fff;
		background-color:#1191dc;
	}

	.title_internet_shop{
		text-transform: uppercase;
		margin-top: 50px;
		margin-bottom: 50px;
	}

	.product_block{
		border: 1px solid black;
		padding: 10px;
		margin: 10px;
	}

	.product_image{
		max-width: 260px;
		max-height: 260px;
	}

	.product_title{
		font-weight: 700;
		text-transform: uppercase;
	}

	.product_price, .stock_description{
		font-weight: 700;
	}
	
	.cart_table{
		width: 100%;
		border: 1px solid #dedede;
		padding: 15px;
	}

	tr{
		border-bottom: 1px solid #dedede;
	}

	th, td{
		border-right: 1px solid #dedede;
	}

	.add_product_cart{
		margin-right: 10px;
		background: #fff;
		border: none;
		cursor: pointer;
	}

	.remove_product_cart{
		margin-left: 10px;
		background: #fff;
		border: none;
		cursor: pointer;
	}

	.cart_checkout_btn{
		border: none;
		background-color: #91ef7b;
		border-radius: 5px;
		cursor: pointer;
	}

	.cart_checkout_btn:hover{
		background-color: #40ab27;
		color: #fff;
	}

	footer{
		background-color: #7ddada;
	}

	.redColor{
		color: red;
	}

	.colorGreen{
		color: green;
	}
	
</style>
