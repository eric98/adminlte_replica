<template>
  <div class="container">
    <nav class="header-nav">
      <ul>
        <li><a href="#/landing">
          Home
        </a></li>
        <li><a href="#/login">
          Login
        </a></li>
        <li><a href="#/">
          MainLayout
        </a></li>
      </ul>
    </nav>
    <div class="main flex flex-column align-center">
<h2>AdminLTE Replica</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  .main {
    height: 729px;
    background: url(https://i.pinimg.com/originals/be/f4/84/bef484c1c2679790df69058bcd570d53.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    color: white;
  }

  .flex { display: flex; }
  .flex-column { flex-direction: column; }
  .align-center { align-items: center; }

  .header-nav {
    background-color: #31708F;
    color: #EEEEEE;
    width: 100%;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    padding-right: 10px;
  }

  body {
    background-color: #d2d6de;
  }

  nav {
    grid-row: 1;
    grid-column: 2/4;
    background-color: white;
    display: flex;
  }

  nav ul {
    display: flex;
    margin-left: auto;
  }

</style>
