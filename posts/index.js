const express = require('express');
const { randomBytes } = require('crypto');
const app = express();

app.use(express.json());

const posts = [];

app.get('/posts', (req, res) => {
    res.send(posts);
});
app.post('/posts', (req, res) => {
    const post = {
        title: req.body.title,
        id: randomBytes(4).toString('hex')
    };
    posts.push(post);
    res.send(posts)
});

app.listen(4000, () => { console.log('Listening on 4000') });