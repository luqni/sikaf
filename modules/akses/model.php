<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

class mod extends ktupad {

public function setconf() {
  $this->conf['tb']='akses';
  $this->conf['mn']='akses';
}


public function datamenu() {

$conn=$this->connect();
$result = $conn->query("SELECT * FROM akses where status='1' ");
$data=array();
$col=array();
while($row = $result->fetch()) { $data[] = $row; }
for ($i = 0; $i < $result->columnCount(); $i++) {  $col[] = $result->getColumnMeta($i)['name'];}
$result1 = $conn->query("SELECT id,nama FROM menu where status='1' ");
$data1=array();
while($row1 = $result1->fetch()) { $data1[] = $row1; }

$out=array(
'mod'=>'akses',
'menu'=>$data1,
'fld'=>$col,
'data'=>$data);
echo json_encode($out);
}
}

$app = new mod();
$app->init();
?>
