module.exports = {
    title: 'ACE-BLOG',
    base: '/blog/',
    description: 'Ace blog',
    themeConfig: {
        nav: [
            { text: '博客文章', link: '/posts', layout: ['Layout','PostItem','FrontmatterPagination'] },
            { text: '实验室', link: '/lab', layout: ["Lab"] },
            { text: '友情链接', link: '/link', layout: ['Link'] },
            { text: '留言板', link: '/guestbook/', layout: ['Guestbook'] },
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
                    path: '/posts/',
                    itemPermalink: '/post/:year/:month/:day/:slug',
                    layout: 'Layout',
                    itemLayout: 'PostItem',
                    pagination: {
                        perPagePosts: 20,
                    },
                },
                {
                    id: 'lab',
                    dirname: 'lab',
                    path: '/lab/',
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
                    path: '/link/',
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
                    layout: 'Tag',
                    frontmatter: { title: '标签' },
                },
                {
                    id: "topic",
                    keys: ['topic', 'topics'],
                    path: '/topic/',
                    layout: 'Topic',
                    frontmatter: { title: '话题' },
                }
            ],
            globalPagination: {
                lengthPerPage: 30,
            },
            sitemap: {
                hostname: 'https://ace520.github.io/blog'
            },
            comment: {
                service: 'vssue',
                owner: 'Ace520',
                repo: 'blog',
                clientId: '90660a979ed7ca0d1dc5',
                clientSecret: '762687bde43924c57ee3694192f6ead122ac85fc',
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
            align: "bottom",
            color: "#e2e8f0",
            backgroundTransition: true,
            backgroundColor: "#0075b8",
            successText: "Copied!",
            staticIcon: false
        }],
        ["@kawarimidoll/tailwind"],
        ['@goy/svg-icons']
    ]
}
