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
  </div>
</template>

<script>
export default {
  name: 'Landing'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    padding-right: 10px;
  }

  body {
    background-color: #8abbde;
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
