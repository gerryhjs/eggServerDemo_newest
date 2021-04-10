const Service = require('egg').Service;

class Redis extends Service {
    async set(key, value) {
        const app = this.app;
        const result = await app.redis.set(key, value);
        return result === "OK";
    }

    async get(key) {
        const app = this.app;
        return await app.redis.get(key);
    }

    async del(key) {
        const app = this.app;
        return await app.redis.del(key);
    }

    async flush() {
        const app = this.app;
        return await app.redis.flushall();
    }
    
}

module.exports = Redis;
