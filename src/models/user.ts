import mongoose from 'mongoose';
import { retWrapper } from '@utils/index';
import { SUCCESS, DB_SAVE_FAIL, USER_EXIST } from '@consts/errors';
import { wrapperDBError } from './utils';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  account: {
    type: String, minlength: 6, unique: true, required: true,
  },
  password: { type: String, minlength: 6, required: true },
  createTs: { type: Date, default: Date.now },
});

const User = model('User', userSchema);

async function create({
  account,
  password,
}: {
  account: string;
  password: string;
}) {
  const newUser = new User({ account, password });
  try {
    await newUser.save();
  } catch (e) {
    return wrapperDBError(e, {
      defaultCode: DB_SAVE_FAIL,
      duplicateCode: USER_EXIST,
    });
  }
  return retWrapper(SUCCESS, { id: newUser.id });
}

function update() {
  console.log('todo');
}

function remove() {
  console.log('todo');
}

function query() {
  console.log('todo');
}

export default {
  create,
  update,
  remove,
  query,
};
