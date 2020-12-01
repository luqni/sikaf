x='users';
ktupad(x);
  k[x].app={
  url:{host:'http://localhost/kuis-lama/ ',path:'modules/users/model.php'},
  data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],
  view:function(){
    akses=conf.cookies.get("akses");
    if(akses == "admin"){
      out +=  '<section class="content">';
      out +=      '<div class="container-fluid">';
      out +=          '<div class="block-header">';
      out +=              '<h2>KUTTAB PUSAT</h2>';
      out +=          '</div>';
      out +=          '<div class="row clearfix">';
      out +=              '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">';
      out +=                  '<div class="info-box bg-pink hover-expand-effect">';
      out +=                      '<div class="icon">';
      out +=                          '<i class="material-icons">playlist_add_check</i>';
      out +=                      '</div>';
      out +=                      '<div class="content">';
      out +=                          '<div class="text">NEW TASKS</div>';
      out +=                          '<div class="number count-to" data-from="0" data-to="125" data-speed="15" data-fresh-interval="20"></div>';
      out +=                      '</div>';
      out +=                  '</div>';
      out +=              '</div>';
      out +=              '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">';
      out +=                  '<div class="info-box bg-cyan hover-expand-effect">';
      out +=                      '<div class="icon">';
      out +=                          '<i class="material-icons">help</i>';
      out +=                      '</div>';
      out +=                      '<div class="content">';
      out +=                          '<div class="text">NEW TICKETS</div>';
      out +=                          '<div class="number count-to" data-from="0" data-to="257" data-speed="1000" data-fresh-interval="20"></div>';
      out +=                      '</div>';
      out +=                  '</div>';
      out +=              '</div>';
      out +=              '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">';
      out +=                  '<div class="info-box bg-light-green hover-expand-effect">';
      out +=                      '<div class="icon">';
      out +=                          '<i class="material-icons">forum</i>';
      out +=                      '</div>';
      out +=                      '<div class="content">';
      out +=                          '<div class="text">NEW COMMENTS</div>';
      out +=                          '<div class="number count-to" data-from="0" data-to="243" data-speed="1000" data-fresh-interval="20"></div>';
      out +=                      '</div>';
      out +=                  '</div>';
      out +=              '</div>';
      out +=              '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">';
      out +=                  '<div class="info-box bg-orange hover-expand-effect">';
      out +=                      '<div class="icon">';
      out +=                          '<i class="material-icons">person_add</i>';
      out +=                      '</div>';
      out +=                      '<div class="content">';
      out +=                          '<div class="text">NEW VISITORS</div>';
      out +=                          '<div class="number count-to" data-from="0" data-to="1225" data-speed="1000" data-fresh-interval="20"></div>';
      out +=                      '</div>';
      out +=                  '</div>';
      out +=              '</div>';
      out +=          '</div>';
      out +=          '<div class="row clearfix">';
      out +=              '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">';
      out +=                  '<div class="card">';
      out +=                      '<div class="header">';
      out +=                          '<div class="row clearfix">';
      out +=                              '<div class="col-xs-12 col-sm-6">';
      out +=                                  '<h2>CPU USAGE (%)</h2>';
      out +=                              '</div>';
      out +=                              '<div class="col-xs-12 col-sm-6 align-right">';
      out +=                                  '<div class="switch panel-switch-btn">';
      out +=                                      '<span class="m-r-10 font-12">REAL TIME</span>';
      out +=                                      '<label>OFF<input type="checkbox" id="realtime" checked><span class="lever switch-col-cyan"></span>ON</label>';
      out +=                                  '</div>';
      out +=                              '</div>';
      out +=                          '</div>';
      out +=                          '<ul class="header-dropdown m-r--5">';
      out +=                              '<li class="dropdown">';
      out +=                                  '<a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">';
      out +=                                      '<i class="material-icons">more_vert</i>';
      out +=                                  '</a>';
      out +=                                  '<ul class="dropdown-menu pull-right">';
      out +=                                      '<li><a href="javascript:void(0);">Action</a></li>';
      out +=                                      '<li><a href="javascript:void(0);">Another action</a></li>';
      out +=                                      '<li><a href="javascript:void(0);">Something else here</a></li>';
      out +=                                  '</ul>';
      out +=                              '</li>';
      out +=                          '</ul>';
      out +=                      '</div>';
      out +=                      '<div class="body">';
      out +=                          '<div id="real_time_chart" class="dashboard-flot-chart"></div>';
      out +=                      '</div>';
      out +=                  '</div>';
      out +=              '</div>';
      out +=          '</div>';
      out +=      '</div>';
      out +=  '</section>';
  
    } else if (akses == "guru"){
      out +=  '<section class="content">';
      out +=      '<div class="container-fluid">';
      out +=          '<div class="block-header">';
      out +=              '<h2>DASHBOARD GURU</h2>';
      out +=          '</div>';
      out +=     '<div class="row clearfix">';
      out +=            '<a href="#" onclick="k.users.app.signout()">';
      out +=              '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">';
      out +=                  '<div class="info-box bg-light-green hover-expand-effect">';
      out +=                      '<div class="icon">';
      out +=                          '<i class="material-icons">playlist_add_check</i>';
      out +=                      '</div>';
      out +=                      '<div class="content">';
      out +=                          '<div class="text">ABSENSI SANTRI</div>';
      out +=                          '<div class="number count-to" data-from="0" data-to="125" data-speed="15" data-fresh-interval="20"></div>';
      out +=                      '</div>';
      out +=                  '</div>';
      out +=              '</div>';
      out +=            '</a>';
      out +=              '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">';
      out +=                  '<div class="info-box bg-cyan hover-expand-effect">';
      out +=                      '<div class="icon">';
      out +=                          '<i class="material-icons">help</i>';
      out +=                      '</div>';
      out +=                      '<div class="content">';
      out +=                          '<div class="text">NEW TICKETS</div>';
      out +=                          '<div class="number count-to" data-from="0" data-to="257" data-speed="1000" data-fresh-interval="20"></div>';
      out +=                      '</div>';
      out +=                  '</div>';
      out +=              '</div>';
      out +=              '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">';
      out +=                  '<div class="info-box bg-light-green hover-expand-effect">';
      out +=                      '<div class="icon">';
      out +=                          '<i class="material-icons">forum</i>';
      out +=                      '</div>';
      out +=                      '<div class="content">';
      out +=                          '<div class="text">NEW COMMENTS</div>';
      out +=                          '<div class="number count-to" data-from="0" data-to="243" data-speed="1000" data-fresh-interval="20"></div>';
      out +=                      '</div>';
      out +=                  '</div>';
      out +=              '</div>';
      out +=              '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">';
      out +=                  '<div class="info-box bg-orange hover-expand-effect">';
      out +=                      '<div class="icon">';
      out +=                          '<i class="material-icons">person_add</i>';
      out +=                      '</div>';
      out +=                      '<div class="content">';
      out +=                          '<div class="text">NEW VISITORS</div>';
      out +=                          '<div class="number count-to" data-from="0" data-to="1225" data-speed="1000" data-fresh-interval="20"></div>';
      out +=                      '</div>';
      out +=                  '</div>';
      out +=              '</div>';
      out +=          '</div>';
      out +=      '</div>';
      out +=  '</section>';
    }else{
      out += '<h1>BUKAN ADMIN</h1>';
    }
    document.getElementById('content').innerHTML=out;
    // k[x].ajax.path=this.url.path;
    // k[x].crud.table();
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
  out += '</form>';
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
      console.log(res.data[0].akses);
      info=res.info;
      n=info.split(',');
      conf.info(res.info);
      if (n[0]=='Berhasil'){
        debug(n[0])
        conf.cookies.set("username",n[1]);
        conf.cookies.set("akses", res.data[0].akses);
        location.reload();
        k.users.app.login();
        k.users.app.menu();
        
      }
        this.loginError();
      
      
    }
  },

