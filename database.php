<?php
include('system/ktupad.php');
   class koneksi{
   function connect(){
   try {
     $conn = new PDO("mysql:host=localhost;dbname=kuis", "SIKAF", "P@ssw0rd");
     // $conn = new PDO("mysql:host=localhost;dbname=kuis", "root", "hamaS@16s");
   // $conn = new PDO("firebird:host=localhost;dbname=/var/lib/firebird/2.5/data/employee.fdb;charset=UTF8", "sysdba", "masterkey");
   // $conn = new PDO("mssql:host='den1.mssql8.gear.host';dbname='apar', 'apar', 'db@apar'");
   // $conn = new PDO("sybase:host=$host;dbname=$dbname, $user, $pass");
   // $conn = new PDO("sqlite:my/database/path/database.db");
   // $conn = new PDO("odbc:psbodbc");
   // $conn = new PDO("dblib:host=localhost;dbname=psb", "ktupad","db@ktupad");
   }
   catch(PDOException $e) {  echo $e->getMessage(); }
   return $conn;
   }
 }
?>
