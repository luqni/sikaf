<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

class mod extends ktupad {
public function setconf() {
$this->conf['tb']='kuis';
$this->conf['tb1']='nilai';
$this->conf['mn']='kuis';
}

public function kirim(){
$d=$this->conf;
$tb1=$d['tb1'];
$induk=$d['induk'];
$kuis=$d['kuis'];
$jawab=$d['jawab'];
$data=array();
$conn=$this->connect();
$result = $conn->query("SELECT kunci FROM kuis where induk='$kuis' and status='1'");
$result->setFetchMode(PDO::FETCH_ASSOC);
while($row = $result->fetch()) { $data[] = $row['kunci']; }
$b = $data;
$f= array_diff_assoc($jawab, $b);
$nilai= count($f);
$c= $b= count($b);
$c -=$nilai;
$c /= $b ;
$c *= 10 ;
$jawab = json_encode($jawab);
$conn->query("SET SESSION sql_mode = ''");
$result1 = $conn->query("SELECT id FROM $tb1 WHERE kuis='$kuis' AND induk='$induk' ;");
$row1 = $result1->fetch();
if(!$row1){ $sql="INSERT INTO  $tb1 SET induk='$induk',nilai='$c',kuis='$kuis',keterangan='$jawab' ";
$conn->query($sql);
}
else {  }
$out=array('mod'=>'jawab','nilai'=>$c,'jawab'=>$jawab,'induk'=>$induk,'kuis'=>$kuis,);
echo json_encode($out);
}

public function kuis() {
$tema='1';
$data=array();
$conn=$this->connect();
$result = $conn->query("SELECT id,induk,pertanyaan,jawaban FROM kuis where induk='$tema'  and status='1'");
$result->setFetchMode(PDO::FETCH_ASSOC);
while($row = $result->fetch()) { $data[] = $row; }
$out=array('mod'=>'kuis','data'=>$data);
echo json_encode($out);
}
}

$app = new mod();
$app->init();
?>
