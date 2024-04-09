import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import connectMongoDB from './connect.js';
import router from './routes/index.js';
import Category from './models/Categories.js'
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const uri = process.env.MONGO_DB || null;
connectMongoDB(uri);

// app.use(bodyParser);
Category.create()
router(app);

app.listen(port, () => {
    console.log('server is started');
});
