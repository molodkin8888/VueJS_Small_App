<template>
	<div>
		<table-components>
			<header class="header_shop d-flex justify-content-center w-100">
				<div class="cart_header_info">                
					<span class="cart-header-info__text">Your cart has {{ cartProducts.length }} items</span>
					<button v-if="!isCartView" class="cart_info_header_btn" @click.prevent="showCart()">View cart</button>
					<button v-if="isCartView" class="cart_info_header_btn" @click="goHomePage()">Home page</button>
				</div>
		</header>
		<h2 class="title_internet_shop">{{pageTitle}}</h2>
		<div v-if="!isCartView" class="container products_container">
			<div class="row d-flex justify-content-center">
				<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 product_block" v-for="product in products" :key="product">
					<img :src="product.imgSrc" class="product_image" >
					<div class="product_info mt-3">
						<p class="product_title">{{product.name}}</p>
						<p class="product_description">{{product.description}}</p>
						<div class="price_total_information">
							<p class="product_price">Price: {{product.price}} $</p>
							<p :class="{'not-in-stock': product.stock === 0}" class="stock_description">In stock: {{ product.stock }}</p>
						</div>            
						<button :disabled="product.stock === 0 ? true : false" class="product_btn" id="add_to_cart" @click.prevent="addProductToCart(product)">Add to cart</button>
					</div>
				</div>
			</div>
		</div>
		<div v-else class="container">
			<div v-if="cartProducts.length > 0">
			<table class="cart_table">
				<thead>
					<tr>
						<th>Product:</th>
						<th>Quantity:</th>
						<th>Price:</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="prod in cartProducts" :key="prod">
						<td>{{prod.item.name}}</td>
						<td>
							<i class="el-icon-remove-outline icons" @click="decreaseQuantity(prod)" :disabled="prod.quantity === 0"></i>
								<span class="cart_quantity">{{prod.quantity}}</span>
							<i class="el-icon-circle-plus-outline icons" @click="increaseQuantity(prod)" :disabled="prod.item.stock === 0"></i>
						</td>
							<td>{{prod.item.price}} $</td>
					</tr>
					<tr class="cart_total">
						<td style="font-weight: 700;">Total price:</td>
						<td style="font-weight: 700;">{{countTotal}} $</td>
						<td>
							<router-link to="/confirmOrder"><button type="button" class="el-button el-button--success is-circle confirm-button"><i class="el-icon-check"></i></button></router-link>
						</td>
					</tr>
			</tbody>
			</table>
			</div>
			<!--   <el-table v-if="cartProducts.length > 0" :data="cartProducts" :key="prod" :default-sort="{prop: 'quantity', order: 'descending'}" style="width: 100%">
						<el-table-column prop="item.name" label="name product"></el-table-column>
						<el-table-column prop="quantity" label="price product" ></el-table-column>
						<el-table-column prop="item.price" label="count total"></el-table-column> 
						<el-table-column label="Operations" prop="item.id" >
						<template slot-scope="scope">                    
								<i class="el-icon-remove-outline" @click="decreaseQuantity(prop)"></i>
								<i class="el-icon-circle-plus-outline" @click="increaseQuantity(prop)"></i>
						</template>
						</el-table-column>
					</el-table> -->
			<div v-else class="empty_cart">
				<h2 class="empty_cart_title">Empty cart.</h2>
			</div>
		</div>
		<footer v-if="!isCartView" class="page-footer font-small blue pt-4">
			<div class="container text-center text-md-left">
			<div class="row">
				<div class="col-md-6 mt-md-0 mt-3">
					<h5 class="text-uppercase">Test shop created vuejs</h5>
					<p>Try make order and see how its work.</p>
				</div>
				<hr class="clearfix w-100 d-md-none pb-3">
				<div class="col-md-3 mb-md-0 mb-3">
					<h5 class="text-uppercase">Links</h5>
					<ul class="list-unstyled">
						<li><a href="!">General page</a></li>
						<li><a href="!">General page</a></li>
						<li><a href="!">General page</a></li>
						<li><a href="!">General page</a></li>				
					</ul>
				</div>
				<div class="col-md-3 mb-md-0 mb-3">
					<h5 class="text-uppercase">Links</h5>
					<ul class="list-unstyled">
						<li><a href="!">General page</a></li>
						<li><a href="!">General page</a></li>
						<li><a href="!">General page</a></li>
						<li><a href="!">General page</a></li>
					</ul>
				</div>
			</div>
			</div>
			<div class="footer-copyright text-center py-3">© 2019 Copyright:</div>
		</footer>
    </table-components>
  </div> 
</template>

<script>
import common from "../common/common.js";
import ElTable from "element-table";

export default {
  mixins: [common]
};
</script>

<style scoped>
tr {
  height: 40px;
}

.cart_quantity {
  padding-left: 20px;
  padding-right: 20px;
}

.icons {
	cursor: pointer;
}

.confirm-button:hover {
	transform: rotateY(360deg);
}
</style>
