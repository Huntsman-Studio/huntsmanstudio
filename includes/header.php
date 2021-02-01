<?php

    function get_header(){
        
        // Open TAG
        $header = '<head>';

        // Get Bootstrap
        $header .= '<!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">';
        $header .= '<!-- JavaScript Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>';

        // Styles
        $header .= '<link rel=\'stylesheet\' href=\'./css/global_styles.css\'>';
        $header .= '<link rel=\'stylesheet\' href=\'./css/styles.css\'>';

        // Scripts
        $header .= '';

        //Fonts
        $header .= '<link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet">';

        // Font Awesome 5.15.2
        $header .= '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />';

        // Meta 
        $header .= '<meta charset="utf-8">';
        $header .= '<meta name="description" content="Huntsman Studio Website">';
        $header .= '<meta name="author" content="Huntsman Studio Developers Department">';

        // Close TAG
        $header .= '</head>';

        echo $header;
    }
?>