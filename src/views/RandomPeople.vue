<template>
<div class="container">
	<div class="search_box">
		<input type="number" placeholder="number people" class="input_number" v-model="quantity"/>
		<button class="show_people" @click="getPeople()">Show people</button>
	</div>
	<div class="row d-flex justify-content-center">
		<div class="general_random_block col-lg-3 col-md-3 col-sm-12 pt-3 pl-3 pr-3 pb-3 mb-2 ml-2 mt-5 mr-2" :data="people" v-for="index in people" :key="index" :id="'people_' + index.id.name">
			<div class="photo_people"><img :src="index.picture.large"></div>
			<div class="fio_people">{{index.name.first}} {{index.name.last}}</div>
			<div class="email_people">{{index.email}}</div>
			<div class="gender_people">{{index.gender}}</div>
			<div class="phone_people">{{index.phone}}</div>
			<div class="address_people">{{index.location.city}}</div>
			<iframe class="coordinats_people" v-bind:src="'https://maps.google.com/maps?q=' + index.location.coordinates.latitude +',' + index.location.coordinates.longitude + '&z=7&amp;output=embed'"></iframe>
			<span @click="testClick()">call mixin</span>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios' 
import common from '../common/common.js'

export default{
	mixins: [common],
	data (){
		return {
			people: [],
			quantity: '',
		}
	},
	methods: {
		getPeople: function() {
			var that = this;
			var url = "https://randomuser.me/api/?results=";
			axios.get(url + this.quantity).then(function(response) {
				that.people = response.data.results;
			})
		}       
	}	
}
</script>

<style scodep>
	.container{
		margin-top: 100px;
		margin-bottom: 100px;
	}
	.general_random_block{
		padding: 10px;
		border: 1px solid black;
		border-radius: 5px;
	}

	.input_number{
		border-top: 0px;
		border-left: 0px;
		border-right: 0px;
		padding-left: 5px;
		margin-right: 25px;
		text-align: center;
		text-decoration: none;
		border-bottom: 1px solid #6833d0;
	}

	.coordinats_people{
		width: 100%;
	}

	input {
		outline:none;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	.show_people{
		border: none;
		border-radius: 5%;
		background-color: #85c7ff;
		padding: 5px;
		text-transform: uppercase;
		cursor: pointer;
	}

	.show_people:hover{
		cursor: pointer;
		background-color: #2486da;
		color: #fff;
	}

	.fio_people{
		font-weight: 700;
		text-transform: uppercase;
	}

	@media screen and (max-width: 381px){
		.show_people{
			margin-top: 25px;
			font-size: 11px;
		}
	}
	
</style>
