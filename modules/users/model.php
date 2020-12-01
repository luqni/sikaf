  <?php
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);

  class mod extends ktupad {

  public function setconf() {
    $this->conf['tb']='users';
  $this->conf['mn']='users';
  }

  public function signin(){
  $d=$this->conf;
  $conn=$this->connect();
  $sql = "SELECT * FROM  $d[tb] WHERE nama='$d[idd]' AND pin='$d[pin]'";
  $result = $conn->query($sql);
    $data=array();
    $result->setFetchMode(PDO::FETCH_ASSOC);
    while($row = $result->fetch()) { $data[] = $row; }
    if($result){ $out=array('info'=>'Berhasil,'.$d['idd'],'data'=>$data);}
    else { $out=array( 'info'=>'Gagal, ambil data','data'=>$data); }
    echo json_encode($out);
  }

  // public function signin(){
  // $d=$this->conf;
  // $conn=$this->connect();
  // $sql = "SELECT * FROM  $d[tb] WHERE nama='$d[idd]' AND pin='$d[pin]'";
  // $result = $conn->query($sql);
  // $row = $result->fetch();
  // if($row){  $out=array('info'=>'Berhasil,'.$d['idd'],'data'=>$d['idd'] );}
  // else { $out=array( 'info'=>'Gagal, user tidak ditemukan!'); }
  // echo json_encode($out);
  // }

  public function signup(){
  $d=$this->conf;
  $conn=$this->connect();
  $sql = "SELECT * FROM  $d[tb] WHERE nama='$d[idd]'";
  $result = $conn->query($sql);
  $row = $result->fetch();
  if(!$row){

  $conn->query("SET SESSION sql_mode = ''");
  $sql = "INSERT INTO  $d[tb] SET nama='$d[idd]', pin='$d[pin]'";
  $result = $conn->query($sql);

  $out=array('info'=>'Berhasil,'.$d['idd'],'data'=>$d['idd'] );}
  else { $out=array( 'info'=>'Gagal, user sudah terdaftar'); }
  echo json_encode($out);
  }

  public function setpin(){
  $d=$this->conf;
  $conn=$this->connect();
  $sql = "UPDATE $d[tb] SET pin='$d[pin]' WHERE nama='$d[idd]'";
  $result = $conn->query($sql);
  if($result){ $out=array('info'=>'Berhasil,ganti PIN');}
  else { $out=array( 'info'=>'Gagal, ganti PIN','sql'=>$sql); }
  echo json_encode($out);
  }

  public function menu(){
  $d=$this->conf;
  $conn=$this->connect();

  $result = $conn->query("SELECT lihat FROM akses WHERE nama=(select akses from users where nama='$d[induk]')");
  $row = $result->fetch();
  $akses=$row[0];

  $sql = "SELECT * FROM menu WHERE id IN ($akses)";
  $result = $conn->query($sql);
  $data=array();
  $result->setFetchMode(PDO::FETCH_ASSOC);
  while($row = $result->fetch()) { $data[] = $row; }
  if($result){ $out=array('mod'=>'menu','data'=>$data);}
  else { $out=array( 'info'=>'Gagal, ambil data','data'=>$data); }
  echo json_encode($out);
  }

  }

  $app = new mod();
  $app->init();
  ?>
