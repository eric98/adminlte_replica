<template>
    <div class="container">
        <header>
            <span style="display: inline-block; text-align: center;"><b>Admin</b>LTE</span>
        </header>

        <nav class="header-nav">
            <a class="nav-sidebar" href="">
                <svg @click="toogleSideBar" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </a>
            <ul>
                <li>
                    <a class="nav-sidebar" href="#Emails">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 8a6 6 0 0 1 4.03-5.67 2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8zm8 10a2 2 0 1 1-4 0h4z"/></svg>
                    </a>
                </li>
                <li>
                    <a class="nav-sidebar" href="#Notification">Notifications</a>
                </li>
                <li>
                    <a class="nav-sidebar" href="#Tasks">Tasks</a>
                </li>
                <li>
                    <a class="nav-sidebar" href="#Profile"><img class="avatar" src="https://ca.gravatar.com/userimage/138732031/38f84b5befe225f1610da8955bc0548f.jpeg" alt="Eric Garcia Reverter">Eric Garcia Reverter</a>
                </li>
                <li>
                    <a class="nav-sidebar" href="#Preferences">Preferences</a>
                </li>
            </ul>
        </nav>
        <main>
            <section class="content-header">CONTENT HEADER</section>
            <section><router-view/></section>
        </main>

        <aside class="left_sidebar" :class="{ isOpen: menuOpen }">
            <div class="user-panel">
                <div>
                    <img class="avatar" src="https://ca.gravatar.com/userimage/138732031/38f84b5befe225f1610da8955bc0548f.jpeg" alt="Eric Garcia Reverter">
                </div>
                <div>
                    <p>Eric Garcia Reverter</p>
                    <svg height="14" width="14">
                        <circle cx="7" cy="7" r="5" stroke="#3d763e" stroke-width="1" fill="#3d763e" />
                    </svg>
                    Online
                </div>
            </div>
            <div class="search-container">
                <form action="#">
                    <input type="text" placeholder="Search...">
                    <button type="submit">
                        <svg class="icon-sidebar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
                    </button>
                </form>
            </div>
            <ul>
                <li class="main-navigation">Main Navigation</li>
                <li><a class="left-sidebar" href="#"><svg class="icon-sidebar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"/></svg>
                     Dashboard</a></li>
                <router-link tag="li" to="/landing">
                    <a class="left-sidebar" href="/landing">
                        <svg class="icon-sidebar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7.03 2.6a3 3 0 0 1 5.94 0L15 3v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4zM5 6H4v12h12V6h-1v1H5V6zm5-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
                        Landing page
                    </a>
                </router-link>
                <router-link tag="li" to="/login">
                    <a class="left-sidebar" href="/login">
                        <svg class="icon-sidebar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7.03 2.6a3 3 0 0 1 5.94 0L15 3v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4zM5 6H4v12h12V6h-1v1H5V6zm5-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
                        Login
                    </a>
                </router-link>
                <router-link tag="li" to="/cards">
                    <a class="left-sidebar" href="/cards">
                        <svg class="icon-sidebar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7.03 2.6a3 3 0 0 1 5.94 0L15 3v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4zM5 6H4v12h12V6h-1v1H5V6zm5-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
                        Cards
                    </a>
                </router-link>
                <router-link tag="li" to="/dropdown">
                    <a class="left-sidebar" href="/dropdown">
                        <svg class="icon-sidebar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7.03 2.6a3 3 0 0 1 5.94 0L15 3v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4zM5 6H4v12h12V6h-1v1H5V6zm5-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
                        Dropdown
                    </a>
                </router-link>
                <li class="main-navigation">Labels</li>
                <li><a class="left-sidebar" href="#"><svg class="icon-sidebar-red" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="75" />
                </svg> Important</a></li>
                <li><a class="left-sidebar" href="#"><svg class="icon-sidebar-yellow" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="75" />
                </svg> Warning</a></li>
                <li><a class="left-sidebar" href="#"><svg class="icon-sidebar-blue" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="75" />
                </svg> Information</a></li>
                <li class="premium-navigation"><a class="premium-navigation-link" href="#">Premium Templates</a></li>
            </ul>
        </aside>
        <aside class="rigth_sidebar">Rigth Sidebar</aside>

        <footer>FOOTER</footer>
    </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        menuOpen: false
      }
    },
    methods: {
      toogleSideBar () {
        this.menuOpen = !this.menuOpen
      }
    }
  }
</script>

