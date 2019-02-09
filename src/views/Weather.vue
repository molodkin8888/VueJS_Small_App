<template>
<div>
  <h3>weather</h3>
    <div class="container">
      <div class="row">  
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 map_car">
          later this will be map with carsharing auto in Minsk
        </div>
        <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 weather_block">
          <p class="name_city" style="text-align: center;" :aligmentProps="aligmentProps" :id="'city_' + this.id"> {{city}} </p>
          <p class="temperature">Temperature: {{Temp}} °C</p>
          <div v-for="index in Main" :key="index">               
            <p class="precipitation">Precipitation: {{index.main}}, {{index.description}}</p>  
            <img :src="'//openweathermap.org/img/w/' + index.icon + '.png'">
            <p class="humidity">Humidity: {{humidity}} %</p>  
            <p class="pressure">Pressure: {{pressure}} mm Hg</p>  
            <p class="wind_speed">Wind speed: {{Wind}} m/s</p>  
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
//api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=08a6929a460f887bef35ca5097e084e3
import axios from 'axios' 

export default {
  data() {
    return {
      city: '',
      id: '',
      Main:[],
      Wind:[],
      humidity:'',
      pressure:'',
      Temp:'',
      Country: '',
    }
  },

  props: {
    aligmentProps: {
      type: Boolean,
      default: true
    }
  },

  methods: { 
    getMyCity(){     
      var that = this;
      axios.get('http://ipinfo.io').then(function(response){
        that.city = response.data.city;
        that.Country = response.data.country;
        var URL_weather = "https://api.openweathermap.org/data/2.5/weather?q=";
        var currentKey = "&APPID=08a6929a460f88e084e3";
        axios.get(URL_weather + that.city + ',' + that.Country + currentKey).then(function(response){
          that.Main = response.data.weather;
          that.Wind = response.data.wind.speed;
          var temp = response.data.main.temp - 273.5;
          that.Temp = Number(temp).toFixed(1);
          that.humidity = response.data.main.humidity;
          that.pressure = response.data.main.pressure;
          that.id = response.data.id;
        })
      })
    },

    checkId(){
      var that = this;
      var currId = 'city_' + that.id;
      var newStyle = document.getElementById(currId);
      if(this.aligmentProps === true){
        newStyle.style.textAlign = "left";
      }
    }
  },
    created(){
      this.getMyCity();
  },  
    mounted(){
      this.checkId();
  },
}
</script>

<style>
  .map_car{
    background-color: #dedede;
  }

  .weather_block{
    margin-top: 20%;
  }

  .name_city{
    font-size: 26px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .temperature, .precipitation, .humidity, .pressure, .wind_speed{
    font-size: 22px;
    font-weight: 700;
    color: #807e74;
  }
</style>
