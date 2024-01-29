import express from 'express';
import dotenv from 'dotenv';
const config = dotenv.config().parsed;
import Email from './Email.js';

const app = express();
app.use(express.json());

app.post('/', async (req, res) => {
    const { body = {} } = req
    const data = await Email.send(body, config)
    res.send(data);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});