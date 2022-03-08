const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    caption: {
        type: String,
    },
    photo: {
        type: String,
        required: true
    },
    //This will be fixed later when authentication is implemented
   // likes: [{ type: ObjectId, ref: 'User' }],
    // postedBy: {
    //     type: ObjectId,
    //     required: true,
    //     ref: 'User'
    // }
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema)

module.exports = Post