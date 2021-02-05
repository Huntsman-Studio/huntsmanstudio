<?php
    // Require files
    require_once './includes/header.php';
    require_once './includes/footer.php';
    require_once './db_config/db_config.php';

?>

<!DOCTYPE html>
<html lang="en">
    <?php 
        // Header
        get_header();
    ?>
    <body>
        <main>
        <?php
            // Pages Functionality
            if( ! isset($_REQUEST['p'])) {
                $_REQUEST['p']='home';
            }
            $p = $_REQUEST['p'];

            $pages = array('home', 'contact');

            $ok=false;
            foreach($pages as $pp) {
                if($pp==$p) {
                    require "pages/$p.php";
                    $ok=true;
                }
            }
            if(! $ok) {
                print "Η σελίδα δεν υπάρχει";
            }

        ?>
        </main>
        <?php
            // Footer
            get_footer();
        ?>
    </body>
</html>