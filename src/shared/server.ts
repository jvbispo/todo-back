import 'reflect-metadata'
import express from 'express'
import './container/index'
import cors from 'cors'
import routes from './infra/http/routes'
import './infra/typeorm/index'
const app = express();

app.use(express.json());
app.use(cors())
app.use(routes)

app.listen(3333, () => {
  console.log('Runing on port: 3333');
});
