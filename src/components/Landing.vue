<template>
  <body class="landing-body">
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
      <div class="main">
        <h1>AdminLTE Replica</h1>
        <p>Una rèplica de la plantilla <b><a href="https://adminlte.io/">AdminLTE</a></b></p>
        <img src="https://adminlte.io/img/AdminLTE2.1.png" alt="Pagina principal plantilla AdminLTE">
      </div>
      <footer>
        <span>Created with love <span class="cor">&hearts;</span> by <b><a href="https://github.com/eric98">Eric Garcia</a></b></span>
      </footer>
    </div>
  </body>
</template>

<script>
export default {
  name: 'Landing'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  body {
    background-color: #d2d6de;
    font-family: 'Source Sans Pro', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif';
  }

  .cor{
    color: red;
  }

  footer {
    background-color: #31708F;
    color: white;
    padding: 1em;
  }

  .main {
    padding-bottom: 1em;
    background: url(https://i.pinimg.com/originals/be/f4/84/bef484c1c2679790df69058bcd570d53.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    color: white;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

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
    color: white;
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