<style>
    /*.search-container {*/
        /*float: right;*/
    /*}*/

    .search-container input[type=text] {
        padding: 6px;
        margin-top: 8px;
        border: none;
        background: #666;
        color: white;
    }

    .search-container button {
        padding: 6px 10px;
        margin-top: 8px;
        margin-right: 16px;
        background: #666;
        border: none;
        cursor: pointer;
    }

    .left_sidebar ul {
        margin: 0;
        background-color: #2d3c42;
        display: flex;
        flex-direction: column;
    }

    .left_sidebar ul li.main-navigation {
        color: #4b646f;
        background: #1a2226;
        text-transform: uppercase;
        font-size: 12px;
        padding: 12px 15px;
        cursor: auto;
    }

    .premium-navigation:hover{
        background: rgb(0, 111, 55);
    }

    .premium-navigation {
        color: white;
        background: rgb(0, 166, 90);
        text-transform: uppercase;
        font-size: 12px;
        padding: 12px 15px;
        cursor: auto;
    }

    ul{
        padding: 0;
    }

    .left-sidebar {
        background-color: #2d3c42;
        display: block;
        padding: 12px 15px;
    }

    .premium-navigation-link {
        color: white;
        text-decoration:none;
        padding: 12px 15px;
    }

    .left_sidebar ul li a.left-sidebar:hover{
        background-color: #4b646f;
    }

    .header-nav {
        grid-row: 1;
        grid-column: 2/4;
        background-color: #3c8dbc;
        color: #fff;
        display: flex;
    }

    .header-nav>a {
        padding: 0.5rem;
        height: 100%;
        display: flex;
        align-self: center;
        align-items: center;
    }

    .header-nav ul {
        display: flex;
        margin: 0px 0px 0px auto;
    }

    .header-nav ul li {
        height: 100%;
        display: flex;
        align-items: center;
    }

    .header-nav ul li a {
        padding: 12px 15px 12px 15px;
        display:flex;
        align-items: center;
    }

    .header-nav ul li:hover, .header-nav>a:hover {
        background-color: #367fa9;
    }

    .user-panel p{
        margin: 0;
        font-size: 14px;
        font-weight: 600;
    }

    .user-panel{
        padding: 10px;
        display: flex;
        font-size: 10px;
    }

    .avatar{
        border-radius: 50%;
        height: 40px;
        margin-right: 0.5em;
    }

    .icon-sidebar {
        height: 1em;
        width: 1em;
        fill: currentColor;
    }

    .icon-sidebar-red {
        height: 1em;
        width: 1em;
        fill: red;
    }

    .icon-sidebar-yellow {
        height: 1em;
        width: 1em;
        fill: yellow;
    }

    .icon-sidebar-blue {
        height: 1em;
        width: 1em;
        fill: blue;
    }

    html, body, .container {
        margin: 0;
        height: 100%;
    }

    body {
        font-family: 'Source Sans Pro','Helvetica Neue','Helvetica','Arial','sans-serif';
        font-weight: 400;
        font-size: 14px;
        line-height: 1.42857143;
        color: #333;
    }

    .left-sidebar {
        text-decoration: none;
        color: inherit;
    }

    .nav-sidebar {
        text-decoration: none;
        color: inherit;
    }

    .icon {
        display: inline-block;
        height: 1.25em;
        width: 1.25em;
        fill: currentColor;
    }

    header,
    footer,
    main,
    .content-header {
        padding: 1.2rem;
    }

    .container {
        display: grid;
        grid-template-columns: 200px 1fr 200px;
        grid-template-rows: 50px 1fr 50px;
    }

    header {
        color: white;
        background-color: #367fa9;
        grid-row: 1;
        grid-column: 1;
    }

    footer {
        background-color: white;
        grid-row: 3;
        grid-column: 2/4;
    }
    main {
        background-color: #ecf0f5;
        grid-row: 2;
        grid-column: 2;
    }
    aside {
        color: white;
        background-color: #222d32;
    }
    .content-header { background-color: #d2d6de; }

    /*OFF CANVAS*/
    /*.left_sidebar {*/
    /*position: fixed; !* or choose `absolute` depending on desired behavior*!*/
    /*top: 0;*/
    /*bottom: 0;*/
    /*width: 200px;*/
    /*left: -200px;*/
    /*transition: left .3s ease-in-out;*/
    /*grid-row: 2;*/
    /*grid-column-start: 1;*/
    /*grid-column-end: 1;*/
    /*}*/

    /*.left_sidebar.isOpen {*/
    /*transform: translate3d(200px,0,0);*/
    /*}*/
    .left_sidebar form {
        padding: 10px;
    }

    .left_sidebar {
        grid-row: 2/4;
        grid-column: 1;
    }

    .rigth_sidebar {
        grid-row: 2;
        grid-column: 3;
    }

    ul, li {
        list-style: none;
    }

    nav {
        grid-row: 1;
        grid-column: 2/4;
        background-color: #3c8dbc;
        color: #fff;
        display: flex;
    }

    nav ul {
        display: flex;
        margin-left: auto;
    }

    /* Responsive */

    @media (max-width: 400px) {
        .container {
            display: block;
        }
    }

</style>
