x='nilai';
ktupad(x);
k[x].app={
url:{host:'http://localhost/',path:'modules/nilai/model.php'},
data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],
view:function(){
k[x].ajax.path=this.url.path;
k[x].crud.table();
},

nilai:function(){
induk=conf.cookies.get("username");
conf.info(induk);
k[x].ajax.path=this.url.path;
k[x].ajax.data={mod:'nilai',induk:induk};
k[x].ajax.get(callback);
function callback(json){
res=JSON.parse(json);
data=res.data;
debug(data);
k[x].table.data=data;
k[x].table.view();
conf.info(data);
}
},

sertifikat:function(){
nama=conf.cookies.get("username");
nilai=80;
out='<div id="sertifikat" onclick="window.print();">';
out+='<img id="image" src="cert1.jpg">';
out+='<div id="nama">'+nama+'</div>';
out+='<div id="nilai">'+nilai+'</div>';
out+='</div>';
document.getElementById('content').innerHTML=out;
pa=document.getElementById('printarea');
pa.innerHTML=  out;
pa.style.width='100%';
pa.style.height='auto';
},
};
