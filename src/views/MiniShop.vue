<template>
    <div>
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
            <table v-if="cartProducts.length > 0" class="cart_table">
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
                        <button class="add_product_cart" @click="increaseQuantity(prod)" :disabled="prod.item.stock === 0">+</button>
                        <span class="cart_quantity">{{prod.quantity}}</span>
                        <button class="remove_product_cart" @click="decreaseQuantity(prod)" :disabled="prod.quantity === 0">-</button>
                    </td>
                    <td>{{prod.item.price}} $</td>
                </tr>
                <tr class="cart_total">
                    <td style="font-weight: 700;">Total price:</td>
                    <td style="font-weight: 700;">{{countTotal}} $</td>
                    <td><button class="cart_checkout_btn" @click="checkout()">Order</button></td>

                </tr>
            </tbody>
        </table>
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
                     <li>
                        <a href="!">General page</a>
                    </li>
                    <li>
                        <a href="!">General page</a>
                    </li>
                    <li>
                        <a href="!">General page</a>
                    </li>
                    <li>
                        <a href="!">General page</a>
                    </li>
                    </ul>

                </div>
                <div class="col-md-3 mb-md-0 mb-3">
                    <h5 class="text-uppercase">Links</h5>
                    <ul class="list-unstyled">
                    <li>
                        <a href="!">General page</a>
                    </li>
                    <li>
                        <a href="!">General page</a>
                    </li>
                    <li>
                        <a href="!">General page</a>
                    </li>
                    <li>
                        <a href="!">General page</a>
                    </li>
                    </ul>
                </div>
            </div>
            </div>
            <div class="footer-copyright text-center py-3">© 2019 Copyright:</div>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                {
                    id: 1,
                    imgSrc: "https://cdn.vox-cdn.com/thumbor/Y4VxrnCf_dkhQLwR2Kg24CCNy64=/0x0:4500x3000/1200x800/filters:focal(1890x1140:2610x1860)/cdn.vox-cdn.com/uploads/chorus_image/image/57963763/Notebook_9__2018__Side.0.jpg",
                    name: "Samsung",
                    description: "Samsung Ideapad 322-15ISsK (80XH022HIN) Samsung (Core i3 6th Gen/4 GB/1 GB/DOS). The lowest price of Samsung Ideapad 3s20-15ISK (80XHs022HIN) Laptop",
                    price: 200.4,
                    stock: 4
                },
                {
                    id: 2,
                    imgSrc: "https://cdn1.smartprix.com/rx-izQIQ4mpP-w240-h290/lenovo-ideapad-330s.jpg",
                    name: "Lenovo",
                    description: "Lenovo Ideapad 3220-15IsSK (80XH022HIN) Laptop (Core i3 6th Gen/4 GB/1 GB/DOS). The lowest price of Lenovo Ideapad 3s20-15ISsK (80XH022sHIN) Laptop",
                    price: 400.12,
                    stock: 4
                },
                {
                    id: 3,
                    imgSrc: "https://static.toiimg.com/photo/59091809/Dell-Inspiron-15R-N5110-Laptop-Core-i5-2nd-Gen4-GB500-GBWindows-7.jpg",
                    name: "macBook",
                    description: "Macbook Ideapad 322-15ISsK (80XH022HIN) Samsung (Core i3 6th Gen/4 GB/1 GB/DOS). The lowest price of Samsung Ideapad 3s20-15ISK (80XHs022HIN) Laptop",
                    price: 1100,
                    stock: 8
                },
                {
                    id: 4,
                    imgSrc: "https://cdn.vox-cdn.com/thumbor/Y4VxrnCf_dkhQLwR2Kg24CCNy64=/0x0:4500x3000/1200x800/filters:focal(1890x1140:2610x1860)/cdn.vox-cdn.com/uploads/chorus_image/image/57963763/Notebook_9__2018__Side.0.jpg",
                    name: "Samsung",
                    description: "Samsung Ideapad 322-15ISsK (80XH022HIN) Samsung (Core i3 6th Gen/4 GB/1 GB/DOS). The lowest price of Samsung Ideapad 3s20-15ISK (80XHs022HIN) Laptop",
                    price: 168.1,
                    stock: 45
                },
                {
                    id: 5,
                    imgSrc: "https://cdn1.smartprix.com/rx-izQIQ4mpP-w240-h290/lenovo-ideapad-330s.jpg",
                    name: "Lenovo",
                    description: "Lenovo Ideapad 3220-15IsSK (80XH022HIN) Laptop (Core i3 6th Gen/4 GB/1 GB/DOS). The lowest price of Lenovo Ideapad 3s20-15ISsK (80XH022sHIN) Laptop",
                    price: 448.8,
                    stock: 11
                },
                {
                    id: 6,
                    imgSrc: "https://static.toiimg.com/photo/59091809/Dell-Inspiron-15R-N5110-Laptop-Core-i5-2nd-Gen4-GB500-GBWindows-7.jpg",
                    name: "Dell",
                    description: "Dell Ideapad 3222-15ISsK (80X2H022HIN) Dell (Core i3 6th Gen/4 GB/1 GB/DOS). The lowest price of Dell Ideapad 3s20-15ISK (80XHs022HIN) Laptop",
                    price: 1100,
                    stock: 12
                },
            ],

            cartProducts: [],

            isCartView: false,
            pageTitle: "Computers test shop in VueJS"
        }
    },

    methods: {
        showCart(){
            this.isCartView = true;
            this.pageTitle = "Personal Cart";
        },

        goHomePage(){
            this.isCartView = false;
            this.pageTitle = "Computers test shop in VueJS";
        },

        getItemsCart(prod){
            if(this.cartProducts.length > 0){
                for(let i = 0; i < this.cartProducts.length; i++){
                    if(this.cartProducts[i].item.id === prod.id){
                        this.cartProducts[i].quantity++;
                    }else{
                        this.cartProducts.push({
                            item: prod,
                            quantity: 1
                        });
                    }
                }
            }
        },

        addProductToCart(prod){
            for(let i = 0; i < this.cartProducts.length; i++){
                if(this.cartProducts[i].item.id === prod.id){
                    this.cartProducts[i].quantity++;
                    return;
                }
            }
            this.cartProducts.push({
                item: prod,
                quantity: 1
            });
            
            prod.stock--;
        },

        increaseQuantity(prod){
            prod.quantity++;
            prod.item.stock--;
        },

        removeProductFromCart(prod){
            const prodIndex = this.cartProducts.indexOf(prod);
            this.cartProducts.splice(prodIndex, 1);
        },

        decreaseQuantity(prod){
            prod.quantity--;
            prod.item.stock++;
            if(prod.quantity <= 0){
                this.removeProductFromCart(prod);
            }
        },

        checkout(){
            this.cartProducts = [];
        }
    },

    computed: {
        countTotal(){
            let total = 0;
            for(let i = 0; i < this.cartProducts.length; i++){
                total += this.cartProducts[i].item.price * this.cartProducts[i].quantity;
            }
            return total;
        }
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
    
</style>