signout:function(){
    conf.cookies.set("username",'',0);
    conf.cookies.set("akses",'',0);
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
  this.menu();
  this.view();
   // this.contentPustat();
  this.sidebar();
  
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
  console.log(res);
  info=res.info;
  // conf.info(res);
  debug(res);
  conf.menu.data=res.data;
  conf.menu.view();
  data=res.data
  out='';
  for(i in data){
    // out +='<button id="logout" class="btn-form" onclick="conf.sc(\''+data[i].url+'\')">'+data[i].nama+'</button>';
    out +='<li>';
    out +='<a href="#" onclick="conf.sc(\''+data[i].url+'\')">';
    out +='<i class="material-icons">'+data[i].logo+'</i>';
    out +='<span>'+data[i].nama+'</span>';
    out +='</a>';
    out +='</li>';
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
  out +='<a class="navbar-brand" href="index.html">Sistem Informasi Al -Fatih</a>';
  out +='</div>';
  out += '<div class="collapse navbar-collapse" id="navbar-collapse">';
  out += '<ul class="nav navbar-nav navbar-right">';
  out += '<li class="dropdown">';
  out += '<a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button">';
  out += '<i  class="material-icons">account_circle</i> sa';
  // out += '<p>sa</p>';
  out += '</a>';
  out +='<ul class="dropdown-menu pull-right">';
  out +='<li><a href="javascript:void(0);"><i class="material-icons">person</i>Profile</a></li>';
  out +='<li role="seperator" class="divider"></li>';
  out +='<li><a href="javascript:void(0);"><i class="material-icons">group</i>Followers</a></li>';
  out +='<li><a href="javascript:void(0);"><i class="material-icons">shopping_cart</i>Sales</a></li>';
  out +='<li><a href="javascript:void(0);"><i class="material-icons">favorite</i>Likes</a></li>';
  out +='<li role="seperator" class="divider"></li>';
  out +='<li><a href="javascript:void(0);" onclick="k.users.app.signout()"><i class="material-icons">input</i>Sign Out</a></li>';
  out +='</ul>';
  out +='</li>';
  out += '</div>';
  out +='</div>';
  out +='</nav>';
  document.getElementById('header').innerHTML=out;
  },

  sidebar:function(){
  user=conf.cookies.get("username");
  out = '<section>';
  out +='<aside id="leftsidebar" class="sidebar">';
  out +='<div class="user-info">';
  out +='<div class="image">';
  // out +='<img src="#" width="48" height="48" alt="User" />';
  out +='</div>';
  out +='<div class="info-container">';
  // out +='<div class="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+user+'</div>';
  out +='<div class="btn-group user-helper-dropdown">';
   out +='<i class="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">'+user+'</i>';
  // out +='<i class="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>';
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
  out +='<li class="header">MENU UTAMA</li>';
  // out +='<li class="active">';
  out +='<a href="index.html">';
  out +='<i class="material-icons">home</i>';
  out +='<span>Dashboard</span>';
  out +='</a>';
  out +='</li>';
  out +='<div id="btn-extra" ></div>';
  // out +='<li>';
  // out +='<a href="#">';
  // out +='<i class="material-icons">school</i>';
  // out +='<span>Kurikulum</span>';
  // out +='</a>';
  // out +='</li>';
  out +='<li>';
  out +='<a href="javascript:void(0);" class="menu-toggle">';
  out +='<i class="material-icons">settings</i>';
  out +='<span>Pengaturan</span>';
  out +='</a>';
  out += '<ul class="ml-menu">';
  out += '<li>';
  out += '<a href="#">Menu</a>';
  out += '</li>'
  out +=  '<li>';
  out += '<a href="#">User</a>';
  out +=  '</li>';
  out +=  '</ul>';
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
  out +='</section>'
  // out +='<div id="contentPusat" ></div>';
  document.getElementById('sidebar').innerHTML=out;
  },

  contentPustat:function(){
  user=conf.cookies.get("username");


  out +=  '<section class="content">';
  out +=      '<div class="container-fluid">';
  out +=          '<div class="block-header">';
  out +=              '<h2>KUTTAB PUSAT</h2>';
  out +=          '</div>';
  out +=          '<div class="row clearfix">';
  out +=              '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">';
  out +=                  '<div class="info-box bg-pink hover-expand-effect">';
  out +=                      '<div class="icon">';
  out +=                          '<i class="material-icons">playlist_add_check</i>';
  out +=                      '</div>';
  out +=                      '<div class="content">';
  out +=                          '<div class="text">NEW TASKS</div>';
  out +=                          '<div class="number count-to" data-from="0" data-to="125" data-speed="15" data-fresh-interval="20"></div>';
  out +=                      '</div>';
  out +=                  '</div>';
  out +=              '</div>';
  out +=              '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">';
  out +=                  '<div class="info-box bg-cyan hover-expand-effect">';
  out +=                      '<div class="icon">';
  out +=                          '<i class="material-icons">help</i>';
  out +=                      '</div>';
  out +=                      '<div class="content">';
  out +=                          '<div class="text">NEW TICKETS</div>';
  out +=                          '<div class="number count-to" data-from="0" data-to="257" data-speed="1000" data-fresh-interval="20"></div>';
  out +=                      '</div>';
  out +=                  '</div>';
  out +=              '</div>';
  out +=              '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">';
  out +=                  '<div class="info-box bg-light-green hover-expand-effect">';
  out +=                      '<div class="icon">';
  out +=                          '<i class="material-icons">forum</i>';
  out +=                      '</div>';
  out +=                      '<div class="content">';
  out +=                          '<div class="text">NEW COMMENTS</div>';
  out +=                          '<div class="number count-to" data-from="0" data-to="243" data-speed="1000" data-fresh-interval="20"></div>';
  out +=                      '</div>';
  out +=                  '</div>';
  out +=              '</div>';
  out +=              '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">';
  out +=                  '<div class="info-box bg-orange hover-expand-effect">';
  out +=                      '<div class="icon">';
  out +=                          '<i class="material-icons">person_add</i>';
  out +=                      '</div>';
  out +=                      '<div class="content">';
  out +=                          '<div class="text">NEW VISITORS</div>';
  out +=                          '<div class="number count-to" data-from="0" data-to="1225" data-speed="1000" data-fresh-interval="20"></div>';
  out +=                      '</div>';
  out +=                  '</div>';
  out +=              '</div>';
  out +=          '</div>';
  out +=          '<div class="row clearfix">';
  out +=              '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">';
  out +=                  '<div class="card">';
  out +=                      '<div class="header">';
  out +=                          '<div class="row clearfix">';
  out +=                              '<div class="col-xs-12 col-sm-6">';
  out +=                                  '<h2>CPU USAGE (%)</h2>';
  out +=                              '</div>';
  out +=                              '<div class="col-xs-12 col-sm-6 align-right">';
  out +=                                  '<div class="switch panel-switch-btn">';
  out +=                                      '<span class="m-r-10 font-12">REAL TIME</span>';
  out +=                                      '<label>OFF<input type="checkbox" id="realtime" checked><span class="lever switch-col-cyan"></span>ON</label>';
  out +=                                  '</div>';
  out +=                              '</div>';
  out +=                          '</div>';
  out +=                          '<ul class="header-dropdown m-r--5">';
  out +=                              '<li class="dropdown">';
  out +=                                  '<a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">';
  out +=                                      '<i class="material-icons">more_vert</i>';
  out +=                                  '</a>';
  out +=                                  '<ul class="dropdown-menu pull-right">';
  out +=                                      '<li><a href="javascript:void(0);">Action</a></li>';
  out +=                                      '<li><a href="javascript:void(0);">Another action</a></li>';
  out +=                                      '<li><a href="javascript:void(0);">Something else here</a></li>';
  out +=                                  '</ul>';
  out +=                              '</li>';
  out +=                          '</ul>';
  out +=                      '</div>';
  out +=                      '<div class="body">';
  out +=                          '<div id="real_time_chart" class="dashboard-flot-chart"></div>';
  out +=                      '</div>';
  out +=                  '</div>';
  out +=              '</div>';
  out +=          '</div>';
  out +=      '</div>';
  out +=  '</section>';
  document.getElementById('content').innerHTML=out;
  },

  loginError:function(){
    out ='<div class="alert alert-danger">';
    out +='<strong>Oh snap!</strong> Change a few things up and try submitting again.';
    out +='</div>';
    document.getElementById('alertError').innerHTML=out;
  },

  displayContent:function(){

  },

  };
