module.exports = {
    presets: [
        ["@babel/preset-env", {
            "targets": {
                "browsers": ["last 2 versions"] // 最近 2 个版本的浏览器
            }
        }],
        "@babel/preset-react",
        "@babel/preset-typescript"
    ],
    "plugins": [
        ["syntax-jsx"],
        ["@babel/plugin-proposal-class-properties", {"loose": true}] // 支持class属性的插件
    ]
}