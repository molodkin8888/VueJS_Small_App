<template>
<div class="container h-100">  
    <h2 class="title">Welcom to the small apps by Vue.js</h2>
        <div class="row h-100 justify-content-center mt-5">
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <router-link to="/faq" class="link_to">How its work?</router-link>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <router-link to="/shop" class="link_to">Mini-online-shop</router-link>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <router-link to="/random" class="link_to">Random people</router-link>
                </div>
        </div>
</div>
</template> 

<script>
export default {

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
</style>
