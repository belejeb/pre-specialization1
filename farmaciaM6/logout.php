<?php
//User session in ['user']

  session_start();
  session_unset();
  session_destroy();
  session_write_close();
  setcookie(session_name(),'',0,'/');
  session_regenerate_id(true);
header("location: vistas/login.php")
?>
<script type="text/javascript">
  window.location.replace("vistas/login.php");
</script>
