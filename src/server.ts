import 'module-alias/register';
import express from 'express';
import bodyParser from 'body-parser';

import { initDB } from './models/init';
import { blogRouter, userRouter } from './routers';
import { translateRetCode } from './utils';

initDB();

const port = 3000;

const app = express();

app.use(bodyParser.json());

// hook res.json to translate retCode
app.use((req, res, next) => {
  const oldJson = res.json;
  res.json = (data) => {
    if (data?.retCode && !data?.message) {
      // eslint-disable-next-line no-param-reassign
      data.message = translateRetCode(data.retCode);
    }
    return oldJson.call(res, data);
  };
  next();
});

// register router
app.use('/blog', blogRouter);
app.use('/user', userRouter);

app.get('/test', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`server start at port ${port}`);
});
