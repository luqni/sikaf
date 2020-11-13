x='kuis';
ktupad(x);
k[x].app={
url:{host:'http://localhost/',path:'modules/kuis/model.php'},
data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],
view:function(){
k[x].ajax.path=this.url.path;
k[x].crud.table();
},

admin:function(){
induk=conf.cookies.get("username");
conf.info(induk);
k[x].ajax.path=this.url.path;
k[x].ajax.data={mod:'table',induk:induk};
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

kuis:function(){
conf.kuis=kuis=1;
k[x].ajax.path=this.url.path;
k[x].ajax.data={mod:'kuis',kuis:kuis};
k[x].ajax.get(callback);
function callback(json){
res=JSON.parse(json);
data=res.data;
conf.kuisdata=data;
out ='<p>Soal pilihan ganda:</p>';
out +='<div id="modal" class="depan hide"></div>  ';
for(i in data){
out +='   <form class="jawab2">';
no=parseInt(i)+1;
out+='<p>'+ no +'.'+ data[i].pertanyaan+'</p>';
str=data[i].jawaban;
str = str.replace(/(\r\n|\n|\r)/gm,"");
pil = str.split(";");
for(n in pil){
pecah=pil[n].split("|");
out +='<input type="radio" class ="check" name="choose" value="'+pecah[0]+'">'+pecah[0]+'. '+pecah[1] ;
out+='</br>';
}
out +='</p>';
out +=' </form>';
}
out +='<input type="button" class="btn-form show" name="drone" value="Kirim" onclick = k.kuis.app.handleClick() >';
document.getElementById('content').innerHTML=out;
}
},

handleClick:function(input){
data= conf.kuisdata;
var x = document.getElementsByClassName("jawab2");
n=0;
a=[];
for(i in data){
jwb=x[i].elements.choose.value;
a.push(jwb);
}
conf.jawab=a;
this.kirim();
},

kirim:function(){
induk=conf.cookies.get("username");
kuis= conf.kuis;
nilai=conf.nilai;
jawab=conf.jawab;

k[x].ajax.path=this.url.path;
k[x].ajax.data={mod:'kirim',induk:induk,kuis:kuis,jawab:jawab};
k[x].ajax.get(callback);
function callback(json){
res=JSON.parse(json);
nilai=res.nilai;
debug(json);
alert("Nilai Anda: "+ nilai);
conf.sc('modules/nilai/controller.js?nilai/view');
}
},
};
