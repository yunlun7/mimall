// 这是整个webpack的配置表
// 这个配置表最终会传送给nginx服务器来实现整个服务器的设置
module.exports = {
    devServer:{
        // 主机
        host: 'localhost',
        // 端口，可以修改
        port: 8080
        // 代理
    }
}