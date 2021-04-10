// noinspection JSUnresolvedVariable
const Service = require('egg').Service;
const crypto = require('crypto');
// const convert = require('xml-js');
// const xml2js = require('xml2js');
const os = require('os');

///获取本机ip///

function getIPAddress() {
    const interfaces = os.networkInterfaces();
    for (let devName in interfaces) {
        const iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            const alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}


class ToolsService extends Service {

    async getIpAddr() {
        return getIPAddress();
    }

    async createSuccessJson() {
        const reply = {}
        reply.success = "true";
        reply.message = "ok";
        reply.content = null;
        return JSON.stringify(reply);
    }

    async createSuccessJsonWithContent(content) {
        const reply = {}
        reply.success = "true";
        reply.message = "ok";
        reply.content = content;
        return JSON.stringify(reply);
    }

    async createFailJson(errorMsg) {
        const reply = {}
        reply.success = "false";
        reply.message = errorMsg;
        reply.content = null;
        return JSON.stringify(reply);
    }

}

module.exports = ToolsService;
