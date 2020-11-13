  <?php
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);

  class mod extends ktupad {

  public function setconf() {
   $this->conf['tb']='menu';
  $this->conf['mn']='menu';
  }
 

  }

  $app = new mod();
  $app->init();
  ?>
