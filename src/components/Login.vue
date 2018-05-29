<template>
  <div class="login-box">
    <div class="login-logo">
      <a href=""><b>Admin</b>LTE</a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <form action="#/" method="get">
        <div id="input_mail" class="form-group has-feedback">
          <input type="email" class="form-control" placeholder="Email">
        </div>
        <div id="input_password" class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="Password">
        </div>
        <div class="row">
          <div class="col-xs-8">
            <div class="checkbox icheck">
              <label class="">
                <div class="icheckbox_square-blue" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="checkbox" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div> Remember Me
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-xs-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </form>
      <div class="options">
        <a href="#">I forgot my password</a><br>
        <a href="#">Register a new membership</a>
      </div>
    </div>
    <!-- /.login-box-body -->
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style>

  #input_mail, #input_password, .options {
    padding: 1em;
  }

  .btn {
    border-radius: 3px;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 1px solid transparent;
  }

  .btn-block {
    display: block;
    width: 100%;
  }

  .btn-primary {
    color: #fff;
    background-color: #3c8dbc;
    border-color: #367fa9;
  }

  .icheckbox_square-blue {
    background-position: 0 0;
  }

  .icheckbox_square-blue {
    border: 1px solid #4f99ff;
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    padding: 0;
    width: 22px;
    height: 22px;
    cursor: pointer;
  }

  element.style {
    position: absolute;
    top: -20%;
    left: -20%;
    display: block;
    width: 140%;
    height: 140%;
    margin: 0px;
    padding: 0px;
    background: rgb(255, 255, 255);
    border: 0px;
    opacity: 0;
  }

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  }

  .col-xs-4, .col-xs-8 {
    float: left;
  }

  .row {
    margin-right: -15px;
    margin-left: -15px;
  }

  .col-xs-4 {
    width: 33.33333333%;
  }

  .col-xs-8 {
    width: 66.66666667%;
  }

  .options {
    display: block;
    padding: 1em;
    text-align: left;

  }

  .options > a{
    text-decoration: none;
    font-size: 14px;
    color: #337ab7;
  }

  .login-box, .register-box {
    width: 360px;
    margin: 7% auto;
  }

  .login-box-body, .register-box-body {
    background: #fff;
    padding: 20px;
    border-top: 0;
    color: #666;
  }

  button, input, optgroup, select, textarea {
    margin: 0;
    font: inherit;
    color: inherit;
  }

  .login-logo, .register-logo {
    font-size: 35px;
    text-align: center;
    margin-bottom: 25px;
    font-weight: 300;
  }

  .login-logo a, .register-logo a {
    color: #444;
  }

  a {
    color: #3c8dbc;
    text-decoration: none;
    background-color: transparent;
  }

  .login-box-body {
    background-color: white;
  }

  body {
    margin-top: 5%;
    background-color: #d2d6de;
    display: flex !important;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Source Sans Pro', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif';
  }
</style>
