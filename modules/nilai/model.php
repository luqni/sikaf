<?php
class mod extends ktupad {
public function setconf() {
$this->conf['tb']='nilai';
$this->conf['mn']='nilai';
}

public function nilai(){
$d=$this->conf;
$tb=$d['tb'];
$induk=$d['induk'];
$conn=$this->connect();
$data=array();
$result = $conn->query("SELECT *  FROM $tb WHERE induk='$induk' ;");
$result->setFetchMode(PDO::FETCH_ASSOC);
while($row = $result->fetch()) { $data[] = $row; }
$out=array('mod'=>'nilai','data'=>$data,'id'=>$induk);
echo json_encode($out);
}
}

$app = new mod();
$app->init();
?>
