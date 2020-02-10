import { retWrapper } from '@utils/index';
import {
  DUPLICATE_KEY, VALIDATION_ERROR, DB_VALUE_INVALID, DB_ERROR,
} from '@consts/errors';

interface DBError extends Error {
  code?: number;
  errors?: object;
}

function wrapperDBError(e: DBError, {
  defaultCode = DB_ERROR,
  duplicateCode,
}: {
  defaultCode?: number;
  duplicateCode?: number;
} = {}) {
  const { name, errors = {} } = e;
  let { code = defaultCode } = e;
  let message: string;

  if (code === DUPLICATE_KEY && duplicateCode) {
    code = duplicateCode;
  }

  if (name === VALIDATION_ERROR) {
    code = DB_VALUE_INVALID;
    message = `${Object.keys(errors).join(', ')} 参数校验失败`;
  }
  return retWrapper(code, e, message);
}

export {
  wrapperDBError,
};
