module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        content: [
            './.vuepress/**/*.vue',
        ],
        whitelist: ["html", "body", '.content__default', '.markdown-body', '.vssue']
    },
}