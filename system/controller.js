x='iot';
ktupad(x);
k[x].app={
url:{host:'http://localhost/',path:'modules/iot/model.php'},
data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],
view:function(){
  this.iot();
  // this.menu();
},

simpan:function(){
debug('simpan');
did=document.getElementById('nama').value;
val=document.getElementById('nama').value;

k[x].app.view();
k[x].ajax.path=this.url.path;
k[x].ajax.data={mod:'simpan',deviceid:did,val:val};
k[x].ajax.get(callback);
function callback(json){
  res=JSON.parse(json);
   debug(res);
}
},

set:function(){
  idd=document.getElementById('idd').value;
  pin=document.getElementById('pin').value;
  val=document.getElementById('val').value;
},

post:function(){
this.set();
k[x].app.view();
k[x].ajax.path=this.url.path;
k[x].ajax.data={mod:'post',idd:idd,pin:pin,val:val};
k[x].ajax.get(callback);
function callback(json){
  res=JSON.parse(json);
  debug(res);
}
},

get:function(){
this.set();
k[x].app.view();
k[x].ajax.path=this.url.path;
k[x].ajax.data={mod:'get',idd:idd,pin:pin};
k[x].ajax.get(callback);
function callback(json){
  res=JSON.parse(json);
data=res.data;
debug(res);
debug(data.value);
document.getElementById('idd').value=data.deviceid;
document.getElementById('pin').value=data.pin;
document.getElementById('val').value=data.value;
}
},

put:function(){
this.set();
k[x].app.view();
k[x].ajax.path=this.url.path;
k[x].ajax.data={mod:'put',idd:idd,pin:pin,val:val};
k[x].ajax.get(callback);
function callback(json){
  res=JSON.parse(json);
  debug(res);
}
},

delete:function(){
this.set();
k[x].app.view();
k[x].ajax.path=this.url.path;
k[x].ajax.data={mod:'delete',idd:idd,pin:pin,val:val};
k[x].ajax.get(callback);
function callback(json){
  res=JSON.parse(json);
  debug(res);
}
},


  iot:function(){
  out  ='<div class="modal"  id="login">';
  out +='<div class="row ">';
  out +='<h2> IoT </h2>';
  out +='<div class="login">';
  out +='<form id="Form">';
  out +='<div><label for="nama">Device ID </label><br/>	<input type="text" id="idd" name="idd" value=""></div>';
  out +='<div><label for="sandi">PIN      </label><br/>	<input type="text" id="pin" name="pin" value=""></div>';
  out +='<div><label for="sandi">Value    </label><br/>	<input type="text" id="val" name="val" value=""></div>';
  out +='</form>';
  out += '<button id="simpan" class="btn-form" onclick="k.iot.app.post()">Post</button>';
  out += '<button id="simpan" class="btn-form" onclick="k.iot.app.get()">Get</button>';
  out += '<button id="simpan" class="btn-form" onclick="k.iot.app.put()">Put</button>';
  out += '<button id="simpan" class="btn-form" onclick="k.iot.app.delete()">Delete</button>';

  out +='</div>';
  out +='</div>';
  out +='</div>';
  document.getElementById('content').innerHTML=out;
},

crud:function(){

  out  ='<div id="top" class="label warning">Data pada table ini adalah statis, perubahan pada table bersifat sementara.';
  out +='</div>';
  out +='<div id="mid">';
  out +='</div>';
  document.getElementById('content').innerHTML=out;

  conf.isDb=0;
  k[x].table.id='mid';
  k[x].crud.table();
},

crudDb:function(){
  // contoh table di '/db/data.sql'
  // contoh koneksi database di '/database.php'
  conf.isDb=1;
  k[x].ajax.path=this.url.path;
  k[x].crud.table();
},

menu:function(){
  data=[
    { id:'1',induk:'0', nama:'iot',url:'iot.js?iot/view'},
    { id:'1',induk:'0', nama:'crud',url:'iot.js?iot/crud'},
    { id:'1',induk:'0', nama:'crud database',url:'iot.js?iot/crudDb'}
  ];
  conf.menu.data=data;
  conf.menu.view();
},
};
