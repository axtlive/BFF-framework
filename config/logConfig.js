const path = require('path');

// 日志根目录
const baseLogPath = path.resolve(__dirname, '../logs');

// 请求日志
const reqPath = '/request/';
const reqFileName = 'request';
const reqLogPath = baseLogPath + reqPath + reqFileName;


// 响应日志
const resPath = '/response/';
const resFileName = 'response';
const resLogPath = baseLogPath + resPath + resFileName;


// 错误日志
const errPath = '/error/';
const errFileName = 'error';
const errLogPath = baseLogPath + errPath + errFileName;


const logConfig = {
  appenders: {
    // 所有的日志
    'console': {type: 'console'},
    // 请求日志
    'reqLogger': {
      type: 'dateFile', // 日志类型
      filename: reqLogPath, // 输出文件名
      pattern: 'yyyy-MM-dd-hh:mm:ss.log', // 后缀
      alwaysIncludePattern: true, // 上面两个参数是否合并
      encoding: 'utf-8', // 编码格式
      maxLogSize: 1000, // 最大存储内容
    },
    // 响应日志
    'resLogger': {
      type: 'dateFile',
      filename: resLogPath,
      pattern: 'yyyy-MM-dd-hh:mm:ss.log',
      alwaysIncludePattern: true,
      encoding: 'utf-8',
      maxLogSize: 1000,
    },
    // 错误日志
    'errLogger': {
      type: 'dateFile',
      filename: errLogPath,
      pattern: 'yyyy-MM-dd-hh:mm:ss.log',
      alwaysIncludePattern: true,
      encoding: 'utf-8',
      maxLogSize: 1000,
    }
  },
  // 分类以及日志等级
  categories: {
    default: {
      appenders: ['console'],
      level: 'all'
    },
    reqLogger: {
      appenders: ['reqLogger'],
      level: 'info'
    },
    resLogger: {
      appenders: ['resLogger'],
      level: 'info'
    },
    errLogger: {
      appenders: ['errLogger'],
      level: 'error'
    }
  },
}


module.exports = logConfig;

