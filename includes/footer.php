<?php
    // Footer Functionality
    function get_footer(){

        // Open DIV
        $footer = '<div class="footer">';

        // Logo
        $footer .= '<img id="ft-logo" src="./images/huntsman-studio-logo.svg" alt="Huntsman Studio Logo | Light Version"/>';

        // Footer memnu
        $footer .= '<ul id="ft-menu">
            <li><a href="#">work</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">contact</a></li>
        </ul>';

        // Social icons
        $footer .= '<ul id="ft-social">
            <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="https://instagram.com/huntsmanstudiogr/" target="_blank"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#" target="_blank"><i class="fab fa-behance"></i></a></li>
            <li><a href="#" target="_blank"><i class="fab fa-pinterest-p"></i></a></li>
            <li><a href="#" target="_blank"><i class="fab fa-github"></i></a></li>
        </ul>';

        // Copyright
        $footer .= '<p class="small copyright" id="secondary">© 2020 Huntsman Studio | Privacy Notice</p>';
        // Close Div
        $footer .= '</div>';

        echo $footer;
    }
?>