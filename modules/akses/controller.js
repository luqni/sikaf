x='akses';
ktupad(x);
  k[x].app={
  url:{host:'http://localhost/',path:'modules/akses/model.php'},
  data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],
  view:function(){
    k[x].ajax.path=this.url.path;
    k[x].crud.table();
    k[x].form.callback=function(){ k.akses.app.datamenu(); };

  },

  datamenu:function(){

  k[x].ajax.path=this.url.path;
  k[x].ajax.data={mod:'datamenu'};
  k[x].ajax.get(callback);
  function callback(json){
  res=JSON.parse(json);
  info=res.info;
k[x].app.menu=res.menu;
k.akses.app.form();

  }
},

  form:function(){
    debug('for akses berhasil');
    out = "<div class=table >";
    out+= "<table ><thead><tr>";
    out+= "<th>id</th>";
    out+= "<th>keterangan</th>";
    out+= "<th><input type=checkbox  name='lihats' onClick=checkAll(this,'clihat') >Akses</th>";
    out+= "<th><input type=checkbox  name='edits' onClick=checkAll(this,'cedit') >Edit</th>";
    out+= "<th><input type=checkbox  name='tambahs' onClick=checkAll(this,'ctambah') >Tambah</th>";
    out+= "</tr></thead><tbody>";

    var va0= document.getElementById('lihat').value;
    var ve0= document.getElementById('edit').value ;
    var vt0= document.getElementById('tambah').value ;

    var va= va0.split(',');
    var ve= ve0.split(',');
    var vt= vt0.split(',');



  var    judul=k[x].app.menu;
  debug(judul);
      var e=1;
    for (key in judul){
      for (i in va ){ if(va[i] == judul[key].id ){var ai = 'checked=checked'; break;} else { ai = '';}  }
      for (i in ve ){ if(ve[i] == judul[key].id ){var ei = 'checked=checked'; break;} else { ei = '';}  }
      for (i in vt ){ if(vt[i] == judul[key].id ){var ti = 'checked=checked'; break;} else { ti = '';}  }

    out+= "<tr onMouseOver=this.bgColor='#F4F4F6' onMouseOut=this.bgColor='white' > ";
    out+= "<td align='right'>"+judul[key].id+"</td>";
    out+= "<td align='left'>"+judul[key].nama+" </td>";
    out+= "<td align='left'><input type=checkbox name='clihat' value="+judul[key].id+" id=chklihat"+e+" onclick=getVal('lihat') "+ai+" ></td>";
    out+= "<td align='left'><input type=checkbox name='cedit' value="+judul[key].id+" id=chkedit"+e+" onclick=getVal('edit') "+ei+" ></td>";
    out+= "<td align='left'><input type=checkbox name='ctambah' value="+judul[key].id+" id=chktambah"+e+" onclick=getVal('tambah') "+ti+" ></td>";
    out+= "</tr>";
      e++;
    }
    out+= "</tbody></table></div>";
    document.getElementById('cube').innerHTML=out;
  }, // end form
};

function getVal(n){
  var el=document.getElementById(n);
  var i=1, c, data=[];
  while(c=document.getElementById('chk'+n+(i++))) c.checked? data[data.length]=c.value : null;
  el.value = data.join(",");
}

function checkAll(s,t) {
  var c=document.getElementsByName(t);
  for (var i=0;i<c.length;i++) c[i].checked = s.checked? true:false ;
}
