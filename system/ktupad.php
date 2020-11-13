<?php
 // session_start();
date_default_timezone_set('Asia/Jakarta');
ini_set('display_errors', 1);
error_reporting(E_ALL);
header('Content-type: text/html; charset=utf-8');


$e = json_decode(file_get_contents('php://input'), true);
// $path='system/model.php';
$path='model.php';
if(isset($e['path'])){$path=$e['path']; }
else { $r=$_REQUEST; if(isset($r['path'])){ $path=$r['path']; } }
include($path);


class ktupad extends koneksi {
public $conf=array(
'baseURL' => 'https://guru.sikaf.id/sikaf/',
'isTingkat' => 0,
'isAkses'   => 0,
'uid'       => 0,
'token'     => 0,
'tb'        => 'master_akses',
'mn'        => 'akses',
'data'      => '{"id":"7","nama":"bismillah"}',
'sql'       => '',
'cond'      => '',
'cond1'      => '',
'conds'     => '',
'sortir'    => 'ORDER BY id DESC',
'limit'     => 100,
'offset'    => 0,
'filetype'  => 'images/*',
'filedir'   => 'files/'
);

function init(){
$this->setconf();

$r=$_REQUEST;
if(isset($r)){
  foreach ($r as $key=>$val) {
    // $this->$key=$val;
    // $this->datas[$key]=$val;



    $this->conf[$key]=$val;

    $inj = array(" or'"," or ", "=");
    $str = $val;
    if (str_replace($inj, '', $str) != $str) {  $this->conf[$key]=''; }
    // else {  $this->conf[$key]=$val;}




  }
}







if(isset($r['mod'])){ $func=$r['mod'];	$this->$func();}
else {
$e = json_decode(file_get_contents('php://input'), true);
if(isset($e)){ foreach ($e as $key=>$val) {
  // $this->$key=$val;
  // $this->datas[$key]=$val;

  $this->conf[$key]=$val;

  $inj = array(" or'"," or ", "=");
  $str = $val;
  if (str_replace($inj, '', $str) != $str) {  $this->conf[$key]='ktupad'; }
  // else {  $this->conf[$key]=$val;}


}	}
if(isset($e['mod'])){ $func=$e['mod'];	$this->$func();}
else { $out=array('Info'=>'Hello Ktupad'); echo json_encode($out);  }

}
}

public function post(){
}


