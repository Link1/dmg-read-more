<?php
// File: dmg-read-more-command.php
if ( ! class_exists( 'WP_CLI' ) ) {
    return;
}

class DMG_Read_More_Command {
    /**
     * Search for posts containing the DMG Read More block.
     *
     * ## OPTIONS
     *
     * [--date-before=<date>]
     * : Search for posts published before this date (YYYY-MM-DD).
     *
     * [--date-after=<date>]
     * : Search for posts published after this date (YYYY-MM-DD).
     *
     * @param array $args       Positional arguments.
     * @param array $assoc_args Associative arguments.
     */
    public function search( $args, $assoc_args ) {
        $date_before = isset( $assoc_args['date-before'] ) ? $assoc_args['date-before'] : date( 'Y-m-d' );
        $date_after = isset( $assoc_args['date-after'] ) ? $assoc_args['date-after'] : date( 'Y-m-d', strtotime( '-30 days' ) );

        $posts = get_posts( array(
            'date_query' => array(
                'after'     => $date_after,
                'before'    => $date_before,
                'inclusive' => true,
            ),
            'fields'     => 'ids',
            'meta_query' => array(
                array(
                    'key'     => '_block_editor_content',
                    'value'   => 'dmg-read-more/block',
                    'compare' => 'LIKE',
                ),
            ),
        ) );

        if ( $posts ) {
            WP_CLI::success( 'Posts found:' );
            foreach ( $posts as $post_id ) {
                WP_CLI::line( $post_id );
            }
        } else {
            WP_CLI::warning( 'No posts found.' );
        }
    }
}

WP_CLI::add_command( 'dmg-read-more search', 'DMG_Read_More_Command' );
