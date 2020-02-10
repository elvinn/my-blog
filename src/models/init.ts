import mongoose from 'mongoose';

function initDB() {
  // todo: handle connect fail
  mongoose.connect('mongodb://localhost:27017/blogTest', {
    useNewUrlParser: true,
  });
}

export {
  initDB,
};
