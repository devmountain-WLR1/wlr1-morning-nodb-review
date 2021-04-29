const express = require('express')
const app = express();
const postCtrl = require('./postController');

app.use(express.json());

app.get('/api/posts', postCtrl.getPosts)
app.post('/api/posts', postCtrl.addPost)

const port = 4000;

app.listen(port, () => console.log(`Listening on port ${port}`))