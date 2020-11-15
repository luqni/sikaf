x='users';
ktupad(x);
  k[x].app={
  url:{host:'https://guru.sikaf.id/',path:'modules/users/model.php'},
  data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],
  view:function(){
    k[x].ajax.path=this.url.path;
    k[x].crud.table();
    },

set:function(){
  idd=document.getElementById('idd').value;
  pin=document.getElementById('pin').value;
  },

signform:function(){
  out = '<div class="login-page" id="login">';
  out += '<div class="login-box">';
  out += '<div class="logo">';
  out += '<a id="li-kiri" href="javascript:void(0);"><b>SIKAF</b></a>';
  out += '<small>Admin BootStrap Based - Material Design</small>';
  out += '</div>';
  out += '<div class="card">';
  out += '<div class="body">';
  out += '<form id="Form">';
  out += '<div class="msg">Sign in to start your session</div>';
  out += '<div class="input-group">';
  out += '<span class="input-group-addon">';
  out += '<i class="material-icons">person</i>';
  out += '</span>';
  out += '<div class="form-line">';
  out += '<input type="text" id="idd" name="idd"  class="form-control" placeholder="Username" required autofocus>';
  out += '</div>';
  out += '</div>';
  out += '<div class="input-group">';
  out += '<span class="input-group-addon">';
  out += '<i class="material-icons">lock</i>';
  out += '</span>';
  out += '<div class="form-line">';
  out += '<input type="password" id="pin" name="pin" class="form-control" placeholder="Password" required>';
  out += '</div>';
  out += '</div>';
  out += '<div class="row">';
  out += '<div class="col-xs-8 p-t-5">';
  out += '<input type="checkbox" name="rememberme" id="rememberme" class="filled-in chk-col-pink">';
  out += '<label for="rememberme">Remember Me</label>';
  out += '</div>';
  out += '<div class="col-xs-4">';
  out += '<button class="btn btn-block bg-pink waves-effect" type="submit" onclick="k.users.app.signin()" >SIGN IN</button>';
  out += '</div>';
  out += '</div>';
  out += '<div class="row m-t-15 m-b--20">';
  out += '<div class="col-xs-6">';
  out += '<a href="sign-up.html">Register Now!</a>';
  out += '</div>';
  out += '<div class="col-xs-6 align-right">';
  out += '<a href="forgot-password.html">Forgot Password?</a>';
  out += '</div>';
  out += '</div>';
  out += '</form>';
  out += '</div>';
  out += '</div>';
  out += '</div>';
  out += '</div>';
  // out  ='<div class="modal"  id="login">';
  // out +='<div class="row ">';
  // out +='<h1> Login</h1>';
  // out +='<div class="login">';
  // out +='<form id="Form">';
  // out +='<div><label for="idd">Username</label><input type="text" id="idd" name="idd" value=""></div>';
  // out +='<div><label for="pin">PIN</label><input type="text" id="pin" name="pin" value=""></div>';
  // out +='<input type="submit" value="none" style="display:none;">';
  // out +='</form>';
  // out += '<button id="post" class="btn-form" onclick="k.users.app.signin()">Signin</button>';
  // out += '<button id="get" class="btn-form" onclick="k.users.app.signup()">Signup</button>';
  // out +='</div>';
  // out +='</div>';
  // out +='</div>';
  // out +='<div id="nah">';
  // out +='</div>';
  document.getElementById('content').innerHTML=out;
  },

signin:function(){
    this.set();
    k[x].ajax.path=this.url.path;
    k[x].ajax.data={mod:'signin',idd:idd,pin:pin};
    k[x].ajax.get(callback);
    function callback(json){
      res=JSON.parse(json);
      info=res.info;
      n=info.split(',');
      conf.info(res.info);
      if (n[0]=='Berhasil'){
        debug(n[0])
        conf.cookies.set("username",res.data,1);
        k.users.app.login();
        k.users.app.menu();
      }
        this.loginError();
      
      
    }
  },

signout:function(){
    conf.cookies.set("username",'',0);
    location.reload();
    this.signform();
    },

signup:function(){
  this.set();
  k[x].ajax.path=this.url.path;
  k[x].ajax.data={mod:'signup',idd:idd,pin:pin};
  k[x].ajax.get(callback);
  function callback(json){
  res=JSON.parse(json);
  info=res.info;
  n=info.split(',');
  conf.info(res.info);
  if (n[0]=='Berhasil'){
  conf.cookies.set("username",res.data,1);
  k.users.app.login();
  }
  }
  },

login:function(){
  var user=conf.cookies.get("username");
  if (user != "") {
  conf.info("Welcome again " + user);
  this.header();
  this.sidebar();
  this.menu();
  // this.profiles();
  } else {
  this.signform();
  }
  },
