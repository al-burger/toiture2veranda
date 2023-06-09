<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
if ( ! function_exists( 'neve_child_load_css' ) ):
	/**
	 * Load CSS file.
	 */
	function neve_child_load_css() {
		wp_enqueue_style( 'neve-child-style', trailingslashit( get_stylesheet_directory_uri() ) . 'style.css', array( 'neve-style' ), NEVE_VERSION );
	}
endif;
add_action( 'wp_enqueue_scripts', 'neve_child_load_css', 20 );

function my_theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style'), wp_get_theme()->get('Version'));
}

add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );

function neve_custom_enqueue_scripts() {
    wp_enqueue_script( 'neve-custom-script', get_stylesheet_directory_uri() . '/js/main.js', array( 'jquery' ), '1.0', true );
}

add_action( 'wp_enqueue_scripts', 'neve_custom_enqueue_scripts' );