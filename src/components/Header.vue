<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#"><router-link to="/" class="link_to">Home</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> <router-link to="/faq" class="link_to">How its work?</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><router-link to="/shop" class="link_to">Mini-online-shop</router-link></a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#"><router-link to="/random" class="link_to">Random</router-link></a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
  .link_to{
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }

  .link_to:hover{
    color: #908d8d;
  }
</style>