profiles:function(){
  user=conf.cookies.get("username");
  out  ='<div class="modal"  id="login">';
  out +='<div class="row ">';
  out +='<h1> Profile</h1>';
  out +='<div class="login">';
  out +='<form id="Form">';
  out +='<div><label for="idd">Username</label><input type="text" id="idd" name="idd" value="'+user+'"></div>';
  out +='<div><label for="pin">PIN</label><input type="text" id="pin" name="pin" value=""></div>';
  out +='<input type="submit" value="none" style="display:none;">';
  out +='</form>';
  out +='<button id="gantipin" class="btn-form" onclick="k.users.app.setpin()">Ganti PIN</button>';
  out +='<button id="logout" class="btn-form" onclick="k.users.app.signout()">Logout</button>';
  out +='<div id="btn-extra" class="row" >Logout</div>';

  out +='</div>';
  out +='</div>';
  out +='</div>';
  document.getElementById('content').innerHTML=out;
  },

setpin:function(){
  this.set();
  k[x].ajax.path=this.url.path;
  k[x].ajax.data={mod:'setpin',idd:idd,pin:pin};
  k[x].ajax.get(callback);
  function callback(json){
  res=JSON.parse(json);
  info=res.info;
  conf.info (info);
  }
  },

menu:function(){
  induk=conf.cookies.get("username");
  k[x].ajax.path=this.url.path;
  k[x].ajax.data={mod:'menu',induk:induk};
  k[x].ajax.get(callback);
  function callback(json){
  res=JSON.parse(json);
  info=res.info;
  // conf.info(res);
  debug(res);
  conf.menu.data=res.data;
  conf.menu.view();


  data=res.data
  out='';
  for(i in data){
    out +='<button id="logout" class="btn-form" onclick="conf.sc(\''+data[i].url+'\')">'+data[i].nama+'</button>';
  }
  document.getElementById('btn-extra').innerHTML=out;


  }
},

header:function(){
  user=conf.cookies.get("username");
    out ='<nav class="navbar">';
    out +='<div class="container-fluid">';
    out +='<div class="navbar-header">';
    out +='<a href="javascript:void(0);" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"></a>';
    out +='<a href="javascript:void(0);" class="bars"></a>';
    out +='<a class="navbar-brand" href="index.html">ADMINBSB - MATERIAL DESIGN</a>';
    out +='</div>';
    out +='</div>';
    out +='</nav>';
  document.getElementById('header').innerHTML=out;
  },

  sidebar:function(){
  user=conf.cookies.get("username");
  out ='<aside id="leftsidebar" class="sidebar">';
  out +='<div class="user-info">';
  out +='<div class="image">';
  out +='<img src="#" width="48" height="48" alt="User" />';
  out +='</div>';
  out +='<div class="info-container">';
  out +='<div class="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+user+'</div>';
  out +='<div class="btn-group user-helper-dropdown">';
  out +='<i class="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>';
  out +='<ul class="dropdown-menu pull-right">';
  out +='<li><a href="javascript:void(0);"><i class="material-icons">person</i>Profile</a></li>';
  out +='<li role="seperator" class="divider"></li>';
  out +='<li><a href="javascript:void(0);"><i class="material-icons">group</i>Followers</a></li>';
  out +='<li><a href="javascript:void(0);"><i class="material-icons">shopping_cart</i>Sales</a></li>';
  out +='<li><a href="javascript:void(0);"><i class="material-icons">favorite</i>Likes</a></li>';
  out +='<li role="seperator" class="divider"></li>';
  out +='<li><a href="javascript:void(0);" onclick="k.users.app.signout()"><i class="material-icons">input</i>Sign Out</a></li>';
  out +='</ul>';
  out +='</div>';
  out +='</div>';
  out +='</div>';
  out +='<div class="menu">';
  out +='<ul class="list">';
  out +='<li class="header">MAIN NAVIGATION</li>';
  out +='<li class="active">';
  out +='<a href="index.html">';
  out +='<i class="material-icons">home</i>';
  out +='<span>Home</span>';
  out +='</a>';
  out +='</li>';
  out +='<li>';
  out +='<a href="pages/typography.html">';
  out +='<i class="material-icons">text_fields</i>';
  out +='<span>Typography</span>';
  out +='</a>';
  out +='</li>';  
  out +='</ul>';
  out +='</div>';
  out +='<div class="legal">';
  out +='<div class="copyright">';
  out +='&copy; 2016 - 2017 <a href="javascript:void(0);">AdminBSB - Material Design</a>';
  out +='</div>';
  out +='<div class="version">';
  out +='<b>Version: </b> 1.0.5';
  out +='</div>';
  out +='</div>';
  out +='</aside>';
  document.getElementById('sidebar').innerHTML=out;
  },

  loginError:function(){
    out ='<div class="alert alert-danger">';
    out +='<strong>Oh snap!</strong> Change a few things up and try submitting again.';
    out +='</div>';
    document.getElementById('alertError').innerHTML=out;
  },

  };
