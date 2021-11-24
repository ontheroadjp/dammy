module.exports = {
    lang: 'ja-JP',
    title: 'dammy',
    description: 'Simple and Usuful shellscript',
    base: '/dammy/',
    locales: {
        '/': {
            lang: 'en-US',
            title: 'dammy',
            description: 'Simple and Usuful shellscript',
        },
        '/ja/': {
            lang: 'ja-JP',
            title: 'dammy',
            description: 'Simple and Usuful shellscript',
        },
    },
    themeConfig: {
        logo: '/images/hero.png',
        repo: 'ontheroadjp/dammy',
        locales: {
            '/': {
                selectLanguageName: 'English',
                navbar: [
                    // NavbarItem
                    { text: 'overview', link: '/overview/', },
                    { text: 'setup', link: '/setup/', },
                    { text: 'usage', link: '/usage/', },
                ],
            },
            '/ja/': {
                selectLanguageName: '日本語',
                navbar: [
                    { text: '概要', link: '/ja/overview/', },
                    { text: 'セットアップ', link: '/ja/setup/', },
                    { text: '使い方', link: '/ja/usage/', },
                ],
            },
        },
        docsRepo: 'https://github.com/ontheroadjp/dammy',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        lastUpdated: 'Last Updated',
    },
}
