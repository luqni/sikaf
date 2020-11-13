x='nilai';
ktupad(x);
k[x].app={
url:{host:'http://localhost/',path:'modules/nilai/model.php'},
data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],
view:function(){
k[x].ajax.path=this.url.path;
k[x].crud.table();
},

sertifikat:function(){
nama='Wawan Sismadi';
nilai=8;
var num = parseFloat(conf.nilai);
var n = num.toFixed(2);
nah ='<tspan x="90mm" y="100mm" font-size="0.4em" font-family="arial nova" >'+nama+' </tspan>';
nah+='<tspan x="70mm" y="160mm" font-size="0.5em" font-family="arial nova" >'+nilai+' </tspan>';
out='<div id="x77738" onclick="window.print();"></div>';
document.getElementById('content').innerHTML=out;
var svgNS = "http://www.w3.org/2000/svg";
const svg1 = document. createElementNS(svgNS, "svg");
svg1. setAttribute ("width", "292mm" );
svg1. setAttribute ("height", "205mm" );
var svgimg = document.createElementNS(svgNS,'image');
svgimg.setAttributeNS(null,'width','292mm');
svgimg.setAttributeNS(null,'height','205mm');
svgimg.setAttributeNS('http://www.w3.org/1999/xlink','href', 'cert1.jpg');
svgimg.setAttributeNS(null,'x','0');
svgimg.setAttributeNS(null,'y','0');
svgimg.setAttributeNS(null, 'visibility', 'visible');
var newText = document.createElementNS(svgNS,"text");
newText.setAttributeNS(null,"font-size","100");
newText.setAttributeNS(null,"x",400);
newText.setAttributeNS(null,"y",400);
newText.innerHTML = nah;
svg1 . appendChild ( svgimg );
svg1 . appendChild (newText);
var svg = document.getElementById("x77738");
var url = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg);
svg. appendChild (svg1);
svg.href = url;
pa=document.getElementById('printarea');
pa.innerHTML=  svg.innerHTML;
pa.style.width='100%';
pa.style.height='auto';

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
};
