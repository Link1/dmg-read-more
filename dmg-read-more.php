<?php
/*
Plugin Name: DMG Read More
Plugin URI: https://github.com/your-username/dmg-read-more
Description: WordPress plugin with a Gutenberg block for stylized anchor links and a WP-CLI command for searching posts.
Author: Marco Grossi
Version: 1.0
Author URI: https://www.link1studios.com
*/

// Enqueue Gutenberg block script
function dmg_read_more_enqueue_block_editor_assets() {
    wp_enqueue_script(
        'dmg-read-more-block',
        plugins_url('build/dmg-read-more-block.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-components', 'wp-api-fetch'),
        filemtime(plugin_dir_path(__FILE__) . 'build/dmg-read-more-block.js'),
        true
    );
}
add_action('enqueue_block_editor_assets', 'dmg_read_more_enqueue_block_editor_assets');


// Include WP-CLI command file
if ( defined( 'WP_CLI' ) && WP_CLI ) {
    include_once dirname( __FILE__ ) . '/cli/dmg-read-more-command.php';
}
