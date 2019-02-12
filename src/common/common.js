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