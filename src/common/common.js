export default {

	data() {
		return {
			products: [
				{
					id: 1,
					imgSrc: "",
					name: "Samsung",
					description: "Samsung Ideapad 322-15ISsK (80XH022HIN) Samsung (Core i3 6th Gen/4 GB/1 GB/DOS). The lowest price of Samsung Ideapad 3s20-15ISK (80XHs022HIN) Laptop",
					price: 200.4,
					stock: 4
				},
				{
					id: 2,
					imgSrc: "",
					name: "Lenovo",
					description: "Lenovo Ideapad 3220-15IsSK (80XH022HIN) Laptop (Core i3 6th Gen/4 GB/1 GB/DOS). The lowest price of Lenovo Ideapad 3s20-15ISsK (80XH022sHIN) Laptop",
					price: 400.12,
					stock: 4
				},
				{
					id: 3,
					imgSrc: "",
					name: "macBook",
					description: "Macbook Ideapad 322-15ISsK (80XH022HIN) Samsung (Core i3 6th Gen/4 GB/1 GB/DOS). The lowest price of Samsung Ideapad 3s20-15ISK (80XHs022HIN) Laptop",
					price: 1100,
					stock: 8
				},
				{
					id: 4,
					imgSrc: "",
					name: "Samsung",
					description: "Samsung Ideapad 322-15ISsK (80XH022HIN) Samsung (Core i3 6th Gen/4 GB/1 GB/DOS). The lowest price of Samsung Ideapad 3s20-15ISK (80XHs022HIN) Laptop",
					price: 168.1,
					stock: 45
				},
				{
					id: 5,
					imgSrc: "",
					name: "Lenovo",
					description: "Lenovo Ideapad 3220-15IsSK (80XH022HIN) Laptop (Core i3 6th Gen/4 GB/1 GB/DOS). The lowest price of Lenovo Ideapad 3s20-15ISsK (80XH022sHIN) Laptop",
					price: 448.8,
					stock: 11
				},
				{
					id: 6,
					imgSrc: "",
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
		showCart() {
			this.isCartView = true;
			this.pageTitle = "Personal Cart";
		},

		goHomePage() {
			this.isCartView = false;
			this.pageTitle = "Computers test shop in VueJS";
		},

		getItemsCart(prod) {
			if (this.cartProducts.length > 0) {
				for (let i = 0; i < this.cartProducts.length; i++) {
					if (this.cartProducts[i].item.id === prod.id) {
						this.cartProducts[i].quantity++;
					} else {
						this.cartProducts.push({
							item: prod,
							quantity: 1
						});
					}
				}
			}
		},

		addProductToCart(prod) {
			for (let i = 0; i < this.cartProducts.length; i++) {
				if (this.cartProducts[i].item.id === prod.id) {
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

		increaseQuantity(prod) {
			if (prod.item.stock > 0) {
				prod.quantity++;
				prod.item.stock--;
			} else {
				alert('this is maximum quantity it product for the order.');
			}
		},

		removeProductFromCart(prod) {
			const prodIndex = this.cartProducts.indexOf(prod);
			this.cartProducts.splice(prodIndex, 1);
		},

		decreaseQuantity(prod) {
			prod.quantity--;
			prod.item.stock++;
			if (prod.quantity <= 0) {
				this.removeProductFromCart(prod);
			}
		},

		checkout() {
			this.cartProducts = [];
		},
	},

	computed: {
		countTotal() {
			let total = 0;
				for (let i = 0; i < this.cartProducts.length; i++) {
					total += this.cartProducts[i].item.price * this.cartProducts[i].quantity;
				}
			return total.toFixed(2);
		}
	}
}