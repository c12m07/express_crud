import express from 'express'
import Cors from 'cors'
import db from './config/database.js'
import Router from './routes/routes.js'

const app = express();

app.use(express.json());

app.use(Cors());

try {
  db.authenticate();
  console.log('Connection has been established succesfully');
} catch (err) {
  console.log('Unable to connect to the database: ', err);
}

app.use(Router);

app.listen(3001, () => {
  console.log('Server listening at por 3001');
});
