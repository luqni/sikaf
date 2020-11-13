<?php
// contoh table di '/db/salam.sql'
// contoh koneksi database di '/database.php'

class mod extends ktupad {
public function setconf() {
$this->conf['tb']='iot';
$this->conf['mn']='iot';
}

public function simpan(){
    $d=$this->conf;
    $conn=$this->connect();

    $find_letters = array(" or'"," or ", "=");
    $string = $d['val'].$d['deviceid'];
    if (str_replace($find_letters, '', $string) != $string)
    {
      $out=array(
      'res'=>'relogin');
      echo json_encode($out);
    }
    else{

    $sql = "UPDATE $d[tb] SET value='$d[val]' Where deviceid='$d[deviceid]'";
    $result = $conn->query($sql);
    if($result){
    $out=array('res'=>'profile','sql'=>$sql);  }
    else { $out=array( 'res'=>'relogin','sql'=>$sql); }
    echo json_encode($out);
   }
 }

}
?>
