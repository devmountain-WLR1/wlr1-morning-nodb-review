const posts = [{id: 1, text: 'Hey I am a freaking post!'}, {id: 2, text: 'Good morning!'}]

module.exports = {
    getPosts: (req, res) => {
        res.status(200).send(posts)
    }
}