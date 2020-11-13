x='menu';
ktupad(x);
  k[x].app={
  url:{host:'http://localhost/',path:'modules/menu/model.php'},
  data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],
  view:function(){
    k[x].ajax.path=this.url.path;
    k[x].crud.table();
    },

  };
