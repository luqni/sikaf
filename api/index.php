<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include('../database.php');

class api extends ktupad {

  public function tameng($string) {

  $find_letters = array(" or'"," or ", "=");
  if (str_replace($find_letters, '', $string) != $string)
  {  $out=array(
    'res'=>'relogin');
    echo json_encode($out);
    exit();
  }

}

public function setconf() {
$this->conf['tb']='iot';
$this->conf['mn']='iot';
$string='';
foreach($_REQUEST as $key => $value){
  $this->conf[$key]=$value;
  $string .=$value;
}
$string;
 // echo $string='or';
$this-> tameng($string);

}

public function post(){
  $d=$this->conf;
  $conn=$this->connect();
  $sql = "INSERT INTO $d[tb] SET deviceid='$d[p2]', pin='$d[p3]',value='$d[p4]'";
  $result = $conn->query($sql);
  if($result){
  $out=array('mod'=>'POST','info'=>'Berhasil POST data, Device ID:'.$d['p2'].', PIN:'.$d['p3'].' dan Value:'.$d['p4']);  }
  else { $out=array( 'info'=>'Gagal'); }
  echo json_encode($out);

 }
public function get(){
  $d=$this->conf;
  $conn=$this->connect();
  $sql = "SELECT * FROM  $d[tb] WHERE deviceid='$d[p2]' AND pin='$d[p3]'";
  $result = $conn->query($sql);
  $result->setFetchMode(PDO::FETCH_ASSOC);
  $row = $result->fetch();
  if($row){  $out=array('mod'=>'GET','data'=>$row);  }
    else { $out=array( 'info'=>'Gagal'); }
    header('Content-Type: application/json');
    echo json_encode($out);

}

public function put(){
  $d=$this->conf;
  $conn=$this->connect();
  $sql = "UPDATE $d[tb] SET value='$d[p4]' Where deviceid='$d[p2]'";
  $result = $conn->query($sql);
  if($result){
  $out=array('mod'=>'PUT','info'=>'Berhasil PUT data, Device ID:'.$d['p2'].', PIN:'.$d['p3'].' dan Value:'.$d['p4']);  }
  else { $out=array( 'info'=>'Gagal'); }
  echo json_encode($out);

}
public function delete(){
  $d=$this->conf;
  $conn=$this->connect();
  $sql = "DELETE FROM $d[tb]  WHERE deviceid='$d[p2]' AND pin='$d[p3]'";
  $result = $conn->query($sql);
  if($result){
  $out=array('mod'=>'DELETE','info'=>'Berhasil DELETE data, Device ID:'.$d['p2']);  }
  else { $out=array( 'info'=>'Gagal'); }
  echo json_encode($out);
}

}


$app = new api();
$app->setconf();
if ($_REQUEST && $_REQUEST['mod']){ $api=$_REQUEST['mod'];  $app -> $api(); } else {

echo file_get_contents("howto.txt");

}
?>
