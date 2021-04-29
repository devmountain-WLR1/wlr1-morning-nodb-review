const posts = [
    {
        id: 1, 
        text: 'Hey I am a freaking post!'
    }, 
    {
        id: 2, 
        text: 'Good morning!'
    }
]

module.exports = {
    getPosts: (req, res) => {
        res.status(200).send(posts)
    },
    addPost: (req, res) => {
        console.log("BODY! => ", req.body)
        const newPost = {
            id: posts[posts.length - 1].id + 1,
            text: req.body.text
        }
        posts.push(newPost);
        res.status(200).send(posts);
    }
}