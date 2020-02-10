# Notes

## Questions
1. How does url match?
    > `path-to-regexp`
2. How to return 404 withoud match?
    > use `res.writableEnded`(since 12.9.0) or `res.finished` to detect whether it is handled
3. How to put typescript declaration in single file?
4. How to make sub router?
5. dive into bodyparser/cookieparser
6. How to handle connections with db?
    > connection pool?
    > connec when sever starts?

## Backups

1. 函数 object 参数声明类型 `{ pretty = true } : { pretty ?: boolean} = {}`
2. `async` 函数的声明返回 `Promise` 即可
3. 压测 `ab -n 5000 -c 100 http://localhost:3000/test`
4. `lsof -i:3000` 查看占用端口
5. `~/mongodb/bin/mongod --dbpath ~/mongodb/data/` 启动 mongodb server
6. `tsconfig.json traceResolution` 在依赖解析不到的时候查看具体的解析日志