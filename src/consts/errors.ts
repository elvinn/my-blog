export const SUCCESS = 0;

// Request Codes
export const PARAM_MISS = 10001;
export const PARAM_INVALID = 10002;

export const USER_EXIST = 10003;

// DB Codes
export const DB_ERROR = 20000;
export const DB_SAVE_FAIL = 20001;
export const DB_VALUE_INVALID = 20002;

// Mongo Internal error
export const DUPLICATE_KEY = 11000;

export const VALIDATION_ERROR = 'ValidationError';

export const CODE_MESSAGE_MAP: {
  [code: number]: string;
} = {
  [PARAM_MISS]: '缺少参数',
  [PARAM_INVALID]: '参数错误',
  [USER_EXIST]: '用户已存在',
  [DB_ERROR]: '数据操作失败',
  [DB_SAVE_FAIL]: '写数据失败',
  [DB_VALUE_INVALID]: '数据参数校验失败',
  [DUPLICATE_KEY]: '数据重复',
} as const;

export const DEFAULT_ERROR_MESSAGE = '服务器错误';
