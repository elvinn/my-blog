import { CODE_MESSAGE_MAP, DEFAULT_ERROR_MESSAGE } from '@consts/errors';

function retWrapper(retCode: number, data: any, message?: string) {
  return {
    retCode,
    data,
    message,
  };
}

function translateRetCode(retCode: number): string {
  return CODE_MESSAGE_MAP[retCode] || DEFAULT_ERROR_MESSAGE;
}

export {
  retWrapper,
  translateRetCode,
};
