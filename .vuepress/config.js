module.exports = {
    title: 'ACE-BLOG',
    base: '/blog/',
    description: 'Ace blog',
    themeConfig: {
        nav: [
            { text: '博客文章', link: '/post', layout: 'Post' },
            { text: '实验室', link: '/lab', layout: "Lab" },
            { text: '友情链接', link: '/link', layout: 'Link' },
            { text: '留言板', link: '/guestbook/', layout: 'Guestbook' },
        ],
        dateFormat: 'YYYY-MM-DD',
        pwa: {
            serviceWorker: true,
            updatePopup: true
        },
        smoothScroll: true,
    },
    markdown: {
        anchor: { permalink: false },
        toc: { includeLevel: [1, 2] },
        extendMarkdown: md => {
            // 使用更多的 markdown-it 插件!
            // md.use(require('markdown-it-xxx'))
        }
    },
    plugins: [
        ['@vuepress/blog', {
            directories: [
                {
                    id: 'post',
                    dirname: 'posts',
                    path: '/post',
                    itemPermalink: '/post/:year/:month/:day/:slug',
                    layout: 'Post',
                    itemLayout: 'PostItem',
                    pagination: {
                        perPagePosts: 2,
                    },
                },
                {
                    id: 'lab',
                    dirname: 'lab',
                    path: '/lab',
                    itemPermalink: '/lab/:slug',
                    layout: 'Lab',
                    itemLayout: 'PostItem',
                    pagination: {
                        perPagePosts: 100,
                    },
                },
                {
                    id: 'link',
                    dirname: 'links',
                    path: '/link',
                    itemPermalink: '/link/:slug',
                    layout: 'Link',
                    itemLayout: 'PostItem',
                    pagination: {
                        perPagePosts: 100,
                    },
                },
            ],
            frontmatters: [
                {
                    id: "tag",
                    keys: ['tag', 'tags'],
                    path: '/tag/',
                    layout: 'Post',
                    frontmatter: { title: '标签' },
                    itemlayout: 'PostItem',
                    pagination: {
                        perPagePosts: 3
                    }
                },
                {
                    id: "topic",
                    keys: ['topic', 'topics'],
                    path: '/topic/',
                    layout: 'Post',
                    frontmatter: { title: '话题' },
                    itemlayout: 'PostItem',
                    pagination: {
                        perPagePosts: 3
                    }
                }
            ],
            sitemap: {
                hostname: 'https://ace520.github.io/blog'
            },
            comment: {
                service: 'vssue',
                owner: 'Ace520',
                repo: 'blog',
                clientId: 'Iv1.535c99f0a882ed45',
                clientSecret: '6ec379adea91d41358679a159e6688a258dff8a9',
            },
            feed: {
                canonical_base: 'https://ace520.github.io/blog'
            },
        }],
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        }],
        ['@vuepress/back-to-top'],
        ['@vuepress/nprogress'],
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ['vuepress-plugin-code-copy', {
            selector: 'div[class*="language-"] pre',
            align: "top",
            color: "#27b1ff",
            backgroundTransition: true,
            backgroundColor: "#0075b8",
            successText: "复制！",
            staticIcon: true
        }],
        ["@kawarimidoll/tailwind"],
        ['@goy/svg-icons']
    ]
}