  public function sql($crud,$act,$sql){
$tAkses=$this->akses();

$conn=$this->connect();
$conn->query("SET SESSION sql_mode = ''");

if(in_array($crud, $tAkses)) {
$result = $conn->query($sql);
$result->setFetchMode(PDO::FETCH_ASSOC);

$col=array();
$data=array();
$arr = array("Read", "Table");
if(in_array ($act,$arr)){
$data=array();
  // $col = array_keys($result->fetch());
$colcount = $result->columnCount();
for ($i = 0; $i < $colcount; $i++) {  $cols = $result->getColumnMeta($i);
$col[] = $cols['name'];
}
while($row = $result->fetch()) { $data[] = $row; }
}
$sql='SQL';
$out=array('sql'=>$sql,'info'=>'Berhasil '.$act,'fld'=>$col,'data'=>$data,'akses'=>$tAkses );
}
else {
  $sql='SQL';
  $out=array('sql'=>$sql,'info'=>'Gagal '.$act,'akses'=>$tAkses );}
return $out;
// $conn->close();
$conn=null;
}

public function create(){
$d=$this->conf;
$data=$d['data'];
foreach($data as $key => $val) { $obj[]=$key."='".$val."'"; }
$row = implode(',',$obj);
$sql="INSERT INTO $d[tb] SET $row";
$out=$this->sql('c','Create',$sql);
echo json_encode($out);
}
// end create

public function read(){
$d=$this->conf;
$sql = "SELECT * FROM $d[tb] WHERE id=$d[id]";
$out=$this->sql('r','Read',$sql);
echo json_encode($out);
}
// end read

public function update(){
$d=$this->conf;
$data=$d['data'];
foreach($data as $key => $val) { $obj[]=$key."='".$val."'"; }
$row = implode(',',$obj);
$sql = "UPDATE $d[tb] SET $row WHERE id=$d[id]";
$out=$this->sql('u','Update',$sql);
echo json_encode($out);
}
// end update

public function delete(){
$d=$this->conf;
$sql="DELETE FROM $d[tb] WHERE id IN ($d[id])";
$out=$this->sql('d','Delete',$sql);
echo json_encode($out);
}
// end delete

public function filter(){
$d=$this->conf;
$sql="SELECT * FROM $d[tb] WHERE id IN (SELECT id FROM $d[tb] $d[conds]) $d[cond1] $d[cond] $d[sortir] LIMIT $d[offset], $d[limit]";
$out=$this->sql('r','Filter',$sql);
echo json_encode($out);
} // end filter

public function table(){
$d=$this->conf;
$cond1=$this->tingkat();
$sql="SELECT * FROM $d[tb] WHERE id IN (SELECT id FROM $d[tb] $d[conds]) $d[cond1] $d[cond] $d[sortir] LIMIT $d[offset], $d[limit]";
$out=$this->sql('r','Table',$sql);
echo json_encode($out);
}

function import(){
  $tb=$this->tb;
  $conn=$this->connect();
  $conn->query("SET SESSION sql_mode = ''");

$csv = file_get_contents($_FILES['afile']['tmp_name']);
$row = str_getcsv($csv, "\n");
$header = str_getcsv($row[0], ";");
$data=array();

for($n=1;$n<count($row);$n++) { $data = str_getcsv($row[$n], ";");
$datasecs=array();
for($i=0;$i<count($data);$i++) { $datasecs[]= $header[$i]."='".$data[$i]."'";
$datas=implode(",", $datasecs);
}
$sql = "INSERT INTO $tb set $datas";
$result = $conn->query($sql);
echo $sql;
}
// $conn->close();
$conn=null;

}

public function upload(){
$target_dir = $this->filedir;
// $target_dir = $_REQUEST['dir'];
$target_file = $target_dir . basename($_FILES["afile"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

$fileName = $_FILES['afile']['name'];
$fileType = $_FILES['afile']['type'];
$fileContent = file_get_contents($_FILES['afile']['tmp_name']);


if(isset($_POST["submit"])) {
$check = getimagesize($_FILES["afile"]["tmp_name"]);
if($check !== false) {
echo "File is an image - " . $check["mime"] . ".";
$uploadOk = 1;
} else {
echo "File is not an image.";
$uploadOk = 0;
}
}
// Check if file already exists
if (file_exists($target_file)) {
echo "Sorry, file already exists.";
$uploadOk = 0;
}
// Check file size
if ($_FILES["afile"]["size"] > 500000) {
echo "Sorry, your file is too large.";
$uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
$uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {

if (move_uploaded_file($_FILES["afile"]["tmp_name"], $target_file)) {
$out=array(
'file'=>	$target_dir.basename( $_FILES["afile"]["name"]),
'mod'=>'Upload');
echo json_encode($out);
}
else { echo "Sorry, there was an error uploading your file.";	}
}
}

public function token(){
$token=$this->token;
$sql = "SELECT * FROM master_users where token='$token'";
$conn=$this->connect();
$result = $conn->query($sql);
$row = $result->fetch();

if($row){$uid=$row['id'];$aid=$row['akses'];} else {
	$uid=0;
	$aid=0; }
$out=array(
'uid'=>$uid,
'aid'=>$aid);
return $out;

// $conn->close();
$conn=null;
}

public function tingkat(){
  $d=$this->conf;
  // if(!$this->isTingkat){$cond1='';}
  if(!$d['isTingkat']){$cond1='';}
  else {
	$token=$this->token();
	$induk=$token['uid'];
	$cond1="AND uid IN (
	SELECT id FROM (SELECT * FROM master_users ORDER BY induk, id) sa,
	(SELECT @p := $induk ) init
	WHERE find_in_set(induk, @p) > 0
	AND @p := concat(@p, ',', id)
	UNION
	SELECT $induk
	)";
}
	return $cond1;
}


public function akses(){
$d=$this->conf;
if(!$d['isAkses']){ $crud=array("c","r","u","d"); }
else{
$conn=$this->connect();
$token=$this->token();
$aksesid=$token['aid'];
$mn=$d['mn'];
$result =$conn->query("select id from master_menu where nama='$mn'");
$row = $result->fetch();
$mnid=$row[0];
$conn->query("set @p='$mn',@aksesid='$aksesid';");
$result = $conn->query("SELECT c,r,u,d FROM master_akses WHERE id=@aksesid");
$row = $result->fetch();

$isc=explode(",",$row['c']);
$isr=explode(",",$row['r']);
$isu=explode(",",$row['u']);
$isd=explode(",",$row['d']);

$crud=array();
if(in_array($mnid, $isc)) { array_push($crud, 'c'); }
if(in_array($mnid, $isr)) { array_push($crud, 'r'); }
if(in_array($mnid, $isu)) { array_push($crud, 'u'); }
if(in_array($mnid, $isd)) { array_push($crud, 'd'); }
}
return $crud;
// $conn->close();
$conn=null;

}
} // end crud

?>
