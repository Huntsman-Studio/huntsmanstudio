<?php

    // Create main menu
    function main_menu(){

        // Open DIV
        $menu = '<div>';

        // Menu Items
        $menu .= '<ul id="main_menu">
            <li><a href="?p=home">home</a></li>
            <li><a href="?p=work">work</a></li>
            <li><a href="?p=about">about</a></li>
            <li><a href="?p=contact">contact</a></li>
        </ul>';

        // Main menu BG image and Text
        $menu .= '<div id="main_menu_bg">
            <div style="width: 1416px">
                <h1 id="white" class="hero">Creativity is our<br/>"weapon"</h1>
            </div>
        </div>';

        // Close DIV
        $menu .= '</div>';

        // Display main menu
        echo $menu;
    }

?>