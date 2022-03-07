const express = require('express');
const Post = require('../models/Post')

const router = new express.Router();

//create post route
router.post('/posts', async(req, res) => {
    const { title, caption, photo} = req.body
    try {
        if(!title || !photo ) {
            return res.status(400).send({error: 'Title and photo are required'})
        }
        const newPost = new Post({title, caption, photo})
        await newPost.save()
        res.status(201).send(newPost)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

//fetch all post route
router.get('/posts', async(req, res) => {
    try {
        const posts = await Post.find({})
        if(posts.length === 0) {
            return res.status(404).send({error: "No posts found"})
        }
        res.send({posts})
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}) 

//update post route
router.patch('/posts/:id', async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'caption']

    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({ error: 'invalid updates'})
    }

    try {
        const post = await Post.findOne({ _id: req.params.id})
    
        if(!post){
            return res.status(404).send({error:'Post not found'})
        }

        updates.forEach((update) => post[update] = req.body[update])
        await post.save()
        res.send(post)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

module.exports = router