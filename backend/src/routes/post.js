const express = require('express');
const Post = require('../models/Post')
const Auth = require('./privateRoutes')

const router = new express.Router();

//create post route
router.post('/posts', Auth, async(req, res) => {
    console.log(req.user)
    const { title, caption, photo} = req.body
    try {
        if(!title || !photo ) {
            return res.status(400).send({error: 'Title and photo are required'})
        }
        const newPost = new Post({title, caption, photo, postedBy: req.user._id})
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
router.patch('/posts/:id', Auth, async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'caption']

    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({ error: 'invalid updates'})
    }

    try {
        const post = await Post.findOne({ _id: req.params.id, postedBy: req.user._id})
    
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
//Like post
router.put('/like/:postid', Auth, async (req, res) => {
        
    try {
        const post = await Post.findOne({_id: req.params.postid})
        if (!post) {
           return res.status(404).send({ error: 'post not found' })
        }
        if( post.likes.indexOf(req.user._id) > -1) {
            return res.status(400).send({error: "you can't like a picture twice"})
        }
        post.likes.push(req.user._id)
        await post.save()
        res.send(post)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

//unlike post route

router.put('/unlike/:postid', Auth, async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.postid })
        if (!post) {
            return res.status(404).send({ error: 'post not found' })
        }
        const userIndex = post.likes.indexOf(req.user._id)
        if(userIndex === -1) {
            return res.status(400).send({error: "You haven't liked this picture"})
        }
        post.likes.splice(userIndex, 1)
        await post.save()
        res.send(post)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})
//Post delete route
router.delete('/posts/:id', Auth, async(req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id, postedBy: req.user._id})
        if(!post) {
            res.status(404).send({error: 'No post found'})
        }
        await post.delete()
        res.send({post})
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router