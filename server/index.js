const express = require('express')
const app = express();
const postCtrl = require('./postController');

app.use(express.json());

app.get('/getmyposts', postCtrl.getPosts)

const port = 4000;

app.listen(port, () => console.log(`Listening on port ${port}`))