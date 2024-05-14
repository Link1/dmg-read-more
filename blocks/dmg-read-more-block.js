// File: dmg-read-more-block.js

(function () {
    const { __ } = wp.i18n;
    const { registerBlockType } = wp.blocks;
    const { InspectorControls } = wp.blockEditor;
    const { PanelBody, TextControl } = wp.components;
    const { useState, useEffect } = wp.element;

    const DMGReadMoreBlock = () => {
        const [posts, setPosts] = useState([]);
        const [searchTerm, setSearchTerm] = useState('');
        const [selectedPost, setSelectedPost] = useState(null);

        useEffect(() => {
            // Fetch recent posts
            wp.apiFetch({
                path: '/wp/v2/posts',
                method: 'GET',
                data: { per_page: 5 },
            }).then(data => {
                setPosts(data);
            });
        }, []);

        const onSearchChange = value => {
            setSearchTerm(value);
            if (value.trim() === '') {
                // If search term is empty, fetch recent posts
                wp.apiFetch({
                    path: '/wp/v2/posts',
                    method: 'GET',
                    data: { per_page: 5 },
                }).then(data => {
                    setPosts(data);
                });
            } else {
                // Fetch posts based on search term
                wp.apiFetch({
                    path: '/wp/v2/posts',
                    method: 'GET',
                    data: { search: value, per_page: 5 },
                }).then(data => {
                    setPosts(data);
                });
            }
        };

        const onPostSelect = post => {
            setSelectedPost(post);
        };

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Select Post')}>
                        <TextControl
                            label={__('Search for Posts')}
                            value={searchTerm}
                            onChange={onSearchChange}
                        />
                        {posts.map(post => (
                            <div key={post.id} onClick={() => onPostSelect(post)}>
                                {post.title.rendered}
                            </div>
                        ))}
                    </PanelBody>
                </InspectorControls>
                {selectedPost && (
                    <p className="dmg-read-more">
                        Read More: <a href={selectedPost.link}>{selectedPost.title.rendered}</a>
                    </p>
                )}
            </>
        );
    };

    registerBlockType('dmg-read-more/block', {
        title: __('DMG Read More'),
        icon: 'admin-links',
        category: 'common',
        edit: DMGReadMoreBlock,
        save: () => null,
    });
})();
